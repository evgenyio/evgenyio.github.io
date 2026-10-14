// Regenerates the pictures links to the site unfold into, 1200 by 630, each a screenshot of its own page taken
// with headless Chrome, so a card can never drift from its page.
//
// og.png, the front page: the header and the headline over the sea. Everything below the hero is hidden and
// the hero is stretched to fill the card. Reduced motion is forced: the year counter lands on its number
// instead of rolling up to it, and the sea is the one still frame.
//
// assets/games/og.png, the games page: its header, its title and its line of contents, over the first screen
// of every game, set as a row of plates in the page's own style.
//
// The sea opens on a random stretch of water, in a random figure, on every visit; the cards take it at ?t=0 in
// squares, so they hold still.
//
// Run it whenever a headline, the counter or the games change: node og-gen.js
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
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'og-'));
const root = 'file://' + __dirname;

function card(html, out) {
  const page = path.join(tmp, path.basename(out) + '.html');
  fs.writeFileSync(page, html);
  execFileSync(CHROME, [
    '--headless', '--hide-scrollbars', '--force-prefers-reduced-motion', '--allow-file-access-from-files',
    '--virtual-time-budget=6000', `--window-size=${W},${H}`, `--screenshot=${out}`, 'file://' + page + '?t=0&fig=square',
  ], { stdio: ['ignore', 'ignore', 'ignore'] });
  console.log('wrote', out, fs.statSync(out).size, 'bytes');
}

/* the front page. The base makes the page's own stylesheet, fonts and script load from here; the override comes
   after the stylesheet, so it has the last word on the hero */
card(fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8')
  .replace('<head>', `<head>\n<base href="${root}/">`)
  .replace('</head>', `<style>
  .intro, .work, .projects, .contact, .sea-foot { display: none }
  .hero { height: calc(100vh - ${HEADER}px) }
  .hero > .wrap { padding-top: 40px }
</style>
</head>`), path.join(__dirname, 'og.png'));

/* the games page. Its addresses start at the site's root, so they are pointed at this folder; the plates are
   the first screen of each game, in the order of the page */
const games = fs.readFileSync(path.join(__dirname, 'games/index.html'), 'utf8').replace(/(href|src)="\//g, `$1="${root}/`);
const firsts = [...games.matchAll(/<ul class="shots">\s*<li><figure><img src="([^"]+)"[^>]*alt="([^"]*)"/g)];
card(games
  .replace('</head>', `<style>
  .lead, .game, .contact { display: none }
  .chapter { padding-top: 34px }
  .card { grid-template-columns: repeat(${firsts.length}, minmax(0, 1fr)); column-gap: 20px; margin-top: 30px }
</style>
</head>`)
  .replace('</nav>', '</nav>\n    <ul class="shots card">' + firsts.map(m => `<li><figure><img src="${m[1]}" alt="${m[2]}"></figure></li>`).join('') + '</ul>'),
  path.join(__dirname, 'assets/games/og.png'));

fs.rmSync(tmp, { recursive: true, force: true });
