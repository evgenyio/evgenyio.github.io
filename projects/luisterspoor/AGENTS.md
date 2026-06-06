# AGENTS.md

Notes for future agents and maintainers working on `luisterspoor`.

## Project Shape

`luisterspoor` is the deployable static PWA for Dutch listening practice.

Live app:

- https://evgeny.io/projects/luisterspoor/

GitHub repo:

- https://github.com/Evgeny-/luisterspoor

This repository intentionally contains only the hosted app:

- `index.html` static player
- `tracks.json`
- `manifest.webmanifest`
- `service-worker.js`
- `icons/*`
- final mixed audio tracks and their manifests in `audio/tracks/`

The original generation workspace is separate:

- `/Users/evgeny.nikiforov/Projects/dutch`

That workspace contains phrase sources, ElevenLabs scripts, per-phrase audio cache, and the packager script:

- `phrases/source.md`
- `phrases/manual_translations.json`
- `data/phrases.json`
- `audio/items/`
- `scripts/build_deploy_package.py`

When changing phrase content or regenerating audio, work in `/Users/evgeny.nikiforov/Projects/dutch` first, then run the packager to update this repo.

## Deployment

Deployment follows the same pattern as `gracht-app`.

The workflow in `.github/workflows/deploy.yml`:

1. Checks out this app repo.
2. Checks out `evgenyio/evgenyio.github.io` into `site/` using `SITE_DEPLOY_KEY`.
3. Copies this repo into `site/projects/luisterspoor/`.
4. Commits and pushes that folder.
5. GitHub Pages serves it at `https://evgeny.io/projects/luisterspoor/`.

Important workflow detail:

- The deploy step must exclude `.git`, `.github`, and `site`.
- If `site` is not excluded, the target checkout gets recursively copied into the deployed app.

The deploy key is attached to:

- target repo: `evgenyio/evgenyio.github.io`
- source repo secret: `Evgeny-/luisterspoor` → `SITE_DEPLOY_KEY`

To inspect deployment:

```bash
gh run list --repo Evgeny-/luisterspoor --limit 5
gh run list --repo evgenyio/evgenyio.github.io --limit 5
```

To verify live assets:

```bash
curl -I https://evgeny.io/projects/luisterspoor/
curl -I https://evgeny.io/projects/luisterspoor/manifest.webmanifest
curl -I https://evgeny.io/projects/luisterspoor/tracks.json
curl -I https://evgeny.io/projects/luisterspoor/audio/tracks/recall-all-mixed.mp3
```

## PWA And Offline

The app is installable because it has:

- `manifest.webmanifest`
- app icons in `icons/`
- `service-worker.js`
- HTTPS hosting through GitHub Pages/custom domain

The service worker precaches:

- app shell
- icons
- `tracks.json`
- final MP3 tracks
- JSON timing manifests
- TXT phrase manifests

It also handles `Range` requests for cached MP3 files. This matters because browsers often request audio with `Range` headers. Without explicit range handling, cached offline MP3 playback can fail or seek poorly.

Offline setup expectation:

- The user must open the app once while online.
- The first install/cache pass downloads roughly 84 MB of audio.
- After that, the app should work offline from the installed PWA or browser cache.

## Asset And GitHub Limits

Current deploy size is intentionally modest:

- deploy repo total: about 84 MB
- largest MP3: about 50 MB
- final tracks only: `recall-all-mixed` and `dutch-only-all-mixed`

Do not add source-order tracks unless there is a strong reason. They doubled storage without adding much learning value.

GitHub hard-blocks files over 100 MB. Keep every individual MP3 below that limit.

Useful docs:

- https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

GitHub Pages also has practical bandwidth limits. Large audio is acceptable here, but avoid many alternate renders unless needed.

## Audio Generation Notes

The selected ElevenLabs voice is:

- Serge de Beer - Professional Narrator
- voice ID: `UNBIyLbtFB9k7FKW8wJv`

Full generation was done in the source workspace using:

```bash
python3 scripts/generate_audio.py --languages en,nl
python3 scripts/build_track.py --mode recall --order mixed --seed dutch-v1
python3 scripts/build_track.py --mode dutch-only --order mixed --seed dutch-v1
python3 scripts/build_web_index.py
python3 scripts/build_deploy_package.py
```

The mixed order is deterministic:

- order = SHA1 of `seed|mode|phrase_id`
- seed = `dutch-v1`

This keeps the order stable across rebuilds while allowing new phrases to slot in deterministically.

Do not delete `/Users/evgeny.nikiforov/Projects/dutch/audio/items/` unless you are willing to pay ElevenLabs again. It is the per-phrase TTS cache.

ElevenLabs usage after the first full generation:

- before: `5,829 / 75,851`
- after: `22,028 / 75,851`
- observed cost: `16,199` characters
- report: `/Users/evgeny.nikiforov/Projects/dutch/data/audio_generation_usage.json`

OpenAI API was not used for the generated translations/audio run.

## UI Notes

The UI intentionally follows the visual direction of `gracht-app`:

- warm off-white surface
- cyan accent
- compact mobile-first panels
- soft inset shadows
- pill controls

The timeline rows must be allowed to grow vertically. Earlier versions had rows that were too short, causing Dutch text to visually escape the button. Keep:

- `white-space: normal`
- `overflow-wrap: anywhere`
- no fixed timeline item height
- no hidden overflow on timeline buttons

Always verify at desktop width and a phone viewport around `390x844`.

## Local Verification

Serve the deploy repo from its root:

```bash
cd /Users/evgeny.nikiforov/Projects/luisterspoor
python3 -m http.server 8788
```

Open:

- http://127.0.0.1:8788/

Expected:

- title and heading: `luisterspoor`
- 2 tracks
- 265 timeline items
- default audio path: `audio/tracks/recall-all-mixed.mp3`

## Common Gotchas

- Do not serve this app through `file://`; service workers and JSON/audio fetch behavior need HTTP(S).
- Do not put secrets into this repo. The deploy private key is only in the GitHub Actions secret.
- Do not regenerate icons from `public/index.html`; icons are standalone files in this deploy repo.
- If changing the packager, update `/Users/evgeny.nikiforov/Projects/dutch/scripts/build_deploy_package.py`, not only this repo.
- If changing deployed files directly in this repo, consider whether the packager will overwrite them later.

