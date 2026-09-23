# evgeny.io

The personal site of Evgeny Nikiforov, product engineer. Plain HTML, CSS and one script, no framework, no build step; served by GitHub Pages from this branch.

- `index.html`, `style.css`: the page, set like a book in Piazzolla: one serif, one ink, one left edge, no greys. The work history is drawn as dimension lines on one scale from 2012 to now; the small inline script at the end of `index.html` places them and shows the months on hover.
- `script.js`: the two things that move. A year counter that computes itself from January 2012 and rolls once on load, and the sea: a WebGL canvas of ink lines drawn with simplex noise in perspective, with hidden-line occlusion. The far rows are wet ink and dry as they come towards you; moving the pointer barely stirs the water, and a click drops a ring in the next ink, seen in the same perspective as the rows. Paused off-screen, one static frame under `prefers-reduced-motion`. Its look is set by the `--sea-*` custom properties on `.sea` in `style.css`.
- `fonts/`: Piazzolla by Huerta Tipográfica, roman and italic, subset to Latin, with its licence (SIL OFL 1.1).
- `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`: the sea as an icon; `favicon-gen.js` regenerates the SVG (`node favicon-gen.js`).
- `projects/` and `games/`: side projects deployed here by their own repositories; not part of the site's sources.
