import Observation
import SwiftUI

// MARK: - Observable Domain State (@Observable — zero ObservableObject boilerplate)

@Observable
final class PulseWorkspaceModel {
    enum Tab: String, CaseIterable, Identifiable {
        case overview = "Overview"
        case streams = "Streams"
        case devices = "Nodes"

        var id: String { rawValue }
        var symbol: String {
            switch self {
            case .overview: "waveform.path.ecg"
            case .streams: "bolt.horizontal.circle"
            case .devices: "cpu"
            }
        }
    }

    var selectedTab: Tab = .overview
    var quickActionsExpanded = false
    var showComposerSheet = false
    var activeClusterLatencyMs: Double = 4.2
}

// MARK: - Main iOS 26+ Liquid Glass View

@available(iOS 26.0, *)
struct LiquidGlassWorkspaceView: View {
    @State private var model = PulseWorkspaceModel()
    @Namespace private var glassNamespace

    @Environment(\.accessibilityReduceTransparency) private var reduceTransparency
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @ScaledMetric(relativeTo: .title2) private var metricBadgeSize: CGFloat = 28

    var body: some View {
        NavigationStack {
            ScrollView {
                // Content cards use solid/tonal surfaces — NEVER glass-on-glass inside scroll content
                VStack(alignment: .leading, spacing: 16) {
                    heroTelemetryCard
                    nodeHealthGrid
                }
                .padding(.horizontal, 20)
                .padding(.top, 12)
                .padding(.bottom, 112)
            }
            .background(Color(.systemGroupedBackground))
            .navigationTitle(model.selectedTab.rawValue)
            .safeAreaInset(edge: .bottom) {
                thumbZoneLiquidGlassDock
                    .padding(.horizontal, 20)
                    .padding(.bottom, 8)
            }
            .sheet(isPresented: $model.showComposerSheet) {
                QuickDeploySheet()
                    .presentationDetents([.medium, .large])
                    .presentationCornerRadius(32) // Concentric with hardware bezel
                    .presentationDragIndicator(.visible)
            }
            .sensoryFeedback(.selection, trigger: model.selectedTab)
            .sensoryFeedback(.impact(flexibility: .solid), trigger: model.quickActionsExpanded)
        }
    }

    // MARK: - Solid Tonal Content Surfaces

    private var heroTelemetryCard: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Label("EU-CENTRAL MESH", systemImage: "checkmark.shield.fill")
                    .font(.caption.monospaced().weight(.semibold))
                    .foregroundStyle(.secondary)
                Spacer()
                Text("99.996% SLA")
                    .font(.caption.monospaced())
                    .padding(.horizontal, 8)
                    .padding(.vertical, 4)
                    .background(.green.opacity(0.14), in: .capsule)
                    .foregroundStyle(.green)
            }

            HStack(alignment: .firstTextBaseline, spacing: 6) {
                Text(String(format: "%.1f", model.activeClusterLatencyMs))
                    .font(.system(size: metricBadgeSize * 1.5, weight: .bold, design: .rounded))
                    .monospacedDigit()
                Text("ms P99")
                    .font(.headline)
                    .foregroundStyle(.secondary)
            }

            Button("Deploy Edge Snapshot") {
                model.showComposerSheet = true
            }
            .buttonStyle(.glassProminent)
            .controlSize(.large)
        }
        .padding(20) // Outer 28pt = Inner 12pt + 16pt/20pt concentric balance
        .background(Color(.secondarySystemGroupedBackground), in: .rect(cornerRadius: 28, style: .continuous))
    }

    private var nodeHealthGrid: some View {
        VStack(spacing: 12) {
            ForEach([("fra-01", "3.1 ms"), ("iad-04", "4.8 ms"), ("hnd-02", "5.4 ms")], id: \.0) { region, rtt in
                HStack {
                    Text(region.uppercased())
                        .font(.subheadline.monospaced().weight(.semibold))
                    Spacer()
                    Text(rtt)
                        .font(.subheadline.monospaced())
                        .monospacedDigit()
                        .foregroundStyle(.secondary)
                }
                .frame(minHeight: 48) // >= 44pt ergonomic tap target
                .padding(.horizontal, 18)
                .background(Color(.secondarySystemGroupedBackground), in: .rect(cornerRadius: 18, style: .continuous))
            }
        }
    }

    // MARK: - Floating Thumb-Zone Liquid Glass Navigation & Morphing Action Dock

    @ViewBuilder
    private var thumbZoneLiquidGlassDock: some View {
        if reduceTransparency {
            // Accessibility fallback when Reduce Transparency is enabled
            HStack(spacing: 12) {
                tabButtons
                actionToggleButton
            }
            .padding(10)
            .background(Color(.secondarySystemBackground), in: .capsule)
            .overlay(Capsule().strokeBorder(.separator, lineWidth: 1))
        } else {
            GlassEffectContainer(spacing: 18.0) {
                HStack(spacing: 14) {
                    HStack(spacing: 4) {
                        tabButtons
                    }
                    .padding(6)
                    .glassEffect(.regular.interactive(), in: .capsule)
                    .glassEffectID("primary-tabs", in: glassNamespace)

                    if model.quickActionsExpanded {
                        Button {
                            model.showComposerSheet = true
                        } label: {
                            Image(systemName: "bolt.fill")
                                .frame(width: 48, height: 48)
                        }
                        .glassEffect(.regular.tint(.indigo).interactive(), in: .circle)
                        .glassEffectID("quick-bolt", in: glassNamespace)
                        .accessibilityLabel("Quick Deploy")
                    }

                    actionToggleButton
                        .glassEffect(.regular.interactive(), in: .circle)
                        .glassEffectID("fab-toggle", in: glassNamespace)
                }
            }
        }
    }

    private var tabButtons: some View {
        ForEach(PulseWorkspaceModel.Tab.allCases) { tab in
            let isSelected = model.selectedTab == tab
            Button {
                withAnimation(reduceMotion ? .none : .spring(duration: 0.32, bounce: 0.18)) {
                    model.selectedTab = tab
                }
            } label: {
                Label(tab.rawValue, systemImage: tab.symbol)
                    .labelStyle(.iconOnly)
                    .font(.system(size: 18, weight: isSelected ? .semibold : .regular))
                    .frame(width: 48, height: 44) // >= 44x44pt hit target
                    .background(isSelected ? Color.primary.opacity(0.12) : .clear, in: .capsule)
            }
            .buttonStyle(.plain)
            .accessibilityLabel(tab.rawValue)
        }
    }

    private var actionToggleButton: some View {
        Button {
            withAnimation(reduceMotion ? .none : .spring(duration: 0.35, bounce: 0.22)) {
                model.quickActionsExpanded.toggle()
            }
        } label: {
            Image(systemName: model.quickActionsExpanded ? "xmark" : "plus")
                .font(.system(size: 18, weight: .semibold))
                .frame(width: 48, height: 48)
        }
        .buttonStyle(.plain)
        .accessibilityLabel(model.quickActionsExpanded ? "Close quick actions" : "Open quick actions")
    }
}

@available(iOS 26.0, *)
private struct QuickDeploySheet: View {
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            Text("Ship Snapshot Isolate")
                .font(.title2.bold())
            Text("Concentric sheet geometry (`32pt` outer radius → `16pt` inner controls) with interruptible swipe dismissal.")
                .font(.subheadline)
                .foregroundStyle(.secondary)
            Button {
                dismiss()
            } label: {
                Text("Confirm Regional Rollout")
                    .frame(maxWidth: .infinity, minHeight: 48)
            }
            .buttonStyle(.glassProminent)
            Spacer()
        }
        .padding(24)
    }
}
