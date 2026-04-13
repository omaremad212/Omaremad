"use client";

import dynamic from "next/dynamic";

const EtherealShadow = dynamic(
  () => import("@/components/ui/etheral-shadow").then((m) => m.Component),
  { ssr: false }
);

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>
      <EtherealShadow
        color="rgba(128, 128, 128, 1)"
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 1, scale: 1.2 }}
        sizing="fill"
        renderScale={0.25}
      />
    </div>
  );
}
