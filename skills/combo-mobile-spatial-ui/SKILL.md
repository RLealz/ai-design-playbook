---
name: combo-mobile-spatial-ui
description: >
  Combo 13 Orchestrator: Native iOS SwiftUI, Apple Liquid Glass, visionOS Spatial, Jetpack Compose & Flutter Craft (v2.0).
  Use when designing or building native mobile apps, iOS 26+ Liquid Glass materials, visionOS spatial windows/volumes,
  Android Material 3 Expressive Compose UIs, or cross-platform Flutter/Expo apps.
license: MIT
metadata:
  author: RLealz
  version: "2.0.0"
---

# 📱 Combo 13: Native iOS SwiftUI, Liquid Glass, visionOS & Mobile Craft

Use this native platform orchestrator whenever building **iOS / macOS SwiftUI apps, Apple Liquid Glass interfaces, visionOS spatial computing experiences, Android Jetpack Compose UIs, or Flutter/React Native mobile products**—preventing "web-DOM-stuffed-in-a-phone-frame" anti-patterns.

* **Install Combo**: `.\install.ps1 -Combo mobile-spatial-ui -Target antigravity`
* **Recommended Preset**: `.\install.ps1 -Preset tactile-daylight-bento -OutDir .`
* **4-Platform Starter Pack**: `.\install.ps1 -Template mobile-spatial-ui -OutDir .\mobile-app` (`ios-liquid-glass/`, `expo-react-native/`, `compose-material3/`, `visionos-spatial/`)

---

## Single-Engine Platform Matrix

| Target Platform | Primary Local & Upstream Skills | Native Design Grammar |
| :--- | :--- | :--- |
| **iOS / macOS SwiftUI & Liquid Glass** | `swiftui-expert-skill` + `liquid-glass-design` + `mobile-design` + `genjutsu` (`paint`/`cast`) | Concentric hardware-bezel radii, `.glassEffect` optical refraction, SF Symbols variable rendering, haptic sensory pairing (`UIImpactFeedbackGenerator` / `.sensoryFeedback`) |
| **visionOS Spatial & Metal 3D** | `visionos-spatial-engineer` + `macos-spatial-metal-engineer` | Glass windows (`ornaments`, `60pt` ergonomic gaze targets), volumetric RealityKit attachments, hover gaze highlights |
| **Android Jetpack Compose** | `android-jetpack-compose-expert` + `mobile-design` + `genjutsu` | Material 3 Expressive spring physics, predictive back gestures, dynamic color tonal elevation, edge-to-edge insets |
| **Cross-Platform Mobile (Flutter / Expo)** | `flutter-expert` + `mobile-design` + `ui-ux-pro-max` | `60fps/120fps` Impeller rendering, thumb-zone bottom sheets, platform-adaptive navigation |

---

## 4-Phase Native Craft Pipeline

### Phase 1: Ergonomic Thumb-Zone & Safe-Area Architecture (`mobile-design`)
* **Never put primary frequent actions solely in the top-left corner**: Anchor primary navigation, search, and creation triggers inside the natural bottom thumb arc (`bottom tab bar`, `floating pill`, or `interactive bottom sheet`).
* Respect hardware insets (`safeAreaInset`, Dynamic Island / status bar, home indicator, and keyboard avoidance) natively—never hardcode pixel top/bottom offsets.
* Minimum tap target: **`44×44 pt`** (iOS), **`48×48 dp`** (Android), **`60×60 pt`** (visionOS gaze).

### Phase 2: Optical Material & Typography Discipline (`liquid-glass-design` + `make-interfaces-feel-better`)
* **Liquid Glass Rules**: Reserve translucent glass layers strictly for **floating navigation/control chrome** above rich content—never stack glass-on-glass cards inside the content scroll view. Ensure dynamic contrast adaptation over light and dark imagery.
* Support **Dynamic Type** scaling (`@ScaledMetric`, `.font(.headline)`) without clipping labels.

### Phase 3: Interruptible Gesture & Haptic Choreography (`motion-design-skill` + `design-motion-principles` + `text-to-lottie`)
* Every sheet, card expansion, and swipe gesture must be **100% gesture-interruptible and velocity-preserving** (interactive spring physics, never fixed-duration linear timers).
* Pair key state commits (toggle lock, threshold cross, payment confirm) with subtle native haptics (`.sensoryFeedback(.selection, trigger:)`).

### Phase 4: Device Matrix & Dark/Light Verification
* Verify layout integrity across compact (`375pt`), standard (`393pt`), Pro Max (`430pt`), tablet split-view, Light/Dark appearance, and `Reduce Motion` / `Reduce Transparency` accessibility toggles.
