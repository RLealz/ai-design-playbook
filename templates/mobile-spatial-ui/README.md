# Starter Template Pack: `mobile-spatial-ui` (Combo 13)

Multi-platform native & spatial starter scaffolds enforcing **Combo 13** ergonomic, material, gesture, and haptic laws across **iOS 26 Liquid Glass**, **Expo / React Native**, **Android Jetpack Compose (Material 3 Expressive)**, and **visionOS 26 Spatial Computing**.

## Included Platform Scaffolds

| Directory | Stack | Signature Craft Mechanics |
| :--- | :--- | :--- |
| [`ios-liquid-glass/`](./ios-liquid-glass/LiquidGlassWorkspaceView.swift) | **SwiftUI (iOS 26+)** | `GlassEffectContainer`, morphing `.glassEffectID`, `.glassEffect(.regular.interactive())` floating thumb-zone dock, `.buttonStyle(.glassProminent)`, `@Observable`, `.sensoryFeedback`, `@ScaledMetric`, and Reduce Transparency fallback. |
| [`expo-react-native/`](./expo-react-native/app/index.tsx) | **Expo Router + Reanimated + Gesture Handler** | `60/120fps` UI-thread `Gesture.Pan()` velocity-preserving spring bottom sheet, `useSafeAreaInsets()` floating blur pill bar, `expo-haptics` triggers, and `tabular-nums` cards. |
| [`compose-material3/`](./compose-material3/ExpressiveMobileScreen.kt) | **Kotlin Jetpack Compose (M3 Expressive)** | Edge-to-edge `WindowInsets`, `Spring.DampingRatioLowBouncy` interactive transitions, concentric `28.dp`/`16.dp` cards, `48.dp` min tap targets, and `LocalHapticFeedback`. |
| [`visionos-spatial/`](./visionos-spatial/SpatialCockpitScene.swift) | **visionOS 26 SwiftUI + RealityKit** | `.glassBackgroundEffect()` window, `60×60 pt` `.hoverEffect()` gaze targets, `.ornament(attachmentAnchor: .scene(.bottom))`, and a `0.6m³` `.volumetric` `RealityView` with `ViewAttachment`. |

## Non-Negotiable Mobile & Spatial Anti-Slop Laws
1. **Thumb-Zone Ergonomics**: Primary navigation and creation triggers live inside the natural bottom thumb arc (`safeAreaInset` / bottom ornament)—never stranded in a top-left hamburger menu.
2. **Glass Discipline**: Translucent Liquid Glass / blur chrome floats strictly **above** rich scroll content; content cards themselves use solid/tonal elevation—never stack glass-on-glass inside scroll views.
3. **Interruptible Velocity Springs**: Sheets and tab morphs preserve gesture velocity (`withSpring` / interactive SwiftUI springs)—never fixed-duration linear timers.
