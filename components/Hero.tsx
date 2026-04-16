"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Zap } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

const heroLines = [
  ["I", "build", "websites"],
  ["that", "work", "for"],
  ["your", "business"],
];

const stats = [
  { raw: 50, display: "50+", label: "Projects Delivered" },
  { raw: null, display: "AI", label: "Powered Workflow" },
  { raw: 2, display: "2x", label: "Faster Delivery" },
];

function AnimatedStatNum({ raw, display, inView }: { raw: number | null; display: string; inView: boolean }) {
  const [val, setVal] = useState(raw !== null ? "0" : display);
  const ran = useRef(false);

  useEffect(() => {
    if (!inView || raw === null || ran.current) return;
    ran.current = true;
    const suffix = display.replace(String(raw), "");
    const ctrl = animate(0, raw, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(`${Math.round(v)}${suffix}`),
    });
    return () => ctrl.stop();
  }, [inView, raw, display]);

  return <>{raw !== null ? val : display}</>;
}

export default function Hero() {
  const [statsVisible, setStatsVisible] = useState(false);
  const [showSpline, setShowSpline] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 900);
    return () => clearTimeout(timer);
  }, []);

  // Delay Spline load until browser is idle so text/content renders first
  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = (window as Window & typeof globalThis).requestIdleCallback(
        () => setShowSpline(true),
        { timeout: 2000 }
      );
      return () => (window as Window & typeof globalThis).cancelIdleCallback(id);
    }
    const t = setTimeout(() => setShowSpline(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      {/* Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-72 md:-top-20" fill="white" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* ── Left content ─────────────────────────────────────── */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24 pt-28 pb-16 relative z-10">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 text-xs font-medium mb-8 w-fit backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for new projects
          </motion.div>

          {/* Headline — word by word reveal */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
            {heroLines.map((words, lineIdx) => (
              <span key={lineIdx} className="block">
                {words.map((word, wordIdx) => (
                  <motion.span
                    key={wordIdx}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.2 + lineIdx * 0.18 + wordIdx * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block mr-[0.22em] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="text-neutral-400 text-lg max-w-lg leading-relaxed mb-8"
          >
            Fast, smart, and powered by AI — WordPress expert &amp; AI Fullstack
            developer delivering results that grow your business.
          </motion.p>

          {/* Role pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {["WordPress Expert", "AI-Powered", "Full Stack Dev"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.85 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-900 text-neutral-400 border border-neutral-800"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-neutral-100 text-black font-bold text-sm rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-0.5"
            >
              <Zap className="w-4 h-4" />
              Let&apos;s Work Together
            </Link>
            <button
              onClick={scrollToProjects}
              className="px-7 py-3.5 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:bg-neutral-900/60 hover:-translate-y-0.5"
            >
              See My Work
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 flex gap-10 border-t border-neutral-900 pt-8"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                className="flex flex-col gap-1"
              >
                <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  <AnimatedStatNum raw={s.raw} display={s.display} inView={statsVisible} />
                </span>
                <span className="text-xs text-neutral-600 uppercase tracking-widest font-medium">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Right — 3D Spline scene ───────────────────────────── */}
        <div className="flex-1 relative min-h-[60vw] md:min-h-0">
          {showSpline && (
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full absolute inset-0"
            />
          )}
        </div>
      </div>
    </section>
  );
}
