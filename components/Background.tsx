"use client";

import dynamic from "next/dynamic";

const EtherealShadow = dynamic(
  () => import("@/components/ui/etheral-shadow").then((m) => m.Component),
  { ssr: false }
);

// The SVG filter runs on a small element (10% of screen = 100× fewer pixels),
// then a free GPU CSS transform blows it back up to fill the viewport.
// The component itself is untouched — performance comes from the wrapper.
const RS = 0.1;
const UP = (1 / RS) * 1.03;

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
          width: `${RS * 100}%`,
          height: `${RS * 100}%`,
          transform: `translate(-50%, -50%) scale(${UP})`,
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
