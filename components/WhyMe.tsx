"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Brain, ShieldCheck, HeartHandshake, Star } from "lucide-react";

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

const techStack = [
  { name: "WordPress", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "OpenAI", icon: "🤖" },
  { name: "WooCommerce", icon: "🛒" },
  { name: "TypeScript", icon: "📘" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
];

export default function WhyMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-me" className="section-padding relative bg-[#030712]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group p-6 rounded-2xl bg-black/[0.96] border border-neutral-800 hover:border-neutral-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 flex flex-col"
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

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl bg-black/[0.96] border border-neutral-800 p-8 mb-10"
        >
          <p className="text-center text-xs uppercase tracking-widest text-neutral-600 font-semibold mb-6">
            Tools & Technologies I Work With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/80 transition-all duration-200 group cursor-default"
              >
                <span className="text-base">{tech.icon}</span>
                <span className="text-sm font-semibold text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-black/[0.96] border border-neutral-800 text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-neutral-400 fill-neutral-400" />
              ))}
            </div>
            <blockquote className="text-neutral-300 text-lg italic leading-relaxed mb-5">
              &ldquo;Omar delivered our WordPress site in record time. The quality was
              outstanding and he was responsive throughout. Highly recommend!&rdquo;
            </blockquote>
            <p className="text-neutral-200 font-semibold">A Happy Client</p>
            <p className="text-neutral-600 text-sm">Business Owner</p>
            <div className="absolute top-4 left-6 text-6xl text-white/5 font-serif leading-none select-none">"</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
