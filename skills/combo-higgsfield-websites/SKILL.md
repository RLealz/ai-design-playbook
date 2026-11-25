---
name: combo-higgsfield-websites
description: >
  Combo 14 Orchestrator: Higgsfield Full-Stack Cinema Websites, Quanta AI Apps & Multiplayer Games (v2.1).
  Use when building, generating bespoke AI media for, and deploying full-stack React 19 + TanStack Start SSR
  sites on Cloudflare Workers (D1/R2/KV) via `@higgsfield/cli` (`higgsfield-websites`). Enforces the ~18-credit
  A4 Scroll-Scrub / Start-End Reveal media kit and 5 Audit-Hardened Production Gates. Pairs with starter
  `higgsfield-cinema-fullstack`.
license: MIT
metadata:
  author: RLealz
  version: "2.1.0"
---

# ⚡ Combo 14: Higgsfield Full-Stack Cinema Websites, Apps & Games

Use this dedicated orchestrator whenever building with **`higgsfield-websites`** (`@higgsfield/cli`) or scaffolding full-stack **React 19 + TanStack Start SSR + Cloudflare Worker + D1** sites powered by bespoke Higgsfield AI media (`seedance_2_0_mini`, `nano_banana_pro`, `nano_banana_flash`, `3d_jutsu_angles`).

* **Install Combo**: `.\install.ps1 -Combo higgsfield-websites -Target antigravity`
* **Recommended Preset**: `.\install.ps1 -Preset obsidian-precision -OutDir .` (or `swiss-editorial` / `atmospheric-cinema` — obeying Higgsfield's palette anti-convergence bans)
* **Runnable Starter Pack**: `.\install.ps1 -Template higgsfield-cinema-fullstack -OutDir .\hf-site`

---

## Step 1: Lock the `--type` & Journey Architecture (`higgsfield-websites`)

| `--type` Flag | Brand & Runtime Contract | Default Visual Spine |
| :--- | :--- | :--- |
| **`--type website`** *(Standalone Brand Site)* | **100% Independent Brand** (zero `@higgsfield/quanta`, zero fnf runtime SDK, zero "Powered by Higgsfield" badges; Higgsfield CLI is used strictly at build-time to generate bespoke media into `app/public/assets/`). | **A4 `ScrollScrub` (`single-shot` ~10–15s film)** **OR** **2-Frame Start→End Threshold Reveal** (closed/raw → open/finished) + Interactive X-Ray Curtain. |
| **`--type app`** *(Generative AI Media Product)* | Sign in with Higgsfield + `fnf` SDK + **Quanta Design System** (`@higgsfield/quanta`) + D1 user generation history. | 6 canonical Quanta App Layouts + live generation queue & credit telemetry. |
| **`--type game`** *(Realtime Browser Game)* | 6 pure functions in `app/src/logic.js` + platform multiplayer rooms + `--category <genre>`. | Style-locked 2D sprite sheets, tileable textures, or rigged Meshy/3D GLBs (`scripts/pipeline.py`). |

---

## Step 2: The ~18-Credit Disciplined Asset Kit (`app/design-brief.md`)

Never burn credits on redundant re-renders or start the OG cover before locking the visual grade:
1. **Storyboard Lock (`nano_banana_pro`, `16:9` — ~2.0 cr)**:
   * *Option A (Continuous Camera Journey)*: 1 single 6-panel grid depicting **one unbroken camera move** (passed as style/look reference, **never** as `--start-image`!).
   * *Option B (Symbolic / Architectural Threshold Reveal)*: 2-panel locked-camera START (closed/raw) vs END (open/finished) frame pair.
2. **Primary Scrub Film (`seedance_2_0_mini`, `10s–15s`, `16:9`, `audio=false` — ~10.0 cr)** + **Concurrent Launch Cover/OG (`nano_banana_pro` — ~2.0 cr)**:
   * Submit BOTH in the same beat and build UI components while they render; poll `higgsfield generate wait <id>` **once**.
   * Enforce the Footage Contract in prompt: `"slow steady forward glide, locked exposure, center-safe focal subject, clean low-detail ground for copy contrast, no cuts, no camera shake, no text, no watermarks"`.
3. **Interactive X-Ray Pair (`nano_banana_pro` × 2 — ~4.0 cr)** + **Custom Icon Sheet (`nano_banana_flash` — ~1.5 cr)**:
   * Exact-framed `before` vs `after` pair for the pointer/touch X-Ray Comparison Curtain.

---

## Step 3: 5 Non-Negotiable Audit-Hardened Gates

Every Higgsfield website MUST pass these 5 gates before `higgsfield website deploy`:

1. **Real Cloudflare D1 Persistence (Ban Fake `ok: true` Forms!)**:
   * Every lead, booking, or enquiry `createServerFn` MUST execute a parameterized D1 `INSERT` (`env.DB.prepare(...).bind(...).run()`) backed by a SQL migration in `app/migrations/`—never return a mock receipt without storing or dispatching the lead!
2. **Zero `<900px` Vanishing Nav or `375px` Overflow**:
   * Never `display: none` the desktop nav on mobile without an accessible `<900px` Sheet/Drawer toggle (`min-height: 44px` targets) and verify `documentElement.scrollWidth <= innerWidth` at `320px` and `375px`.
3. **Deterministic Keyframe Scrubbing + `Save-Data` Guard**:
   * Re-encode source MP4s with short GOP keyframes (`-g 4` desktop / `-g 2` mobile) and extract posters **after** encoding so frame `0` matches byte-for-byte. Respect `navigator.connection?.saveData` and `prefers-reduced-motion` with calm static chapter posters.
4. **Brand Mark Lock & Explicit AI Provenance**:
   * When redesigning an existing business, **preserve their real official SVG/PNG logo**—never swap it for an AI-generated symbol without explicit permission. Label AI-generated architectural/product illustrations honestly (`AI Conceptual Render`), reserving `"Verified Photograph"` strictly for authentic photography.
5. **CSP-Clean Fonts & Complete `app-meta.json`**:
   * Populate `og_title`, `og_description`, `favicon_url`, `og_image_url`, and `marketplace_cover_url` in `app/src/app-meta.json` and run `bun run typecheck` before deploying.
