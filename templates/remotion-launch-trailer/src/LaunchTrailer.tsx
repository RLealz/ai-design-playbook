import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export interface TrailerProps {
  brandName: string;
  hookWords: string[];
  oldWayStat: string;
  heroMetric: string;
  cliCommand: string;
  showSafeZone?: boolean;
}

const SPRING_SNAPPY = { damping: 18, stiffness: 220, mass: 0.9 };

export const LaunchTrailer: React.FC<TrailerProps> = ({
  brandName,
  hookWords,
  oldWayStat,
  heroMetric,
  cliCommand,
  showSafeZone = false,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const isVertical = height > width;

  // motionmaxxing Rule: Continuous subtle camera drift so zero frames are dead-frozen
  const globalDrift = interpolate(frame, [0, 2700], [1.0, 1.035]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#090A0F',
        color: '#F5F7FA',
        fontFamily: 'Syne, Inter, system-ui, sans-serif',
        overflow: 'hidden',
      }}
    >
      <AbsoluteFill style={{ transform: `scale(${globalDrift})` }}>
        {/* ACT 1 (00:00 - 00:03 / 0 - 180f): Pattern Interrupt Kinetic Hook (<= 6 words) */}
        <Sequence from={0} durationInFrames={180}>
          <CenterSafe isVertical={isVertical}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
              {hookWords.map((word, idx) => {
                // Stagger sibling entrances by 5 frames (83ms @ 60fps)
                const progress = spring({ frame: frame - idx * 5, fps, config: SPRING_SNAPPY });
                const y = interpolate(progress, [0, 1], [64, 0]);
                return (
                  <span
                    key={word}
                    style={{
                      fontSize: isVertical ? 96 : 132,
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      transform: `translateY(${y}px)`,
                      opacity: progress,
                      color: idx === hookWords.length - 1 ? '#D9FF3F' : '#F5F7FA',
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
          </CenterSafe>
        </Sequence>

        {/* ACT 2 (00:03 - 00:12 / 180 - 720f): Status-Quo Friction */}
        <Sequence from={180} durationInFrames={540}>
          <FrictionBeat stat={oldWayStat} isVertical={isVertical} />
        </Sequence>

        {/* ACT 3 (00:12 - 00:32 / 720 - 1920f): 3D Perspective Product UI Reveal */}
        <Sequence from={720} durationInFrames={1200}>
          <ProductHero3D brandName={brandName} heroMetric={heroMetric} isVertical={isVertical} />
        </Sequence>

        {/* ACT 4 (00:32 - 00:42 / 1920 - 2520f): Beat-Synced Bento Montage */}
        <Sequence from={1920} durationInFrames={600}>
          <BentoMontage isVertical={isVertical} />
        </Sequence>

        {/* ACT 5 (00:42 - 00:45 / 2520 - 2700f): High-Contrast CLI CTA Lockup */}
        <Sequence from={2520} durationInFrames={180}>
          <CtaLockup brandName={brandName} cliCommand={cliCommand} isVertical={isVertical} />
        </Sequence>
      </AbsoluteFill>

      {/* Optional 80% Title-Safe Inspection Overlay (The Gauntlet QA) */}
      {showSafeZone && (
        <div
          style={{
            position: 'absolute',
            inset: '10%',
            border: '2px dashed rgba(217, 255, 63, 0.55)',
            pointerEvents: 'none',
          }}
        />
      )}
    </AbsoluteFill>
  );
};

const CenterSafe: React.FC<{ children: React.ReactNode; isVertical: boolean }> = ({ children }) => (
  <AbsoluteFill style={{ padding: '10%', justifyContent: 'center', alignItems: 'center' }}>
    {children}
  </AbsoluteFill>
);

const FrictionBeat: React.FC<{ stat: string; isVertical: boolean }> = ({ stat, isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: SPRING_SNAPPY });
  return (
    <CenterSafe isVertical={isVertical}>
      <div style={{ textAlign: 'center', transform: `scale(${interpolate(enter, [0, 1], [0.92, 1])})` }}>
        <div style={{ fontFamily: 'monospace', fontSize: 32, color: '#F87171', letterSpacing: '0.1em' }}>
          BOTTLENECK DETECTED
        </div>
        <div style={{ fontSize: isVertical ? 64 : 84, fontWeight: 700, marginTop: 20 }}>{stat}</div>
      </div>
    </CenterSafe>
  );
};

const ProductHero3D: React.FC<{ brandName: string; heroMetric: string; isVertical: boolean }> = ({
  brandName,
  heroMetric,
  isVertical,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 20, stiffness: 160 } });
  const rotY = interpolate(frame, [0, 1200], [-11, 5]);
  const rotX = interpolate(frame, [0, 1200], [10, 4]);

  return (
    <CenterSafe isVertical={isVertical}>
      <div style={{ perspective: 1600, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: isVertical ? '92%' : '78%',
            padding: 56,
            borderRadius: 28,
            background: '#121521',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 40px 90px rgba(0,0,0,0.65)',
            transform: `scale(${pop}) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          }}
        >
          <div style={{ fontFamily: 'monospace', fontSize: 28, color: '#94A3B8' }}>{brandName} // LIVE TRACE</div>
          <div
            style={{
              fontSize: isVertical ? 60 : 82,
              fontWeight: 800,
              color: '#34D399',
              marginTop: 24,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {heroMetric}
          </div>
        </div>
      </div>
    </CenterSafe>
  );
};

const BentoMontage: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const cards = ['42 Global PoPs', 'BLAKE3 Verified', '$0 Egress', 'Instant Rollback'];
  return (
    <CenterSafe isVertical={isVertical}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isVertical ? '1fr' : '1fr 1fr',
          gap: 28,
          width: '86%',
        }}
      >
        {cards.map((title, i) => {
          const s = spring({ frame: frame - i * 6, fps, config: SPRING_SNAPPY });
          return (
            <div
              key={title}
              style={{
                padding: 40,
                borderRadius: 22,
                background: '#151928',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: 48,
                fontWeight: 700,
                opacity: s,
                transform: `translateY(${interpolate(s, [0, 1], [36, 0])}px)`,
              }}
            >
              {title}
            </div>
          );
        })}
      </div>
    </CenterSafe>
  );
};

const CtaLockup: React.FC<{ brandName: string; cliCommand: string; isVertical: boolean }> = ({
  brandName,
  cliCommand,
  isVertical,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: SPRING_SNAPPY });
  return (
    <CenterSafe isVertical={isVertical}>
      <div style={{ textAlign: 'center', opacity: s, transform: `scale(${interpolate(s, [0, 1], [0.94, 1])})` }}>
        <div style={{ fontSize: isVertical ? 76 : 104, fontWeight: 800 }}>{brandName}</div>
        <div
          style={{
            marginTop: 32,
            padding: '22px 40px',
            borderRadius: 16,
            background: '#D9FF3F',
            color: '#090A0F',
            fontFamily: 'monospace',
            fontSize: isVertical ? 34 : 44,
            fontWeight: 700,
          }}
        >
          $ {cliCommand}
        </div>
      </div>
    </CenterSafe>
  );
};
