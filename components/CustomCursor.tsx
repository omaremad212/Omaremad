"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on devices with a real pointer (not touch)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let mx = -200, my = -200;
    let rx = -200, ry = -200;
    let rafId: number;
    let isHovering = false;

    const DOT_R = 4;   // half of 8px dot
    const RING_R = 16; // half of 32px ring

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = !!t.closest("a, button, [role='button'], input, textarea, select, label");
      if (interactive === isHovering) return;
      isHovering = interactive;
      if (dotRef.current) {
        dotRef.current.style.opacity = interactive ? "0" : "1";
        dotRef.current.style.transform = `translate(${mx - DOT_R}px, ${my - DOT_R}px) scale(${interactive ? 0 : 1})`;
      }
      if (ringRef.current) {
        ringRef.current.style.width = interactive ? "52px" : "32px";
        ringRef.current.style.height = interactive ? "52px" : "32px";
        ringRef.current.style.borderColor = interactive ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)";
        ringRef.current.style.backgroundColor = interactive ? "rgba(255,255,255,0.06)" : "transparent";
      }
    };

    const tick = () => {
      // Dot: exact position
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - DOT_R}px, ${my - DOT_R}px) scale(${isHovering ? 0 : 1})`;
      }
      // Ring: lerp toward mouse
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      const rHalf = isHovering ? 26 : RING_R;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - rHalf}px, ${ry - rHalf}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.body.style.cursor = "none";
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.body.style.cursor = "";
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-white"
        style={{
          width: 8,
          height: 8,
          willChange: "transform",
          transition: "opacity 0.15s, transform 0.1s",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border"
        style={{
          width: 32,
          height: 32,
          borderColor: "rgba(255,255,255,0.3)",
          willChange: "transform",
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background-color 0.25s ease",
        }}
      />
    </>
  );
}
