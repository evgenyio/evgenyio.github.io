// Regenerates the icons: favicon.svg, the site's sea reduced to an icon, and its PNG fallbacks, favicon-32.png
// and apple-touch-icon.png (180 px, square, no rounding: iOS rounds it), screenshots of it taken with headless
// Chrome. The sea as a ripple of dots in the wet blue: six rows in perspective, crowding and fading towards the
// horizon, a wave running through them. Run: node favicon-gen.js
'use strict';
const fs = require('fs'), os = require('os'), path = require('path'), { execFileSync } = require('child_process');

const BLUE = '#1f4fc4';   /* --wet */
const f1 = v => (Math.round(v * 10) / 10).toString();

const P = {
  rows: 6,
  top: 9, depth: 50, pow: 1.4,   /* px from the top to the first row, from it to the last, and how the rows crowd towards the top */
  gap: [4, 12],                  /* px between dots, far row to front row */
  dot: [0.9, 3.2],               /* a dot's radius, far to front */
  wave: [2, 5],                  /* the wave's height, far to front */
  alpha: [0.45, 1]               /* how strong the ink, far to front */
};

function icon(o, rounded) {
  let out = '';
  for (let r = 0; r < o.rows; r++) {
    const t = (r + 0.5) / o.rows, y = o.top + o.depth * Math.pow(t, o.pow), at = (a) => a[0] + (a[1] - a[0]) * t;
    const gap = at(o.gap);
    for (let x = (r % 2) * gap / 2 - gap; x < 64 + gap; x += gap) {
      const w = Math.sin(x / 64 * 6.3 - r * 0.9) * at(o.wave);
      out += `<circle cx="${f1(x)}" cy="${f1(y - w)}" r="${f1(at(o.dot))}" fill-opacity="${f1(at(o.alpha))}"/>`;
    }
  }
  const box = `<rect width="64" height="64"${rounded ? ' rx="14"' : ''} fill="#fff"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><!-- evgeny.io: the site's sea, a ripple of dots --><clipPath id="r"><rect width="64" height="64"${rounded ? ' rx="14"' : ''}/></clipPath>${box}<g clip-path="url(#r)" fill="${BLUE}">${out}</g></svg>\n`;
}

const svg = path.join(__dirname, 'favicon.svg');
fs.writeFileSync(svg, icon(P, true));
console.log('wrote', svg, fs.statSync(svg).size, 'bytes');

/* the PNGs: the icon at its size, from a page that shows just it */
const CHROME = process.env.CHROME || ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome', '/usr/bin/chromium'].find(p => fs.existsSync(p));
if (!CHROME) { console.error('No Chrome found for the PNGs. Install it, or point CHROME at the binary.'); process.exit(1); }
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'icon-'));
for (const [name, px, rounded] of [['favicon-32.png', 32, true], ['apple-touch-icon.png', 180, false]]) {
  const page = path.join(tmp, name + '.html'), out = path.join(__dirname, name);
  fs.writeFileSync(page, `<!doctype html><style>html,body{margin:0;background:transparent}img{display:block;width:${px}px;height:${px}px}</style><img src="data:image/svg+xml;base64,${Buffer.from(icon(P, rounded)).toString('base64')}">`);
  execFileSync(CHROME, ['--headless', '--hide-scrollbars', '--default-background-color=00000000', `--window-size=${px},${px}`, `--screenshot=${out}`, 'file://' + page], { stdio: ['ignore', 'ignore', 'ignore'] });
  console.log('wrote', out, fs.statSync(out).size, 'bytes');
}
fs.rmSync(tmp, { recursive: true, force: true });
