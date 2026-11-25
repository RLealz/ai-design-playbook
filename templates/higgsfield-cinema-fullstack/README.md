# Starter Pack: `higgsfield-cinema-fullstack` (Combo 14)

Audit-hardened **React 19 + TanStack Start SSR + Cloudflare Worker + D1 + Higgsfield A4 Scroll-Scrub** starter pack with built-in lead persistence, keyframe scrub encoding, and media provenance guardrails.

## Workflow with `@higgsfield/cli`
1. Create your Cloudflare Worker project via Higgsfield CLI:
   ```bash
   higgsfield website create --type website --subdomain your-brand-slug
   ```
2. Drop these modules into the generated `app/` tree:
   - `app/design-brief.md` — Locked Phase 0 contract + ~18.5-credit Higgsfield media kit (`nano_banana_pro` storyboard + `seedance_2_0_mini` scrub film + X-Ray pair + concurrent OG cover).
   - `app/migrations/0001_enquiries.sql` + `app/src/lib/api/enquiry.functions.ts` — **Real Cloudflare D1 `INSERT` persistence** (never returns fake `ok: true` receipts).
   - `app/src/components/scroll-scrub/ScrollScrubStage.tsx` — SSR-safe A4 scroll-scrub with `Save-Data` and `prefers-reduced-motion` static poster fallback.
   - `app/src/components/xray/XRayComparisonCurtain.tsx` — Pointer/touch/keyboard comparison curtain with mandatory `[Verified Photograph]` vs `[AI Conceptual Render]` provenance badges.
   - `app/src/components/chrome/ResponsiveSiteHeader.tsx` — Preserves official SVG brand mark + `<900px` mobile drawer (`0px` overflow at `320px/375px`).
   - `scripts/encode-scrub-media.ps1` — Encodes source Higgsfield MP4s with `-g 4` / `-g 2` keyframe density for smooth bidirectional scrubbing on iOS & desktop.
