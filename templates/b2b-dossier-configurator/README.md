# Starter Pack: `b2b-dossier-configurator` (Combo 1 / Combo 10)

Next.js 15 App Router B2B flagship starter combining an interactive Scope & Feasibility Configurator, Threshold Split-Panel Reveal, native CSS `light-dark()` tokens, and verified-provenance Case Dossiers.

## Built-In Production Guardrails
- **Zero-Selection Safe Diagnostic**: Selecting `0` disciplines cleanly renders `0 wks / €0` and blocks empty brief submissions.
- **Server-Validated Dispatch**: Validates payloads via Zod on `POST /api/enquiry` with accessible `role="status"` confirmation and optional `CRM_WEBHOOK_URL` forwarding (zero `window.alert()` or `localStorage`-only dead ends).
- **Native CSS `light-dark()` + Honest Empty States**: Ships automatic light/dark paper tokens, `Organization` JSON-LD, an honest *"dates to be announced"* programme empty state, and mandatory `[Verified Photograph]` vs `[Architectural Concept Study]` provenance badges.
