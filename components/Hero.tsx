"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      {/* Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-72 md:-top-20"
        fill="white"
      />

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

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-[1.05] mb-6"
          >
            I build websites
            <br />
            that work for
            <br />
            your business
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-neutral-400 text-lg max-w-lg leading-relaxed mb-8"
          >
            Fast, smart, and powered by AI — WordPress expert &amp; AI Fullstack
            developer delivering results that grow your business.
          </motion.p>

          {/* Role pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {["WordPress Expert", "AI-Powered", "Full Stack Dev"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-900 text-neutral-400 border border-neutral-800"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-neutral-100 text-black font-bold text-sm rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-0.5"
            >
              <Zap className="w-4 h-4" />
              Let's Work Together
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex gap-10 border-t border-neutral-900 pt-8"
          >
            {[
              { num: "50+", label: "Projects Delivered" },
              { num: "AI", label: "Powered Workflow" },
              { num: "2x", label: "Faster Delivery" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  {s.num}
                </span>
                <span className="text-xs text-neutral-600 uppercase tracking-widest font-medium">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right — 3D Spline scene ───────────────────────────── */}
        <div className="flex-1 relative min-h-[60vw] md:min-h-0">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
}
