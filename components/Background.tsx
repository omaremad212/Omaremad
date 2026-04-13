"use client";

import dynamic from "next/dynamic";

// Dynamically imported to avoid SSR issues with WebGL
const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.MeshGradient),
  { ssr: false }
);

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>
      <MeshGradient
        className="w-full h-full"
        colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
        speed={1.0}
      />
    </div>
  );
}
