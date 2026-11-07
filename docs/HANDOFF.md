# Handoff — ZISTSHAHR Immersive English Site

**Project owner/repository:** `motealle/zistshahr`, default branch `main`, repo URL https://github.com/motealle/zistshahr. **Host:** `zistshahr.com`; dedicated FTP account root is mapped to the website's **`/en`** path. Thus `.github/workflows/deploy-exhibition.yml` must upload `local-dir: ./site/` to `server-dir: ./` (never to `./en/`). Credentials are in GitHub Actions Secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.

## User objective

Reveal Zistshahr's English experience at a Turkey exhibition. Prioritize surprise, emotional engagement and scientific depth. An immersive 3D guided presentation shows concise text with thin elegant typography in floating panels. Chapters type on, remain for reading, then transition with a small pause; scene camera changes. Viewer can pause, navigate, and explore independently. The site must serve two **balanced** strands: (1) the productive living city itself and (2) its theoretical social/philosophical foundations. A light/dark switch is required. Full, expandable content and source links must be available without forcing people to wait for autoplay.

## Release architecture and verified status

| Version | State | Site path | Content |
|---|---|---|---|
| **01** | Released & FTP/live URL verified | `site/t/01/` → `/en/t/01/` | 8 chapters, procedural 3D, interactive controls, research atlas, 5 recent article links |
| **02** | Build complete; publish/verify via Actions | `site/t/02/` → `/en/t/02/` | Two 8-chapter tracks, theory matrix and quotations, dark/light, pace, improved atlas, local procedural SVG fallback, responsive refinements |
| latest | Must mirror V02 after publishing | `site/` → `/en/` | Version 02 |
| edition index | Updated for 01 and 02 | `site/t/index.html` → `/en/t/` | Clickable numbered cards |

**V01 verified successful GitHub workflow:** https://github.com/motealle/zistshahr/actions/runs/42408262352. An initial V01 deployment succeeded on FTP but failed the HTTP check due to `curl | grep -q` closing early (SIGPIPE); the verification was fixed and rerun successfully. Never repeat this false-negative trap. Update V02 deployment record here once its run is confirmed.

## Code design

- Native ES modules, no framework dependency. 3D loaded from jsDelivr in `assets/app.js`; no internal API.
- 3D scene generated procedurally at runtime, not an architectural plan. Old versions self-contained in `site/t/NN/`.
- `assets/city-dark.svg` and `assets/city-light.svg` are local procedurally generated isometric city fallback illustrations, usable even without WebGL/CDN.
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

1. Check the version 02 Action run is **successful** and independently verify `/en/`, `/en/t/`, `/en/t/01/`, `/en/t/02/` (Actions curl checks each).
2. Exhibition reliability: test with Chrome, Safari, Edge; Turkey/mobile devices; 3D WebGL and fallback performance at mid-range GPUs; font/CDN reachability in Turkey.
3. Improve art direction in V03 based on client screenshots and feedback. Maintain immutable 01/02. Add 3D labeling, contextual camera tours, and stronger transitions only as performance permits.
4. Work with researchers to validate selected English translations of culturally situated concepts (Ummah, brotherhood, prayer-centered neighborhood, benevolence-based work). Avoid universalizing the typology. Mark normative vs empirical material clearly.
5. Country-specific redirect Turkey → `/en/` **still requires changes at public site root, Apache server level, or Cloudflare**. Dedicated `/en` FTP credentials cannot modify root domain routing. Do not imply this redirect has been implemented.

## Next-agent checklist

Read AGENTS, source summaries, and current workflow status before editing. Create `site/t/03/` (never alter older) for any new requested revision; mirror latest into root `site/`, update `site/t/index.html`, run `node --check`, interactively validate both tracks, check mobile no-overflow, publish with GitHub Actions, inspect its steps/logs, and document truthful completion/limitations here.