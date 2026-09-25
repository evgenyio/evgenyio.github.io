// Player engine for luisterspoor: tracks, phrase timing, playback, lock screen.
// localStorage keys are the same as in the first version of the player, so saved
// tracks, speed and positions survive upgrades.

export const SPEEDS = [0.75, 0.85, 1, 1.1, 1.25, 1.5];

const KEYS = {
  track: 'dutch-player.track',
  speed: 'dutch-player.speed',
  position: (id) => `dutch-player.position.${id}`,
};

export const store = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Private mode or blocked storage: the player still works, it just forgets.
    }
  },
};

const ARTWORK = [
  { src: new URL('../icons/maskable-512.png', import.meta.url).href, sizes: '512x512', type: 'image/png' },
  { src: new URL('../icons/maskable-192.png', import.meta.url).href, sizes: '192x192', type: 'image/png' },
];

const SET_NAMES = { 'A2-B1': 'Everyday phrases', 'A1-A2': 'Basic phrases' };
const SET_SHORT = { 'A2-B1': 'Everyday', 'A1-A2': 'Basic' };
const MODE_LABELS = { recall: 'Recall', 'dutch-only': 'Dutch only', verbs: 'Verb forms' };
const MODE_HINTS = {
  recall: 'English → pause → Dutch ×2',
  'dutch-only': 'Dutch, twice',
  verbs: 'English → all forms',
};

// ---------------------------------------------------------------- formatting

export function formatClock(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const whole = Math.max(0, Math.floor(seconds));
  const h = Math.floor(whole / 3600);
  const m = Math.floor((whole % 3600) / 60);
  const s = String(whole % 60).padStart(2, '0');
  return h ? `${h}:${String(m).padStart(2, '0')}:${s}` : `${m}:${s}`;
}

export function formatMinutes(seconds) {
  const mins = Math.max(0, Math.round(seconds / 60));
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m ? `${h} h ${m} min` : `${h} h`;
}

export function escapeHTML(text) {
  return String(text).replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[ch]);
}

// ---------------------------------------------------------------- text helpers

// "Zijn. Ik ben. Jij bent. Hij is. Wij zijn. Ik was. Wij waren. Geweest."
// -> infinitive, four present forms, two past forms, participle.
export function parseVerb(nl) {
  const parts = String(nl).split('.').map((part) => part.trim()).filter(Boolean);
  if (parts.length !== 8) return null;
  const lower = (text) => text.charAt(0).toLowerCase() + text.slice(1);
  return {
    infinitive: lower(parts[0]),
    present: parts.slice(1, 5).map(lower),
    past: parts.slice(5, 7).map(lower),
    participle: lower(parts[7]),
  };
}

// Splits text into lines of words. Each word carries `at`: the fraction of the
// spoken segment after which it counts as "said" (by character position).
export function wordLines(lines) {
  const total = lines.reduce((sum, line) => sum + line.length + 1, 0) || 1;
  let offset = 0;
  return lines.map((line) => {
    const words = [];
    const re = /\S+/g;
    let match;
    while ((match = re.exec(line))) {
      words.push({ text: match[0], at: (offset + match.index) / total });
    }
    offset += line.length + 1;
    return words;
  });
}

// Verb items read better as four short lines than one long run-on string.
export function nlLines(item) {
  if (!item.verb) return [item.nl];
  const cap = (text) => text.charAt(0).toUpperCase() + text.slice(1);
  const { infinitive, present, past, participle } = item.verb;
  return [
    `${cap(infinitive)}.`,
    `${present.map(cap).join('. ')}.`,
    `${past.map(cap).join('. ')}.`,
    `${cap(participle)}.`,
  ];
}

// A compact conjugation table for irregular-verb items; variants style the classes.
export function verbHTML(verb) {
  const row = (label, forms) => `
    <span class="verb-label">${label}</span>
    <span class="verb-forms">${forms
      .map((form) => `<span style="white-space: nowrap">${escapeHTML(form)}</span>`)
      .join('<span class="verb-sep"> · </span>')}</span>`;
  return `
    <span class="verb">
      <span class="verb-inf">${escapeHTML(verb.infinitive)}</span>
      ${row('present', verb.present)}
      ${row('past', verb.past)}
      ${row('participle', [verb.participle])}
    </span>`;
}

// One-line Dutch for tight spots (mini players, lock screen): the infinitive for verbs.
export function shortNl(item) {
  return item.verb ? item.verb.infinitive : item.nl;
}

