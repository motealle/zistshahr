# ZISTSHAHR — Agent Operating Rules

Read `README.md`, `docs/HANDOFF.md`, `docs/BACKLOG.md`, and `sources/README.md` before modifying this repository.

## Non-negotiable release contract

1. **Immutable snapshots:** Never overwrite, alter, delete, or rebuild `site/t/01/`, `site/t/02/`, or any previously published edition. Every user-requested revision creates a new, consecutively numbered `site/t/NN/` folder (e.g. `03`) with **self-contained `index.html` and `assets/`**. If a prior release needs correction, create a new release; do not patch old releases. Versions must remain visitable at `https://zistshahr.com/en/t/NN/`.
2. **Latest at FTP root:** After completing a new edition, mirror that edition's `index.html` and assets into `site/index.html` and `site/assets/` so FTP account root displays the latest at `https://zistshahr.com/en/`. Update `site/t/index.html` with a real clickable link to each new edition. No manual version-index drift.
3. **Critical host mapping:** GitHub repository `site/` is deployed by Actions via **FTP `server-dir: ./`**, **not** `./en/`, because the FTP account already points to the web server's `/en` directory. Avoid touching files outside the dedicated FTP account. The domain root `https://zistshahr.com/` is outside this account.
4. **Never disclose credentials:** GitHub Actions secrets are `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`. Access secrets only in Actions expressions; never print their values, test credentials in browser, commit credentials, or share screenshots of the secrets page.
5. **Research integrity:** Distinguish the project's proposed normative model, public research, comparisons, open questions, engineering hypotheses, and real-world implementations. Do not imply a physical city is already built; 3D visualization is conceptual. Cite or link sources for substantive claims. Avoid fabricating evidence or numerical performance statistics. Honor source attribution and copyright.
6. **Two equally important lenses:** English exhibition must communicate (A) tangible spatial and social dimensions of the Productive Living City and (B) the underlying social and philosophical foundations. Keep these distinct yet connected. The Excel model is a **proposed four-model analytical typology**, not a universal classification. Hobbes, Smith and Kant are critical reference points, not simple endorsements.
7. **Exhibition UX:** Responsive and visual first; atmospheric Three.js model, readable floating panels, elegant ultra-light English typography, controlled type-on narration, pause/play and next/previous, clear city/foundations navigation, easy dark/light theme switching, accessible keyboard/mobile navigation, motion-reduction respect, functional no-WebGL fallback, low-friction discovery.
8. **No TinyFish.** Prefer direct repository inspection and code-level edits, high signal/low token, no generic redesign at the expense of conceptual fidelity.
9. **Test before publishing:** HTML path checks, `node --check` for JS, automated interaction tests (chapter navigation, two tracks, modal, theme, mobile overflow), visual screenshots where supported, HTTP checks of current plus archived paths, and Actions FTP success. Verify the deployment **and** post-upload URLs before declaring success. Avoid shell `curl | grep -q` with `pipefail` (causes SIGPIPE); use `curl -o <file>` then `grep`.
10. **Keep a handoff:** After each release, update `docs/HANDOFF.md` and `docs/BACKLOG.md` with current edition, verified run URL, files changed, known defects, latest research decisions, next steps. Treat the repository as the canonical project memory.

## Deployment implementation

`.github/workflows/deploy-exhibition.yml` publishes **only** `site/` to `./` on FTP and must not run a destructive clean-slate upload. The older `.github/workflows/ftp-connection-test.yml` is historical and must not be used for future production releases. If source docs are private, clarify before committing them publicly; current uploaded files were explicitly authorized for repository and Library storage.

## Version-independent source

The canonical research snapshots are under `sources/original/`; web originals are tracked in `sources/README.md`. All site assets should work under both `/en/` and `/en/t/NN/` by using relative URLs. Do not rely solely on a CDN; provide local graceful fallbacks.