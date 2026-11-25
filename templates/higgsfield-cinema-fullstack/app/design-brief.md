# Design Brief Template — Higgsfield Cinema Website (`--type website`)

## Brand & Identity
- **Brand:** `<Brand Name>` (Preserve official SVG/PNG mark in `public/assets/brand-logo.svg` — never replace an existing brand mark with an unapproved AI icon!)
- **Design read:** `<Target audience + emotional register>`
- **Concept spine:** `<Nameable narrative spine, e.g. "Architectural X-ray calibration stage" or "Sliding threshold reveal">`
- **Delivery tier:** `cinema` | `spectacle`
- Animation mode: animated-website

## Locked Palette (Passes Higgsfield Hard-Ban Gate)
- `--surface-0`: `#0E1115` (Deep Basalt)
- `--surface-1`: `#161B22` (Layered Slate)
- `--hairline`: `#28303B`
- `--ink`: `#F2F0EC`
- `--muted`: `#9AA3AE`
- `--accent`: `#64B6A7` (Mineral Verdigris — `> 7.5:1` contrast on `#0E1115`)

## Journey Block (`scroll-scrub.md` Contract)
- **Journey shape:** `single-shot` (ONE continuous ~12s–15s film scrubbed forward & reverse across 4–5 semantic chapters)
- **Alternative Start→End Threshold Mode:** Generate a 2-panel locked-camera START (closed threshold / raw structure) + END (open interior / finished craft) storyboard, then drive a single 5s–10s start-to-end clip.
- **World grammar (reused verbatim across prompts):** `dark basalt #0E1115 studio backdrop, soft gallery key light, crisp architectural geometry, natural timber and limestone textures, slow steady forward camera glide, locked exposure, center-safe subject, no cuts, no camera shake, no text, no watermarks`
- **Delivery budget:** `<= 16 MiB` desktop (`scene-01.mp4`, `-g 4`), `<= 8 MiB` mobile (`scene-01-mobile.mp4`, `-g 2`), exact post-encode frame-0 posters, + `Save-Data` static fallback.

## ~18.5-Credit Disciplined Generation Plan (`@higgsfield/cli`)
1. **Storyboard (`nano_banana_pro`, `16:9` — 2.0 cr)**: 6-panel continuous camera move grid (pass as style reference, NEVER as `--start-image`) OR 2-panel START/END pair.
2. **Scrub Film (`seedance_2_0_mini`, `10s`, `720p`, `audio=false` — 10.0 cr)** + **Concurrent Launch Cover/OG (`nano_banana_pro` — 2.0 cr)**: Submit simultaneously; poll once.
3. **X-Ray Comparison Pair (`nano_banana_pro` × 2 — 3.0 cr)**: Locked-camera `xray-before.png` & `xray-after.png` (explicitly badged `AI Conceptual Render` vs `Verified Photograph`).
4. **Custom Glyph Sheet (`nano_banana_flash` — 1.5 cr)**: Sliced into semantic section icons.