// ---------------------------------------------------------------- tracks

export function describeTrack(raw, baseUrl) {
  const verbs = raw.id.includes('irregular-verbs');
  const modeKey = verbs ? 'verbs' : raw.mode;
  const level = raw.level || '';
  return {
    ...raw,
    audioUrl: new URL(raw.audio, baseUrl).href,
    manifestUrl: new URL(raw.manifest, baseUrl).href,
    verbs,
    modeKey,
    levelLabel: level.replace('-', '–'),
    setId: `${verbs ? 'verbs' : 'phrases'}-${level}`,
    setTitle: verbs ? 'Irregular verbs' : SET_NAMES[level] || 'Phrases',
    setShort: verbs ? 'Verbs' : SET_SHORT[level] || 'Phrases',
    modeLabel: MODE_LABELS[modeKey] || modeKey,
    modeHint: MODE_HINTS[modeKey] || '',
    unit: verbs ? 'verbs' : 'phrases',
  };
}

function groupSets(tracks) {
  const sets = [];
  for (const track of tracks) {
    let set = sets.find((candidate) => candidate.id === track.setId);
    if (!set) {
      set = {
        id: track.setId,
        title: track.setTitle,
        short: track.setShort,
        levelLabel: track.levelLabel,
        unit: track.unit,
        count: track.item_count,
        tracks: [],
      };
      sets.push(set);
    }
    set.tracks.push(track);
  }
  return sets;
}

function phaseOf(segment) {
  if (!segment) return 'idle';
  if (segment.type === 'speech') {
    if (segment.role === 'prompt') return 'prompt';
    if (segment.role === 'repeat') return 'repeat';
    return 'answer';
  }
  return segment.role === 'recall_pause' ? 'think' : 'gap';
}

function prepareItem(item, track) {
  const firstNl = item.segments.find((segment) => segment.type === 'speech' && segment.language === 'nl');
  const steps = item.segments
    .filter((segment) => segment.type === 'speech' || segment.role === 'recall_pause')
    .map((segment) => ({
      kind: segment.type === 'speech' ? segment.language : 'think',
      role: segment.role,
      start: segment.start,
      end: segment.end,
    }));
  return {
    ...item,
    nlStart: firstNl ? firstNl.start : item.start,
    hasPrompt: item.segments.some((segment) => segment.role === 'prompt'),
    steps,
    verb: track.verbs ? parseVerb(item.nl) : null,
  };
}

// ---------------------------------------------------------------- player

