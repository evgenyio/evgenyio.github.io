// Regenerates favicon.svg: the site's sea, reduced to an icon. Same simplex noise as script.js, same
// perspective (rows crowd towards the top, thicken and darken towards the bottom), same hidden-line
// occlusion (each row is a paper fill under a stroke). Run: node favicon-gen.js
// The PNG fallbacks (favicon-32.png, apple-touch-icon.png at 180 px) are screenshots of the SVG taken with
// headless Chrome and cropped; see README.md.
'use strict';
const fs = require('fs'), path = require('path');

function makeNoise(seed) {
  var perm = new Uint8Array(512), src = [], i, j, k, s = seed >>> 0;
  for (i = 0; i < 256; i++) src[i] = i;
  for (i = 255; i > 0; i--) { s = (s * 1664525 + 1013904223) >>> 0; j = Math.floor((s / 4294967296) * (i + 1)); k = src[i]; src[i] = src[j]; src[j] = k; }
  for (i = 0; i < 512; i++) perm[i] = src[i & 255];
  var GX = [1, -1, 1, -1, 1, -1, 0, 0], GY = [1, 1, -1, -1, 0, 0, 1, -1];
  var F2 = 0.5 * (Math.sqrt(3) - 1), G2 = (3 - Math.sqrt(3)) / 6;
  return function (x, y) {
    var s0 = (x + y) * F2, i0 = Math.floor(x + s0), j0 = Math.floor(y + s0);
    var t = (i0 + j0) * G2, x0 = x - (i0 - t), y0 = y - (j0 - t);
    var i1 = x0 > y0 ? 1 : 0, j1 = 1 - i1;
    var x1 = x0 - i1 + G2, y1 = y0 - j1 + G2, x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
    var ii = i0 & 255, jj = j0 & 255, n = 0, g, c;
    c = 0.5 - x0 * x0 - y0 * y0; if (c > 0) { g = perm[ii + perm[jj]] & 7; c *= c; n += c * c * (GX[g] * x0 + GY[g] * y0); }
    c = 0.5 - x1 * x1 - y1 * y1; if (c > 0) { g = perm[ii + i1 + perm[jj + j1]] & 7; c *= c; n += c * c * (GX[g] * x1 + GY[g] * y1); }
    c = 0.5 - x2 * x2 - y2 * y2; if (c > 0) { g = perm[ii + 1 + perm[jj + 1]] & 7; c *= c; n += c * c * (GX[g] * x2 + GY[g] * y2); }
    return 70 * n;
  };
}

const PAPER = [244, 242, 236], SEA = [[152, 178, 190], [22, 118, 140], [22, 44, 118]];   /* the stops from script.js */
const lerp3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const rgb = c => '#' + c.map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
const hue = d => d < 0.5 ? lerp3(SEA[0], SEA[1], d * 2) : lerp3(SEA[1], SEA[2], (d - 0.5) * 2);
const f1 = v => (Math.round(v * 10) / 10).toString();

const P = {
  seed: 20160419,
  rows: 14,                 /* the last one sits partly below the edge, so the sea runs off the icon */
  top: 5, bottom: -2,       /* px from the top and bottom edges to the first and last row */
  pow: 1.4,                 /* rows crowd towards the top */
  step: 1.5,                /* px between samples */
  amp: 0.08,                /* wave height as a fraction of the row's distance from the top */
  kx: [3, 7.2, 18], kz: [0.35, 0.7, 1.2], w: [0.6, 0.28, 0.14],   /* three octaves: frequency across, per row, weight */
  sharp: 0.35,              /* sharper crests, flatter troughs */
  mix0: 0.34,               /* colour strength of the top row (stronger than the site's haze, or the icon washes out at 16 px) */
  sw0: 0.7, sw1: 2.6        /* stroke width, top row to bottom row */
};

function icon(o) {
  const noise = makeNoise(o.seed), W = 64, H = 64, out = [], xs = [];
  for (let x = -3; x <= 67; x += o.step) xs.push(x);
  for (let i = 0; i < o.rows; i++) {
    const t = (i + 0.5) / o.rows;
    const yb = o.top + (H - o.top - o.bottom) * Math.pow(t, o.pow);
    const amp = o.amp * yb;
    const z = [i * o.kz[0], i * o.kz[1] + 3.1, i * o.kz[2] + 7.7];
    const line = xs.map((x, k) => {
      const xv = (x - W / 2) / yb;
      let h = o.w[0] * noise(xv * o.kx[0], z[0]) + o.w[1] * noise(xv * o.kx[1] + 0.3, z[1]) + o.w[2] * noise(xv * o.kx[2], z[2]);
      h = h + o.sharp * (h * h - 0.3);
      return (k ? 'L' : 'M') + f1(x) + ' ' + f1(yb - amp * h);
    }).join('');
    const col = rgb(lerp3(PAPER, hue(Math.pow(t, 0.85)), o.mix0 + (1 - o.mix0) * Math.pow(t, 1.2)));
    out.push(`<path d="${line}L67 ${f1(yb + amp + 3)}L-3 ${f1(yb + amp + 3)}Z" fill="#f4f2ec"/>`);   /* paper under the line hides what is behind */
    out.push(`<path d="${line}" stroke="${col}" stroke-width="${f1(o.sw0 + (o.sw1 - o.sw0) * t)}"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><!-- evgeny.io: the site's sea, ${o.rows} rows of it, same noise and perspective, on paper --><clipPath id="r"><rect width="64" height="64" rx="13"/></clipPath><rect width="64" height="64" rx="13" fill="#f4f2ec"/><g clip-path="url(#r)" fill="none" stroke-linecap="round" stroke-linejoin="round">${out.join('')}</g></svg>\n`;
}

const file = path.join(__dirname, 'favicon.svg');
fs.writeFileSync(file, icon(P));
console.log('wrote', file, fs.statSync(file).size, 'bytes');
