---
name: combo-viral-launch-video
description: >
  Combo 5 Orchestrator: Product Launch Trailer & Commercial Sizzle Reel Pipeline (v2.0). Strictly focused on
  high-converting product launch videos, repo-to-trailer promos, and commercial kinetic typography.
  Pairs with preset `kinetic-neo-brutalist` and starter `remotion-launch-trailer`. (For narrative AI cinema use
  Combo 8 `combo-storycraft-studio`; for voiceover documentaries/math explainers use Combo 9 `combo-explainer-film`.)
license: MIT
metadata:
  author: RLealz
  version: "2.0.0"
---

# 🎬 Combo 5: Product Launch Trailer & Commercial Sizzle Reel (v2.0)

* **Recommended Preset**: `.\install.ps1 -Preset kinetic-neo-brutalist -OutDir .` (or `obsidian-precision`)
* **Runnable Starter Scaffold**: `.\install.ps1 -Template remotion-launch-trailer -OutDir .\launch-trailer`

---

## Single-Engine Video Selection Matrix (Pick ONE Primary Engine!)

Never mix multiple video engines in one render. Choose based on your source material:

| Input Source | Primary Engine | Best For |
| :--- | :--- | :--- |
| **Live Web App / Frontend URL** | `video-shotcraft` (or `website-to-video`) | Captures real UI pages + 124 Remotion shot recipe cards, beat sync & SFX |
| **Local Git Codebase / CLI Tool** | `brag` (or `claude-remotion-kickstart`) | Inspects repo components directly and renders a 30–45s Remotion launch video |
| **HTML/CSS Kinetic Typography & Promo** | `hyperframes` **OR** `bang-motion` | Deterministic frame-accurate HTML-to-MP4 rendering (`hyperframes`) or single-file browser motion (`bang-motion`) |
| **Commercial Spot with Auto-Composed Music** | `huashu-motion` **OR** `showtime` | Script + beat-synced music + commercial pacing & voiceover/SFX |
| **Multi-Pipeline Agentic Video Suite** | `openmontage` (`video-toolkit`) | Modular multi-stage production & asset assembly |

---

## 4-Phase Execution Pipeline

### Phase 1: 45-Second Launch Beat Sheet (Zero Slow Logo Intros!)
1. **`00:00–00:03` (Pattern Interrupt Hook)**: Mid-action kinetic statement (≤ 6 words in first 90 frames at 60fps).
2. **`00:03–00:12` (Status-Quo Friction)**: Fast `45–60 frame` cuts dramatizing the old workflow bottleneck.
3. **`00:12–00:32` (3D Product Hero Reveal)**: Real product UI in 3D perspective (`rotateX(10deg) rotateY(-8deg)`), choreographed cursor clicks, spring responses.
4. **`00:32–00:42` (Beat-Synced Bento Montage)**: Rapid 3–4 capability proof cards locked to musical downbeats.
5. **`00:42–00:45` (CTA Lockup)**: Brand mark + crisp CLI/URL command + sonic resolve.

### Phase 2: Enforce `motionmaxxing` 53 Frame Rules
* Stagger sibling entrances by `3–6 frames` (`50–100ms` at 60fps)—never simultaneous linear fades.
* Continuous subtle camera drift (`scale 1.00 → 1.03`) so zero frames look frozen.
* Keep all text inside the central **80% title-safe zone** (`≥ 48px` at `1920×1080`).
* Spring physics (`damping: 18, stiffness: 220`) or `cubic-bezier(0.16, 1, 0.3, 1)` entrances.

### Phase 3: Run `The Gauntlet` Frame Critic (`motion-video-kit`)
* Extract beat-boundary frames (`ffmpeg -i draft.mp4 -vf "fps=2" frames/f_%03d.png`) and inspect for clipped text, badge collisions, or muddy contrast before final render.

### Phase 4: Broadcast Mastering (`ffmpeg-skill`)
* Render `1920×1080` (16:9) + `1080×1920` (9:16) at `60fps` (`-pix_fmt yuv420p -crf 18 -preset slow`) and normalize loudness to **`-14 LUFS`**.
