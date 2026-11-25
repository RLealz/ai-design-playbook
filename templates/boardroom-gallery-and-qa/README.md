# Starter Pack: `boardroom-gallery-and-qa` (Combo 4 / Router Step 4 QA)

Reusable multi-direction Client Presentation Hub paired with an automated 6-viewport Playwright QA probe.

## Included Tools
1. **Boardroom Showcase (`index.html` + `proposals.json`)**:
   - Mounts **one lazy iframe at a time** (and unloads to `about:blank` on close) so previewing 15–20 WebGL/video prototypes never exhausts browser GPU memory.
   - Live **Desktop (`100%`) / Tablet (`768px`) / Mobile (`390px`)** switcher, category filters, and `[Esc]` focus restoration.
2. **6-Viewport Craft Probe (`scripts/probe-site.mjs`)**:
   - Tests any URL across `320, 375, 768, 1024, 1280, 1920px`, asserting `0px` horizontal overflow, auditing `<44×44px` tap targets, capturing full-page screenshots, and failing on any console/page error.
