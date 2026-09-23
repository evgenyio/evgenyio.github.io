# evgeny.io

The personal site of Evgeny Nikiforov, product engineer. Plain HTML, CSS and one script, no framework, no build step; served by GitHub Pages from this branch.

- `index.html`, `style.css`: the page, set like a book in Piazzolla: one serif, one ink, one left edge, no greys. The work history is drawn as dimension lines on one scale from 2012 to now; the small inline script at the end of `index.html` places them, shows the months on hover, and keeps the job you are reading on the scale, which stays pinned while the jobs scroll past: its years get a wash of the wet ink, and a click on the scale goes to any year.
- `script.js`: the two things that move. A year counter that computes itself from January 2012 and rolls once on load, and the sea: a WebGL canvas of ink lines drawn with simplex noise in perspective, with hidden-line occlusion. The far rows are wet ink and dry as they come towards you; moving the pointer barely stirs the water, and a click drops a ring in the next ink, seen in the same perspective as the rows. Paused off-screen, one static frame under `prefers-reduced-motion`. Its look is set by the `--sea-*` custom properties on `.sea` in `style.css`.
- `fonts/`: Piazzolla by Huerta Tipográfica, roman and italic, subset to Latin, with its licence (SIL OFL 1.1).
- `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`: the sea as an icon; `favicon-gen.js` regenerates the SVG (`node favicon-gen.js`).
- `og.png`: the card a link to the site unfolds into, 1200 by 630. It is a screenshot of the page itself, the header and the headline over the sea; `og-gen.js` retakes it with headless Chrome (`node og-gen.js`). Worth rerunning when the headline changes, and in January, when the counter turns over.
- `robots.txt`, `sitemap.xml`: everything a crawler is told. The sitemap lists the page and the three apps under `projects/` and `games/` that are linked from it.
- `projects/` and `games/`: side projects deployed here by their own repositories; not part of the site's sources.
