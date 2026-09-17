/*
  Two things move on this page, both once or calmly.

  1. The year counter in the headline. The number of years is computed from data-since (2012-01), so it
     turns into 15 by itself in January 2027. On load the strip of numbers rolls from 1 up to the current
     count and settles; under prefers-reduced-motion it just shows the count. The intro's spelled-out
     number is kept in step with it.

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
     finer, flatter detail.

  Budget: 56 rows at desktop width, 36 on phones; a sample every 2 px (2.5 on phones); 30 fps on coarse
  pointers; paused when off-screen or in a hidden tab; one static frame under prefers-reduced-motion
  and on software WebGL. If frames still come in slow (median gap over 26 ms for two seconds), the
  sample spacing grows to at most 4 px; the pixel ratio is never reduced. Any resize rebuilds the strip
  and redraws in the same task, so a cleared canvas is never on screen. No WebGL at all: the sea is
  hidden and the page is just paper. data-frame on the canvas holds the median frame gap in ms.
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
  if (!canvas) return;

  /* a real GPU first; software WebGL (headless browsers, blocklisted drivers) gets one still frame */
  var ATTR = { alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false, preserveDrawingBuffer: false, powerPreference: 'low-power', failIfMajorPerformanceCaveat: true };
  var soft = false;
  var gl = canvas.getContext('webgl', ATTR);
  if (!gl) { ATTR.failIfMajorPerformanceCaveat = false; gl = canvas.getContext('webgl', ATTR); soft = !!gl; }
  if (!gl) { fig.style.display = 'none'; return; }

  /* Colour. Each row has its own hue by depth: haze at the horizon, teal in the middle distance, indigo in
     front. Under the pointer the water catches a warm light (the rows near it blend towards ACCENT, fading
     out sideways), and the highest crests are drawn paler and a little wider, like light on the water.
     ?ink in the URL draws the whole thing in ink, no colour. */
  var PAPER = [244 / 255, 242 / 255, 236 / 255];
  var INK = [20 / 255, 20 / 255, 20 / 255];
  var SEA = [[152 / 255, 178 / 255, 190 / 255], [22 / 255, 118 / 255, 140 / 255], [22 / 255, 44 / 255, 118 / 255]];   /* far haze, middle teal, near indigo */
  var ACCENT = [1, 128 / 255, 62 / 255];                        /* the light under the pointer */
  var SUN = 0.75;                                               /* how strong that light gets, 0..1 */
  var FOAM = 0.5;                                               /* crest height above which a row gets its pale pass */
  var mono = /[?&]ink\b/.test(location.search);

  var fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  var coarse = window.matchMedia('(pointer: coarse)');

  /* Scene constants */
  var AMP = 0.08;    /* wave height in world units; on screen it is AMP * yb px */
  var RATE = 0.8;    /* drift towards the viewer, rows per second */
  var KX = [1.0, 2.4, 6.0];      /* x frequency per world unit, per octave (scaled by aspect) */
  var KZ = [0.09, 0.2, 0.36];    /* depth frequency per row, per octave */
  var KW = [0.62, 0.24, 0.08];   /* octave weights */
  var BUMP = 14;                 /* pointer swell, px at the foreground; a broad, soft mound */

  /* The wake: small rings shed every few px of pointer travel, overlapping into one continuous trail */
  var RING_GAP = 9;              /* px of travel between rings */
  var RING_SPEED = 180;          /* px per second */
  var RING_WIDTH = 30;           /* px, half-width of the ring profile */
  var RING_LIFE = 2.0;           /* seconds */
  var RING_AMP = 6;              /* px at the foreground for a ring of size 1; a wake is the sum of many */
  var MAX_RINGS = 64;
  var TAP = 4;                   /* size of the ring a click or a tap drops */
  var PROF_U = 2.4;              /* the ring profile exp(-u^2) cos(2.4u) lives in |u| < PROF_U */

  /* ---- shaders ---- */
  var VS = [
    'precision highp float;',
    'attribute vec3 a;',                                   /* row, sample, role (0 band top, 1 band bottom, 2 ribbon left, 3 ribbon right) */
    'uniform vec2 uRes, uPointer;',
    'uniform float uDpr, uRows, uStep, uTime, uAmp0, uAspect, uBump, uSigInv, uStrength, uSunW, uSunInvY, uMono;',
    'uniform vec3 uKx, uKz, uKw, uPaper, uSea0, uSea1, uSea2, uAccent, uInk;',
    'uniform vec4 uRings[' + MAX_RINGS + '];',             /* x, y, radius, amplitude */
    'uniform int uN;',
    'varying mediump vec3 vColor;',
    'varying mediump vec2 vLine;',                         /* signed distance across the ribbon, half width; both in device px */
    'const float RATE = ' + RATE.toFixed(3) + ', FOAM = ' + FOAM.toFixed(3) + ', SUN = ' + SUN.toFixed(3) + ';',
    'const float BAND = ' + (RING_WIDTH * PROF_U).toFixed(3) + ', IW = ' + (1 / RING_WIDTH).toFixed(6) + ', PROFU = ' + PROF_U.toFixed(3) + ';',
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
    '  float yb = 3.0 + (uRes.y - 3.0) * pow(t, 1.5);',     /* rows crowd towards the horizon */
    '  float amp = uAmp0 * yb;',                            /* projected wave height, px */
    /* an octave fades out where its features would be only a few pixels wide */
    '  vec3 w = uKw * vec3(sstep(3.0, 12.0, yb / uKx.x), sstep(3.0, 12.0, yb / uKx.y), sstep(3.0, 12.0, yb / uKx.z) / uAspect);',
    '  float x = (j - 1.0) * uStep;',
    '  float xw = (x - uRes.x * 0.5) / yb;',                /* world x of this sample at this depth */
    '  float h = surf(xw, i, w);',
    '  float y = yb - amp * h;',
    '  float depth = 0.18 + 0.82 * (yb / uRes.y);',         /* near rows react more than far rows */
    '  if (role != 1.0) {',
    /* the swell under the pointer */
    '    float dx = x - uPointer.x, dy = (yb - uPointer.y) * 1.3;',
    '    y -= uBump * depth * exp(-(dx * dx + dy * dy) * uSigInv);',
    /* the wake: every live ring, where its band crosses this row (rings are flattened by perspective) */
    '    for (int k = 0; k < ' + MAX_RINGS + '; k++) {',
    '      if (k >= uN) break;',
    '      vec4 r = uRings[k];',
    '      float ry = (yb - r.y) * 1.45;',
    '      if (abs(ry) > r.z + BAND) continue;',
    '      float rx = x - r.x;',
    '      float u = (sqrt(rx * rx + ry * ry) - r.z) * IW;',
    '      if (abs(u) < PROFU) y -= r.w * depth * exp(-u * u) * cos(u * 2.4);',
    '    }',
    '  }',
    /* colour by depth: haze at the horizon, full colour in front */
    '  float d = pow(t, 0.85);',
    '  vec3 hue = uMono > 0.5 ? uInk : (d < 0.5 ? mix(uSea0, uSea1, d * 2.0) : mix(uSea1, uSea2, (d - 0.5) * 2.0));',
    '  float m = 0.09 + 0.88 * pow(t, 1.2);',
    '  vec2 pos;',
    '  if (role < 1.5) {',
    /* the paper band under the line hides what is behind it */
    '    pos = vec2(x, role < 0.5 ? y : yb + amp + 4.0);',
    '    vLine = vec2(0.0, 10.0);',
    '    vColor = uPaper;',
    '  } else {',
    '    float side = role * 2.0 - 5.0;',                   /* 2 -> -1, 3 -> +1 */
    '    vec3 col = mix(uPaper, hue, m);',
    '    float width = 0.6 + 0.7 * t;',                     /* css px */
    '    if (uMono < 0.5) {',
    /* the light under the pointer, fading out sideways */
    '      float sdy = (yb - uPointer.y) * 1.15;',
    '      float sun = uStrength * depth * exp(-sdy * sdy * uSunInvY);',
    '      float g = clamp(1.0 - abs(x - uPointer.x) / uSunW, 0.0, 1.0);',
    '      col = mix(col, uAccent, min(1.0, sun * SUN) * m * g);',
    /* light on the crests: the high parts of the row, paler and a little wider */
    '      float f = smoothstep(FOAM - 0.1, FOAM + 0.1, h) * step(0.25, t);',
    '      col = mix(col, mix(uPaper, hue, m * 0.32), f);',
    '      width *= 1.0 + 0.2 * f;',
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
    ['uRes', 'uPointer', 'uDpr', 'uRows', 'uStep', 'uTime', 'uAmp0', 'uAspect', 'uBump', 'uSigInv', 'uStrength', 'uSunW', 'uSunInvY', 'uMono',
      'uKx', 'uKz', 'uKw', 'uPaper', 'uSea0', 'uSea1', 'uSea2', 'uAccent', 'uInk', 'uRings', 'uN'].forEach(function (n) { U[n] = gl.getUniformLocation(prog, n); });
    gl.uniform3fv(U.uKz, KZ);
    gl.uniform3fv(U.uKw, KW);
    gl.uniform3fv(U.uPaper, PAPER);
    gl.uniform3fv(U.uSea0, SEA[0]);
    gl.uniform3fv(U.uSea1, SEA[1]);
    gl.uniform3fv(U.uSea2, SEA[2]);
    gl.uniform3fv(U.uAccent, ACCENT);
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
    aspect = Math.min(3, Math.max(1, 2.5 * H / W));
    kx = [KX[0] * aspect, KX[1] * aspect, KX[2] * aspect];
    var sigma = Math.min(110, Math.max(56, W * 0.065));   /* the swell's radius */
    var sunY = H * 0.2;                                    /* the light's reach up and down */
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
  var rings = [];   /* {x, y, t0, a} */
  var ringData = new Float32Array(MAX_RINGS * 4);

  function addRing(x, y, a) {
    rings.push({ x: x, y: y, t0: t, a: a });
    if (rings.length > MAX_RINGS) rings.shift();
  }

  function draw(time) {
    var k, n = 0, age;
    /* age the rings, drop the dead ones, pack the live ones for the shader */
    for (k = rings.length - 1; k >= 0; k--) {
      age = time - rings[k].t0;
      if (age < 0 || age > RING_LIFE) { rings.splice(k, 1); continue; }
      ringData[n * 4] = rings[k].x;
      ringData[n * 4 + 1] = rings[k].y;
      ringData[n * 4 + 2] = 8 + RING_SPEED * age;
      ringData[n * 4 + 3] = rings[k].a * RING_AMP * Math.exp(-age * 1.6) * (1 - Math.exp(-age * 30));
      n++;
    }
    gl.uniform1f(U.uTime, time);
    gl.uniform2f(U.uPointer, px, py);
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

  try { setup(); } catch (e) { fig.style.display = 'none'; if (window.console) console.error(e); return; }
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
    new ResizeObserver(relayout).observe(canvas);
  } else {
    window.addEventListener('resize', relayout);
  }

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
      for (q = 1; q <= n; q++) addRing(lastX + ux * q, lastY + uy * q, a);
      lastX += ux * n; lastY += uy * n;
    }
    start();
  });
  hero.addEventListener('pointerleave', function () { inside = false; target = 0; speed = 0; });
  hero.addEventListener('pointerdown', function (e) {
    if (reduce.matches || soft) return;
    var r = canvas.getBoundingClientRect();
    addRing(e.clientX - r.left, e.clientY - r.top, TAP);
    start();
  });

  start();

  /* devtools handle: sea.ripple(x, y, size) drops a ring, sea.tick(dt) advances one frame by hand (the
     dynamics too), sea.sun(x, y, s) parks the pointer, sea.stats() reports the frame gaps and the geometry */
  window.sea = {
    ripple: function (x, y, a) { addRing(x, y, a || TAP); },
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
