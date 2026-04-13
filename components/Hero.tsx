"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4 sm:px-6 lg:px-8 pt-16">
      <Card className="w-full max-w-7xl min-h-[560px] md:min-h-[620px] bg-black/[0.96] relative overflow-hidden border-neutral-800/50">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex flex-col md:flex-row h-full min-h-[560px] md:min-h-[620px]">
          {/* Left content */}
          <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-700/60 bg-neutral-900/60 text-neutral-400 text-xs font-medium mb-6 w-fit backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-[1.1] mb-5"
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
              className="text-neutral-300 text-base md:text-lg max-w-md leading-relaxed mb-8"
            >
              Fast, smart, and powered by AI — WordPress expert &amp; AI Fullstack
              developer delivering faster, smarter solutions for your business.
            </motion.p>

            {/* Role pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {["WordPress Expert", "AI-Powered", "Full Stack Dev"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-800/80 text-neutral-300 border border-neutral-700/60"
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
              <button
                onClick={scrollToContact}
                className="group relative px-7 py-3.5 bg-white hover:bg-neutral-100 text-black font-bold text-sm rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-0.5 overflow-hidden flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Let's Work Together
              </button>
              <button
                onClick={scrollToProjects}
                className="px-7 py-3.5 border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:bg-neutral-800/50 hover:-translate-y-0.5"
              >
                See My Work
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex gap-8"
            >
              {[
                { num: "50+", label: "Projects" },
                { num: "AI", label: "Workflow" },
                { num: "2x", label: "Faster" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    {s.num}
                  </span>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right content — 3D Spline scene */}
          <div className="flex-1 relative min-h-[280px] md:min-h-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
