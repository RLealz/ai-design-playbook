import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SNAP_COLLAPSED = 320;
const SNAP_EXPANDED = 40;
const SPRING_INTERRUPTIBLE = { damping: 24, stiffness: 260, mass: 0.9 };

export default function MobileCraftHomeScreen() {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<'overview' | 'traces' | 'nodes'>('overview');

  // UI-thread shared value for 120fps ProMotion interruptible sheet
  const sheetY = useSharedValue(SNAP_COLLAPSED);
  const startY = useSharedValue(SNAP_COLLAPSED);

  const triggerSelectionHaptic = () => {
    Haptics.selectionAsync().catch(() => {});
  };

  const panGesture = Gesture.Pan()
    .onStart(() => {
      startY.value = sheetY.value;
    })
    .onUpdate((e) => {
      const next = startY.value + e.translationY;
      sheetY.value = Math.max(0, Math.min(SNAP_COLLAPSED + 40, next));
    })
    .onEnd((e) => {
      const shouldExpand = e.velocityY < -450 || sheetY.value < SNAP_COLLAPSED * 0.55;
      sheetY.value = withSpring(shouldExpand ? SNAP_EXPANDED : SNAP_COLLAPSED, {
        ...SPRING_INTERRUPTIBLE,
        velocity: e.velocityY,
      });
      runOnJS(triggerSelectionHaptic)();
    });

  const sheetAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: sheetY.value }],
  }));

  const selectTab = (tab: 'overview' | 'traces' | 'nodes') => {
    triggerSelectionHaptic();
    setActiveTab(tab);
  };

  return (
    <GestureHandlerRootView style={styles.root}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top + 16, paddingBottom: insets.bottom + 140 },
        ]}
      >
        <Text style={styles.eyebrow}>EDGE TELEMETRY · {activeTab.toUpperCase()}</Text>
        <Text style={styles.headline}>3.8 ms Global P99</Text>

        {/* Concentric Outer Card (24px) -> Inner Metric Well (14px) + 10px Padding */}
        <View style={styles.bentoOuter}>
          <View style={styles.bentoInner}>
            <Text style={styles.cardLabel}>SNAPSHOT ISOLATES ACTIVE</Text>
            <Text style={styles.metricValue}>14,820</Text>
          </View>
          <Pressable
            style={({ pressed }) => [styles.primaryBtn, pressed && styles.btnPressed]}
            onPress={() => {
              triggerSelectionHaptic();
              sheetY.value = withSpring(SNAP_EXPANDED, SPRING_INTERRUPTIBLE);
            }}
          >
            <Text style={styles.primaryBtnText}>Inspect Regional Routing</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Interruptible Velocity-Preserving Bottom Sheet */}
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.bottomSheet, sheetAnimatedStyle]}>
          <View style={styles.grabber} />
          <Text style={styles.sheetTitle}>Live PoP Inspector</Text>
          <Text style={styles.sheetBody}>
            Flick anywhere mid-animation—velocity is preserved on the UI thread with zero bridge lag.
          </Text>
        </Animated.View>
      </GestureDetector>

      {/* Thumb-Zone Floating Translucent Tab Pill (48x48dp hit targets) */}
      <View style={[styles.dockWrap, { bottom: Math.max(insets.bottom, 14) }]}>
        <BlurView intensity={65} tint="dark" style={styles.dockBlur}>
          {(['overview', 'traces', 'nodes'] as const).map((tab) => {
            const active = activeTab === tab;
            return (
              <Pressable
                key={tab}
                onPress={() => selectTab(tab)}
                style={[styles.tabPill, active && styles.tabPillActive]}
              >
                <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Text>
              </Pressable>
            );
          })}
        </BlurView>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#090A0F' },
  scrollContent: { paddingHorizontal: 20, gap: 16 },
  eyebrow: {
    fontFamily: 'Courier',
    fontSize: 12,
    letterSpacing: 1.1,
    color: '#94A3B8',
  },
  headline: {
    fontSize: 34,
    fontWeight: '700',
    color: '#F8FAFC',
    letterSpacing: -0.8,
    fontVariant: ['tabular-nums'],
  },
  bentoOuter: {
    backgroundColor: '#11131C',
    borderRadius: 24,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    gap: 10,
  },
  bentoInner: {
    backgroundColor: '#181B28',
    borderRadius: 14,
    padding: 18,
  },
  cardLabel: { fontSize: 11, letterSpacing: 0.9, color: '#94A3B8' },
  metricValue: {
    fontSize: 30,
    fontWeight: '700',
    color: '#34D399',
    marginTop: 6,
    fontVariant: ['tabular-nums'],
  },
  primaryBtn: {
    minHeight: 48,
    borderRadius: 14,
    backgroundColor: '#5E6AD2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPressed: { transform: [{ scale: 0.98 }] },
  primaryBtnText: { color: '#FFFFFF', fontWeight: '600', fontSize: 15 },
  bottomSheet: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 84,
    height: 360,
    backgroundColor: '#141724',
    borderRadius: 28,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
  },
  grabber: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.24)',
    marginBottom: 16,
  },
  sheetTitle: { fontSize: 18, fontWeight: '600', color: '#F8FAFC' },
  sheetBody: { fontSize: 14, lineHeight: 21, color: '#94A3B8', marginTop: 8 },
  dockWrap: { position: 'absolute', left: 24, right: 24, alignItems: 'center' },
  dockBlur: {
    flexDirection: 'row',
    padding: 6,
    borderRadius: 999,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    gap: 6,
  },
  tabPill: {
    minHeight: 44,
    paddingHorizontal: 20,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabPillActive: { backgroundColor: 'rgba(255,255,255,0.14)' },
  tabLabel: { color: '#94A3B8', fontSize: 14, fontWeight: '500' },
  tabLabelActive: { color: '#FFFFFF', fontWeight: '600' },
});
