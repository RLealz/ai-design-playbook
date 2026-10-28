---
name: combo-viral-launch-video
description: "Orchestrates code-driven launch videos, kinetic typography teasers, and short films (Combo 5). Use when creating product launch trailers, Remotion/HyperFrames compositions, or programmatic motion graphics."
---

# Combo 5: Viral Product Launch Video & Motion Graphics

Use this orchestrator skill when turning a product, repository, or brand announcement into a **broadcast-grade launch trailer, kinetic typography reel, or programmatic short film** written entirely in code.

---

## Required Upstream Skills (`--combo viral-launch-video`)

Install the upstream skills for this workflow with:
```bash
# PowerShell
.\install.ps1 -Combo viral-launch-video

# Bash / macOS / Linux
./install.sh --combo viral-launch-video
```

| Phase | Upstream Skill | Role |
| :--- | :--- | :--- |
| **1. Repo-to-Trailer** | `brag` | Scans your codebase, extracts real UI components/features, and scaffolds a 45-second Remotion launch trailer |
| **2. Visual Direction** | `lemo-opuscar` | Provides 51 cinematic visual styles, beat scripting, and voiceover/BGM orchestration |
| **3. Commercial Studio** | `showtime` | Structures commercial narrative arcs, product hero reveals, and callout choreography |
| **4. The Gauntlet QA** | `motion-video-kit` | Runs the 7-phase visual review pipeline (`The Gauntlet`) to inspect rendered frames for layout collisions |
| **5. 53 Frame Rules** | `motionmaxxing` | Enforces 53 frame-level rules to eliminate generic "AI video tells" |
| **6. HTML5 / CLI Engine** | `hyperframes` + `remotion-best-practices` | Renders deterministic frame-accurate MP4 video from React/HTML compositions |
| **7. Encoding & Delivery** | `ffmpeg-skill` | Finalizes H.264/H.265 encoding, audio normalization (`-14 LUFS`), and social aspect ratios |

---

## Execution Pipeline

### Phase 1: Narrative & Beat Sheet (`brag` / `showtime` / `lemo-opuscar`)
Every high-converting launch video follows a tight rhythmic structure (never open with a slow 5-second logo fade):

1. **00:00 – 00:03 (The Pattern Interrupt / Hook)**:
   - Open mid-action with bold kinetic typography or the single sharpest pain point.
   - Maximum 6 words on screen in the first 90 frames.
2. **00:03 – 00:12 (The Friction / Old Way)**:
   - Fast cuts (`45–60 frames` per beat) showing the status quo bottleneck.
3. **00:12 – 00:32 (The Product Hero Reveal)**:
   - Pull actual components from the codebase (`brag` pattern).
   - Use 3D perspective camera push-ins (`rotateX(12deg) rotateY(-8deg) scale(1.08)`) with cursor choreography and spring-physics UI responses.
4. **00:32 – 00:42 (Rapid Feature Montage)**:
   - Beat-synced bento grid or split-screen callouts.
5. **00:42 – 00:45 (The CTA Lockup)**:
   - High-contrast brand mark, URL/CLI command (`npx ...` or `install.ps1`), and sonic resolve.

### Phase 2: Enforce the `motionmaxxing` 53 Frame Rules
Never ship generic AI motion graphics:
- **No Simultaneous Linear Fades**: Stagger element entrances by `3–6 frames` (`50–100ms` at 60fps).
- **Camera Continuity**: Maintain a persistent subtle camera drift (`1.00 -> 1.03` scale over a scene) so no frame is dead-frozen.
- **Typography Safe Zones**: Keep all text inside the central 80% title-safe area; minimum `48px` font size at `1920x1080` (`1080p`).
- **Motion Curves**: Use custom cubic-beziers (`cubic-bezier(0.16, 1, 0.3, 1)` for entrances, `cubic-bezier(0.7, 0, 0.84, 0)` for exits) or Remotion `spring({ fps, frame, config: { damping: 18, stiffness: 220 } })`.

### Phase 3: Run `The Gauntlet` Frame Inspection (`motion-video-kit`)
Before final render:
1. Extract key transition frames at beat boundaries (`ffmpeg -i draft.mp4 -vf "fps=2" frames/frame_%03d.png`).
2. Visually inspect frames for text clipping, overlapping UI badges, low-contrast captions, or awkward mid-spring states.
3. Fix frame offsets and re-render.

### Phase 4: Final Mastering (`ffmpeg-skill`)
- Export `1920x1080` (16:9 Landscape) and `1080x1920` (9:16 Vertical Reel) at `60fps`.
- Use `-pix_fmt yuv420p -crf 18 -preset slow` for crisp typography without chroma subsampling artifacts on social platforms.
