# Edition 08 — Support open research

The home and final City chapter open the English crypto donation panel. The Research Atlas also offers a crypto donation button alongside the existing contact options. Share `/en/#support` to open the panel directly. It appears as a centered modal on desktop and a bottom sheet on narrow screens.

The four supplied destinations are presented as their respective mainnet native assets (SOL, ETH, BTC, TRX). Checked Solana Base58 length, Ethereum EIP-55, Bitcoin Taproot Bech32m, and TRON Base58Check. The supplied TRON 20-byte hex payload was encoded with the TRON 0x41 prefix as `TKnEkcyzMY8J9pCyESFEcBmrSoVwJbRZnJ`, per [TRON's address documentation](https://developers.tron.network/docs/account). QR codes contain the exact displayed address and all four were decoded independently. Donors complete transfers in their own wallet. The panel presents addresses without requesting a connection, amount, or payment data. Address encoding was validated; no test transfer was sent.

Tested Chrome desktop and 360px/390px mobile frames. Verified one visible QR per network, matching full addresses, keyboard dismissal and focus return, and opening from the Atlas. The local HTTP preview verified selectable-address fallback when Clipboard API is unavailable.

Deployment verification pending.

---

# Edition 07 — A City Rises

Retouched the courtyard concept image so the women wear opaque Arab-style hijab and abayas. Edition 07 scales its narrative and controls for exhibition displays. It adds five original orchestral options rendered with FluidSynth and GeneralUser GS v2.0.3 by S. Christian Collins, licensed for music creation. The source bank is used only to render the MP3s. The listening page is at `/en/t/07/scores/`. Track 01 is the interim default pending the user's selection.

Upload optional media to the English directory, beside its `index.html`, or put it in the repository's `site/` for deployment. `music.mp3` takes precedence after successful media validation. Without a usable custom track, the music button plays the edition's fallback. For each of `poden`, `podar` and `podturk`, a playable MP4 takes precedence over MP3. The language-specific player is shown only when its file is playable, after reloading the page. Starting a podcast pauses the soundtrack and vice versa. Files with a correct media type (or generic binary type) must also load metadata. For uploaded MP4 use H.264/AAC for wide browser compatibility. The numbered V07 page uses the same upload location.

Validation: script syntax, archive entry and byte-identical latest and snapshot. In Chrome, checked the 1920×1080 layout and all 16 chapters at 3840×2160 for vertical overlaps and horizontal overflow. Mobile 360/390 preview and representative chapter, theme, and atlas paths checked. Tested missing files, custom music precedence, MP4 playback availability, invalid MP4 falling back to MP3, and hidden absent language with temporary media fixtures. Five MP3s rendered and checked. Physical projection and sound reinforcement are separate on-site checks.

Deployment verified for release `879a6008e6c836192ae645bb0ca1cf1c1802d4b6` in [Actions run 42450539502](https://github.com/motealle/zistshahr/actions/runs/42450539502). FTPS and live HTTP checks passed for the English root and archives 01–07. All five live MP3s matched the published bytes. Browser playback was verified on the live listening page. The optional Turkish fixture played and paused the active soundtrack. The 20 entries in archive folders 01–06 matched the previous tree by SHA.

---

# Edition 06 — First Light

V05 is the approved visual baseline. Edition 06 keeps its opening art and two eight-chapter tracks, adds two generated architectural concept scenes with slow push-ins, animated doves and swallows, and an original 1,633-byte Standard MIDI soundtrack. Three.js remains embedded and optional. Procedural plaster and water textures, a reflective sky environment, warmer window panels and a flying flock add detail to the model. Camera controls are collapsed by default.

The atlas adds an English adaptation of the project team's Persian “دانش فرابازار” brief, with four examples explicitly attributed to the team and their reported stages. The support panel is reachable beside the story, through the city finale, and from the atlas. It links to the official Persian contact and participation routes. No payment provider URL was supplied. To enable hosted checkout in a subsequent edition, set the `zistshahr-contribution-url` meta tag to the project's authorized HTTPS checkout URL and verify the provider, destination and return flow before publishing. No payment data is collected by the exhibition.

Validation: byte-identical root and snapshot, edition index, required controls and module syntax. Standard MIDI format 0 checked. Chrome preview at 1440px and mobile 390×844 and 360×720. All 16 chapters tested at 360px without horizontal overflow or story/toolbar overlap. Both themes, scene cycling, soundtrack start/stop state, MIDI download target, contribution and knowledge jumps, close and focus return verified. Browser WebGL is disabled, so cinematic fallback was exercised. Rendered materials, orbit, zoom and on-device performance still need a WebGL-capable browser.

Deployment recorded after verification.

---

# Edition 05 — 2026-11-08

User prefers V02/V03 over V04. V05 restores the full-screen immersive city, with original conceptual cinematic artwork, restrained typography, a two-track narrative and mobile composition. Root mirrors immutable t/05. V01–V04 remain unchanged.

Three.js r161 is gzip-embedded and loaded only on request; no runtime CDN dependency for 3D. Cinematic view remains functional without WebGL. Orbit/zoom/reset controls are provided. Generated artwork is an artistic concept, not a built city or approved plan; the procedural model is a separate conceptual geometry. Both 8-chapter research tracks and the full atlas remain.

Validation: release script passed mirror/archive/IDs/inline resources/JS syntax checks. Browser visual review at desktop and mobile frames 390×844 and 360×720, both themes; all 16 chapters exercised at 360px with no horizontal overflow. Atlas open/Escape verified. WebGL is disabled in the test browser: fallback verified, actual 3D rendering and hardware performance NOT verified. Real Android and exhibition Wi-Fi remain to test. Deployment verified: release `65c589c9de3fd2e3a9e13e83b7977a84d5ccd4fb`; Actions https://github.com/motealle/zistshahr/actions/runs/42446027179 succeeded, including FTPS upload and HTTP markers for root, archive and editions 01–05. Live V05 opened and visually verified. Desktop 1440px also checked; play/pause and manual navigation pause verified.

---

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
