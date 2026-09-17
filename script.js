/*
  Two things move on this page, both once or calmly.

  1. The year counter in the headline. The number of years is computed from data-since (2012-01), so it
     turns into 15 by itself in January 2027. On load the strip of numbers rolls from 1 up to the current
     count and settles; under prefers-reduced-motion it just shows the count. The intro's spelled-out
     number is kept in step with it.

  2. The sea. One 2D canvas behind the headline, drawn as a field of ink lines seen in perspective:
     rows of the surface from the horizon (top edge) to the foreground (bottom edge), each row displaced
     by three octaves of simplex noise that drift slowly towards the viewer. Nearer rows are drawn last
     and each one paints paper under itself first, so a crest hides the lines behind it (hidden-line
     occlusion, the plotter way). Far rows are thin and light, near rows are ink.

     The pointer is a boat. A small swell rides just ahead of it (the target leads the cursor by its
     velocity, so it never feels late, and settles under it when the hand stops). As it moves it sheds a
     small ring every few px of travel; the rings overlap and add up to one continuous wake that trails
     the cursor, wider from a faster hand. A click or a tap drops a bigger ring. The water near the
     pointer also catches a warm light. Geometry: the camera is one unit above the water; a row's screen
     distance below the horizon (yb) gives its depth, its projected wave height and the world x of every
     sample, so far rows show finer, flatter detail.

  Cost: noise is sampled every other point and interpolated between (the lines are smooth at that scale
  anyway), world-x per sample is precomputed per row, a ring only touches the samples inside its band
  (the two short stretches where it crosses a row, found analytically) and reads its profile from a
  table, the light is one alpha gradient a frame stroked over the stretch of the rows near the pointer.
  56 rows at desktop width, 36 on phones; DPR capped at 1.5 (and dropped to 1 if frames stay slow); 30 fps
  on coarse pointers; paused when off-screen or in a hidden tab; one static frame under prefers-reduced-motion. Any resize redraws in the
  same task, so a cleared canvas is never on screen. data-ms on the canvas holds the average draw time.
*/
(function () {
  'use strict';

  /* ---------- 1. Years ---------- */
  var WORDS = { 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', 15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', 19: 'Nineteen', 20: 'Twenty' };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  function yearsSince(iso) {
    var m = /^(\d{4})-(\d{2})/.exec(iso || '');
    if (!m) return null;
    var now = new Date();
    var months = (now.getFullYear() - +m[1]) * 12 + (now.getMonth() + 1 - +m[2]);
    return Math.max(1, Math.floor(months / 12));
  }

  (function counter() {
    var box = document.querySelector('.count');
    if (!box) return;
    var n = yearsSince(box.getAttribute('data-since')) || 14;
    var word = document.querySelector('[data-years-word]');
    if (word) word.textContent = WORDS[n] || String(n);
    var strip = box.querySelector('.strip');
    if (reduce.matches) { strip.innerHTML = '<span>' + n + '</span>'; return; }
    var html = '', i;
    for (i = 1; i <= n; i++) html += '<span>' + i + '</span>';
    strip.innerHTML = html;
    var lh = parseFloat(getComputedStyle(box).height);   /* one line, in px */
    strip.style.transform = 'translateY(0)';
    var started = false;
    /* wait for the font so the roll happens in the real face, then release the strip */
    var go = function () {
      if (started) return;
      started = true;
      window.requestAnimationFrame(function () {
        lh = parseFloat(getComputedStyle(box).height) || lh;
        box.classList.add('roll');
        void strip.offsetHeight;
        strip.style.transform = 'translateY(' + (-(n - 1) * lh) + 'px)';
      });
    };
    if (document.fonts && document.fonts.load) {
      document.fonts.load('600 1em Archivo').then(go, go);
      setTimeout(go, 1500);
    } else go();
    /* if the line height changes (font swap, resize), re-aim the strip */
    window.addEventListener('resize', function () {
      var h = parseFloat(getComputedStyle(box).height);
      if (h && h !== lh) { lh = h; strip.style.transition = 'none'; strip.style.transform = 'translateY(' + (-(n - 1) * lh) + 'px)'; }
    });
  })();

  /* ---------- 2. The sea ---------- */
  var hero = document.querySelector('.hero');
  var fig = document.querySelector('.sea');
  var canvas = fig && fig.querySelector('canvas');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var PAPER = '#f4f2ec';
  var PAPER_RGB = [244, 242, 236];
  /* Colour. Each row has its own hue by depth: haze at the horizon, teal in the middle distance, indigo in
     front. Under the pointer the water catches a warm light (the stretch of each row near it is stroked
     once more with a gradient in ACCENT that fades out sideways), and the highest crests are drawn a
     second time in a paler colour, like light on the water. ?ink in the URL draws the whole thing in
     ink, no colour. */
  var INK_RGB = [20, 20, 20];
  var SEA = [[152, 178, 190], [22, 118, 140], [22, 44, 118]];   /* far haze, middle teal, near indigo */
  var ACCENT = 'rgb(255,128,62)', ACCENT_0 = 'rgba(255,128,62,0)';   /* the light under the pointer */
  var SUN = 0.75;                                               /* how strong that light gets, 0..1 */
  var FOAM = 0.5;                                               /* crest height above which a row gets its pale pass */
  var mono = /[?&]ink\b/.test(location.search);
  function lerp3(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }
  function rgb(c) { return 'rgb(' + Math.round(c[0]) + ',' + Math.round(c[1]) + ',' + Math.round(c[2]) + ')'; }
  function seaHue(d) {
    if (mono) return INK_RGB;
    return d < 0.5 ? lerp3(SEA[0], SEA[1], d * 2) : lerp3(SEA[1], SEA[2], (d - 0.5) * 2);
  }

  var fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  var coarse = window.matchMedia('(pointer: coarse)');

  /* 2D simplex noise (Gustavson), seeded, no dependencies */
  function makeNoise(seed) {
    var perm = new Uint8Array(512), src = [], i, j, k, s = seed >>> 0;
    for (i = 0; i < 256; i++) src[i] = i;
    for (i = 255; i > 0; i--) {
      s = (s * 1664525 + 1013904223) >>> 0;
      j = Math.floor((s / 4294967296) * (i + 1));
      k = src[i]; src[i] = src[j]; src[j] = k;
    }
    for (i = 0; i < 512; i++) perm[i] = src[i & 255];
    var GX = [1, -1, 1, -1, 1, -1, 0, 0], GY = [1, 1, -1, -1, 0, 0, 1, -1];
    var F2 = 0.5 * (Math.sqrt(3) - 1), G2 = (3 - Math.sqrt(3)) / 6;
    return function (x, y) {
      var s0 = (x + y) * F2, i0 = Math.floor(x + s0), j0 = Math.floor(y + s0);
      var t = (i0 + j0) * G2, x0 = x - (i0 - t), y0 = y - (j0 - t);
      var i1 = x0 > y0 ? 1 : 0, j1 = 1 - i1;
      var x1 = x0 - i1 + G2, y1 = y0 - j1 + G2, x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
      var ii = i0 & 255, jj = j0 & 255, n = 0, g, c;
      c = 0.5 - x0 * x0 - y0 * y0;
      if (c > 0) { g = perm[ii + perm[jj]] & 7; c *= c; n += c * c * (GX[g] * x0 + GY[g] * y0); }
      c = 0.5 - x1 * x1 - y1 * y1;
      if (c > 0) { g = perm[ii + i1 + perm[jj + j1]] & 7; c *= c; n += c * c * (GX[g] * x1 + GY[g] * y1); }
      c = 0.5 - x2 * x2 - y2 * y2;
      if (c > 0) { g = perm[ii + 1 + perm[jj + 1]] & 7; c *= c; n += c * c * (GX[g] * x2 + GY[g] * y2); }
      return 70 * n;
    };
  }
  var noise = makeNoise(20160419);

  /* Scene constants */
  var AMP = 0.08;    /* wave height in world units; on screen it is AMP * yb px */
  var RATE = 0.8;    /* drift towards the viewer, rows per second */
  var KX = [1.0, 2.4, 6.0];      /* x frequency per world unit, per octave (scaled by aspect) */
  var KZ = [0.09, 0.2, 0.36];    /* depth frequency per row, per octave */
  var KW = [0.62, 0.24, 0.08];   /* octave weights */
  var BUMP = 7;                  /* pointer swell, px at the foreground: felt more than seen */
  var LEAD = 0.06;               /* seconds the swell runs ahead of the pointer, times its velocity */

  /* The wake: small rings shed every few px of pointer travel, overlapping into one continuous trail */
  var RING_GAP = 9;              /* px of travel between rings */
  var RING_SPEED = 200;          /* px per second */
  var RING_WIDTH = 30;           /* px, half-width of the ring profile */
  var RING_LIFE = 1.6;           /* seconds */
  var RING_AMP = 3;              /* px at the foreground for a ring of size 1; a wake is the sum of many */
  var MAX_RINGS = 64;
  var TAP = 4;                   /* size of the ring a click or a tap drops */

  /* the ring profile exp(-u^2) cos(2.4u), tabulated over u in [-PROF_U, PROF_U] */
  var PROF_U = 2.4, PROF_N = 512, PROF_S = PROF_N / (2 * PROF_U), PROF = new Float32Array(PROF_N + 1);
  (function () { for (var q = 0; q <= PROF_N; q++) { var u = q / PROF_S - PROF_U; PROF[q] = Math.exp(-u * u) * Math.cos(u * 2.4); } })();
  var IW = 1 / RING_WIDTH, BAND = RING_WIDTH * PROF_U;

  var W = 0, H = 0, rows = 0, step = 4, baseStep = 4, cols = 0, kx = [1, 1, 1], amp0 = AMP, dprCap = 1.5;
  var xs, ys, hs, rowY, rowAmp, rowW1, rowW2, rowW3, rowColor, rowWidth, rowXW, rowMix, rowFoam;

  function smooth(a, b, v) { v = (v - a) / (b - a); v = v < 0 ? 0 : v > 1 ? 1 : v; return v * v * (3 - 2 * v); }

  function layout() {
    var i, j, t, yb, aspect, x0;
    W = Math.max(1, Math.round(canvas.clientWidth));
    H = Math.max(1, Math.round(canvas.clientHeight));
    var dpr = Math.min(window.devicePixelRatio || 1, dprCap);
    var cw = Math.round(W * dpr), ch = Math.round(H * dpr);
    if (canvas.width !== cw || canvas.height !== ch) { canvas.width = cw; canvas.height = ch; }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineJoin = 'round';

    rows = W < 720 ? 36 : 56;
    baseStep = W < 720 ? 5 : 4;
    if (step < baseStep) step = baseStep;
    cols = Math.ceil(W / step) + 3;
    if (cols % 2 === 0) cols++;                  /* odd count: the last sample is a computed one */
    xs = new Float32Array(cols);
    ys = new Float32Array(cols);
    hs = new Float32Array(cols);
    for (i = 0; i < cols; i++) xs[i] = (i - 1) * step;
    x0 = W / 2;

    /* the foreground row spans W/H world units; keep about the same number of crests across it */
    aspect = Math.min(3, Math.max(1, 2.5 * H / W));
    for (i = 0; i < 3; i++) kx[i] = KX[i] * aspect;
    amp0 = AMP / Math.sqrt(aspect);              /* shorter crests, lower waves: same calm on a phone */

    rowY = new Float32Array(rows);
    rowAmp = new Float32Array(rows);
    rowW1 = new Float32Array(rows);
    rowW2 = new Float32Array(rows);
    rowW3 = new Float32Array(rows);
    rowWidth = new Float32Array(rows);
    rowColor = []; rowFoam = []; rowMix = new Float32Array(rows);
    rowXW = [];
    for (i = 0; i < rows; i++) {
      t = (i + 0.5) / rows;                      /* 0 = horizon, 1 = foreground */
      yb = 3 + (H - 3) * Math.pow(t, 1.5);       /* rows crowd towards the horizon */
      rowY[i] = yb;
      rowAmp[i] = amp0 * yb;                     /* projected wave height, px */
      /* an octave fades out where its features would be only a few pixels wide */
      rowW1[i] = KW[0] * smooth(3, 12, yb / kx[0]);
      rowW2[i] = KW[1] * smooth(3, 12, yb / kx[1]);
      rowW3[i] = KW[2] / aspect * smooth(3, 12, yb / kx[2]);
      rowWidth[i] = 0.6 + 0.7 * t;
      var hue = seaHue(Math.pow(t, 0.85)), m = 0.09 + 0.88 * Math.pow(t, 1.2);   /* haze at the horizon, full colour in front */
      rowMix[i] = m;
      rowColor.push(rgb(lerp3(PAPER_RGB, hue, m)));
      rowFoam.push(rgb(lerp3(PAPER_RGB, hue, m * 0.32)));
      var xw = new Float32Array(cols);           /* world x of every sample at this depth */
      for (j = 0; j < cols; j++) xw[j] = (xs[j] - x0) / yb;
      rowXW.push(xw);
    }
  }

  /* Pointer state: where the swell is (px, py), where it is heading (tx, ty), how present it is (strength
     eases towards target), the last event (evX, evY, evT) and the smoothed velocity (vx, vy), and where
     the last ring was shed (lastX, lastY). */
  var px = 0, py = 0, tx = 0, ty = 0, strength = 0, target = 0;
  var evX = 0, evY = 0, evT = 0, vx = 0, vy = 0, lastX = 0, lastY = 0;
  var rings = [];   /* {x, y, t0, a} */
  var ringX = new Float32Array(MAX_RINGS), ringY = new Float32Array(MAX_RINGS), ringR = new Float32Array(MAX_RINGS), ringA = new Float32Array(MAX_RINGS);
  var nRings = 0;

  function addRing(x, y, a) {
    rings.push({ x: x, y: y, t0: t, a: a });
    if (rings.length > MAX_RINGS) rings.shift();
  }

  /* lower the samples between screen x0 and x1 by a ring centred at cx with radius r, seen from a row at
     flattened vertical distance sqrt(dy2); the caller has already found the stretch inside the band */
  function rim(x0, x1, cx, dy2, r, a) {
    var j0 = Math.max(0, Math.ceil(x0 / step + 1)), j1 = Math.min(cols - 1, Math.floor(x1 / step + 1)), j, dx, q;
    for (j = j0; j <= j1; j++) {
      dx = xs[j] - cx;
      q = ((Math.sqrt(dx * dx + dy2) - r) * IW + PROF_U) * PROF_S;
      if (q >= 0 && q <= PROF_N) ys[j] -= a * PROF[q | 0];
    }
  }

  function draw(time) {
    var i, j, k, yb, amp, w1, w2, w3, z1, z2, z3, h, xv, dx, dy, dy2, depth, xw, a, r, hi, lo, sh, sl, j0, j1, gy, cx;
    var bump = BUMP * strength, sigma = Math.min(110, Math.max(56, W * 0.065)), inv = 1 / (2 * sigma * sigma), reach = 3 * sigma;
    var drift = time * RATE, wobble = time * 0.05;
    var k0 = kx[0], k1 = kx[1], k2 = kx[2];
    var sunW = Math.max(160, W * 0.16), sunY = H * 0.2, invY = 1 / (2 * sunY * sunY), sun, sunG = null, sj0 = 0, sj1 = 0, open;

    /* age the rings, drop the dead ones, cache the live ones in flat arrays */
    nRings = 0;
    for (k = rings.length - 1; k >= 0; k--) {
      var age = time - rings[k].t0;
      if (age < 0 || age > RING_LIFE) { rings.splice(k, 1); continue; }
      ringX[nRings] = rings[k].x;
      ringY[nRings] = rings[k].y;
      ringR[nRings] = 8 + RING_SPEED * age;
      ringA[nRings] = rings[k].a * RING_AMP * Math.exp(-age * 1.6) * (1 - Math.exp(-age * 12));
      nRings++;
    }

    /* the light under the pointer: one gradient a frame, stroked over the stretch of the rows near it */
    if (strength > 0.01 && !mono) {
      sj0 = Math.max(0, Math.floor((px - sunW) / step + 1));
      sj1 = Math.min(cols - 1, Math.ceil((px + sunW) / step + 1));
      if (sj1 > sj0) {
        sunG = ctx.createLinearGradient(px - sunW, 0, px + sunW, 0);
        sunG.addColorStop(0, ACCENT_0); sunG.addColorStop(0.5, ACCENT); sunG.addColorStop(1, ACCENT_0);
      }
    }

    ctx.fillStyle = PAPER;
    ctx.fillRect(0, 0, W, H);

    for (i = 0; i < rows; i++) {
      yb = rowY[i]; amp = rowAmp[i]; w1 = rowW1[i]; w2 = rowW2[i]; w3 = rowW3[i]; xw = rowXW[i];
      depth = 0.18 + 0.82 * (yb / H);            /* near rows react more than far rows */
      z1 = (i - drift) * KZ[0]; z2 = (i - drift * 1.15) * KZ[1]; z3 = (i - drift * 1.4) * KZ[2];

      /* the noise field, sampled at every other point */
      for (j = 0; j < cols; j += 2) {
        xv = xw[j];
        h = w1 * noise(xv * k0, z1);
        if (w2 > 0) h += w2 * noise(xv * k1 + wobble, z2);
        if (w3 > 0) h += w3 * noise(xv * k2, z3);
        hs[j] = h + 0.3 * (h * h - 0.3);         /* sharper crests, flatter troughs */
      }
      for (j = 1; j < cols; j += 2) hs[j] = 0.5 * (hs[j - 1] + hs[j + 1]);
      for (j = 0; j < cols; j++) ys[j] = yb - amp * hs[j];

      /* the swell, only where it is felt */
      if (bump > 0.01) {
        dy = (yb - py) * 1.3; gy = bump * depth * Math.exp(-dy * dy * inv);
        if (gy > 0.05) {
          j0 = Math.max(0, Math.floor((px - reach) / step + 1)); j1 = Math.min(cols - 1, Math.ceil((px + reach) / step + 1));
          for (j = j0; j <= j1; j++) { dx = xs[j] - px; ys[j] -= gy * Math.exp(-dx * dx * inv); }
        }
      }

      /* the wake: a ring crosses this row along two short stretches, or one if the row cuts its disc */
      for (k = 0; k < nRings; k++) {
        dy = (yb - ringY[k]) * 1.45;             /* rings are flattened by perspective */
        r = ringR[k];
        if (dy > r + BAND || dy < -(r + BAND)) continue;
        dy2 = dy * dy; cx = ringX[k]; a = ringA[k] * depth;
        hi = (r + BAND) * (r + BAND) - dy2; lo = (r - BAND) * (r - BAND) - dy2;
        sh = Math.sqrt(hi);
        if (lo <= 0) rim(cx - sh, cx + sh, cx, dy2, r, a);
        else { sl = Math.sqrt(lo); rim(cx - sh, cx - sl, cx, dy2, r, a); rim(cx + sl, cx + sh, cx, dy2, r, a); }
      }

      /* paper under the line hides what is behind it */
      ctx.beginPath();
      ctx.moveTo(xs[0], ys[0]);
      for (j = 1; j < cols; j++) ctx.lineTo(xs[j], ys[j]);
      ctx.lineTo(xs[cols - 1], yb + amp + 2);
      ctx.lineTo(xs[0], yb + amp + 2);
      ctx.closePath();
      ctx.fillStyle = PAPER;
      ctx.fill();
      /* the line itself */
      ctx.beginPath();
      ctx.moveTo(xs[0], ys[0]);
      for (j = 1; j < cols; j++) ctx.lineTo(xs[j], ys[j]);
      ctx.lineWidth = rowWidth[i];
      ctx.strokeStyle = rowColor[i];
      ctx.stroke();
      /* the light: the stretch near the pointer once more, in the accent, fading out sideways */
      if (sunG) {
        dy = (yb - py) * 1.15; sun = strength * depth * Math.exp(-dy * dy * invY);
        if (sun > 0.03) {
          ctx.globalAlpha = Math.min(1, sun * SUN) * rowMix[i];
          ctx.strokeStyle = sunG;
          ctx.beginPath();
          ctx.moveTo(xs[sj0], ys[sj0]);
          for (j = sj0 + 1; j <= sj1; j++) ctx.lineTo(xs[j], ys[j]);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
      /* light on the crests: the high parts of the row, once more in a paler colour */
      if (!mono && i > rows * 0.25) {
        ctx.beginPath(); open = false;
        for (j = 0; j < cols; j++) {
          if (hs[j] > FOAM) { if (open) ctx.lineTo(xs[j], ys[j]); else { ctx.moveTo(xs[j], ys[j]); open = true; } }
          else open = false;
        }
        ctx.lineWidth = rowWidth[i] * 1.2;
        ctx.strokeStyle = rowFoam[i];
        ctx.stroke();
      }
    }
  }

  /* Loop: pauses off-screen and in hidden tabs, 30 fps on coarse pointers, adapts sample density */
  var raf = 0, last = 0, t = 0, visible = true, cost = 0, costN = 0, stamp = 0;

  function frame(now) {
    raf = 0;
    if (!visible || document.hidden || reduce.matches) { last = 0; return; }
    if (coarse.matches && last && now - last < 31) { raf = window.requestAnimationFrame(frame); return; }
    var dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
    last = now;
    t += dt;

    /* when the hand rests, its velocity fades and the swell settles under the cursor */
    if (evT && now - evT > 40) { var f = Math.exp(-dt * 24); vx *= f; vy *= f; tx = evX + vx * LEAD; ty = evY + vy * LEAD; }
    var k = 1 - Math.exp(-dt * 20);              /* the swell keeps up with the pointer */
    px += (tx - px) * k; py += (ty - py) * k;
    strength += (target - strength) * (1 - Math.exp(-dt * (target ? 9 : 3)));

    var t0 = performance.now();
    draw(t);
    cost += performance.now() - t0; costN++;
    if (now - stamp > 1000) {
      var avg = cost / costN;
      canvas.dataset.ms = avg.toFixed(1);
      /* too slow: first sample the surface more coarsely, then draw fewer pixels */
      if (avg > 9) { if (step < 8) { step += 1; layout(); draw(t); } else if (dprCap > 1) { dprCap = 1; layout(); draw(t); } }
      cost = 0; costN = 0; stamp = now;
    }
    raf = window.requestAnimationFrame(frame);
  }

  function start() {
    if (raf || reduce.matches || !visible || document.hidden) return;
    raf = window.requestAnimationFrame(frame);
  }

  function still() {
    strength = 0; target = 0; rings.length = 0;
    draw(t);
  }

  layout();
  still();

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) start();
    }).observe(fig);
  }
  document.addEventListener('visibilitychange', function () { if (!document.hidden) start(); });

  /* any resize redraws in the same task, so a cleared canvas is never on screen */
  function relayout() { layout(); draw(t); }
  if ('ResizeObserver' in window) {
    new ResizeObserver(relayout).observe(canvas);
  } else {
    window.addEventListener('resize', relayout);
  }

  function onReduce() { if (reduce.matches) { if (raf) window.cancelAnimationFrame(raf); raf = 0; still(); } else start(); }
  if (reduce.addEventListener) reduce.addEventListener('change', onReduce);

  /* the pointer is a boat: the swell leads it by its velocity, and it sheds a ring every RING_GAP px */
  hero.addEventListener('pointermove', function (e) {
    if (!fine.matches || reduce.matches) return;
    var r = canvas.getBoundingClientRect();
    var x = e.clientX - r.left, y = e.clientY - r.top, now = performance.now();
    if (evT) {
      var dtEv = Math.max(8, now - evT) / 1000;
      vx += ((x - evX) / dtEv - vx) * 0.5;
      vy += ((y - evY) / dtEv - vy) * 0.5;
    } else { lastX = x; lastY = y; }             /* first move after entering: the wake starts here */
    evX = x; evY = y; evT = now;
    var speed = Math.sqrt(vx * vx + vy * vy);
    tx = x + vx * LEAD; ty = y + vy * LEAD;
    if (strength < 0.01) { px = tx; py = ty; }
    target = 1;
    /* rings along the way since the last one, evenly spaced; a faster hand leaves a bigger wake */
    var dx = x - lastX, dy = y - lastY, dist = Math.sqrt(dx * dx + dy * dy);
    if (dist >= RING_GAP) {
      var n = Math.floor(dist / RING_GAP), ux = dx / dist * RING_GAP, uy = dy / dist * RING_GAP;
      var a = 0.35 + Math.min(0.65, speed / 1600), q;
      for (q = 1; q <= n; q++) addRing(lastX + ux * q, lastY + uy * q, a);
      lastX += ux * n; lastY += uy * n;
    }
    start();
  });
  hero.addEventListener('pointerleave', function () { target = 0; vx = 0; vy = 0; evT = 0; });
  hero.addEventListener('pointerdown', function (e) {
    if (reduce.matches) return;
    var r = canvas.getBoundingClientRect();
    addRing(e.clientX - r.left, e.clientY - r.top, TAP);
    start();
  });

  start();

  /* devtools handle: sea.ripple(x, y, size) drops a ring, sea.tick(dt) advances one frame by hand,
     sea.sun(x, y, s) parks the pointer, sea.bench(n) times n frames as they are */
  window.sea = {
    ripple: function (x, y, a) { addRing(x, y, a || TAP); },
    tick: function (dt) { t += dt || 0.016; draw(t); },
    time: function () { return t; },
    sun: function (x, y, s) { px = tx = x; py = ty = y; strength = target = (s == null ? 1 : s); },
    bench: function (n) { var s = performance.now(); for (var q = 0; q < (n || 30); q++) { t += 0.016; draw(t); } return ((performance.now() - s) / (n || 30)).toFixed(2) + ' ms per frame, ' + rows + ' rows x ' + cols + ' samples, ' + rings.length + ' rings'; }
  };
})();
