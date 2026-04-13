"use client";

import { Component } from "@/components/ui/etheral-shadow";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>
      <Component
        color="rgba(128, 128, 128, 1)"
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 1, scale: 1.2 }}
        sizing="fill"
      />
    </div>
  );
}
