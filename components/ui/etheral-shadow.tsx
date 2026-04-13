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
  /**
   * Render the heavy SVG filter at a fraction of container size,
   * then CSS-scale back up. Values like 0.25 = 16× fewer pixels to
   * compute while producing an identical visual output (base-frequency
   * and displacement are corrected for the scale factor).
   */
  renderScale?: number;
}

function mapRange(
  value: number,
  fromLow: number, fromHigh: number,
  toLow: number, toHigh: number,
): number {
  if (fromLow === fromHigh) return toLow;
  return toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow);
}

const useInstanceId = (): string => {
  const id = useId();
  return `shadowoverlay-${id.replace(/:/g, '')}`;
};

export function Component({
  sizing = 'fill',
  color = 'rgba(128, 128, 128, 1)',
  animation,
  noise,
  style,
  className,
  renderScale = 1,
}: ShadowOverlayProps) {
  const id = useInstanceId();
  const animationEnabled = animation && animation.scale > 0;

  // Clamp renderScale to a sensible range
  const rs = Math.min(1, Math.max(0.05, renderScale));

  // --- Visual-equivalent scaling math ---
  // The inner container is (rs × 100)% of the parent.
  // To keep the turbulence pattern looking the same size in screen space,
  // we divide baseFrequency by rs (more cycles per inner-pixel = same
  // cycles per screen-pixel after CSS upscale).
  // To keep the displacement looking the same size in screen space,
  // we multiply displacementScale by rs (smaller inner-pixel displacement
  // becomes the same screen-pixel displacement after CSS upscale).
  const rawDisplacement = animation ? mapRange(animation.scale, 1, 100, 20, 100) : 0;
  const displacementScale = rawDisplacement * rs;

  const rawBfX = animationEnabled ? mapRange(animation.scale, 0, 100, 0.001, 0.0005) : 0.001;
  const rawBfY = animationEnabled ? mapRange(animation.scale, 0, 100, 0.004, 0.002) : 0.004;
  const baseFreq = `${rawBfX / rs},${rawBfY / rs}`;

  const animationDuration = animation ? mapRange(animation.speed, 1, 100, 1000, 50) : 1;
  const dur = `${(animationDuration / 25).toFixed(2)}s`;

  // CSS blur also scales: 4px visual blur = 4*rs px on inner element
  const blurPx = (4 * rs).toFixed(2);

  // CSS scale to fill parent; slight oversize (× 1.02) removes edge gaps
  const cssScale = (1 / rs) * 1.02;

  return (
    <div
      className={className}
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        height: '100%',
        contain: 'strict',
        ...style,
      }}
    >
      {/* ── Inner element rendered at (rs × 100)% then scaled up ── */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: `${rs * 100}%`,
          height: `${rs * 100}%`,
          transform: `translate(-50%, -50%) scale(${cssScale})`,
          transformOrigin: '50% 50%',
          willChange: 'transform',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: -displacementScale,
            filter: animationEnabled ? `url(#${id}) blur(${blurPx}px)` : 'none',
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        >
          {animationEnabled && (
            <svg
              style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
              aria-hidden
            >
              <defs>
                <filter id={id} colorInterpolationFilters="sRGB">
                  <feTurbulence
                    result="undulation"
                    numOctaves="1"
                    baseFrequency={baseFreq}
                    seed="0"
                    type="turbulence"
                  />
                  {/* SMIL — native browser animation, zero JS per-frame cost */}
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
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="circulation"
                    scale={displacementScale}
                    result="dist"
                  />
                  <feDisplacementMap
                    in="dist"
                    in2="undulation"
                    scale={displacementScale}
                    result="output"
                  />
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
      </div>

      {/* Noise overlay — cheap, stays at full resolution */}
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
