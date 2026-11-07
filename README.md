# ZISTSHAHR — English Immersive Exhibition

A research-led, interactive exhibition website for **Zistshahr (زیست‌شهر نوین مولد)**, the proposed Productive Living City. The project explores how neighborhood form, productive homes, work, community, family, ecology and local institutions could be designed together—not merely how to render greener buildings.

## Live addresses

- Latest exhibition: https://zistshahr.com/en/
- All immutable editions: https://zistshahr.com/en/t/
- V01: https://zistshahr.com/en/t/01/
- V02: https://zistshahr.com/en/t/02/\n- V03: https://zistshahr.com/en/t/03/
- Original Persian project research: https://zistshahr.com/

## Architecture

Plain static HTML, CSS and JavaScript, no mandatory build step. Three.js is loaded as an ES module (`cdn.jsdelivr.net/npm/three@0.161.0/build/three.module.js`) and builds a procedural **conceptual**, not built, island of productive homes, water, streets, workshops, gardens and shared civic space. There is a self-contained local vector city fallback if the remote module or WebGL fails. Thin English type uses Manrope/DM Mono/Cormorant Garamond with system font fallbacks.

- `site/index.html`: latest V03 **self-contained** edition, served at `/en/`; old assets in `site/assets/` remain for earlier versions but are not loaded by V03.
- `site/t/01/`, `site/t/02/`, `site/t/03/`: immutable archives. V03 is one HTML file.
- `site/t/index.html`: version-selector page.
- `sources/original/`: original Word/Excel inputs plus `دانش آزاد.docx`; the larger original presentation is losslessly recoverable from eight archived Base64 parts in `sources/original/Presentation1.pptx.b64parts/` (and directly available as PPTX in Library).
- `sources/*.md`: structured summaries and provenance notes.
- `docs/HANDOFF.md`, `docs/BACKLOG.md`: agent handoff and canonical status.
- `AGENTS.md`: constraints for successive coding agents.
- `.github/workflows/deploy-exhibition.yml`: deploys `site/` via FTPS using repository secrets.

## Development / checks

Use a static local server when the environment allows it (`python3 -m http.server 8000 -d site`). For V03, extract its inline module script and run `node --check` on the extracted script; never assume `site/assets/app.js` is the latest. Manually test two tracks, active timeline, keyboard arrows, autoplay/pause, modal escape/close, theme persistence and mobile view. Review release checklist in `docs/HANDOFF.md`. Deployment state is tracked by the FTP Action and `dangerous-clean-slate: false`.

## Exhibition integrity

Prototypes are **research-based thought experiments**; any graphics, modeled districts and system concepts are illustrations, not proof of implementation or site-specific engineering feasibility. See `sources/README.md` for sources. Zistshahr's social-theory grid is a proposed normative/analytic framework, not a scientific consensus or exhaustive model of all societies.

## Edition 03 — single-file garden city (2026-11-07)
Latest `https://zistshahr.com/en/` mirrors immutable `site/t/03/index.html`; previous editions stay at `/en/t/01/`, `/en/t/02/` and archive at `/en/t/`. V03 embeds all CSS, JavaScript, and SVG visual fallback in its HTML to avoid stale asset mismatches at the root. Three.js and Google Fonts are optional enhancements. Garden residences: one-storey, green ~800 m² conceptual plots with pools/trees; a distinct white contemporary mosque at the center, **not a Taj Mahal replica**. City and Foundations tracks, light/dark, guided chapters and research atlas remain available. See `AGENTS.md`, `docs/HANDOFF.md`.
