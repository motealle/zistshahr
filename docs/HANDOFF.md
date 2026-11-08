# Edition 06 — First Light

V05 is the approved visual baseline. Edition 06 keeps its opening art and two eight-chapter tracks, adds two generated architectural concept scenes with slow push-ins, animated doves and swallows, and an original 1,633-byte Standard MIDI soundtrack. Three.js remains embedded and optional. Procedural plaster and water textures, a reflective sky environment, warmer window panels and a flying flock add detail to the model. Camera controls are collapsed by default.

The atlas adds an English adaptation of the project team's Persian “دانش فرابازار” brief, with four examples explicitly attributed to the team and their reported stages. The support panel is reachable beside the story, through the city finale, and from the atlas. It links to the official Persian contact and participation routes. No payment provider URL was supplied. To enable hosted checkout in a subsequent edition, set the `zistshahr-contribution-url` meta tag to the project's authorized HTTPS checkout URL and verify the provider, destination and return flow before publishing. No payment data is collected by the exhibition.

Validation: byte-identical root and snapshot, edition index, required controls and module syntax. Standard MIDI format 0 checked. Chrome preview at 1440px and mobile 390×844 and 360×720. All 16 chapters tested at 360px without horizontal overflow or story/toolbar overlap. Both themes, scene cycling, soundtrack start/stop state, MIDI download target, contribution and knowledge jumps, close and focus return verified. Browser WebGL is disabled, so cinematic fallback was exercised. Rendered materials, orbit, zoom and on-device performance still need a WebGL-capable browser.