export function createPlayer({ audio, tracksUrl = 'tracks.json' } = {}) {
  const el = audio || document.createElement('audio');
  el.preload = 'metadata';
  // `?muted` in the URL plays silently (handy for testing without sound).
  if (new URLSearchParams(location.search).has('muted')) el.muted = true;
  const base = new URL(tracksUrl, document.baseURI);
  const listeners = {};
  const manifests = new Map();
  const media = 'mediaSession' in navigator ? navigator.mediaSession : null;

  const state = {
    tracks: [],
    sets: [],
    track: null,
    items: [],
    index: -1,
    item: null,
    segmentIndex: -1,
    segment: null,
    phase: 'idle',
    playing: false,
    waiting: false,
    rate: 1,
  };

  let pendingTime = null;
  let loadToken = 0;
  let raf = 0;
  let lastSaved = -10;
  let lastMetaKey = '';

  function emit(type) {
    for (const fn of listeners[type] || []) fn(state);
  }

  function time() {
    return pendingTime ?? (el.currentTime || 0);
  }

  function duration() {
    if (!state.track) return 0;
    return Number.isFinite(el.duration) && el.duration > 0 ? el.duration : state.track.duration_seconds;
  }

  function locate(t) {
    const items = state.items;
    let lo = 0;
    let hi = items.length - 1;
    let found = items.length ? 0 : -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (items[mid].start <= t) {
        found = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return found;
  }

  function sync(force = false) {
    if (!state.track) return;
    const t = time();
    const index = locate(t);
    const item = state.items[index] || null;
    let segmentIndex = -1;
    if (item) {
      segmentIndex = item.segments.findIndex((segment) => t >= segment.start && t < segment.end);
      if (segmentIndex < 0) segmentIndex = item.segments.length - 1;
    }
    const itemChanged = index !== state.index;
    const segmentChanged = itemChanged || segmentIndex !== state.segmentIndex;
    state.index = index;
    state.item = item;
    state.segmentIndex = segmentIndex;
    state.segment = item ? item.segments[segmentIndex] : null;
    state.phase = phaseOf(state.segment);
    if (itemChanged || force) emit('item');
    if (segmentChanged || force) {
      emit('phase');
      updateMetadata();
    }
    emit('tick');
    if (pendingTime == null && Math.abs(t - lastSaved) >= 1) savePosition();
  }

  function loop() {
    sync();
    raf = !el.paused ? requestAnimationFrame(loop) : 0;
  }

  function savePosition() {
    if (!state.track || pendingTime != null || !el.currentSrc) return;
    lastSaved = el.currentTime;
    store.set(KEYS.position(state.track.id), String(el.currentTime));
  }

  function savedTime(trackId) {
    if (state.track && trackId === state.track.id) return time();
    const value = Number(store.get(KEYS.position(trackId)) || 0);
    return Number.isFinite(value) ? value : 0;
  }

  function progressOf(trackId) {
    const track = state.tracks.find((candidate) => candidate.id === trackId);
    if (!track) return { time: 0, fraction: 0, remaining: 0 };
    const total = track.id === state.track?.id ? duration() : track.duration_seconds;
    const t = Math.min(savedTime(trackId), total);
    return { time: t, fraction: total ? t / total : 0, remaining: Math.max(0, total - t) };
  }

  async function manifestFor(track) {
    if (!manifests.has(track.id)) {
      manifests.set(track.id, fetch(track.manifestUrl).then((response) => {
        if (!response.ok) throw new Error(`Manifest ${response.status}`);
        return response.json();
      }));
    }
    return manifests.get(track.id);
  }

  async function loadTrack(trackId, { autoplay = false } = {}) {
    const track = state.tracks.find((candidate) => candidate.id === trackId) || state.tracks[0];
    if (!track) return;
    if (state.track?.id === track.id) {
      if (autoplay) play();
      return;
    }
    savePosition();
    const token = ++loadToken;
    const saved = Number(store.get(KEYS.position(track.id)) || 0);
    state.track = track;
    state.items = [];
    state.index = -1;
    state.item = null;
    state.segmentIndex = -1;
    state.segment = null;
    store.set(KEYS.track, track.id);

    pendingTime = Number.isFinite(saved) && saved > 0 && saved < track.duration_seconds - 2 ? saved : 0;
    lastSaved = pendingTime;
    lastMetaKey = '';
    el.src = track.audioUrl;
    el.defaultPlaybackRate = state.rate;
    el.playbackRate = state.rate;
    // Start the audio before waiting for the phrase list: iOS only lets play() through close to the tap.
    if (autoplay) play();

    const manifest = await manifestFor(track);
    if (token !== loadToken) return;
    state.items = manifest.items.map((item) => prepareItem(item, track));
    emit('track');
    sync(true);
  }

  function play() {
    if (!state.track) return;
    const attempt = el.play();
    if (attempt?.catch) attempt.catch((error) => console.warn('Playback did not start:', error.message));
  }

  function pause() {
    el.pause();
  }

  function toggle() {
    if (el.paused) play();
    else pause();
  }

  function seek(t) {
    if (!state.track) return;
    const clamped = Math.max(0, Math.min(t, duration() - 0.05));
    if (pendingTime != null || el.readyState < 1) pendingTime = clamped;
    else el.currentTime = clamped;
    sync();
    updatePositionState();
  }

  function goTo(index, { autoplay = true } = {}) {
    const item = state.items[Math.max(0, Math.min(index, state.items.length - 1))];
    if (!item) return;
    seek(item.start + 0.001);
    if (autoplay) play();
  }

  // Like a music player: "previous" restarts the phrase unless you're at its very start.
  function prev() {
    const item = state.item;
    if (!item) return;
    if (time() - item.start > 1.5 || state.index === 0) seek(item.start + 0.001);
    else seek(state.items[state.index - 1].start + 0.001);
  }

  function next() {
    if (state.index < state.items.length - 1) seek(state.items[state.index + 1].start + 0.001);
  }

  function setRate(rate) {
    state.rate = rate;
    el.defaultPlaybackRate = rate;
    el.playbackRate = rate;
    store.set(KEYS.speed, String(rate));
    emit('rate');
    updatePositionState();
  }

  function cycleRate() {
    const index = SPEEDS.indexOf(state.rate);
    setRate(SPEEDS[(index + 1) % SPEEDS.length]);
  }

  // One notch slower (-1) or faster (+1), without wrapping around.
  function stepRate(direction) {
    const index = Math.max(0, SPEEDS.indexOf(state.rate));
    setRate(SPEEDS[Math.max(0, Math.min(SPEEDS.length - 1, index + direction))]);
  }

  function itemFraction() {
    const item = state.item;
    if (!item) return 0;
    return clamp01((time() - item.start) / (item.end - item.start));
  }

  function segmentFraction() {
    const segment = state.segment;
    if (!segment) return 0;
    return clamp01((time() - segment.start) / (segment.end - segment.start));
  }

  // How much of the latest spoken instance of `language` in the current item has been said.
  // 0 before it starts, 0..1 while speaking, 1 once finished (until a repeat starts).
  function spokenFraction(language, item = state.item) {
    if (!item) return 0;
    const t = time();
    let last = null;
    for (const segment of item.segments) {
      if (segment.type === 'speech' && segment.language === language && segment.start <= t) last = segment;
    }
    if (!last) return 0;
    const lead = 0.05;
    const span = Math.max(0.2, last.end - last.start - 0.2);
    return clamp01((t - last.start - lead) / span);
  }

  function isRevealed(item = state.item) {
    return Boolean(item) && time() >= item.nlStart - 0.02;
  }

  // ------------------------------------------------------------ media session

  function updateMetadata() {
    if (!media || typeof MediaMetadata === 'undefined' || !state.track) return;
    const item = state.item;
    const album = `luisterspoor · ${state.track.setTitle} · ${state.track.modeLabel}`;
    let title = state.track.setTitle;
    let artist = state.track.modeLabel;
    if (item) {
      if (isRevealed(item)) {
        title = item.nl;
        artist = item.en;
      } else {
        title = item.en;
        artist = 'Your turn: say it in Dutch';
      }
    }
    const key = `${title}|${artist}`;
    if (key === lastMetaKey) return;
    lastMetaKey = key;
    media.metadata = new MediaMetadata({ title, artist, album, artwork: ARTWORK });
  }

  function updatePositionState() {
    if (!media?.setPositionState) return;
    const total = el.duration;
    if (!Number.isFinite(total) || total <= 0) return;
    try {
      media.setPositionState({
        duration: total,
        playbackRate: el.playbackRate || 1,
        position: Math.min(Math.max(0, el.currentTime), total),
      });
    } catch {
      // Some browsers reject position updates mid-seek; the next one will land.
    }
  }

  if (media) {
    const handlers = {
      play,
      pause,
      stop: pause,
      previoustrack: prev,
      nexttrack: next,
      seekto: (details) => seek(details.seekTime),
    };
    for (const [action, handler] of Object.entries(handlers)) {
      try {
        media.setActionHandler(action, handler);
      } catch {
        // Unsupported action on this platform.
      }
    }
  }

  // ------------------------------------------------------------ audio events

  el.addEventListener('loadedmetadata', () => {
    if (pendingTime != null) {
      const target = pendingTime;
      pendingTime = null;
      if (target > 0) el.currentTime = target;
    }
    el.playbackRate = state.rate;
    sync(true);
    updatePositionState();
  });
  el.addEventListener('play', () => {
    state.playing = true;
    emit('play');
    if (!raf) raf = requestAnimationFrame(loop);
    if (media) media.playbackState = 'playing';
    updatePositionState();
  });
  el.addEventListener('pause', () => {
    state.playing = false;
    state.waiting = false;
    emit('play');
    savePosition();
    if (media) media.playbackState = 'paused';
    updatePositionState();
  });
  el.addEventListener('waiting', () => {
    state.waiting = true;
    emit('play');
  });
  for (const type of ['playing', 'canplay']) {
    el.addEventListener(type, () => {
      if (!state.waiting) return;
      state.waiting = false;
      emit('play');
    });
  }
  // timeupdate keeps things in sync when requestAnimationFrame is paused (locked screen).
  el.addEventListener('timeupdate', () => sync());
  el.addEventListener('seeked', () => {
    sync();
    updatePositionState();
  });
  el.addEventListener('ratechange', updatePositionState);
  el.addEventListener('ended', () => {
    savePosition();
    emit('play');
  });
  // A track that can't load (offline before its audio was saved) must not leave the button spinning.
  el.addEventListener('error', () => {
    state.waiting = false;
    emit('play');
  });
  addEventListener('pagehide', savePosition);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) savePosition();
    else sync(true);
  });

  async function init() {
    const response = await fetch(base);
    if (!response.ok) throw new Error(`tracks.json ${response.status}`);
    const index = await response.json();
    state.tracks = (index.tracks || []).map((track) => describeTrack(track, base));
    state.sets = groupSets(state.tracks);
    const savedRate = Number(store.get(KEYS.speed));
    if (SPEEDS.includes(savedRate)) {
      state.rate = savedRate;
      emit('rate');
    }
    emit('tracks');
    await loadTrack(store.get(KEYS.track) || index.default_track_id);
  }

  return {
    state,
    audio: el,
    on(type, fn) {
      (listeners[type] ||= new Set()).add(fn);
      return () => listeners[type].delete(fn);
    },
    init,
    loadTrack,
    play,
    pause,
    toggle,
    seek,
    goTo,
    prev,
    next,
    setRate,
    cycleRate,
    stepRate,
    time,
    duration,
    progressOf,
    itemFraction,
    segmentFraction,
    spokenFraction,
    isRevealed,
  };
}

