import RealityKit
import SwiftUI

// MARK: - visionOS Spatial App Entry (Glass Window + 0.6m³ Volumetric Stage)

#if os(visionOS)
@main
struct SpatialCockpitApp: App {
    var body: some Scene {
        WindowGroup {
            SpatialTelemetryWindow()
        }
        .defaultSize(width: 960, height: 640)

        WindowGroup(id: "topology-volume") {
            ClusterTopologyVolume()
        }
        .windowStyle(.volumetric)
        .defaultSize(width: 0.6, height: 0.6, depth: 0.6, in: .meters)
    }
}

// MARK: - Primary Spatial Glass Window + Ergonomic 60pt Gaze Ornament

struct SpatialTelemetryWindow: View {
    @Environment(\.openWindow) private var openWindow
    @State private var selectedRegion = "FRA-01"

    private let regions = ["FRA-01", "IAD-04", "HND-02", "GRU-01"]

    var body: some View {
        VStack(alignment: .leading, spacing: 24) {
            HStack {
                VStack(alignment: .leading, spacing: 6) {
                    Text("SPATIAL MESH COCKPIT")
                        .font(.caption.monospaced())
                        .foregroundStyle(.secondary)
                    Text("Region \(selectedRegion) · 3.4 ms P99")
                        .font(.extraLargeTitle2.bold())
                        .monospacedDigit()
                }
                Spacer()
                Button {
                    openWindow(id: "topology-volume")
                } label: {
                    Label("Open 3D Volume", systemImage: "cube.transparent")
                        .padding(.horizontal, 20)
                        .frame(minHeight: 60) // >= 60pt visionOS ergonomic gaze target
                }
                .hoverEffect(.highlight)
            }

            HStack(spacing: 16) {
                ForEach(regions, id: \.self) { region in
                    Button {
                        selectedRegion = region
                    } label: {
                        VStack(alignment: .leading, spacing: 8) {
                            Text(region)
                                .font(.headline.monospaced())
                            Text(region == selectedRegion ? "ACTIVE PRIMARY" : "STANDBY")
                                .font(.caption2.monospaced())
                                .foregroundStyle(.secondary)
                        }
                        .frame(maxWidth: .infinity, minHeight: 96, alignment: .leading)
                        .padding(16)
                    }
                    .buttonStyle(.plain)
                    .background(.regularMaterial, in: .rect(cornerRadius: 20))
                    .hoverEffect(.lift)
                }
            }
            Spacer()
        }
        .padding(40)
        .glassBackgroundEffect()
        .ornament(attachmentAnchor: .scene(.bottom)) {
            // Floating Spatial Ornament (60x60pt gaze-friendly controls)
            HStack(spacing: 16) {
                ForEach(["waveform.path.ecg", "globe.europe.africa.fill", "shield.lefthalf.filled"], id: \.self) { icon in
                    Button {} label: {
                        Image(systemName: icon)
                            .font(.title3)
                            .frame(width: 60, height: 60)
                    }
                    .buttonStyle(.borderless)
                    .hoverEffect(.highlight)
                }
            }
            .padding(.horizontal, 20)
            .padding(.vertical, 10)
            .glassBackgroundEffect(in: .capsule)
        }
    }
}

// MARK: - 3D RealityKit Volumetric Node with Interactive Gaze + SwiftUI Attachment

struct ClusterTopologyVolume: View {
    @State private var pulseScale: Float = 1.0

    var body: some View {
        RealityView { content, attachments in
            let mesh = MeshResource.generateSphere(radius: 0.12)
            var material = PhysicallyBasedMaterial()
            material.baseColor = .init(tint: .cyan)
            material.metallic = .init(floatLiteral: 0.85)
            material.roughness = .init(floatLiteral: 0.18)

            let coreEntity = ModelEntity(mesh: mesh, materials: [material])
            coreEntity.name = "coreNode"
            coreEntity.components.set(InputTargetComponent())
            coreEntity.components.set(HoverEffectComponent())
            coreEntity.generateCollisionShapes(recursive: false)
            content.add(coreEntity)

            if let callout = attachments.entity(for: "nodeCallout") {
                callout.position = [0, 0.20, 0]
                coreEntity.addChild(callout)
            }
        } update: { content, _ in
            if let core = content.entities.first(where: { $0.name == "coreNode" }) {
                core.scale = SIMD3<Float>(repeating: pulseScale)
            }
        } attachments: {
            Attachment(id: "nodeCallout") {
                Text("FRA-01 Core · 0.4ms CoW")
                    .font(.caption.monospaced().weight(.semibold))
                    .padding(.horizontal, 14)
                    .padding(.vertical, 8)
                    .glassBackgroundEffect(in: .capsule)
            }
        }
        .gesture(
            TapGesture()
                .targetedToAnyEntity()
                .onEnded { _ in
                    pulseScale = pulseScale == 1.0 ? 1.18 : 1.0
                }
        )
    }
}
#endif
