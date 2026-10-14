/*
  Two things move at the top of this page, both once or calmly. The sea at the foot of the page is sea-foot.js.

  1. The year counter in the headline. The number of years is computed from data-since (2012-01), so it
     turns into 15 by itself in January 2027. On load the strip of numbers rolls from 1 up to the current
     count and settles; under prefers-reduced-motion it just shows the count. An element with
     data-years-word, if the page has one, gets the number spelled out.

  2. The sea behind the headline: one WebGL canvas of small figures lying flat on the water, seen in
     perspective. The water is three octaves of simplex noise drifting towards the viewer, in rows from the
     horizon (top edge) to the front (bottom edge), and every row is a run of figures, all the same one, picked
     at random on every visit: squares, circles, crosses, pluses or triangles. ?fig=square, circle, cross,
     plus or triangle picks one; ?fig=mix lays them out in still patches, like the fills of a map. Each mark
     sits a little off its row, most of all far out, so the rows never read as ruled lines.
     A figure lies flat and stays where it is while the waves pass under it, rocking with them: it tips with
     the slope across, opens on a face turned to the viewer and closes to a line on a back, its strokes
     thinner where it is foreshortened. A crest in front covers it from below.

     The pointer is a boat: a small swell sits under it and moving it sheds a faint wake; a click or a tap
     drops a ring in the next ink. Every visit opens on another stretch of water (?t=<seconds> picks the
     moment).

     Everything per vertex happens on the GPU: one triangle strip holds a quad per mark, the vertex shader
     finds where the water takes each mark and what in front of it covers it, and the fragment shader draws
     the figure by its distance to the pen's path in device pixels. The CPU only sets uniforms per frame.

  Budget: 44 rows at desktop width, 30 on phones; 30 fps on coarse pointers; paused when off-screen or in a
  hidden tab; one still frame under prefers-reduced-motion and on software WebGL. No WebGL at all: the sea is
  hidden and the page is just paper. sea.stats() in the console reports the frame gaps and the geometry.

  Look: the --sea-* custom properties on .sea in style.css, read once at load (the hero's own are on
  .hero .sea): --sea-far, --sea-mid and --sea-near, the inks from the horizon to the front, and the drying law
  between them (--sea-dry-from, --sea-dry-to, --sea-fade, --sea-haze); --sea-crest, the crests; --sea-lights,
  the inks a click moves through; --sea-alpha, how opaque the ink is; --sea-floor, the paper kept under the
  front row.
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
  /* The hero's sea; the pointer plays on the hero it is in */
  var heroSea = document.querySelector('.hero .sea');
  if (heroSea) water(heroSea, heroSea.parentNode);

  function water(fig, hero) {
    var canvas = fig.querySelector('canvas');
    if (!canvas) return;

    /* a real GPU first; software WebGL (headless browsers, blocklisted drivers) gets one still frame */
    var ATTR = { alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false, preserveDrawingBuffer: false, powerPreference: 'low-power', failIfMajorPerformanceCaveat: true };
    var soft = false;
    var gl = canvas.getContext('webgl', ATTR);
    if (!gl) { ATTR.failIfMajorPerformanceCaveat = false; gl = canvas.getContext('webgl', ATTR); soft = !!gl; }
    if (!gl) { fig.style.display = 'none'; document.documentElement.classList.add('no-sea'); return; }

    /* Colour: the drying-ink law, read from the same --sea-* properties on .sea. A row is laid
       down wet at the horizon and dries towards the front; the far rows are thinned into the paper; the crests
       stay wet; a click's ring brings the next ink. ?ink in the URL draws everything in the one dry ink. */
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
    function f3(v) { return v.toFixed(4); }
    function vec3(c) { return 'vec3(' + c.map(f3).join(', ') + ')'; }
    var PAPER = hex('--sea-paper', [1, 1, 1]);
    var SEA = [hex('--sea-far', [31 / 255, 79 / 255, 196 / 255]), hex('--sea-mid', [22 / 255, 48 / 255, 122 / 255]), hex('--sea-near', [16 / 255, 18 / 255, 23 / 255])];
    var INK = SEA[2];
    var FOAM = 0.5;                                               /* crest height above which a mark stays wet */
    var FOAMK = num('--sea-foam', 0.6);                           /* how much */
    var GLOW = num('--sea-glow', 0.34);                           /* a ring colouring the marks it lifts, per px of ring height */
    var WIDTH = num('--sea-width', 1);                            /* pen width multiplier */
    var ALPHA = Math.max(0.05, Math.min(1, num('--sea-alpha', 1)));   /* how opaque the ink is: below 1, crossing strokes darken */
    var CREST = hex('--sea-crest', null);                         /* a fixed colour for the crests, if given */
    var LAW = css.getPropertyValue('--sea-dry-from').trim() ? 1 : 0;   /* the drying-ink colour law, if asked for */
    var DRY0 = num('--sea-dry-from', 0.42);
    var DRY1 = Math.max(DRY0 + 0.01, num('--sea-dry-to', 0.92));
    var FADE = Math.max(0.01, num('--sea-fade', 0.46));
    var HAZE = num('--sea-haze', 0.14);
    var WAKE = num('--sea-wake', 0.3);                            /* size of the moving wake */
    var WAKEGLOW = num('--sea-wake-glow', 0) > 0.5;               /* does the moving wake take the ink's colour */
    var MAX_LIGHTS = 8;
    var LIGHTS = (css.getPropertyValue('--sea-lights').match(/#[0-9a-f]{6}/gi) || []).slice(0, MAX_LIGHTS).map(function (h) {
      var n = parseInt(h.slice(1), 16);
      return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
    });
    if (!LIGHTS.length) LIGHTS = [hex('--sea-light', SEA[0])];
    var light = 0;                                                /* index of the ink now */
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
    var BUMP = num('--sea-bump', 3);   /* pointer swell, px at the foreground */

    /* The wake and the click's ring */
    var RING_GAP = 9, RING_SPEED = 180, RING_WIDTH = 30, RING_LIFE = 2.0, RING_AMP = 4.5, MAX_RINGS = 64;
    var TAP = 4, TAP_LIFE = 3.6, TAP_FADE = 0.85, PROF_U = 2.4, RING_RATIO = 0.62, RING_PX = 0.6, RING_PR = 0.4;

    /* ---- the figure, and where each mark sits ---- */
      /* the figure, and its size: a cross reaches to its corners, so it is drawn smaller to look as big as the rest */
    var FIGS = { cross: [0, 0.68], plus: [1, 0.8], square: [2, 1], triangle: [3, 1], circle: [4, 1] };
    var asked = /[?&]fig=(\w+)/.exec(location.search);
    var NAMES = Object.keys(FIGS);
    /* the footer's sea takes the figure the hero's picked */
    var FIG = document.documentElement.getAttribute('data-sea-figure') ||
      (asked && (asked[1] in FIGS || asked[1] === 'mix') ? asked[1] : NAMES[Math.floor(Math.random() * NAMES.length)]);
    document.documentElement.setAttribute('data-sea-figure', FIG);
    var V = {
      marks: {
        rows: 44, rowsPhone: 30,
        gap: 30, gapPow: 0.62, gapMin: 5.5,
        size: 6.5, sizePow: 0.62, sizeMin: 1.5,
        squash: 0.62, squashPow: 0.5, foreshorten: 1,
        pen: [0.34, 0.34], thin: 0.6, dot: 0.42
      },
      glsl: [
        /* the patches: still cells on the water, in the rows' perspective; returns the cell's figure, 0 to 3 */
        'float patchAt(float x, float yb, float i) {',
        '  vec2 P = vec2((x - uRes.x * 0.5) / (uFloor * pow(yb / uFloor, 0.5)) * 1.25, i * 0.105);',
        '  vec2 c0 = floor(P), fr = fract(P);',
        '  float F1 = 9.0, id = 0.0;',
        '  for (int yy = -1; yy <= 1; yy++) {',
        '    for (int xx = -1; xx <= 1; xx++) {',
        '      vec2 g = vec2(float(xx), float(yy));',
        '      vec2 r = g + 0.15 + 0.7 * hash2(c0 + g) - fr;',
        '      float d2 = dot(r, r);',
        '      if (d2 < F1) { F1 = d2; id = hash1(c0 + g + 17.3); }',
        '    }',
        '  }',
        '  return floor(id * 4.0);',
        '}'
      ].join('\n'),
      /* each mark a little off its row, forwards or back, and along it, the most far out, where a row of marks
         would otherwise read as a ruled line: up to a fifth of a row and an eighth of the spacing in front, nearly
         half a row and a third of the spacing at the horizon */
      place: [
        '  float th = (i + 0.5) / uRows;',
        '  i = max(-0.45, i + (hash1(vec2(i * 3.17 + 0.5, col * 1.31)) - 0.5) * mix(0.95, 0.4, th));',
        '  x += (hash1(vec2(col * 2.71, i * 0.73 + 4.1)) - 0.5) * mix(0.66, 0.24, th) * max(5.5, 30.0 * pow(rowY(i) / uFloor, 0.62));'
      ].join('\n'),
      mark: FIG === 'mix' ? [
        '  float pick = patchAt(x, yb, i);',
        '  fig = pick < 0.5 ? 0.0 : (pick < 1.5 ? 2.0 : (pick < 2.5 ? 3.0 : 4.0));',
        '  scl = pick < 0.5 ? 0.68 : 1.0;'
      ].join('\n') : '  fig = ' + FIGS[FIG][0].toFixed(1) + '; scl = ' + FIGS[FIG][1].toFixed(2) + ';'
    };

    /* The marks. Every row is a run of marks evenly spaced along it; the spacing, the size and the pen width
       shrink with depth, gentler than a pinhole camera would (a power of the row's depth), so the far rows are
       a fine stipple. Each row's marks start at their own place, so no columns line up. A mark lies flat on the
       water like a leaf and stays where it is while the waves pass under it: it is drawn where the water takes
       its edges, so it tips with the slope across, opens wide on a face turned to us and closes to a line on a
       back, and its strokes thin as they are foreshortened, like ink printed on it. A crest in front covers it
       from below. */
    var MK = V.marks;
    var LXE = 1.5 * RING_PX / (1 - 1.5 * RING_PR);
    var HMAX = 1.12;   /* the highest the surface gets: three octaves of noise weighing 0.94 in all, sharpened */
    var KMAX = 10;     /* the most rows in front ever looked at for one mark */
    var RINGK = 2.5;   /* px of a click's ring under a mark before it takes the ring's ink and the next figure */

    /* ---- shaders ---- */
    var VS = [
      'precision highp float;',
      'attribute vec4 a;',                                   /* row, x (css px), corner (0 to 3), column */
      'uniform vec2 uRes;',
      'uniform vec3 uPw;',                                   /* the pointer for the swell: x px, depth, world units per px across */
      'uniform float uDpr, uRows, uTime, uAmp0, uAspect, uBump, uSigInv, uMono, uFloor, uZk, uLk, uIW, uBand, uLift;',
      'uniform vec3 uKx, uKz, uKw;',
      'uniform vec4 uRings[' + MAX_RINGS + '];',             /* x, depth, radius, colour index * 32 + amplitude */
      'uniform vec3 uLights[' + MAX_LIGHTS + '];',
      'uniform int uN;',
      V.uniforms || '',
      'varying vec4 vP;',                                    /* offset from the mark's centre and the pen's half width (device px); the figure */
      'varying vec4 vE;',                                    /* the mark's two half axes, across and up (device px) */
      'varying vec4 vC;',                                    /* colour, and the mark's half size (device px) */
      'varying float vK;',                                   /* where the water in front begins, device px below the mark's centre */
      'const float RATE = ' + RATE.toFixed(3) + ', FOAM = ' + FOAM.toFixed(3) + ', FOAMK = ' + FOAMK.toFixed(3) + ', WIDTH = ' + WIDTH.toFixed(3) + ';',
      'const float LAW = ' + LAW.toFixed(1) + ', DRY0 = ' + DRY0.toFixed(3) + ', DRY1 = ' + DRY1.toFixed(3) + ', FADE = ' + FADE.toFixed(3) + ', HAZE = ' + HAZE.toFixed(3) + ';',
      'const float HASCREST = ' + (CREST ? '1.0' : '0.0') + ';',
      'const vec3 CREST = ' + vec3(CREST || [0, 0, 0]) + ', PAPER = ' + vec3(PAPER) + ', SEA0 = ' + vec3(SEA[0]) + ', SEA1 = ' + vec3(SEA[1]) + ', SEA2 = ' + vec3(SEA[2]) + ', INK = ' + vec3(INK) + ';',
      'const float PROFU = ' + PROF_U.toFixed(3) + ', RZA = ' + (1 - 1.5 * RING_PR).toFixed(3) + ', LXE = ' + LXE.toFixed(4) + ', HMAX = ' + HMAX.toFixed(3) + ', RINGK = ' + RINGK.toFixed(3) + ';',
      'const float MSIZE = ' + MK.size.toFixed(3) + ', MSIZEP = ' + MK.sizePow.toFixed(3) + ', MSMIN = ' + MK.sizeMin.toFixed(3) + ';',
      'const float SQ0 = ' + MK.squash.toFixed(3) + ', SQP = ' + MK.squashPow.toFixed(3) + ', FORE = ' + MK.foreshorten.toFixed(3) + ';',
      'const float PEN0 = ' + MK.pen[0].toFixed(3) + ', PEN1 = ' + MK.pen[1].toFixed(3) + ';',
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
      'float hash1(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }',
      'vec2 hash2(vec2 p) { return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453); }',
      /* the surface height at world x on row i: three octaves, sharper crests, flatter troughs */
      'float surf(float xw, float i, vec3 w) {',
      '  float drift = uTime * RATE;',
      '  float h = w.x * snoise(vec2(xw * uKx.x, (i - drift) * uKz.x));',
      '  h += w.y * snoise(vec2(xw * uKx.y + uTime * 0.05, (i - drift * 1.15) * uKz.y));',
      '  h += w.z * snoise(vec2(xw * uKx.z, (i - drift * 1.4) * uKz.z));',
      '  return h + 0.3 * (h * h - 0.3);',
      '}',
      'vec4 clip(vec2 p) { return vec4(p.x / uRes.x * 2.0 - 1.0, 1.0 - p.y / uRes.y * 2.0, 0.0, 1.0); }',
      /* a row's distance below the horizon, px: the rows crowd towards the horizon, the front one rests at uFloor */
      'float rowY(float j) { return 3.0 + (uFloor - 3.0) * pow((j + 0.5) / uRows, 1.5); }',
      /* the octaves a row can show: one fades out where its features would be only a few pixels wide */
      'vec3 octaves(float yb) { return uKw * vec3(sstep(3.0, 12.0, yb / uKx.x), sstep(3.0, 12.0, yb / uKx.y), sstep(3.0, 12.0, yb / uKx.z) / uAspect); }',
      /* all that lifts the water at x on row j, px: the swell under the pointer, a round mound, and every live
         ring, a circle on the water in world units, seen in the same perspective as the rows. rt is what the
         clicks' rings alone lift it by, wk how much of their ink passes here, and wc the strongest one's ink. */
      'float lift(float x, float j, float yb, out float rt, out float wk, out vec3 wc) {',
      '  float zw = uZk * pow(j + 0.5, RZA), r0 = yb / uFloor;',
      '  float sx = (x - uPw.x) * uPw.z, sz = zw - uPw.y;',
      '  float l = uBump * (0.18 + 0.82 * r0) * exp(-(sx * sx + sz * sz) * uSigInv);',   /* near rows react more than far rows */
      '  float rdepth = 0.3 + 0.7 * r0, best = 0.0;',                                    /* for the rings a little less so: a far click still shows */
      '  rt = 0.0; wk = 0.0; wc = uLights[0];',
      '  for (int k = 0; k < ' + MAX_RINGS + '; k++) {',
      '    if (k >= uN) break;',
      '    vec4 r = uRings[k];',
      '    float rz = zw - r.y;',
      '    if (abs(rz) > r.z + uBand) continue;',
      '    float rx = (x - r.x) * uLk * pow(r.y, -LXE);',
      '    float u = (sqrt(rx * rx + rz * rz) - r.z) * uIW;',
      '    if (abs(u) < PROFU) {',
      '      float ci = floor(r.w / 32.0);',                  /* colour index; 8 and up: a ring that brings no colour */
      '      float dz = (r.w - ci * 32.0) * rdepth * exp(-u * u) * cos(u * 2.4);',
      '      l += dz;',
      '      if (ci < 7.5) { float aw = abs(dz); rt += dz; wk += aw; if (aw > best) { best = aw; wc = uLights[int(ci)]; } }',
      '    }',
      '  }',
      '  return l;',
      '}',
      /* where the water is on screen at x on row j, px below the top */
      'float waterY(float x, float j) {',
      '  float yb = rowY(j), rt, wk;',
      '  vec3 wc;',
      '  return yb - uAmp0 * yb * surf((x - uRes.x * 0.5) / yb, j, octaves(yb)) - lift(x, j, yb, rt, wk, wc);',
      '}',
      /* the rows' spacing at row j, px: how far down the screen one row more is */
      'float rowDY(float j) { return (uFloor - 3.0) * 1.5 * pow((j + 0.5) / uRows, 0.5) / uRows; }',
      V.glsl || '',
      'void main() {',
      '  float i = a.x, x = a.y, corner = a.z, col = a.w;',
      V.place || '',                                         /* the variant may move the mark off its row: i and x */
      '  float t = (i + 0.5) / uRows, yb = rowY(i), amp = uAmp0 * yb;',   /* t: 0 at the horizon, 1 in front */
      '  float h = surf((x - uRes.x * 0.5) / yb, i, octaves(yb));',
      '  float rt, wk;',
      '  vec3 wc;',
      '  float y = yb - amp * h - lift(x, i, yb, rt, wk, wc);',
      '  float seed = hash1(vec2(i * 1.618, col));',
      /* its size by depth, before the variant has its say, and how much flatter it is drawn the farther it is */
      '  float s0 = max(MSMIN, MSIZE * pow(yb / uFloor, MSIZEP));',          /* half size, css px */
      '  float q = mix(1.0, clamp(SQ0 * pow(yb / uFloor, SQP), 0.0, 1.0), FORE);',
      /* its colour by depth, wet at the horizon and dry in front, the far rows thinned into the paper */
      '  float dd = LAW > 0.5 ? smoothstep(DRY0, DRY1, t) : pow(t, 0.85);',
      '  vec3 hue = uMono > 0.5 ? INK : (dd < 0.5 ? mix(SEA0, SEA1, dd * 2.0) : mix(SEA1, SEA2, (dd - 0.5) * 2.0));',
      '  float m = LAW > 0.5 ? HAZE + (1.0 - HAZE) * smoothstep(0.0, FADE, t) : 0.09 + 0.88 * pow(t, 1.2);',
      '  vec3 colr = mix(PAPER, hue, m);',
      '  float f = FOAMK * smoothstep(FOAM - 0.1, FOAM + 0.1, h) * step(0.25, t);',   /* the crests stay wet */
      '  colr = mix(colr, HASCREST > 0.5 ? mix(colr, CREST, 0.6) : mix(PAPER, hue, m * 0.32), f);',
      /* a click's ring prints in its ink: a mark is in one ink or the other, never a mix of the two */
      '  colr = mix(colr, wc, step(RINGK, rt));',
      /* what the variant decides: the figure, a parameter of it, and its size */
      '  float fig = 0.0, kf = 0.0, scl = 1.0, ang = 0.0;',
      V.mark || '',
      '  float s = s0 * scl;',
      /* Flat on the water. Its edge across is where the water is s px along the row; its far edge where the
         water is half a leaf further out, which at rest is q as deep as it is wide, and a leaf further out takes
         the perspective's lean towards the middle. On a back too steep to see it closes to a line; on the
         steepest faces, a click's ring, it never stands up taller than it is wide, nor tips past 35 degrees. */
      '  float dz = q * s / rowDY(i);',                                        /* half a leaf, in rows */
      '  vec2 e1 = vec2(s, clamp(waterY(x + s, i) - y, -0.7 * s, 0.7 * s));',
      '  float fy = rowY(i - dz);',
      '  vec2 e2 = vec2((x - uRes.x * 0.5) * (fy - yb) / yb, clamp(waterY(x, i - dz) - y, -1.3 * s, -0.1 * q * s));',
      /* turned on the water by the variant, if at all */
      '  vec2 a1 = cos(ang) * e1 + sin(ang) * e2, a2 = cos(ang) * e2 - sin(ang) * e1;',
      /* Hidden lines: the rows in front, where they rise over this mark, cover it from below. A row in front
         that cannot reach as high as its lowest point, even on its highest crest with all the rings under it, is
         not looked at, and nor is any row in front of that one. */
      '  float ext = 1.1 * (abs(a1.y) + abs(a2.y)), sky = 1e4;',
      '  for (int k = 1; k <= ' + KMAX + '; k++) {',
      '    float j = i + float(k);',
      '    if (j > uRows - 0.5) break;',
      '    float ybj = rowY(j);',
      '    if (ybj - uAmp0 * ybj * HMAX - uLift * (0.3 + 0.7 * ybj / uFloor) > y + ext) break;',
      '    sky = min(sky, waterY(x, j));',
      '  }',
      '  float hw = 0.5 * (PEN0 + PEN1 * t) * WIDTH * uDpr;',   /* the pen's half width, device px: wider in front */
      /* the quad: the figure's box, the pen and a pixel of feather around it; nothing at all for a covered mark */
      '  vec2 bb = (abs(a1) + abs(a2)) * 1.2 * uDpr + hw * 1.5 + 1.5;',
      '  vec2 off = vec2(mod(corner, 2.0) * 2.0 - 1.0, step(1.5, corner) * 2.0 - 1.0) * bb;',
      '  if (sky < y - ext || s < 0.05) off = vec2(0.0);',
      '  gl_Position = clip(vec2(x, y) + off / uDpr);',
      '  vP = vec4(off, hw, fig);',
      '  vE = vec4(a1, a2) * uDpr;',
      '  vK = (sky - y) * uDpr;',
      '  vC = vec4(colr, s * uDpr);',
      '}'
    ].join('\n');

    /* Every figure is drawn by its distance to the pen's path, in device pixels, with a pixel of feather. A
       stroke is as wide as ink printed on the leaf would look: the pen's width where the leaf faces us, thinner
       where it is foreshortened across the stroke, within limits, so none goes faint. */
    var FS = [
      'precision mediump float;',
      'varying vec4 vP;',
      'varying vec4 vE;',
      'varying vec4 vC;',
      'varying float vK;',
      'const float DOTR = ' + MK.dot.toFixed(3) + ';',            /* a dot's radius, of the figure's half size */
      'const float THIN = ' + (MK.thin || 0.55).toFixed(3) + ';',  /* the thinnest a stroke gets, of the pen */
      'const float ALPHA = ' + ALPHA.toFixed(3) + ';',
      'float S, DET, HW;',
      'float seg(vec2 p, vec2 a, vec2 b) { vec2 pa = p - a, ba = b - a; return length(pa - ba * clamp(dot(pa, ba) / max(dot(ba, ba), 1e-4), 0.0, 1.0)); }',
      /* a stroke from a to b, ll half sizes long on the leaf: its distance, less its own half width */
      'float ln(vec2 p, vec2 a, vec2 b, float ll) { return seg(p, a, b) - HW * clamp(DET * ll / max(length(b - a), 1e-3), THIN, 1.0); }',
      V.fsGlsl || '',
      'void main() {',
      '  vec2 p = vP.xy, e1 = vE.xy, e2 = vE.zw;',
      '  float f = vP.w, d;',
      '  HW = vP.z; S = max(vC.a, 1e-3); DET = abs(e1.x * e2.y - e1.y * e2.x) / S;',
      '  if (f < 0.5) {',                                                     /* 0: a diagonal cross */
      '    d = min(ln(p, -e1 - e2, e1 + e2, 2.828), ln(p, e2 - e1, e1 - e2, 2.828));',
      '  } else if (f < 1.5) {',                                              /* 1: an upright cross */
      '    d = min(ln(p, -e1, e1, 2.0), ln(p, -e2, e2, 2.0));',
      '  } else if (f < 2.5) {',                                              /* 2: an open rectangle */
      '    vec2 a = (e1 + e2) * 0.72, b = (e1 - e2) * 0.72;',
      '    d = min(min(ln(p, a, b, 1.44), ln(p, b, -a, 1.44)), min(ln(p, -a, -b, 1.44), ln(p, -b, a, 1.44)));',
      '  } else if (f < 3.5) {',                                              /* 3: an open triangle, point away */
      '    vec2 A = e2 * 1.1, B = -e2 * 0.75 - e1 * 0.95, C = -e2 * 0.75 + e1 * 0.95;',
      '    d = min(ln(p, A, B, 2.08), min(ln(p, B, C, 1.9), ln(p, C, A, 2.08)));',
      '  } else if (f < 4.5) {',                                              /* 4: an open circle, lying flat */
      '    float dt = e1.x * e2.y - e1.y * e2.x;',
      '    vec2 u = vec2(e2.y * p.x - e2.x * p.y, e1.x * p.y - e1.y * p.x) / dt;',      /* the point on the leaf */
      '    float L = max(length(u), 1e-3);',
      '    vec2 n = u / L, g = vec2(e2.y * n.x - e1.y * n.y, e1.x * n.y - e2.x * n.x) / dt;',
      '    d = abs(L - 0.8) / max(length(g), 1e-4) - HW * clamp(DET / max(length(e2 * n.x - e1 * n.y), 1e-3), THIN, 1.0);',
      '  } else if (f < 5.5) {',                                              /* 5: a dot */
      '    d = length(p) - DOTR * length(e1);',
      '  } else if (f < 6.5) {',                                              /* 6: a dash across */
      '    d = ln(p, -e1, e1, 2.0);',
      '  } else {',
      V.fsFigure || '    d = 1e3;',
      '  }',
      /* the water in front covers it from below */
      '  float c = clamp(0.5 - d, 0.0, 1.0) * clamp(vK - p.y + 0.5, 0.0, 1.0) * ALPHA;',
      '  gl_FragColor = vec4(vC.rgb * c, c);',                                /* premultiplied */
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
      ['uRes', 'uDpr', 'uRows', 'uTime', 'uAmp0', 'uAspect', 'uBump', 'uSigInv', 'uMono', 'uFloor', 'uZk', 'uLk', 'uIW', 'uBand', 'uLift', 'uPw',
        'uKx', 'uKz', 'uKw', 'uRings', 'uN', 'uLights'].forEach(function (n) { U[n] = gl.getUniformLocation(prog, n); });
      gl.uniform3fv(U.uKz, KZ);
      gl.uniform3fv(U.uKw, KW);
      gl.uniform3fv(U.uLights, lightData);
      gl.uniform1f(U.uMono, mono ? 1 : 0);
      if (V.setup) V.setup();
      vbo = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 4, gl.FLOAT, false, 0, 0);
      gl.disable(gl.DEPTH_TEST);
      gl.disable(gl.CULL_FACE);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0, 0, 0, 0);
    }

    var W = 0, H = 0, dpr = 1, rows = 0, marks = 0;
    var HS = 1, ZK = 1, LK = 1;    /* the water's height on the canvas, px; the scales of the rings' depth and width */

    function hash(n) { var s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); }
    /* a row's distance below the horizon, px, as the vertex shader has it */
    function rowY(i) { return 3 + (HS - 3) * Math.pow((i + 0.5) / rows, 1.5); }
    /* the spacing of the marks on a row, px: a power of its depth, never closer than the minimum */
    function spacing(yb) { return Math.max(MK.gapMin, MK.gap * Math.pow(yb / HS, MK.gapPow)); }

    function layout() {
      var i, aspect, kx;
      W = Math.max(1, Math.round(canvas.clientWidth));
      H = Math.max(1, Math.round(canvas.clientHeight));
      dpr = Math.min(window.devicePixelRatio || 1, 3);
      var cw = Math.round(W * dpr), ch = Math.round(H * dpr);
      if (canvas.width !== cw || canvas.height !== ch) { canvas.width = cw; canvas.height = ch; }
      gl.viewport(0, 0, cw, ch);

      rows = W < 720 ? MK.rowsPhone : MK.rows;

      /* the water is the canvas minus the paper kept under it; read on every layout, so a media query can change it */
      var floor = Math.max(0, Math.min(H * 0.5, num('--sea-floor', 0)));
      HS = H - floor;
      gl.uniform1f(U.uFloor, HS);
      var L0 = RING_RATIO * rows / 1.5, za = 1 - 1.5 * RING_PR;
      ZK = Math.pow(rows, 1.5 * RING_PR) / (L0 * za);
      gl.uniform1f(U.uZk, ZK);
      LK = Math.pow(rows, 1.5 * RING_PX) * Math.pow(ZK, 1.5 * RING_PX / za) / HS;
      gl.uniform1f(U.uLk, LK);
      gl.uniform1f(U.uIW, HS / RING_WIDTH);
      gl.uniform1f(U.uBand, RING_WIDTH * PROF_U / HS);
      aspect = Math.min(3, Math.max(1, 2.5 * HS / W));
      kx = [KX[0] * aspect, KX[1] * aspect, KX[2] * aspect];
      var sigma = Math.min(110, Math.max(56, W * 0.065)) / HS;   /* the swell's radius, px at the front row, in world units */
      gl.uniform2f(U.uRes, W, H);
      gl.uniform1f(U.uDpr, dpr);
      gl.uniform1f(U.uRows, rows);
      gl.uniform1f(U.uAmp0, AMP / Math.sqrt(aspect));       /* shorter crests, lower waves: same calm on a phone */
      gl.uniform1f(U.uAspect, aspect);
      gl.uniform3fv(U.uKx, kx);
      gl.uniform1f(U.uSigInv, 1 / (2 * sigma * sigma));

      /* One triangle strip for the whole sea: a quad per mark, row by row from the horizon, all joined by
         degenerate triangles. Each vertex is (row, x, corner, column); the GPU does the rest. */
      var margin = MK.size * 2.5 + 4, gaps = [], phase = [], total = 0, n = 0;
      marks = 0;
      for (i = 0; i < rows; i++) {
        gaps[i] = spacing(rowY(i));
        phase[i] = hash(i + 0.37) * gaps[i];
        var nm = Math.max(0, Math.ceil((W + 2 * margin - phase[i]) / gaps[i]));
        marks += nm;
        total += nm * 6;
      }
      var data = new Float32Array(total * 4);
      function put(r, x, corner, c) { data[n * 4] = r; data[n * 4 + 1] = x; data[n * 4 + 2] = corner; data[n * 4 + 3] = c; n++; }
      for (i = 0; i < rows; i++) {
        for (var x = -margin + phase[i], c = 0; x < W + margin; x += gaps[i], c++) {
          if (n) { data.copyWithin(n * 4, (n - 1) * 4, n * 4); n++; put(i, x, 0, c); }   /* two degenerate triangles on to the next quad */
          put(i, x, 0, c); put(i, x, 1, c); put(i, x, 2, c); put(i, x, 3, c);
        }
      }
      count = n;
      gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
      gl.bufferData(gl.ARRAY_BUFFER, data.subarray(0, n * 4), gl.STATIC_DRAW);
      if (V.layout) V.layout();
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
      var tt = Math.pow(Math.max(1e-4, (Math.max(4, y) - 3) / (HS - 3)), 2 / 3);   /* the row it falls on, 0 to 1, past 1 below the front */
      return ZK * Math.pow(tt * rows, 1 - 1.5 * RING_PR);
    }
    /* a ring's radius in world units, age seconds after it was dropped */
    function ringRadius(age) { return (8 + RING_SPEED * age) / HS; }

    function draw(time) {
      var k, n = 0, age, z, amp, up = BUMP * strength;
      /* age the rings, drop the dead ones, pack the live ones for the shader. up is the most the swell and the
         rings together can lift the water at the front, px: how far ahead the shader looks for what hides a mark */
      for (k = rings.length - 1; k >= 0; k--) {
        age = time - rings[k].t0;
        if (age < 0 || age > rings[k].life) { rings.splice(k, 1); continue; }
        amp = rings[k].a * RING_AMP * Math.exp(-age * rings[k].fade) * (1 - Math.exp(-age * 30));   /* stays under 32 */
        ringData[n * 4] = rings[k].x;
        ringData[n * 4 + 1] = depthAt(rings[k].y);
        ringData[n * 4 + 2] = rings[k].r ? rings[k].r(age) : ringRadius(age);
        ringData[n * 4 + 3] = rings[k].c * 32 + amp;
        up += amp;
        n++;
      }
      gl.uniform1f(U.uTime, time);
      z = depthAt(py);
      gl.uniform3f(U.uPw, px, z, LK * Math.pow(z, -LXE));
      gl.uniform1f(U.uBump, BUMP * strength);
      gl.uniform1f(U.uLift, up);
      gl.uniform4fv(U.uRings, ringData);
      gl.uniform1i(U.uN, n);
      if (V.draw) V.draw(time);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, count);
    }

    /* Loop: pauses off-screen and in hidden tabs, 30 fps on coarse pointers, watches the frame gaps. The clock
       starts at a random moment in the sea's first ten minutes, so every visit opens on another stretch of
       water; ?t=<seconds> starts it there instead. */
    var start0 = /[?&]t=(\d+(?:\.\d+)?)/.exec(location.search);
    var raf = 0, last = 0, t = start0 ? +start0[1] : Math.random() * 600, visible = true, stamp = 0;
    var gapsMs = new Float32Array(120), gi = 0, gn = 0;

    function median() {
      var arr = Array.prototype.slice.call(gapsMs, 0, gn).sort(function (a, b) { return a - b; });
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
      if (last) { gapsMs[gi] = now - last; gi = (gi + 1) % gapsMs.length; if (gn < gapsMs.length) gn++; }
      last = now;
      advance(dt);
      draw(t);

      if (now - stamp > 2000) {
        stamp = now;
        var med = median();
        canvas.dataset.frame = med.toFixed(1);
      }
      raf = window.requestAnimationFrame(frame);
    }

    function start() {
      if (raf || reduce.matches || !visible || document.hidden || lost || soft) return;
      raf = window.requestAnimationFrame(frame);
    }

    function still() {
      strength = 0; target = 0; rings.length = 0;
      if (V.still) V.still();
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
      if (!inside) {
        inside = true; lastX = x; lastY = y; speed = 0;
        if (strength < 0.01) { px = x; py = y; }
      } else if (now > evT) {
        var v = Math.sqrt((x - evX) * (x - evX) + (y - evY) * (y - evY)) / ((now - evT) / 1000);
        speed += (v - speed) * 0.4;
      }
      evX = x; evY = y; evT = now;
      tx = x; ty = y; target = 1;
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
      tap(e.clientX - r.left, e.clientY - r.top, TAP);
      start();
    });

    /* a click fills the pen with the next ink and drops a ring in it */
    function tap(x, y, a) {
      if (LIGHTS.length > 1) light = (light + 1) % LIGHTS.length;
      addRing(x, y, a, true);
      if (V.tap) V.tap(x, y);
    }

    start();

    /* devtools handle: sea.ripple(x, y, size) drops a ring, sea.tick(dt) advances one frame by hand (the
       dynamics too), sea.sun(x, y, s) parks the pointer, sea.stats() reports the frame gaps and the geometry */
    window.sea = {
      ripple: function (x, y, a) { tap(x, y, a || TAP); },
      tick: function (dt) { advance(dt || 0.016); draw(t); },
      gl: gl,
      time: function () { return t; },
      sun: function (x, y, s) { px = tx = x; py = ty = y; strength = target = (s == null ? 1 : s); },
      stats: function () {
        var arr = Array.prototype.slice.call(gapsMs, 0, gn).sort(function (a, b) { return a - b; });
        return { frames: gn, p50: arr.length ? +arr[arr.length >> 1].toFixed(1) : null, p90: arr.length ? +arr[Math.floor(arr.length * 0.9)].toFixed(1) : null, max: arr.length ? +arr[arr.length - 1].toFixed(1) : null,
          rows: rows, dpr: dpr, marks: marks, vertices: count, rings: rings.length, soft: soft, lost: lost };
      }
    };
  }
})();
