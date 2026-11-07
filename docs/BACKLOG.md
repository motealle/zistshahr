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

- [x] **Publish and verify V02 production**. FTPS upload and `/en/`, `/en/t/`, `/en/t/01/`, `/en/t/02/` URL checks all succeeded in [Actions run 42409990074](https://github.com/motealle/zistshahr/actions/runs/42409990074). Handoff updated.
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

## V03 — responsive inline release / garden mosque (2026-11-07)
- [x] Investigate root style discrepancy; root HTML and V02 snapshot identical in repo, cached external resource mismatch suspected but **not demonstrated**.
- [x] Produce standalone V03 HTML (inline CSS+JS+SVG fallback); exact mirror to latest site root, immutable `/t/03/`.
- [x] New concept landscape: spacious planted ~800 m² *illustrative* residential lots; one-floor houses, garden pools and trees; distinctive mosque with luminous white architecture, modern asymmetrical Islamic silhouette (not Taj copy).
- [x] Interactive desktop and mobile fallback checks at 1440, 390 and 360 px; no overflow/header collision; 2 tracks, atlas, mode toggle, chapter controls.
- [x] Include Open Science ideas from project-provided `دانش آزاد.docx`, index the 23-slide Beyond-Market Science deck; save both originals to ChatGPT Library.
- [x] **Production V03 deployed and verified**: FTPS success and HTTP content checks passed on all five URLs, including `Research Edition 03`, embedded style and script markers. [Actions run 42412491145](https://github.com/motealle/zistshahr/actions/runs/42412491145), commit `4ad5d81f6f82c93bd036ad2aea6ae962687be63d`.
- [ ] Test real Three.js scene on midrange Android and exhibition laptop with internet, including offline fallback; independent live root screenshot.
- [ ] Confirm researcher review of concept land-area figure, original architecture and English translations; avoid suggesting implementation has occurred.
- [x] Full 9 MB original `Presentation1.pptx` content archived **losslessly in GitHub as eight restorable Base64 chunks** at `sources/original/Presentation1.pptx.b64parts/`; restoration verified against original SHA-256, with one-file original also preserved in ChatGPT Library.


## V04 — The Living Atlas / 2026-11-08
- Complete interface redesign on `main`; no other branch existed at task start. New immutable `site/t/04/index.html`, byte-identical latest root; newest-first archive entry. Editions 01–03 untouched.
- Paper/terracotta light and forest/ivory dark themes; new inline isometric illustration, real overhead SVG plan, selectable home/commons/ecology destinations. Optional procedural Three.js garden city retained with wider cameras and context-loss fallback.
- Equally visible City and Foundations lenses: 8 chapters each; Foundations receives its own interactive diagram, and the full matrix, source links, classical references and Open Science material remain in the atlas. No evidence of real-world implementation is implied.
- User-paced entry, opt-in guided tour, pace control, keyboard arrows/Space, native modal focus/Escape, persisted theme, reduced-motion handling. Type-on text reserves its full layout before animation to prevent moving click targets.
- Validation: `node scripts/check-release.mjs 04`; browser interaction checks across 390, 360 and 1440 px iframe viewports, all 16 chapters in each, Escape close, plan view, play/pause, light/dark, and no horizontal overflow. See `docs/QA-v04.md`.
- **Deployment verified:** commit `9aff919b53f6fb5791f5cb04298e0e992d589085`; [Actions run 42417833557](https://github.com/motealle/zistshahr/actions/runs/42417833557) completed successfully. FTPS upload and HTTP marker checks passed for `/en/`, `/en/t/`, and editions 01–04. Remote root and V04 blob hashes match local output (`f5d9b4334c58868c5faaec4984037b6497045d93`).
- Limits: cloud browser displayed inline SVG fallback; real GPU/Three.js rendering and physical Android/iPhone/exhibition-network QA remain unverified. CDN failure does not block content. Next revision must be 05.
