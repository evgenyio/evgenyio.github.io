/*
  Two things move on this page, both once or calmly.

  1. The year counter in the headline. The number of years is computed from data-since (2012-01), so it
     turns into 15 by itself in January 2027. On load the strip of numbers rolls from 1 up to the current
     count and settles; under prefers-reduced-motion it just shows the count. An element with
     data-years-word, if the page has one, gets the number spelled out.

  2. The sea. One WebGL canvas behind the headline, drawn as a field of ink lines seen in perspective:
     rows of the surface from the horizon (top edge) to the foreground (bottom edge), each row displaced
     by three octaves of simplex noise that drift slowly towards the viewer. Nearer rows are drawn last
     and each one paints paper under itself first, so a crest hides the lines behind it (hidden-line
     occlusion, the plotter way). Far rows are thin and light, near rows are ink.

     Everything per vertex happens on the GPU: the whole sea is one triangle strip (per row, a paper
     band under the line, then the line as a ribbon two samples wide), the vertex shader evaluates the
     noise, the perspective, the swell under the pointer and the wake, and the fragment shader
     anti-aliases the ribbon by its distance to the centre line. So the canvas renders at the full device
     pixel ratio with a sample every 2 px, and the CPU does nothing per frame but set a few uniforms.

     The pointer is a boat. A small swell sits under it (it follows the cursor with a 22 ms time constant,
     no prediction, nothing to snap back), it rises in about 80 ms and, when the pointer leaves, fades
     over most of a second instead of being cut. Moving sheds a small ring every few px of travel; the
     rings overlap into one continuous wake, wider from a faster hand. A click or a tap drops a bigger
     ring. Geometry: the camera is one unit above the water; a row's screen distance below the horizon
     (yb) gives its depth, its projected wave height and the world x of every sample, so far rows show
     finer, flatter detail. The rings and the swell live on the water too: a ring is a circle in world
     units, seen in the same perspective as the rows. Across, a world unit spans HS * (yb / HS)^RING_PX px
     at the depth where the ring was dropped, so a far ring is smaller and slower to spread; in depth it is
     measured in rows, a world unit spanning (rows per unit at the front) * (yb / HS)^RING_PR rows, so a ring
     crosses several rows however far out it is dropped and never slips between two of them. Its near side
     is taller than its far side, and it is a little flatter near the horizon than near the viewer.

  Budget: 56 rows at desktop width, 36 on phones; a sample every 2 px (2.5 on phones); 30 fps on coarse
  pointers; paused when off-screen or in a hidden tab; one static frame under prefers-reduced-motion
  and on software WebGL. If frames still come in slow (median gap over 26 ms for two seconds), the
  sample spacing grows to at most 4 px; the pixel ratio is never reduced. Any resize rebuilds the strip
  and redraws in the same task, so a cleared canvas is never on screen. No WebGL at all: the sea is
  hidden and the page is just paper. data-frame on the canvas holds the median frame gap in ms.

  Look. The colours and most of the behaviour come from CSS custom properties on .sea, read once at load
  (--sea-floor on every layout, so a media query can change it):
  --sea-paper, --sea-far, --sea-mid, --sea-near (6-digit hex): the paper, and the rows from the horizon to the
    front. --sea-dry-from / --sea-dry-to / --sea-fade / --sea-haze switch on the "drying ink" law: a row is laid
    down at the horizon in --sea-far and dries through --sea-mid to --sea-near between dry-from and dry-to
    (0 = horizon, 1 = front); only the rows up to --sea-fade are thinned into the paper, so the middle never
    goes grey.
  --sea-lights: up to 8 inks. Each click moves on to the next, and a ring keeps the ink it was dropped with;
    where rings of two inks cross, a line takes the stronger ring's ink rather than a muddy mix of the two.
    --sea-glow is how strongly a ring colours the lines it lifts (0 to about 0.4); --sea-wake-glow 0 keeps the
    moving pointer's wake in the water's own colours, so only a click brings an ink.
  --sea-wake, --sea-bump: how much the moving pointer stirs the water (factor, and px at the front).
  --sea-sun: the light under the pointer. --sea-crest: a fixed colour for the crests. --sea-foam, --sea-width,
    --sea-mono, --sea-crest-light: the pale pass on the crests, the line width, one ink for every row.
  --sea-floor: px of paper kept under the sea, so the front row is drawn whole and is where the sea ends.
  When the rings fill up, the oldest bit of the pointer's wake is dropped first, so moving the pointer never
  erases a click's ring.
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
    var html = '', i, done = false, started = false;
    /* only the final number is read out; the ones it rolls past are decoration */
    for (i = 1; i <= n; i++) html += '<span' + (i < n ? ' aria-hidden="true"' : '') + '>' + i + '</span>';
    strip.innerHTML = html;
    /* once it has rolled, the strip is just the number again, so copying the headline gives "14", not "1 2 3 … 14" */
    function finish() {
      done = true;
      strip.style.transition = 'none';
      strip.innerHTML = '<span>' + n + '</span>';
      strip.style.transform = 'none';
    }
    strip.addEventListener('transitionend', function (e) {
      if (e.target === strip && e.propertyName === 'transform') finish();
    });
    strip.addEventListener('transitioncancel', function (e) { if (e.target === strip) finish(); });
    var lh = parseFloat(getComputedStyle(box).height);   /* one line, in px */
    strip.style.transform = 'translateY(0)';
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
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(go, go);
      setTimeout(go, 1500);
    } else go();
    /* a resize before or during the roll: skip to the number, since a re-aimed strip would never see its
       transition end and would keep every number in the headline */
    window.addEventListener('resize', function () {
      if (done) return;
      started = true;
      finish();
    });
  })();

  /* ---------- 2. The sea ---------- */
  var hero = document.querySelector('.hero');
  var fig = document.querySelector('.sea');
  var canvas = fig && fig.querySelector('canvas');
  if (!canvas) return;

  /* a real GPU first; software WebGL (headless browsers, blocklisted drivers) gets one still frame */
  var ATTR = { alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false, preserveDrawingBuffer: false, powerPreference: 'low-power', failIfMajorPerformanceCaveat: true };
  var soft = false;
  var gl = canvas.getContext('webgl', ATTR);
  if (!gl) { ATTR.failIfMajorPerformanceCaveat = false; gl = canvas.getContext('webgl', ATTR); soft = !!gl; }
  if (!gl) { fig.style.display = 'none'; document.documentElement.classList.add('no-sea'); return; }

  /* Colour. Each row has its own hue by depth: haze at the horizon, teal in the middle distance, indigo in
     front. Under the pointer the water catches a warm light (the rows near it blend towards ACCENT, fading
     out sideways), and the highest crests are drawn paler and a little wider, like light on the water.
     ?ink in the URL draws the whole thing in ink, no colour. */
  var css = getComputedStyle(fig);
  function hex(name, fallback) {
    var v = css.getPropertyValue(name).trim(), m = /^#([0-9a-f]{6})$/i.exec(v);
    if (!m) return fallback;
    var n = parseInt(m[1], 16);
    return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
  }
  function num(name, fallback) {
    var v = parseFloat(css.getPropertyValue(name));
    return isNaN(v) ? fallback : v;
  }
  var PAPER = hex('--sea-paper', [244 / 255, 242 / 255, 236 / 255]);
  var SEA = [hex('--sea-far', [152 / 255, 178 / 255, 190 / 255]), hex('--sea-mid', [22 / 255, 118 / 255, 140 / 255]), hex('--sea-near', [22 / 255, 44 / 255, 118 / 255])];
  var INK = SEA[2];
  var ACCENT = hex('--sea-light', [1, 128 / 255, 62 / 255]);   /* the light under the pointer */
  var SUN = num('--sea-sun', 1.5);                              /* how strong that light gets; over 1 it saturates near the pointer */
  var FOAM = 0.5;                                               /* crest height above which a row gets its pale pass */
  var FOAMK = num('--sea-foam', 1);                             /* how much of that pale pass */
  var GLOW = num('--sea-glow', 0);                              /* the wake lighting up, per px of ring height */
  var WIDTH = num('--sea-width', 1);                            /* line width multiplier */
  var CRESTLIT = num('--sea-crest-light', 0);                   /* 1: crests catch the light instead of going pale */
  var CREST = hex('--sea-crest', null);                         /* a fixed colour for the crests, if given */
  var LAW = css.getPropertyValue('--sea-dry-from').trim() ? 1 : 0;   /* the drying-ink colour law, if asked for */
  var DRY0 = num('--sea-dry-from', 0.45);                       /* where the rows start to dry, 0 = horizon */
  var DRY1 = Math.max(DRY0 + 0.01, num('--sea-dry-to', 0.95));  /* where they are dry */
  var FADE = Math.max(0.01, num('--sea-fade', 0.5));            /* the far rows are thinned into the paper up to here */
  var HAZE = num('--sea-haze', 0.12);                           /* strength of the farthest row */
  var WAKE = num('--sea-wake', 1);                              /* size of the moving wake */
  var WAKEGLOW = num('--sea-wake-glow', 1) > 0.5;               /* does the moving wake take the light's colour */
  /* --sea-lights: a list of colours for the light. Every click moves on to the next one; each ring is born with
     the colour of the moment and keeps it, so an old wave spreads on in its colour while a new one starts. */
  var MAX_LIGHTS = 8;
  var LIGHTS = (css.getPropertyValue('--sea-lights').match(/#[0-9a-f]{6}/gi) || []).slice(0, MAX_LIGHTS).map(function (h) {
    var n = parseInt(h.slice(1), 16);
    return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
  });
  if (!LIGHTS.length) LIGHTS = [ACCENT];
  var light = 0;                                                /* index of the colour now */
  var lightData = new Float32Array(MAX_LIGHTS * 3);
  LIGHTS.forEach(function (c, i) { lightData.set(c, i * 3); });
  var mono = /[?&]ink\b/.test(location.search) || num('--sea-mono', 0) > 0.5;

  var fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  var coarse = window.matchMedia('(pointer: coarse)');

  /* Scene constants */
  var AMP = 0.08;    /* wave height in world units; on screen it is AMP * yb px */
  var RATE = 0.8;    /* drift towards the viewer, rows per second */
  var KX = [1.0, 2.4, 6.0];      /* x frequency per world unit, per octave (scaled by aspect) */
  var KZ = [0.09, 0.2, 0.36];    /* depth frequency per row, per octave */
  var KW = [0.62, 0.24, 0.08];   /* octave weights */
  var BUMP = num('--sea-bump', 10);   /* pointer swell, px at the foreground; a broad, soft mound */

  /* The wake: small rings shed every few px of pointer travel, overlapping into one continuous trail */
  var RING_GAP = 9;              /* px of travel between rings */
  var RING_SPEED = 180;          /* px per second */
  var RING_WIDTH = 30;           /* px, half-width of the ring profile */
  var RING_LIFE = 2.0;           /* seconds */
  var RING_AMP = 4.5;            /* px at the foreground for a ring of size 1; a wake is the sum of many */
  var MAX_RINGS = 64;
  var TAP = 4;                   /* size of the ring a click or a tap drops */
  var TAP_LIFE = 3.6;            /* seconds: a click's ring travels further and fades slower than the wake */
  var TAP_FADE = 0.85;           /* its decay rate, per second (the wake's is 1.6) */
  var PROF_U = 2.4;              /* the ring profile exp(-u^2) cos(2.4u) lives in |u| < PROF_U */
  var RING_RATIO = 0.62;         /* at the front row a small ring is drawn this much as tall as it is wide */
  var RING_PX = 0.6;             /* how a ring shrinks across with distance (1 would be a pinhole camera: far
                                    rings too small to see); less, so a click near the horizon still shows */
  var RING_PR = 0.4;             /* how its depth shrinks, in rows; with RING_PX, a little flatter far away */

  /* ---- shaders ---- */
  var VS = [
    'precision highp float;',
    'attribute vec3 a;',                                   /* row, sample, role (0 band top, 1 band bottom, 2 ribbon left, 3 ribbon right) */
    'uniform vec2 uRes, uPointer;',
    'uniform vec3 uPw;',                                   /* the pointer for the swell: x px, depth, world units per px across */
    'uniform float uDpr, uRows, uStep, uTime, uAmp0, uAspect, uBump, uSigInv, uStrength, uSunW, uSunInvY, uMono, uFloor, uZk, uLk, uIW, uBand;',
    'uniform vec3 uKx, uKz, uKw, uPaper, uSea0, uSea1, uSea2, uAccent, uInk;',
    'uniform vec4 uRings[' + MAX_RINGS + '];',             /* x, y, radius, colour index * 32 + amplitude */
    'uniform vec3 uLights[' + MAX_LIGHTS + '];',
    'uniform int uN;',
    'varying mediump vec3 vColor;',
    'varying mediump vec2 vLine;',                         /* signed distance across the ribbon, half width; both in device px */
    'const float RATE = ' + RATE.toFixed(3) + ', FOAM = ' + FOAM.toFixed(3) + ', SUN = ' + SUN.toFixed(3) + ';',
    'const float FOAMK = ' + FOAMK.toFixed(3) + ', GLOW = ' + GLOW.toFixed(3) + ', WIDTH = ' + WIDTH.toFixed(3) + ', CRESTLIT = ' + CRESTLIT.toFixed(3) + ';',
    'const float LAW = ' + LAW.toFixed(1) + ', DRY0 = ' + DRY0.toFixed(3) + ', DRY1 = ' + DRY1.toFixed(3) + ', FADE = ' + FADE.toFixed(3) + ', HAZE = ' + HAZE.toFixed(3) + ';',
    'const float HASCREST = ' + (CREST ? '1.0' : '0.0') + ';',
    'const vec3 CREST = vec3(' + (CREST || [0, 0, 0]).map(function (v) { return v.toFixed(4); }).join(', ') + ');',
    'const float PROFU = ' + PROF_U.toFixed(3) + ', RZA = ' + (1 - 1.5 * RING_PR).toFixed(3) + ', LXE = ' + (1.5 * RING_PX / (1 - 1.5 * RING_PR)).toFixed(4) + ';',
    /* 2D simplex noise, Ashima Arts / Stefan Gustavson (MIT) */
    'vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }',
    'vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }',
    'vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }',
    'float snoise(vec2 v) {',
    '  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);',
    '  vec2 i = floor(v + dot(v, C.yy));',
    '  vec2 x0 = v - i + dot(i, C.xx);',
    '  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);',
    '  vec4 x12 = x0.xyxy + C.xxzz;',
    '  x12.xy -= i1;',
    '  i = mod289(i);',
    '  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));',
    '  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);',
    '  m = m * m; m = m * m;',
    '  vec3 x = 2.0 * fract(p * C.www) - 1.0;',
    '  vec3 h = abs(x) - 0.5;',
    '  vec3 ox = floor(x + 0.5);',
    '  vec3 a0 = x - ox;',
    '  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);',
    '  vec3 g;',
    '  g.x = a0.x * x0.x + h.x * x0.y;',
    '  g.yz = a0.yz * x12.xz + h.yz * x12.yw;',
    '  return 130.0 * dot(m, g);',
    '}',
    'float sstep(float lo, float hi, float v) { v = clamp((v - lo) / (hi - lo), 0.0, 1.0); return v * v * (3.0 - 2.0 * v); }',
    /* the surface height at world x on row i: three octaves, sharper crests, flatter troughs */
    'float surf(float xw, float i, vec3 w) {',
    '  float drift = uTime * RATE;',
    '  float h = w.x * snoise(vec2(xw * uKx.x, (i - drift) * uKz.x));',
    '  h += w.y * snoise(vec2(xw * uKx.y + uTime * 0.05, (i - drift * 1.15) * uKz.y));',
    '  h += w.z * snoise(vec2(xw * uKx.z, (i - drift * 1.4) * uKz.z));',
    '  return h + 0.3 * (h * h - 0.3);',
    '}',
    'void main() {',
    '  float i = a.x, j = a.y, role = a.z;',
    '  float t = (i + 0.5) / uRows;',                       /* 0 = horizon, 1 = foreground */
    '  float yb = 3.0 + (uFloor - 3.0) * pow(t, 1.5);',     /* rows crowd towards the horizon; the front row rests at uFloor */
    '  float amp = uAmp0 * yb;',                            /* projected wave height, px */
    /* an octave fades out where its features would be only a few pixels wide */
    '  vec3 w = uKw * vec3(sstep(3.0, 12.0, yb / uKx.x), sstep(3.0, 12.0, yb / uKx.y), sstep(3.0, 12.0, yb / uKx.z) / uAspect);',
    '  float x = (j - 1.0) * uStep;',
    '  float xw = (x - uRes.x * 0.5) / yb;',                /* world x of this sample at this depth */
    /* this row's depth on the water, for the rings and the swell, in world units counted by rows */
    '  float zw = uZk * pow(i + 0.5, RZA);',
    '  float h = surf(xw, i, w);',
    '  float y = yb - amp * h;',
    '  float depth = 0.18 + 0.82 * (yb / uFloor);',         /* near rows react more than far rows */
    '  float rdepth = 0.3 + 0.7 * (yb / uFloor);',          /* for the rings a little less so: a far click still shows */
    '  float wk = 0.0;',                                    /* how much wake passes through this sample, px */
    '  float best = 0.0;',                                  /* the strongest ring through this sample */
    '  vec3 wc = uAccent;',                                 /* and its colour */
    '  if (role != 1.0) {',
    /* the swell under the pointer: a round mound on the water, so seen in perspective like the rings */
    '    float sx = (x - uPw.x) * uPw.z, sz = zw - uPw.y;',
    '    y -= uBump * depth * exp(-(sx * sx + sz * sz) * uSigInv);',
    /* the wake: every live ring, a circle on the water in world units, where its band crosses this row */
    '    for (int k = 0; k < ' + MAX_RINGS + '; k++) {',
    '      if (k >= uN) break;',
    '      vec4 r = uRings[k];',
    '      float rz = zw - r.y;',
    '      if (abs(rz) > r.z + uBand) continue;',
    '      float rx = (x - r.x) * uLk * pow(r.y, -LXE);',       /* across, at the ring's own depth: an even ellipse */
    '      float u = (sqrt(rx * rx + rz * rz) - r.z) * uIW;',
    '      if (abs(u) < PROFU) {',
    '        float ci = floor(r.w / 32.0);',                    /* colour index; 8 and up: a ring that brings no colour */
    '        float dz = (r.w - ci * 32.0) * rdepth * exp(-u * u) * cos(u * 2.4);',
    '        y -= dz;',
    '        if (ci < 7.5) { float aw = abs(dz); wk += aw; if (aw > best) { best = aw; wc = uLights[int(ci)]; } }',
    '      }',
    '    }',
    '  }',
    /* colour by depth: haze at the horizon, full colour in front */
    '  float d = LAW > 0.5 ? smoothstep(DRY0, DRY1, t) : pow(t, 0.85);',
    '  vec3 hue = uMono > 0.5 ? uInk : (d < 0.5 ? mix(uSea0, uSea1, d * 2.0) : mix(uSea1, uSea2, (d - 0.5) * 2.0));',
    '  float m = LAW > 0.5 ? HAZE + (1.0 - HAZE) * smoothstep(0.0, FADE, t) : 0.09 + 0.88 * pow(t, 1.2);',
    '  vec2 pos;',
    '  if (role < 1.5) {',
    /* the paper band under the line hides what is behind it */
    '    pos = vec2(x, role < 0.5 ? y : yb + amp + 4.0);',
    '    vLine = vec2(0.0, 10.0);',
    '    vColor = uPaper;',
    '  } else {',
    '    float side = role * 2.0 - 5.0;',                   /* 2 -> -1, 3 -> +1 */
    '    vec3 col = mix(uPaper, hue, m);',
    '    float width = (0.6 + 0.7 * t) * WIDTH;',           /* css px */
    '    {',
    /* the light under the pointer, fading out sideways */
    '      float sdy = (yb - uPointer.y) * 1.15;',
    '      float sun = uStrength * depth * exp(-sdy * sdy * uSunInvY);',
    '      float g = clamp(1.0 - abs(x - uPointer.x) / uSunW, 0.0, 1.0);',
    '      col = mix(col, uAccent, min(1.0, sun * SUN) * (0.35 + 0.65 * m) * g);',   /* the far rows are pale, but the light still reaches them */
    /* light on the crests: the high parts of the row, paler and a little wider */
    '      float f = FOAMK * smoothstep(FOAM - 0.1, FOAM + 0.1, h) * step(0.25, t);',
    '      col = mix(col, HASCREST > 0.5 ? mix(col, CREST, 0.6) : (CRESTLIT > 0.5 ? mix(col, uAccent, 0.5) : mix(uPaper, hue, m * 0.32)), f);',
    '      width *= 1.0 + 0.2 * f;',
    /* the wake lights up (bioluminescence): the rings themselves pull the line towards the light */
    '      col = mix(col, wc, clamp(wk * GLOW, 0.0, 1.0));',
    '      width *= 1.0 + min(0.6, wk * GLOW * 0.5);',
    '    }',
    /* the ribbon: extrude along the normal of the (undisturbed) surface, one device px of feather */
    '    float x2 = x + uStep;',
    '    float y2 = yb - amp * surf((x2 - uRes.x * 0.5) / yb, i, w);',
    '    vec2 tang = normalize(vec2(uStep, y2 - (yb - amp * h)));',
    '    vec2 nrm = vec2(-tang.y, tang.x);',
    '    float hw = 0.5 * width * uDpr;',                    /* half width, device px */
    '    pos = vec2(x, y) + nrm * (side * (hw + 1.0) / uDpr);',
    '    vLine = vec2(side * (hw + 1.0), hw);',
    '    vColor = col;',
    '  }',
    '  gl_Position = vec4(pos.x / uRes.x * 2.0 - 1.0, 1.0 - pos.y / uRes.y * 2.0, 0.0, 1.0);',
    '}'
  ].join('\n');

  var FS = [
    'precision mediump float;',
    'varying mediump vec3 vColor;',
    'varying mediump vec2 vLine;',
    'void main() {',
    '  float a = clamp(vLine.y + 0.5 - abs(vLine.x), 0.0, 1.0);',   /* coverage of the ribbon at this fragment */
    '  gl_FragColor = vec4(vColor * a, a);',                          /* premultiplied */
    '}'
  ].join('\n');

  var prog = null, U = {}, vbo = null, count = 0, lost = false;

  function compile(type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error('sea shader: ' + gl.getShaderInfoLog(s));
    return s;
  }

  function setup() {
    prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS));
    gl.bindAttribLocation(prog, 0, 'a');
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error('sea program: ' + gl.getProgramInfoLog(prog));
    gl.useProgram(prog);
    ['uRes', 'uPointer', 'uDpr', 'uRows', 'uStep', 'uTime', 'uAmp0', 'uAspect', 'uBump', 'uSigInv', 'uStrength', 'uSunW', 'uSunInvY', 'uMono', 'uFloor', 'uZk', 'uLk', 'uIW', 'uBand', 'uPw',
      'uKx', 'uKz', 'uKw', 'uPaper', 'uSea0', 'uSea1', 'uSea2', 'uAccent', 'uInk', 'uRings', 'uN', 'uLights'].forEach(function (n) { U[n] = gl.getUniformLocation(prog, n); });
    gl.uniform3fv(U.uKz, KZ);
    gl.uniform3fv(U.uKw, KW);
    gl.uniform3fv(U.uPaper, PAPER);
    gl.uniform3fv(U.uSea0, SEA[0]);
    gl.uniform3fv(U.uSea1, SEA[1]);
    gl.uniform3fv(U.uSea2, SEA[2]);
    gl.uniform3fv(U.uAccent, LIGHTS[light]);
    gl.uniform3fv(U.uLights, lightData);
    gl.uniform3fv(U.uInk, INK);
    gl.uniform1f(U.uMono, mono ? 1 : 0);
    vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.UNSIGNED_SHORT, false, 0, 0);
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);
  }

  var W = 0, H = 0, dpr = 1, rows = 0, cols = 0, step = 2, baseStep = 2;
  var HS = 1, ZK = 1, LK = 1;    /* the water's height on the canvas, px; the scales of the rings' depth and width */

  function layout() {
    var i, j, p = 0, aspect, kx;
    W = Math.max(1, Math.round(canvas.clientWidth));
    H = Math.max(1, Math.round(canvas.clientHeight));
    dpr = Math.min(window.devicePixelRatio || 1, 3);
    var cw = Math.round(W * dpr), ch = Math.round(H * dpr);
    if (canvas.width !== cw || canvas.height !== ch) { canvas.width = cw; canvas.height = ch; }
    gl.viewport(0, 0, cw, ch);

    rows = W < 720 ? 36 : 56;
    baseStep = W < 720 ? 2.5 : 2;
    if (step < baseStep) step = baseStep;
    cols = Math.ceil(W / step) + 3;

    /* the foreground row spans W/H world units; keep about the same number of crests across it */
    /* the water is the canvas minus the paper kept under it; read on every layout, so a media query can change it */
    var floor = Math.max(0, Math.min(H * 0.5, num('--sea-floor', 0)));
    HS = H - floor;
    gl.uniform1f(U.uFloor, HS);
    /* depth on the water, for the rings: rows^(1 - 1.5 RING_PR), scaled so that at the front row one row is
       1 / L0 world units, L0 = RING_RATIO * rows / 1.5 (a front row is 1.5 * HS / rows px below the one behind) */
    var L0 = RING_RATIO * rows / 1.5, za = 1 - 1.5 * RING_PR;
    ZK = Math.pow(rows, 1.5 * RING_PR) / (L0 * za);
    gl.uniform1f(U.uZk, ZK);
    /* world units per px across at depth z: LK * z^-LXE, which is 1 / (HS * (yb / HS)^RING_PX) on that row */
    LK = Math.pow(rows, 1.5 * RING_PX) * Math.pow(ZK, 1.5 * RING_PX / za) / HS;
    gl.uniform1f(U.uLk, LK);
    /* sizes that were px at the front row become world units: one world unit spans HS px there */
    gl.uniform1f(U.uIW, HS / RING_WIDTH);
    gl.uniform1f(U.uBand, RING_WIDTH * PROF_U / HS);
    aspect = Math.min(3, Math.max(1, 2.5 * HS / W));
    kx = [KX[0] * aspect, KX[1] * aspect, KX[2] * aspect];
    var sigma = Math.min(110, Math.max(56, W * 0.065)) / HS;   /* the swell's radius, px at the front row, in world units */
    var sunY = HS * 0.2;                                   /* the light's reach up and down */
    gl.uniform2f(U.uRes, W, H);
    gl.uniform1f(U.uDpr, dpr);
    gl.uniform1f(U.uRows, rows);
    gl.uniform1f(U.uStep, step);
    gl.uniform1f(U.uAmp0, AMP / Math.sqrt(aspect));       /* shorter crests, lower waves: same calm on a phone */
    gl.uniform1f(U.uAspect, aspect);
    gl.uniform3fv(U.uKx, kx);
    gl.uniform1f(U.uSigInv, 1 / (2 * sigma * sigma));
    gl.uniform1f(U.uSunW, Math.max(160, W * 0.16));
    gl.uniform1f(U.uSunInvY, 1 / (2 * sunY * sunY));

    /* one triangle strip for the whole sea: per row, the paper band then the ribbon, joined by
       degenerate triangles; each vertex is (row, sample, role) */
    count = rows * (4 * cols + 4) - 2;
    var data = new Uint16Array(3 * count);
    for (i = 0; i < rows; i++) {
      for (j = 0; j < cols; j++) { data[p++] = i; data[p++] = j; data[p++] = 0; data[p++] = i; data[p++] = j; data[p++] = 1; }
      data[p++] = i; data[p++] = cols - 1; data[p++] = 1; data[p++] = i; data[p++] = 0; data[p++] = 2;
      for (j = 0; j < cols; j++) { data[p++] = i; data[p++] = j; data[p++] = 2; data[p++] = i; data[p++] = j; data[p++] = 3; }
      if (i < rows - 1) { data[p++] = i; data[p++] = cols - 1; data[p++] = 3; data[p++] = i + 1; data[p++] = 0; data[p++] = 0; }
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
  }

  /* Pointer state: where the swell is (px, py), where the pointer is (tx, ty), how present the swell is
     (strength eases towards target), the pointer's speed, and where the last ring was shed. */
  var px = 0, py = 0, tx = 0, ty = 0, strength = 0, target = 0;
  var inside = false, evX = 0, evY = 0, evT = 0, speed = 0, lastX = 0, lastY = 0;
  var rings = [];   /* {x, y, t0, a, c} */
  var ringData = new Float32Array(MAX_RINGS * 4);

  function addRing(x, y, a, tap) {
    rings.push({ x: x, y: y, t0: t, a: a, c: tap || WAKEGLOW ? light : light + 8, life: tap ? TAP_LIFE : RING_LIFE, fade: tap ? TAP_FADE : 1.6, tap: !!tap });
    if (rings.length <= MAX_RINGS) return;
    /* full: the oldest bit of the pointer's wake goes first, so a moving pointer never erases a click's wave;
       only when every ring is a click's does the oldest click go */
    for (var k = 0; k < rings.length; k++) if (!rings[k].tap) { rings.splice(k, 1); return; }
    rings.shift();
  }

  /* the depth on the water, in the rings' world units, of a point px below the horizon */
  function depthAt(y) {
    var t = Math.pow(Math.max(1e-4, (Math.max(4, y) - 3) / (HS - 3)), 2 / 3);   /* the row it falls on, 0 to 1, past 1 below the front */
    return ZK * Math.pow(t * rows, 1 - 1.5 * RING_PR);
  }

  function draw(time) {
    var k, n = 0, age, z;
    /* age the rings, drop the dead ones, pack the live ones for the shader */
    for (k = rings.length - 1; k >= 0; k--) {
      age = time - rings[k].t0;
      if (age < 0 || age > rings[k].life) { rings.splice(k, 1); continue; }
      ringData[n * 4] = rings[k].x;                      /* where the ring was dropped: px across */
      ringData[n * 4 + 1] = depthAt(rings[k].y);         /* and its depth on the water */
      ringData[n * 4 + 2] = (8 + RING_SPEED * age) / HS; /* its radius, spreading at RING_SPEED px/s as seen at the front row */
      ringData[n * 4 + 3] = rings[k].c * 32 + rings[k].a * RING_AMP * Math.exp(-age * rings[k].fade) * (1 - Math.exp(-age * 30));   /* amplitude stays under 32 */
      n++;
    }
    gl.uniform1f(U.uTime, time);
    gl.uniform2f(U.uPointer, px, py);
    z = depthAt(py);
    gl.uniform3f(U.uPw, px, z, LK * Math.pow(z, -1.5 * RING_PX / (1 - 1.5 * RING_PR)));
    gl.uniform1f(U.uBump, BUMP * strength);
    gl.uniform1f(U.uStrength, strength);
    gl.uniform4fv(U.uRings, ringData);
    gl.uniform1i(U.uN, n);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, count);
  }

  /* Loop: pauses off-screen and in hidden tabs, 30 fps on coarse pointers, watches the frame gaps */
  var raf = 0, last = 0, t = 0, visible = true, stamp = 0;
  var gaps = new Float32Array(120), gi = 0, gn = 0;

  function median() {
    var arr = Array.prototype.slice.call(gaps, 0, gn).sort(function (a, b) { return a - b; });
    return arr.length ? arr[arr.length >> 1] : 0;
  }

  /* one step of the dynamics: the swell keeps up with the pointer, its strength is quick to rise and slow to fade */
  function advance(dt) {
    t += dt;
    var k = 1 - Math.exp(-dt * 45);
    px += (tx - px) * k; py += (ty - py) * k;
    strength += (target - strength) * (1 - Math.exp(-dt * (target ? 12 : 1.5)));
  }

  function frame(now) {
    raf = 0;
    if (!visible || document.hidden || reduce.matches || lost || soft) { last = 0; return; }
    if (coarse.matches && last && now - last < 31) { raf = window.requestAnimationFrame(frame); return; }
    var dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
    if (last) { gaps[gi] = now - last; gi = (gi + 1) % gaps.length; if (gn < gaps.length) gn++; }
    last = now;
    advance(dt);
    draw(t);

    if (now - stamp > 2000) {
      stamp = now;
      var med = median();
      canvas.dataset.frame = med.toFixed(1);
      /* still slow: sample the surface more coarsely (never fewer device pixels) */
      if (gn >= 60 && med > 26 && step < 4 && !coarse.matches) { step += 1; layout(); gn = 0; gi = 0; }
    }
    raf = window.requestAnimationFrame(frame);
  }

  function start() {
    if (raf || reduce.matches || !visible || document.hidden || lost || soft) return;
    raf = window.requestAnimationFrame(frame);
  }

  function still() {
    strength = 0; target = 0; rings.length = 0;
    draw(t);
  }

  try { setup(); } catch (e) { fig.style.display = 'none'; document.documentElement.classList.add('no-sea'); if (window.console) console.error(e); return; }
  layout();
  still();

  canvas.addEventListener('webglcontextlost', function (e) { e.preventDefault(); lost = true; if (raf) window.cancelAnimationFrame(raf); raf = 0; });
  canvas.addEventListener('webglcontextrestored', function () { lost = false; setup(); layout(); still(); start(); });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) start();
    }).observe(fig);
  }
  document.addEventListener('visibilitychange', function () { if (!document.hidden) start(); });

  /* any resize rebuilds the strip and redraws in the same task, so a cleared canvas is never on screen */
  function relayout() { if (lost) return; layout(); draw(t); }
  if ('ResizeObserver' in window) {
    var sized = new ResizeObserver(relayout);
    /* in device pixels, so a window moved to a screen with another pixel ratio redraws too; Safari only knows CSS
       pixels, and the resolution query below covers it */
    try { sized.observe(canvas, { box: 'device-pixel-content-box' }); } catch (e) { sized.observe(canvas); }
  } else {
    window.addEventListener('resize', relayout);
  }
  (function watchRatio() {
    var ratio = window.matchMedia('(resolution: ' + (window.devicePixelRatio || 1) + 'dppx)');
    if (!ratio.addEventListener) return;
    ratio.addEventListener('change', function changed() {
      ratio.removeEventListener('change', changed);
      relayout();
      watchRatio();
    });
  })();

  function onReduce() { if (reduce.matches) { if (raf) window.cancelAnimationFrame(raf); raf = 0; still(); } else start(); }
  if (reduce.addEventListener) reduce.addEventListener('change', onReduce);

  /* the pointer is a boat: the swell sits under it, and it sheds a ring every RING_GAP px of travel */
  hero.addEventListener('pointermove', function (e) {
    if (!fine.matches || reduce.matches || soft) return;
    var r = canvas.getBoundingClientRect();
    var x = e.clientX - r.left, y = e.clientY - r.top, now = performance.now();
    if (!inside) {                               /* just came in: the swell and the wake start here */
      inside = true; lastX = x; lastY = y; speed = 0;
      if (strength < 0.01) { px = x; py = y; }
    } else if (now > evT) {
      var v = Math.sqrt((x - evX) * (x - evX) + (y - evY) * (y - evY)) / ((now - evT) / 1000);
      speed += (v - speed) * 0.4;
    }
    evX = x; evY = y; evT = now;
    tx = x; ty = y; target = 1;
    /* rings along the way since the last one, evenly spaced; a faster hand leaves a bigger wake */
    var dx = x - lastX, dy = y - lastY, dist = Math.sqrt(dx * dx + dy * dy);
    if (dist >= RING_GAP) {
      var n = Math.floor(dist / RING_GAP), ux = dx / dist * RING_GAP, uy = dy / dist * RING_GAP;
      var a = 0.35 + Math.min(0.65, speed / 1600), q;
      for (q = 1; q <= n; q++) addRing(lastX + ux * q, lastY + uy * q, a * WAKE);
      lastX += ux * n; lastY += uy * n;
    }
    start();
  });
  hero.addEventListener('pointerleave', function () { inside = false; target = 0; speed = 0; });
  hero.addEventListener('pointerdown', function (e) {
    if (reduce.matches || soft) return;
    var r = canvas.getBoundingClientRect();
    nextLight();
    addRing(e.clientX - r.left, e.clientY - r.top, TAP, true);
    start();
  });

  /* a click changes the light: the new ring and everything after it take the next colour */
  function nextLight() {
    if (LIGHTS.length < 2) return;
    light = (light + 1) % LIGHTS.length;
    gl.uniform3fv(U.uAccent, LIGHTS[light]);
  }

  start();

  /* devtools handle: sea.ripple(x, y, size) drops a ring, sea.tick(dt) advances one frame by hand (the
     dynamics too), sea.sun(x, y, s) parks the pointer, sea.stats() reports the frame gaps and the geometry */
  window.sea = {
    ripple: function (x, y, a) { nextLight(); addRing(x, y, a || TAP, true); },
    tick: function (dt) { advance(dt || 0.016); draw(t); },
    gl: gl,
    time: function () { return t; },
    sun: function (x, y, s) { px = tx = x; py = ty = y; strength = target = (s == null ? 1 : s); },
    stats: function () {
      var arr = Array.prototype.slice.call(gaps, 0, gn).sort(function (a, b) { return a - b; });
      return { frames: gn, p50: arr.length ? +arr[arr.length >> 1].toFixed(1) : null, p90: arr.length ? +arr[Math.floor(arr.length * 0.9)].toFixed(1) : null, max: arr.length ? +arr[arr.length - 1].toFixed(1) : null,
        rows: rows, cols: cols, step: step, dpr: dpr, vertices: count, rings: rings.length, soft: soft, lost: lost };
    }
  };
})();
