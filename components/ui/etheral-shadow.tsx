'use client';

import React, { useId, CSSProperties } from 'react';

interface AnimationConfig {
  preview?: boolean;
  scale: number;
  speed: number;
}

interface NoiseConfig {
  opacity: number;
  scale: number;
}

interface ShadowOverlayProps {
  sizing?: 'fill' | 'stretch';
  color?: string;
  animation?: AnimationConfig;
  noise?: NoiseConfig;
  style?: CSSProperties;
  className?: string;
}

function mapRange(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
  if (fromLow === fromHigh) return toLow;
  const percentage = (value - fromLow) / (fromHigh - fromLow);
  return toLow + percentage * (toHigh - toLow);
}

const useInstanceId = (): string => {
  const id = useId();
  return `shadowoverlay-${id.replace(/:/g, "")}`;
};

export function Component({
  sizing = 'fill',
  color = 'rgba(128, 128, 128, 1)',
  animation,
  noise,
  style,
  className,
}: ShadowOverlayProps) {
  const id = useInstanceId();
  const animationEnabled = animation && animation.scale > 0;

  const displacementScale = animation ? mapRange(animation.scale, 1, 100, 20, 100) : 0;
  const animationDuration = animation ? mapRange(animation.speed, 1, 100, 1000, 50) : 1;
  const dur = `${(animationDuration / 25).toFixed(2)}s`;

  const baseFreq = animationEnabled
    ? `${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`
    : '0.001,0.004';

  return (
    <div
      className={className}
      style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100%', contain: 'strict', ...style }}
    >
      <div
        style={{
          position: 'absolute',
          inset: -displacementScale,
          filter: animationEnabled ? `url(#${id}) blur(4px)` : 'none',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        {animationEnabled && (
          /* SVG is 0×0 — only provides the filter definition */
          <svg
            style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
            aria-hidden
          >
            <defs>
              <filter id={id} colorInterpolationFilters="sRGB">
                <feTurbulence
                  result="undulation"
                  numOctaves="2"
                  baseFrequency={baseFreq}
                  seed="0"
                  type="turbulence"
                />
                {/* SMIL animation — zero JS per-frame DOM cost */}
                <feColorMatrix in="undulation" type="hueRotate" values="0" result="rotated">
                  <animate
                    attributeName="values"
                    from="0"
                    to="360"
                    dur={dur}
                    repeatCount="indefinite"
                  />
                </feColorMatrix>
                <feColorMatrix
                  in="rotated"
                  result="circulation"
                  type="matrix"
                  values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                />
                <feDisplacementMap in="SourceGraphic" in2="circulation" scale={displacementScale} result="dist" />
                <feDisplacementMap in="dist" in2="undulation" scale={displacementScale} result="output" />
              </filter>
            </defs>
          </svg>
        )}
        <div
          style={{
            backgroundColor: color,
            maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
            maskSize: sizing === 'stretch' ? '100% 100%' : 'cover',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            width: '100%',
            height: '100%',
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        />
      </div>

      {noise && noise.opacity > 0 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
            backgroundSize: noise.scale * 200,
            backgroundRepeat: 'repeat',
            opacity: noise.opacity / 2,
          }}
        />
      )}
    </div>
  );
}
