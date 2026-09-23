// Regenerates og.png, the picture links to the site unfold into: the header and the headline over the sea,
// 1200 by 630. It is a screenshot of index.html itself, taken with headless Chrome, with everything below
// the hero hidden and the hero stretched to fill the card, so the card can never drift from the page.
// Reduced motion is forced: the year counter lands on its number instead of rolling up to it, and the sea
// is the one still frame. Run it whenever the headline or the counter changes: node og-gen.js
'use strict';
const fs = require('fs'), os = require('os'), path = require('path'), { execFileSync } = require('child_process');

const CHROME = process.env.CHROME || [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find(p => fs.existsSync(p));
if (!CHROME) { console.error('No Chrome found. Install it, or point CHROME at the binary.'); process.exit(1); }

const W = 1200, H = 630, HEADER = 72;   /* the card, and the header line above the sea */
const out = path.join(__dirname, 'og.png');
const page = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'og-')), 'og.html');

/* the base makes the page's own stylesheet, fonts and script load from here; the override comes after the
   stylesheet, so it has the last word on the hero */
const shot = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8')
  .replace('<head>', `<head>\n<base href="file://${__dirname}/">`)
  .replace('</head>', `<style>
  .intro, .work, .projects, .next, .contact { display: none }
  .hero { height: calc(100vh - ${HEADER}px) }
  .hero > .wrap { padding-top: 40px }
</style>
</head>`);
fs.writeFileSync(page, shot);

execFileSync(CHROME, [
  '--headless', '--hide-scrollbars', '--force-prefers-reduced-motion', '--allow-file-access-from-files',
  '--virtual-time-budget=6000', `--window-size=${W},${H}`, `--screenshot=${out}`, 'file://' + page,
], { stdio: ['ignore', 'ignore', 'ignore'] });
fs.rmSync(path.dirname(page), { recursive: true, force: true });

console.log('wrote', out, fs.statSync(out).size, 'bytes');
