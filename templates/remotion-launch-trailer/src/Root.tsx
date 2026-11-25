import React from 'react';
import { Composition, registerRoot } from 'remotion';
import { LaunchTrailer, TrailerProps } from './LaunchTrailer';

const defaultProps: TrailerProps = {
  brandName: 'Kestrel Edge',
  hookWords: ['Zero', 'Cold', 'Starts.'],
  oldWayStat: '640ms Legacy Container Spin-Up',
  heroMetric: '0.4ms CoW Snapshot Restore',
  cliCommand: 'npx kestrel@latest ship --edge',
  showSafeZone: false,
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LaunchTrailer-16x9"
        component={LaunchTrailer}
        durationInFrames={2700}
        fps={60}
        width={1920}
        height={1080}
        defaultProps={defaultProps}
      />
      <Composition
        id="LaunchTrailer-9x16"
        component={LaunchTrailer}
        durationInFrames={2700}
        fps={60}
        width={1080}
        height={1920}
        defaultProps={defaultProps}
      />
    </>
  );
};

registerRoot(RemotionRoot);