Deployment verified: release `4ef22bbe6a513c4841ba17179c08f04db9bf5b1e`, [Actions run 42448894835](https://github.com/motealle/zistshahr/actions/runs/42448894835). FTPS upload and HTTP checks passed for the English root, index and archives 01–06. All 18 entries in snapshots 01–05 match the previous Git tree by SHA. V06 was opened live and image switching and the support entry point were confirmed. The score parses to 184 notes over 36 seconds.

---

# Edition 05 — 2026-11-08

User prefers V02/V03 over V04. V05 restores the full-screen immersive city, with original conceptual cinematic artwork, restrained typography, a two-track narrative and mobile composition. Root mirrors immutable t/05. V01–V04 remain unchanged.

Three.js r161 is gzip-embedded and loaded only on request; no runtime CDN dependency for 3D. Cinematic view remains functional without WebGL. Orbit/zoom/reset controls are provided. Generated artwork is an artistic concept, not a built city or approved plan; the procedural model is a separate conceptual geometry. Both 8-chapter research tracks and the full atlas remain.

Validation: release script passed mirror/archive/IDs/inline resources/JS syntax checks. Browser visual review at desktop and mobile frames 390×844 and 360×720, both themes; all 16 chapters exercised at 360px with no horizontal overflow. Atlas open/Escape verified. WebGL is disabled in the test browser: fallback verified, actual 3D rendering and hardware performance NOT verified. Real Android and exhibition Wi-Fi remain to test. Deployment verified: release `65c589c9de3fd2e3a9e13e83b7977a84d5ccd4fb`; Actions https://github.com/motealle/zistshahr/actions/runs/42446027179 succeeded, including FTPS upload and HTTP markers for root, archive and editions 01–05. Live V05 opened and visually verified. Desktop 1440px also checked; play/pause and manual navigation pause verified.

---

# Handoff — ZISTSHAHR Immersive English Site

**Project owner/repository:** `motealle/zistshahr`, default branch `main`, repo URL https://github.com/motealle/zistshahr. **Host:** `zistshahr.com`; dedicated FTP account root is mapped to the website's **`/en`** path. Thus `.github/workflows/deploy-exhibition.yml` must upload `local-dir: ./site/` to `server-dir: ./` (never to `./en/`). Credentials are in GitHub Actions Secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.

## User objective

Reveal Zistshahr's English experience at a Turkey exhibition. Prioritize surprise, emotional engagement and scientific depth. An immersive 3D guided presentation shows concise text with thin elegant typography in floating panels. Chapters type on, remain for reading, then transition with a small pause; scene camera changes. Viewer can pause, navigate, and explore independently. The site must serve two **balanced** strands: (1) the productive living city itself and (2) its theoretical social/philosophical foundations. A light/dark switch is required. Full, expandable content and source links must be available without forcing people to wait for autoplay.

## Release architecture and verified status

| Version | State | Site path | Content |
|---|---|---|---|
| **01** | Released & FTP/live URL verified | `site/t/01/` → `/en/t/01/` | 8 chapters, procedural 3D, interactive controls, research atlas, 5 recent article links |
| **02** | Released & FTP/live URL checks verified | `site/t/02/` → `/en/t/02/` | Two 8-chapter tracks, theory matrix and quotations, dark/light, pace, improved atlas, local procedural SVG fallback, responsive refinements |
| **03** | Released and FTPS/HTTP checks verified | `site/t/03/` → `/en/t/03/` | Single HTML, garden homes, contemporary central white mosque, embedded fallback, Open Science |
| latest | V03 successfully mirrored | `site/` → `/en/` | Version 03 (byte-identical to snapshot) |
| edition index | Updated for 01, 02 and 03 | `site/t/index.html` → `/en/t/` | Clickable numbered cards |

**V01 verified successful GitHub workflow:** https://github.com/motealle/zistshahr/actions/runs/42408262352. An initial V01 deployment succeeded on FTP but failed the HTTP check due to `curl | grep -q` closing early (SIGPIPE); the verification was fixed and rerun successfully. Never repeat this false-negative trap. **V02 verified successful GitHub workflow:** https://github.com/motealle/zistshahr/actions/runs/42409990074 (upload + all URL checks passed, 2026-11-07). Commit: `f79a9c7fddace292b734fbcc4448144c328e60a2`.

## Code design

- V01/V02 use separate `assets/app.js` and CSS. V03 (current) is a **single HTML** with embedded CSS, inline JS and fallback SVG; only optional Three.js is loaded from jsDelivr; no internal API.
- 3D scene generated procedurally at runtime, not an architectural plan. Old versions self-contained in `site/t/NN/`.
- V02 has separate `assets/city-dark.svg` and `assets/city-light.svg`; V03 embeds both redesigned fallbacks as inline SVG data, usable without WebGL/CDN.
- V02 includes two track switch buttons (`cityTrack`, `theoryTrack`), a `themeToggle` (localStorage), `paceSelect` (fast/normal/slow), chronological chapter controls, modal research atlas and matrix.
- The visual site is English. Explanatory source/reference docs can be bilingual but aim international clarity.
- Light/dark styles are real design tokens and 3D color adjustments, not a global inversion.

## Primary research grounding

The user supplied two English-focused attachments, preserved byte-for-byte under `sources/original/` and in ChatGPT Library `/Zistshahr/Source/`:

1. `4050815- نظریه اجتماعی به انگلیسی-J.xlsx` — 2 similarly worded sheets, 5 columns × 6 used rows. Four-model social-theory typology: Domination, Market, Prophetic Ummah, Anarchist. Motivations, mechanisms of order, distribution of responsibility. Source matrix presented in V02's atlas with the latter two sorted for comparative visual flow.
2. `4050815- جملات برگزیده-J.docx` — bilingual English/Farsi classical selections from Thomas Hobbes, Adam Smith and Immanuel Kant. Reference notes included in V02 and `sources/classical-references.md`; avoid over-interpreting or presenting as a consensus backing the normative framework.

Original project website `https://zistshahr.com/`, with focused five recent posts (as of November 7 2026) and the 2022 journal article in `sources/README.md`. Two newer article bodies were unavailable during fetch; their **titles** were verified from the homepage, but details must not be invented. Source site explains productive homes, courtyard neighborhoods, participation, decentralized livelihoods, distributed water/energy and spatial justice.

## Design / QA status

- `node --check` V01 and V02 app.js: pass.
- Playwright automated UI on an offline, document-injection harness: pass V01/V02 initial chapters; open/close Atlas; V02 switch to Theory and back to City; theme changes to Light; foundational matrix visible (3 comparison rows); mobile horizontal overflow: false. Screen captures generated in working container; not the same as a full production-browser WebGL test.
- No-CDN fallback validated by locally embedding SVG data URLs in the offline screenshot harness.
- Full Three.js/GPU device QA and cross-browser tests should be repeated on a real device and real production URL.
- Initial `http://localhost` and `file://` navigation were blocked by the sandbox browser's admin policy; offline `page.set_content` injection was used for UX verification instead. Do not confuse this restriction with server failure.

## Follow-on work

1. Completed: version 02 GitHub Action **successful**; automated public URL checks for `/en/`, `/en/t/`, `/en/t/01/`, `/en/t/02/` passed. Continue with on-device acceptance testing.
2. Exhibition reliability: test with Chrome, Safari, Edge; Turkey/mobile devices; 3D WebGL and fallback performance at mid-range GPUs; font/CDN reachability in Turkey.
3. Improve art direction in V03 based on client screenshots and feedback. Maintain immutable 01/02. Add 3D labeling, contextual camera tours, and stronger transitions only as performance permits.
4. Work with researchers to validate selected English translations of culturally situated concepts (Ummah, brotherhood, prayer-centered neighborhood, benevolence-based work). Avoid universalizing the typology. Mark normative vs empirical material clearly.
5. Country-specific redirect Turkey → `/en/` **still requires changes at public site root, Apache server level, or Cloudflare**. Dedicated `/en` FTP credentials cannot modify root domain routing. Do not imply this redirect has been implemented.

## Next-agent checklist

Read AGENTS, source summaries, and current workflow status before editing. Create `site/t/04/` (never alter older) for any new requested revision; mirror latest into root `site/`, update `site/t/index.html`, run `node --check`, interactively validate both tracks, check mobile no-overflow, publish with GitHub Actions, inspect its steps/logs, and document truthful completion/limitations here.

## V03 handoff — 2026-11-07
- **Latest** `site/index.html` exactly mirrors immutable `site/t/03/index.html`, and `site/t/index.html` includes 01/02/03. Root FTPS path `./` serves `https://zistshahr.com/en/`.
- Android screenshot indicated header unstyled/colliding at root, but `/en/t/02/` worked. Tracked root & V02 files were identical; stale CSS/JS or server cache is plausible but unproven (no HTTP cache headers or on-device logs). V03 eliminates this failure class: CSS, JavaScript and fallback SVG city rendering are all inline in a 297 KB HTML file. Existing archives unchanged.
- **Visual V03:** garden homes (single storey), spacious conceptual approx. 800 m² plots, tree-filled yards, pools, productive gardens; civic-center white modern mosque with shallow dome, pointed portico and two *asymmetrical* slender towers (not Taj replica). Three.js enhancement dynamically imports pinned `three@0.161.0` from jsDelivr; a local embedded isometric SVG guarantees scene fallback. **Conceptual art, not approved urban-plan dimensions.**
- **Content:** City and Foundations 8-step journeys preserved, full matrix, chapter controls, autoplay, light/dark, pace selector, research atlas. Atlas added project-supplied Open Science principles: design technology for ordinary producers AND make knowledge freely usable; public value and community-based R&D as normative ideas, not measured effects. `sources/presentation1-slide-index.md` indexes the new 23-slide Beyond-Market Science presentation.
- **Research originals:** Word+Excel previously archived in GitHub `sources/original` and ChatGPT Library `/Zistshahr/Source`. New original `دانش آزاد.docx` archived in GitHub and Library. `Presentation1.pptx` (~9.1 MB) original preserved as a single file in Library AND byte-for-byte recoverable in GitHub as eight Base64 parts under `sources/original/Presentation1.pptx.b64parts/`; follow its README to reconstruct the native PPTX (verified SHA-256: `959adcc1cb3cff31026ba50aa8f96c2e9edb67f323d74342f9cc1cc76cfc22af`). GitHub also has a searchable slide index.
- **Tests:** Local Playwright desktop 1440×900, mobile 390×844 and 360×720 pass: styles parsed, header/story separated, no horizontal overflow, City↔Foundations, Dark↔Light, atlas open/close and 8 navigable chapters. Tests used offline SVG fallback/reduced motion; **real WebGL/CDN testing remains outstanding**.
- **V03 production release verified:** GitHub Actions run https://github.com/motealle/zistshahr/actions/runs/42412491145 succeeded. Commit `4ad5d81f6f82c93bd036ad2aea6ae962687be63d`. FTPS upload completed and live HTTP checks succeeded for `/en/`, `/en/t/01/`, `/en/t/02/`, `/en/t/03/`, `/en/t/`, including V03 inline markers on root and snapshot. **Next:** Confirm Android Chrome and exhibition real device WebGL; do not treat HTTP success as device-level visual QA. Original line: Confirm Actions deployment success and explicit `Research Edition 03` plus inline style/script marker checks on /en and /en/t/03; inspect genuine Android Chrome and exhibition Wi-Fi. Then evolve as `/t/04` without modifying /t/01/02/03.


## V04 — The Living Atlas / 2026-11-08
- Complete interface redesign on `main`; no other branch existed at task start. New immutable `site/t/04/index.html`, byte-identical latest root; newest-first archive entry. Editions 01–03 untouched.
- Paper/terracotta light and forest/ivory dark themes; new inline isometric illustration, real overhead SVG plan, selectable home/commons/ecology destinations. Optional procedural Three.js garden city retained with wider cameras and context-loss fallback.
- Equally visible City and Foundations lenses: 8 chapters each; Foundations receives its own interactive diagram, and the full matrix, source links, classical references and Open Science material remain in the atlas. No evidence of real-world implementation is implied.
- User-paced entry, opt-in guided tour, pace control, keyboard arrows/Space, native modal focus/Escape, persisted theme, reduced-motion handling. Type-on text reserves its full layout before animation to prevent moving click targets.
- Validation: `node scripts/check-release.mjs 04`; browser interaction checks across 390, 360 and 1440 px iframe viewports, all 16 chapters in each, Escape close, plan view, play/pause, light/dark, and no horizontal overflow. See `docs/QA-v04.md`.
- **Deployment verified:** commit `9aff919b53f6fb5791f5cb04298e0e992d589085`; [Actions run 42417833557](https://github.com/motealle/zistshahr/actions/runs/42417833557) completed successfully. FTPS upload and HTTP marker checks passed for `/en/`, `/en/t/`, and editions 01–04. Remote root and V04 blob hashes match local output (`f5d9b4334c58868c5faaec4984037b6497045d93`).
- Limits: cloud browser displayed inline SVG fallback; real GPU/Three.js rendering and physical Android/iPhone/exhibition-network QA remain unverified. CDN failure does not block content. Next revision must be 05.
