"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Brain, ShieldCheck, HeartHandshake } from "lucide-react";

const trustPoints = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "AI-powered workflow means I ship in days, not weeks. You get results while competitors are still planning.",
    stat: "2x",
    statLabel: "faster than average",
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description:
      "I use the latest AI tools to write better code, faster — and then I review every line. Best of both worlds.",
    stat: "GPT-4",
    statLabel: "in my workflow",
  },
  {
    icon: ShieldCheck,
    title: "Clean Code",
    description:
      "Every project is built to last. No spaghetti code, no hacks — just solid, well-structured work you can build on.",
    stat: "100%",
    statLabel: "custom & clean",
  },
  {
    icon: HeartHandshake,
    title: "Client-Focused",
    description:
      "I listen before I build. Your goals, your users, your business — these drive every decision I make.",
    stat: "∞",
    statLabel: "revisions until right",
  },
];

export default function WhyMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-me" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-neutral-700" />
            <span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest">Why Work With Me</span>
            <div className="h-px w-8 bg-neutral-700" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight mb-4"
          >
            Not Just Another Web Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-500 text-lg max-w-2xl mx-auto"
          >
            Here's what makes working with me different from hiring a generic agency or freelancer.
          </motion.p>
        </div>

        {/* Trust cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 flex flex-col"
            >
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4 group-hover:bg-white/[0.07] transition-colors duration-300">
                <point.icon className="w-5 h-5 text-neutral-300" />
              </div>
              <div className="mb-3">
                <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  {point.stat}
                </span>
                <span className="text-xs text-neutral-600 ml-2">{point.statLabel}</span>
              </div>
              <h3 className="text-neutral-100 font-bold text-base mb-2">{point.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed flex-1">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