function clamp01(value) {
  return Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));
}

// ---------------------------------------------------------------- UI helpers

// Space toggles playback, arrows move between phrases.
export function bindKeys(player, extra = {}) {
  addEventListener('keydown', (event) => {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return;
    const target = event.target;
    if (target?.closest?.('input, textarea, select, [contenteditable="true"]')) return;
    if (event.code === 'Space' && !target?.closest?.('button')) {
      event.preventDefault();
      player.toggle();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      player.prev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      player.next();
    } else if (extra[event.key]) {
      extra[event.key](event);
    }
  });
  // Mouse and touch clicks shouldn't leave focus on a button, so Space keeps meaning play/pause.
  addEventListener('click', (event) => {
    const button = event.target?.closest?.('button');
    if (button && event.detail > 0) button.blur();
  });
}

// Pointer scrubbing for a horizontal progress bar. `preview(fraction | null)` lets
// the view show the drag position before the seek is committed.
export function bindScrubber(element, player, preview = () => {}) {
  let dragging = false;
  const fractionAt = (event) => {
    const rect = element.getBoundingClientRect();
    return clamp01((event.clientX - rect.left) / rect.width);
  };
  element.addEventListener('pointerdown', (event) => {
    if (!player.state.track) return;
    dragging = true;
    element.setPointerCapture(event.pointerId);
    element.classList.add('is-dragging');
    preview(fractionAt(event));
  });
  element.addEventListener('pointermove', (event) => {
    if (dragging) preview(fractionAt(event));
  });
  const finish = (event, commit) => {
    if (!dragging) return;
    dragging = false;
    element.classList.remove('is-dragging');
    if (commit) player.seek(fractionAt(event) * player.duration());
    preview(null);
  };
  element.addEventListener('pointerup', (event) => finish(event, true));
  element.addEventListener('pointercancel', (event) => finish(event, false));
  element.addEventListener('keydown', (event) => {
    const step = event.shiftKey ? 60 : 10;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      event.stopPropagation();
      player.seek(player.time() + (event.key === 'ArrowLeft' ? -step : step));
    }
  });
  return { isDragging: () => dragging };
}

export const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

// A dialog layer that animates via an `is-open` class. Children with [data-close] dismiss it.
export function createSheet(root, { onOpen, onClose } = {}) {
  const panel = root.querySelector('[role="dialog"]');
  let lastFocus = null;
  let closeTimer = 0;
  function open() {
    clearTimeout(closeTimer);
    lastFocus = document.activeElement;
    root.hidden = false;
    onOpen?.();
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-open')));
    panel?.focus({ preventScroll: true });
  }
  function close() {
    if (root.hidden) return;
    root.classList.remove('is-open');
    closeTimer = setTimeout(() => {
      root.hidden = true;
      onClose?.();
    }, prefersReducedMotion() ? 0 : 320);
    lastFocus?.focus?.({ preventScroll: true });
  }
  root.addEventListener('click', (event) => {
    if (event.target.closest('[data-close]')) close();
  });
  addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !root.hidden) close();
  });
  return { open, close, isOpen: () => !root.hidden };
}
