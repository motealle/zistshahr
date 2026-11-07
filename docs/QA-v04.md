# Edition 04 QA — 2026-11-08

## Verified
- Inline module syntax: `node --check`.
- Latest root and snapshot are byte-identical.
- Browser: cloud Chromium, preview served using the managed preview service.
- 390, 360, 1440 px iframe viewports (usable widths 375, 345, 1425 due to native scrollbars): both lenses × all eight chapter selections passed; native atlas Escape close passed in all three sizes.
- Horizontal document scroll width equals client width at all three sizes after visual-container clipping fix.
- Light and dark rendered screenshots reviewed; header/story separation; long-title size correction; foundation-card/caption separation.
- Plan switch displays a distinct overhead SVG; guided tour enters playing state and pauses; atlas preserves the full three-row comparison matrix.
- Animation originally changed layout during typing: fixed with pre-laid-out character spans, then all chapter checks rerun successfully.

## Not claimed
- Real-device Android/iOS/Safari testing, Turkish venue networking, or a successfully rendered Three.js scene. The preview used the inline illustration fallback.
- Timing accuracy of a full uninterrupted 8-chapter autoplay session.
- Engineering feasibility, measured outcomes, or built-city status.

The temporary responsive iframe harness was used for QA only and is not shipped.
