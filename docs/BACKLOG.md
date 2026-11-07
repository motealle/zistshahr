# Canonical Backlog / ZISTSHAHR English Exhibition

Status as of 2026-11-07. Each new release is immutable; never retrofit old snapshots.

## Completed

- [x] Connect to `motealle/zistshahr`, verify GitHub write and FTP Secrets names (secret values not accessed).
- [x] Correct FTP mapping: FTP `./` serves website `/en/`.
- [x] Release 01 with 8-step interactive English story, conceptual Three.js city, atlas, chapter navigation, autoplay and footnotes.
- [x] Archive 01 at `/en/t/01/`, version index at `/en/t/`, mirror 01 to root `/en/`.
- [x] Confirm V01 FTP upload and all three URL checks succeed (Actions run 42408262352).
- [x] Integrate 5 recent source-site posts (titles, URLs; not all article bodies accessible).
- [x] Review supplied English social-theory workbook and bilingual classical selections.
- [x] Build V02 separate City / Foundations journeys, full theory comparison, English narrative, light/dark, pace, responsive behavior, local isometric fallback.
- [x] Automated offline UI smoke tests for navigation, tracks, modal, light mode and mobile width.
- [x] Copy supplied research originals to `/Zistshahr/Source/` in ChatGPT Library.
- [x] Document sources, rules, handoff and backlog in repository.

## Immediate / P0

- [ ] **Publish and verify V02 production** with full Actions log and all required URL checks. Update handoff with actual run ID.
- [ ] **On-site exhibition QA**: Chrome/Edge/Safari, Turkish venue connectivity, fonts, true Three.js canvas, GPU memory, fullscreen/projector and fallback behavior.
- [ ] **Researcher sign-off** on English matrix labels, roles, terminology, normative-vs-empirical caveats, original presentation title and transliteration.

## High / P1

- [ ] Local-host Three.js module to eliminate CDN runtime dependency, pinned SHA/version, no excessive bundle size.
- [ ] Add selectable city districts and visibly connect city chapters to specific 3D houses, market, commons and ecological loops.
- [ ] Improve motion design: camera rail, adaptive reading duration, subtle sound only with opt-in, smooth chapter transitions without motion sickness.
- [ ] More accessible captions and contrast; keyboard focus audit, screen-reader announcement throttling, `prefers-reduced-motion` and no-WebGL QA.
- [ ] Optimize performance for older iPhones and midrange Android devices; reduce geometry draw calls and particles, respect battery-saving.
- [ ] Confirm and document all five recent source articles, particularly `/6310/` and `/6293/` when text access becomes possible.
- [ ] Distinguish viability/implementation evidence and aspirational proposals; source-validate each exhibition claim.

## Medium / P2

- [ ] Optional switch between story mode and deep reading mode, transcript and print/export for academic visitors.
- [ ] Event-ready onboarding/outro, simple contact / collaboration form only with approved destination and privacy policy.
- [ ] Productive-home 3D close-up, neighborhood courtyards, decentralized production ecosystem and water flows as distinct modeled environments.
- [ ] Geolocated Turkey redirect **at root/edge only**; cannot be configured from FTP account restricted to `/en/`.

## Release procedure

1. Copy current latest to `site/t/NN/` as new edition; use relative assets and include no-CDN fallback.
2. Implement user changes only in `NN`; mirror `NN` site files into `site/` root.
3. Update `site/t/index.html`; sources/docs/handoff/backlog; never alter previous NN folders.
4. Programmatic check + visual review + interaction smoke test.
5. Push to `main` and inspect `.github/workflows/deploy-exhibition.yml` run; confirm SFTP/FTPS success and each public URL.
6. Note commit hash and exact Actions run in `docs/HANDOFF.md`.