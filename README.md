# evgeny.io

The personal site of Evgeny Nikiforov, product engineer. Plain HTML, CSS and one script, no framework, no build step; served by GitHub Pages from this branch.

- `index.html`, `style.css`: a Swiss grid in Archivo, hairlines instead of boxes.
- `script.js`: the two things that move. A year counter that computes itself from January 2012 and rolls once on load, and the sea: a canvas of ink lines drawn with simplex noise in perspective, with hidden-line occlusion, that reacts quietly to the pointer. Paused off-screen, one static frame under `prefers-reduced-motion`.
- `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`: the same sea as an icon; `favicon-gen.js` regenerates the SVG (`node favicon-gen.js`).
- `cv.pdf` is not here yet; the header's CV link is commented out in `index.html` until it is.
- `projects/` and `games/`: side projects deployed here by their own repositories; not part of the site's sources.
