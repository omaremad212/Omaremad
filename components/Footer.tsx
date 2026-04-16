"use client";

import Link from "next/link";
import { SplineScene } from "@/components/ui/splite";
import { useEffect, useRef, useState } from "react";


export default function Footer() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [splineVisible, setSplineVisible] = useState(false);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setSplineVisible(true); observer.disconnect(); } },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);


  return (
    <footer className="relative border-t border-neutral-900/60 overflow-hidden">
      <div ref={triggerRef} aria-hidden />

      {/* ── Main footer grid: columns | robot | contact ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-10 items-center">

          {/* LEFT — info columns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 text-sm">
            {/* SOCIALS */}
            <div className="flex flex-col gap-2">
              <p className="text-neutral-300 font-semibold uppercase tracking-widest text-xs mb-1">Socials</p>
              <a href="https://github.com/omaremad212" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-300 transition-colors">Github</a>
              <a href="https://www.linkedin.com/in/omar-emad-4b361327b" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-300 transition-colors">LinkedIn</a>
              <a href="https://wa.me/201143811263" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-300 transition-colors">WhatsApp</a>
              <a href="mailto:oemad8637@gmail.com" className="text-neutral-600 hover:text-neutral-300 transition-colors">Email</a>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-2">
              <p className="text-neutral-300 font-semibold uppercase tracking-widest text-xs mb-1">Links</p>
              <Link href="/" className="text-neutral-600 hover:text-neutral-300 transition-colors">Home</Link>
              <Link href="/#about" className="text-neutral-600 hover:text-neutral-300 transition-colors">About</Link>
              <Link href="/#projects" className="text-neutral-600 hover:text-neutral-300 transition-colors">Projects</Link>
              <Link href="/contact" className="text-neutral-600 hover:text-neutral-300 transition-colors">Contact</Link>
            </div>

          </div>

          {/* RIGHT — contact buttons */}
          <div className="flex flex-col gap-3 items-start lg:items-end">
            <a
              href="tel:+201143811263"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-neutral-200 hover:border-neutral-600 transition-all text-sm whitespace-nowrap"
            >
              +20 1143811263
            </a>
            <a
              href="mailto:oemad8637@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-neutral-200 hover:border-neutral-600 transition-all text-sm whitespace-nowrap"
            >
              oemad8637@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* ── Robot centered ── */}
      <div className="flex justify-center -mb-6">
        <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]">
          {splineVisible && (
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          )}
        </div>
      </div>

      {/* ── Big ghost name ── */}
      <div className="w-full overflow-hidden select-none">
        <p
          className="text-center font-black uppercase leading-none text-white/[0.07] whitespace-nowrap"
          style={{ fontSize: "clamp(2rem, 13.5vw, 13.5vw)", letterSpacing: "-0.02em" }}
        >
          OMAREMAD
        </p>
      </div>

    </footer>
  );
}
