"use client";

import dynamic from "next/dynamic";

const EtherealShadow = dynamic(
  () => import("@/components/ui/etheral-shadow").then((m) => m.Component),
  { ssr: false }
);

// Render the SVG filter at 25% of screen size → 16× fewer CPU pixels to compute.
// A CSS scale() transform blows it back up for free (GPU compositor, zero CPU cost).
const RENDER_SCALE = 0.25;
const CSS_SCALE = (1 / RENDER_SCALE) * 1.06; // slight oversize to eliminate edge gaps

export function Background() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      aria-hidden
      style={{ contain: "strict" }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: `${RENDER_SCALE * 100}%`,
          height: `${RENDER_SCALE * 100}%`,
          transform: `translate(-50%, -50%) scale(${CSS_SCALE})`,
          transformOrigin: "50% 50%",
          willChange: "transform",
        }}
      >
        <EtherealShadow
          color="rgba(128, 128, 128, 1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
        />
      </div>
    </div>
  );
}
