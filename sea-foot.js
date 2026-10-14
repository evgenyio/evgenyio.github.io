/*
  The sea at the foot of the page, under the contacts, drawn as a map legend. The same water as the sea at the
  top (script.js): rows of the surface from the horizon to the front, three octaves of simplex noise drifting
  towards the viewer, seen in perspective, a crest hiding what is behind it, the drying-ink colours. But every
  row is a run of map symbols, each telling the height of the water under it: a dot in a trough, an open circle
  on a slope, an open triangle on a crest, the cartographer's sign for a summit. They stand upright, like the
  symbols on a map; as a swell passes under one it opens from a dot into a circle, peaks into a triangle and
  goes back, so the waves read through the legend. The pointer's swell and a click's ring lift the water, so
  they read in it too. Every visit opens on another stretch of water.

  Paused when off-screen or in a hidden tab, one still frame under prefers-reduced-motion and on software
  WebGL. Its look is the --sea-* properties on .sea-foot .sea in style.css. seaFoot in the console is its
  devtools handle.
*/
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  var hero = document.querySelector('.sea-foot');
  var fig = document.querySelector('.sea-foot .sea');
  var canvas = fig && fig.querySelector('canvas');
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

  /* Scene constants, as in the sea at the top */
  var AMP = 0.08;    /* wave height in world units; on screen it is AMP * yb px */
  var RATE = 0.8;    /* drift towards the viewer, rows per second */
  var KX = [1.0, 2.4, 6.0];      /* x frequency per world unit, per octave (scaled by aspect) */
  var KZ = [0.09, 0.2, 0.36];    /* depth frequency per row, per octave */
  var KW = [0.62, 0.24, 0.08];   /* octave weights */
  var BUMP = num('--sea-bump', 3);   /* pointer swell, px at the foreground */

  /* The wake and the click's ring, as in the sea at the top */
  var RING_GAP = 9, RING_SPEED = 180, RING_WIDTH = 30, RING_LIFE = 2.0, RING_AMP = 4.5, MAX_RINGS = 64;
  var TAP = 4, TAP_LIFE = 3.6, TAP_FADE = 0.85, PROF_U = 2.4, RING_RATIO = 0.62, RING_PX = 0.6, RING_PR = 0.4;

  /* ---- the variant: which figures, where, and how they move ---- */
    var V = {
      marks: {
        rows: 56, rowsPhone: 36,
        gap: 18, gapPow: 0.6, gapMin: 3.6,
        size: 3.4, sizePow: 0.6, sizeMin: 0.75,
        squash: 1, squashPow: 0,                     /* map symbols do not lie down: no foreshortening */
        converge: 0,
        lean: 0,
        pen: [0.55, 0.75]
      },
      mark: [
        /* the height of the water here, the pointer's swell and the rings included, in the waves' own units */
        '  float hh = h + lift / max(amp, 1.0);',
        '  k = smoothstep(-0.24, -0.1, hh) + smoothstep(0.03, 0.17, hh);',   /* 0 dot, 1 circle, 2 triangle */
        '  fig = 7.0;',
        '  lie = 0.0;',
        '  scl = 0.94 + 0.2 * smoothstep(0.1, 0.5, hh);'
      ].join('\n'),
      /* the symbol: a dot that opens into a circle, a circle that peaks into a triangle */
      fsFigure: [
        '    float s = length(e1), kk = clamp(vC.a, 0.0, 1.0), kt = clamp(vC.a - 1.0, 0.0, 1.0);',
        '    float sb = length(p) - s * 0.66 * kk;',
        '    float st = sdTri(p, vec2(0.0, -s * 1.0), vec2(-s * 0.95, s * 0.66), vec2(s * 0.95, s * 0.66));',
        '    float sd = mix(sb, st, kt);',
        '    float hk = mix(max(s * 0.36, hw), hw, smoothstep(0.0, 0.75, kk));',   /* the pen, fat for the dot */
        '    d = abs(sd) + hw - hk;'
      ].join('\n')
    };

  /* The marks. Every row is a run of marks evenly spaced along it; the spacing, the size and the pen width
     shrink with depth, gentler than a pinhole camera would (a power of the row's depth), so the far rows are
     a fine stipple instead of a solid line. Each row's marks start at their own place, so no columns line up. */
  var MK = V.marks;
  var LXE = 1.5 * RING_PX / (1 - 1.5 * RING_PR);

  /* ---- shaders ---- */
  var VS = [
    'precision highp float;',
    'attribute vec4 a;',                                   /* row, x (css px), role (0 band top, 1 band bottom, 2 to 5 a mark's corners), seed */
    'uniform vec2 uRes;',
    'uniform vec3 uPw;',                                   /* the pointer for the swell: x px, depth, world units per px across */
    'uniform float uDpr, uRows, uTime, uAmp0, uAspect, uBump, uSigInv, uMono, uFloor, uZk, uLk, uIW, uBand;',
    'uniform vec3 uKx, uKz, uKw;',
    'uniform vec4 uRings[' + MAX_RINGS + '];',             /* x, depth, radius, colour index * 32 + amplitude */
    'uniform vec3 uLights[' + MAX_LIGHTS + '];',
    'uniform int uN;',
    V.uniforms || '',
    'varying vec4 vP;',                                    /* offset from the mark's centre and the pen's half width (device px); the figure, -1 for paper */
    'varying vec4 vE;',                                    /* the mark's two half axes, along the water and up (device px) */
    'varying vec4 vC;',                                    /* colour, and a parameter of the figure */
    'const float RATE = ' + RATE.toFixed(3) + ', FOAM = ' + FOAM.toFixed(3) + ', FOAMK = ' + FOAMK.toFixed(3) + ', GLOW = ' + GLOW.toFixed(3) + ', WIDTH = ' + WIDTH.toFixed(3) + ';',
    'const float LAW = ' + LAW.toFixed(1) + ', DRY0 = ' + DRY0.toFixed(3) + ', DRY1 = ' + DRY1.toFixed(3) + ', FADE = ' + FADE.toFixed(3) + ', HAZE = ' + HAZE.toFixed(3) + ';',
    'const float HASCREST = ' + (CREST ? '1.0' : '0.0') + ';',
    'const vec3 CREST = ' + vec3(CREST || [0, 0, 0]) + ', PAPER = ' + vec3(PAPER) + ', SEA0 = ' + vec3(SEA[0]) + ', SEA1 = ' + vec3(SEA[1]) + ', SEA2 = ' + vec3(SEA[2]) + ', INK = ' + vec3(INK) + ';',
    'const float PROFU = ' + PROF_U.toFixed(3) + ', RZA = ' + (1 - 1.5 * RING_PR).toFixed(3) + ', LXE = ' + LXE.toFixed(4) + ';',
    'const float MSIZE = ' + MK.size.toFixed(3) + ', MSIZEP = ' + MK.sizePow.toFixed(3) + ', MSMIN = ' + MK.sizeMin.toFixed(3) + ';',
    'const float SQ0 = ' + MK.squash.toFixed(3) + ', SQP = ' + MK.squashPow.toFixed(3) + ', CONV = ' + MK.converge.toFixed(3) + ';',
    'const float PEN0 = ' + MK.pen[0].toFixed(3) + ', PEN1 = ' + MK.pen[1].toFixed(3) + ';',
    'const float LEAN = ' + (MK.lean == null ? 1 : MK.lean).toFixed(3) + ', LEANMAX = ' + (MK.leanMax || 1.8).toFixed(3) + ', QMAX = ' + (MK.qMax || 1.0).toFixed(3) + ';',
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
    V.glsl || '',
    'void main() {',
    '  float i = a.x, x = a.y, role = a.z, seed = a.w;',
    '  float t = (i + 0.5) / uRows;',                       /* 0 = horizon, 1 = foreground */
    '  float yb = 3.0 + (uFloor - 3.0) * pow(t, 1.5);',     /* rows crowd towards the horizon; the front row rests at uFloor */
    '  float amp = uAmp0 * yb;',                            /* projected wave height, px */
    /* the band's bottom edge is flat and needs nothing else */
    '  if (role > 0.5 && role < 1.5) {',
    '    gl_Position = clip(vec2(x, yb + amp + 4.0));',
    '    vP = vec4(0.0, 0.0, 0.0, -1.0); vE = vec4(0.0); vC = vec4(PAPER, 0.0);',
    '    return;',
    '  }',
    /* an octave fades out where its features would be only a few pixels wide */
    '  vec3 w = uKw * vec3(sstep(3.0, 12.0, yb / uKx.x), sstep(3.0, 12.0, yb / uKx.y), sstep(3.0, 12.0, yb / uKx.z) / uAspect);',
    '  float xw = (x - uRes.x * 0.5) / yb;',                /* world x of this point at this depth */
    '  float zw = uZk * pow(i + 0.5, RZA);',                /* this row's depth on the water, for the rings and the swell */
    '  float h = surf(xw, i, w);',
    '  float depth = 0.18 + 0.82 * (yb / uFloor);',         /* near rows react more than far rows */
    '  float rdepth = 0.3 + 0.7 * (yb / uFloor);',          /* for the rings a little less so: a far click still shows */
    '  float lift = 0.0, rs = 0.0, rt = 0.0, wk = 0.0, best = 0.0;',   /* px: all that lifts this point; the rings; the clicks' rings; how much ink */
    '  vec3 wc = uLights[0];',
    /* the swell under the pointer: a round mound on the water, seen in perspective like the rings */
    '  {',
    '    float sx = (x - uPw.x) * uPw.z, sz = zw - uPw.y;',
    '    lift += uBump * depth * exp(-(sx * sx + sz * sz) * uSigInv);',
    '  }',
    /* the wake and the clicks: every live ring, a circle on the water in world units, where its band crosses this row */
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
    '      lift += dz; rs += dz;',
    '      if (ci < 7.5) { float aw = abs(dz); rt += dz; wk += aw; if (aw > best) { best = aw; wc = uLights[int(ci)]; } }',
    '    }',
    '  }',
    '  float y = yb - amp * h - lift;',
    /* the paper band under the row hides what is behind it */
    '  if (role < 0.5) {',
    '    gl_Position = clip(vec2(x, y));',
    '    vP = vec4(0.0, 0.0, 0.0, -1.0); vE = vec4(0.0); vC = vec4(PAPER, 0.0);',
    '    return;',
    '  }',
    /* a mark: its size by depth, before the variant has its say, and how it is foreshortened into the distance */
    '  float s0 = max(MSMIN, MSIZE * pow(yb / uFloor, MSIZEP));',          /* half size, css px */
    '  float q0 = clamp(SQ0 * pow(yb / uFloor, SQP), 0.0, 1.0);',
    /* its colour by depth, wet at the horizon and dry in front, the far rows thinned into the paper */
    '  float dd = LAW > 0.5 ? smoothstep(DRY0, DRY1, t) : pow(t, 0.85);',
    '  vec3 hue = uMono > 0.5 ? INK : (dd < 0.5 ? mix(SEA0, SEA1, dd * 2.0) : mix(SEA1, SEA2, (dd - 0.5) * 2.0));',
    '  float m = LAW > 0.5 ? HAZE + (1.0 - HAZE) * smoothstep(0.0, FADE, t) : 0.09 + 0.88 * pow(t, 1.2);',
    '  vec3 col = mix(PAPER, hue, m);',
    '  float f = FOAMK * smoothstep(FOAM - 0.1, FOAM + 0.1, h) * step(0.25, t);',   /* the crests stay wet */
    '  col = mix(col, HASCREST > 0.5 ? mix(col, CREST, 0.6) : mix(PAPER, hue, m * 0.32), f);',
    /* a click's ring brings its ink; a mark is printed in one ink or the other, hardly ever a mix of the two */
    '  col = mix(col, wc, smoothstep(0.3, 0.45, wk * GLOW));',
    /* the slope of the water under the mark (undisturbed) */
    '  float slope = -amp * (surf(xw + 1.5 / yb, i, w) - h) / 1.5;',
    /* and how the water faces the viewer here: the gap to the next row in front, against the gap between the
       rows on still water. A mark lying on a slope that turns away is foreshortened, flatter and flatter until
       the crest in front hides it; on a face that turns towards the viewer it opens up. */
    '  float lean;',
    '  {',
    '    float yn = 3.0 + (uFloor - 3.0) * pow((i + 1.5) / uRows, 1.5);',
    '    vec3 wn = uKw * vec3(sstep(3.0, 12.0, yn / uKx.x), sstep(3.0, 12.0, yn / uKx.y), sstep(3.0, 12.0, yn / uKx.z) / uAspect);',
    '    float gap = yn - uAmp0 * yn * surf((x - uRes.x * 0.5) / yn, i + 1.0, wn) - (yb - amp * h);',
    '    lean = clamp(gap / (yn - yb), 0.0, LEANMAX);',
    '  }',
    /* what the variant decides: the figure, a parameter of it, its size, a turn, whether it lies on the water
       (tilted with it and foreshortened) or stands upright like a map symbol, and a flip across */
    '  float fig = 0.0, k = 0.0, scl = 1.0, ang = 0.0, lie = 1.0, flipx = 1.0;',
    V.mark || '',
    '  float s = s0 * scl;',
    '  float q = mix(1.0, min(QMAX, q0 * mix(1.0, lean, LEAN)), lie);',
    '  float th = atan(slope) * lie;',
    '  vec2 T = vec2(cos(th), sin(th));',                   /* along the water */
    '  vec2 N = normalize(mix(vec2(0.0, -1.0), normalize(vec2((uRes.x * 0.5 - x) * CONV, -yb)), lie));',   /* up: into the distance */
    '  float ca = cos(ang), sa = sin(ang);',
    '  T = vec2(T.x * ca - T.y * sa, T.x * sa + T.y * ca);',
    '  N = vec2(N.x * ca - N.y * sa, N.x * sa + N.y * ca);',
    '  vec2 e1 = T * (s * flipx * uDpr), e2 = N * (s * q * uDpr);',
    /* the pen: wider in front, a little wider on the crests and where a click's ring passes */
    '  float pen = (PEN0 + PEN1 * t) * WIDTH * (1.0 + 0.15 * f) * (1.0 + min(0.5, wk * GLOW * 0.4));',
    '  float hw = 0.5 * pen * uDpr;',
    /* the quad: the figure's box, the pen and a pixel of feather around it */
    '  vec2 bb = (abs(e1) + abs(e2)) * 1.2 + hw + 1.5;',
    '  vec2 cs = vec2(mod(role - 2.0, 2.0) * 2.0 - 1.0, step(3.5, role) * 2.0 - 1.0);',
    '  vec2 off = cs * bb;',
    '  gl_Position = clip(vec2(x, y) + off / uDpr);',
    '  vP = vec4(off, hw, fig);',
    '  vE = vec4(e1, e2);',
    '  vC = vec4(col, k);',
    '}'
  ].join('\n');

  /* Every figure is drawn by its distance to the pen's path, in device pixels, so the pen keeps its width
     however the figure is turned or foreshortened, and the edge is one device pixel of feather. */
  var FS = [
    'precision mediump float;',
    'varying vec4 vP;',
    'varying vec4 vE;',
    'varying vec4 vC;',
    'float seg(vec2 p, vec2 a, vec2 b) { vec2 pa = p - a, ba = b - a; return length(pa - ba * clamp(dot(pa, ba) / max(dot(ba, ba), 1e-4), 0.0, 1.0)); }',
    'float sdBox(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }',
    'float sdTri(vec2 p, vec2 p0, vec2 p1, vec2 p2) {',
    '  vec2 e0 = p1 - p0, e1 = p2 - p1, e2 = p0 - p2;',
    '  vec2 v0 = p - p0, v1 = p - p1, v2 = p - p2;',
    '  vec2 pq0 = v0 - e0 * clamp(dot(v0, e0) / dot(e0, e0), 0.0, 1.0);',
    '  vec2 pq1 = v1 - e1 * clamp(dot(v1, e1) / dot(e1, e1), 0.0, 1.0);',
    '  vec2 pq2 = v2 - e2 * clamp(dot(v2, e2) / dot(e2, e2), 0.0, 1.0);',
    '  float s = sign(e0.x * e2.y - e0.y * e2.x);',
    '  vec2 d = min(min(vec2(dot(pq0, pq0), s * (v0.x * e0.y - v0.y * e0.x)), vec2(dot(pq1, pq1), s * (v1.x * e1.y - v1.y * e1.x))), vec2(dot(pq2, pq2), s * (v2.x * e2.y - v2.y * e2.x)));',
    '  return -sqrt(d.x) * sign(d.y);',
    '}',
    V.fsGlsl || '',
    'void main() {',
    '  if (vP.w < -0.5) { gl_FragColor = vec4(vC.rgb, 1.0); return; }',   /* paper */
    '  vec2 p = vP.xy, e1 = vE.xy, e2 = vE.zw;',
    '  float hw = vP.z, f = vP.w, d;',
    '  if (f < 0.5) {',                                                     /* 0: a diagonal cross */
    '    d = min(seg(p, -e1 - e2, e1 + e2), seg(p, e2 - e1, e1 - e2));',
    '  } else if (f < 1.5) {',                                              /* 1: an upright cross */
    '    d = min(seg(p, -e1, e1), seg(p, -e2, e2));',
    '  } else if (f < 2.5) {',                                              /* 2: an open rectangle */
    '    vec2 a = (e1 + e2) * 0.72, b = (e1 - e2) * 0.72;',
    '    d = min(min(seg(p, a, b), seg(p, b, -a)), min(seg(p, -a, -b), seg(p, -b, a)));',
    '  } else if (f < 3.5) {',                                              /* 3: an open triangle, point up */
    '    vec2 A = e2 * 1.1, B = -e2 * 0.75 - e1 * 0.95, C = -e2 * 0.75 + e1 * 0.95;',
    '    d = min(seg(p, A, B), min(seg(p, B, C), seg(p, C, A)));',
    '  } else if (f < 4.5) {',                                              /* 4: an open circle, foreshortened to an ellipse */
    '    vec2 u = e1 * 0.8, v = e2 * 0.8;',
    '    float det = u.x * v.y - u.y * v.x;',
    '    det = abs(det) < 1e-3 ? 1e-3 : det;',
    '    vec2 l = vec2(v.y * p.x - v.x * p.y, u.x * p.y - u.y * p.x) / det;',
    '    float L = max(length(l), 1e-3);',
    '    vec2 g = vec2(v.y * l.x - u.y * l.y, u.x * l.y - v.x * l.x) / (det * L);',
    '    d = abs(L - 1.0) / max(length(g), 1e-3);',
    '  } else if (f < 5.5) {',                                              /* 5: a dot */
    '    d = length(p) - length(e1) * 0.34 + hw;',
    '  } else if (f < 6.5) {',                                              /* 6: a dash along the water */
    '    d = seg(p, -e1, e1);',
    '  } else {',
    V.fsFigure || '    d = 1e3;',
    '  }',
    '  float c = clamp(hw + 0.5 - d, 0.0, 1.0);',
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
    ['uRes', 'uDpr', 'uRows', 'uTime', 'uAmp0', 'uAspect', 'uBump', 'uSigInv', 'uMono', 'uFloor', 'uZk', 'uLk', 'uIW', 'uBand', 'uPw',
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

  var W = 0, H = 0, dpr = 1, rows = 0, cols = 0, step = 2, baseStep = 2, marks = 0;
  var HS = 1, ZK = 1, LK = 1;    /* the water's height on the canvas, px; the scales of the rings' depth and width */

  function hash(n) { var s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); }
  /* a row's distance below the horizon, px, as the vertex shader has it */
  function rowY(i) { return 3 + (HS - 3) * Math.pow((i + 0.5) / rows, 1.5); }
  /* the spacing of the marks on a row, px: a power of its depth, never closer than the minimum */
  function spacing(yb) { return Math.max(MK.gapMin, MK.gap * Math.pow(yb / HS, MK.gapPow)); }

  function layout() {
    var i, j, aspect, kx;
    W = Math.max(1, Math.round(canvas.clientWidth));
    H = Math.max(1, Math.round(canvas.clientHeight));
    dpr = Math.min(window.devicePixelRatio || 1, 3);
    var cw = Math.round(W * dpr), ch = Math.round(H * dpr);
    if (canvas.width !== cw || canvas.height !== ch) { canvas.width = cw; canvas.height = ch; }
    gl.viewport(0, 0, cw, ch);

    rows = W < 720 ? MK.rowsPhone : MK.rows;
    baseStep = W < 720 ? 2.5 : 2;
    if (step < baseStep) step = baseStep;
    cols = Math.ceil(W / step) + 3;

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

    /* One triangle strip for the whole sea: per row, the paper band, then that row's marks, each a quad, all
       joined by degenerate triangles. Each vertex is (row, x, role, seed); the GPU does the rest. */
    var margin = MK.size * 2.5 + 4, gaps = [], phase = [], total = 0, n = 0;
    marks = 0;
    for (i = 0; i < rows; i++) {
      gaps[i] = spacing(rowY(i));
      phase[i] = hash(i + 0.37) * gaps[i];
      var nm = Math.max(0, Math.ceil((W + 2 * margin - phase[i]) / gaps[i]));
      marks += nm;
      total += 2 * cols + 2 + nm * 6;
    }
    var data = new Float32Array(total * 4), last = -1;
    function put(r, x, role, seed) { data[n * 4] = r; data[n * 4 + 1] = x; data[n * 4 + 2] = role; data[n * 4 + 3] = seed; n++; }
    function join(r, x, role, seed) {    /* repeat the last vertex and the next one: two degenerate triangles */
      if (n) { data.copyWithin(n * 4, (n - 1) * 4, n * 4); n++; put(r, x, role, seed); }
    }
    for (i = 0; i < rows; i++) {
      join(i, -step, 0, 0);
      for (j = 0; j < cols; j++) { put(i, (j - 1) * step, 0, 0); put(i, (j - 1) * step, 1, 0); }
      for (var x = -margin + phase[i], c = 0; x < W + margin; x += gaps[i], c++) {
        var sd = hash(i * 131.7 + c * 7.31);
        join(i, x, 2, sd);
        put(i, x, 2, sd); put(i, x, 3, sd); put(i, x, 4, sd); put(i, x, 5, sd);
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
    var k, n = 0, age, z;
    /* age the rings, drop the dead ones, pack the live ones for the shader */
    for (k = rings.length - 1; k >= 0; k--) {
      age = time - rings[k].t0;
      if (age < 0 || age > rings[k].life) { rings.splice(k, 1); continue; }
      ringData[n * 4] = rings[k].x;
      ringData[n * 4 + 1] = depthAt(rings[k].y);
      ringData[n * 4 + 2] = rings[k].r ? rings[k].r(age) : ringRadius(age);
      ringData[n * 4 + 3] = rings[k].c * 32 + rings[k].a * RING_AMP * Math.exp(-age * rings[k].fade) * (1 - Math.exp(-age * 30));   /* amplitude stays under 32 */
      n++;
    }
    gl.uniform1f(U.uTime, time);
    z = depthAt(py);
    gl.uniform3f(U.uPw, px, z, LK * Math.pow(z, -LXE));
    gl.uniform1f(U.uBump, BUMP * strength);
    gl.uniform4fv(U.uRings, ringData);
    gl.uniform1i(U.uN, n);
    if (V.draw) V.draw(time);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, count);
  }

  /* Loop: pauses off-screen and in hidden tabs, 30 fps on coarse pointers, watches the frame gaps */
  var raf = 0, last = 0, t = Math.random() * 600, visible = true, stamp = 0;   /* another stretch of water every visit */
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
      /* still slow: sample the bands more coarsely (never fewer device pixels, never fewer marks) */
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
  window.seaFoot = {
    ripple: function (x, y, a) { tap(x, y, a || TAP); },
    tick: function (dt) { advance(dt || 0.016); draw(t); },
    gl: gl,
    time: function () { return t; },
    sun: function (x, y, s) { px = tx = x; py = ty = y; strength = target = (s == null ? 1 : s); },
    stats: function () {
      var arr = Array.prototype.slice.call(gapsMs, 0, gn).sort(function (a, b) { return a - b; });
      return { frames: gn, p50: arr.length ? +arr[arr.length >> 1].toFixed(1) : null, p90: arr.length ? +arr[Math.floor(arr.length * 0.9)].toFixed(1) : null, max: arr.length ? +arr[arr.length - 1].toFixed(1) : null,
        rows: rows, cols: cols, step: step, dpr: dpr, marks: marks, vertices: count, rings: rings.length, soft: soft, lost: lost };
    }
  };
})();
