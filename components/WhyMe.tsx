"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Brain,
  ShieldCheck,
  HeartHandshake,
  Star,
} from "lucide-react";

const trustPoints = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "AI-powered workflow means I ship in days, not weeks. You get results while competitors are still planning.",
    stat: "2x",
    statLabel: "faster than average",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20 group-hover:bg-yellow-400/20",
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description:
      "I use the latest AI tools to write better code, faster — and then I review every line. Best of both worlds.",
    stat: "GPT-4",
    statLabel: "in my workflow",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10 border-cyan-400/20 group-hover:bg-cyan-400/20",
  },
  {
    icon: ShieldCheck,
    title: "Clean, Maintainable Code",
    description:
      "Every project is built to last. No spaghetti code, no hacks — just solid, well-structured work you can build on.",
    stat: "100%",
    statLabel: "custom & clean",
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/20 group-hover:bg-green-400/20",
  },
  {
    icon: HeartHandshake,
    title: "Client-Focused",
    description:
      "I listen before I build. Your goals, your users, your business — these drive every decision I make.",
    stat: "∞",
    statLabel: "revisions until right",
    color: "text-rose-400",
    bg: "bg-rose-400/10 border-rose-400/20 group-hover:bg-rose-400/20",
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

const testimonialPlaceholder = {
  quote:
    "Omar delivered our WordPress site in record time. The quality was outstanding and he was responsive throughout. Highly recommend!",
  author: "A Happy Client",
  role: "Business Owner",
};

export default function WhyMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-me" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
              Why Work With Me
            </span>
            <div className="h-px w-8 bg-blue-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4"
          >
            Not Just Another{" "}
            <span className="gradient-text">Web Developer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Here's what makes working with me different from hiring a generic
            agency or freelancer.
          </motion.p>
        </div>

        {/* Trust points grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group p-6 rounded-2xl bg-[#162032] card-border hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 flex flex-col"
            >
              <div
                className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${point.bg} transition-colors duration-300`}
              >
                <point.icon className={`w-5 h-5 ${point.color}`} />
              </div>
              <div className="mb-3">
                <span className={`text-2xl font-black ${point.color}`}>
                  {point.stat}
                </span>
                <span className="text-xs text-slate-500 ml-2">{point.statLabel}</span>
              </div>
              <h3 className="text-white font-bold text-base mb-2">{point.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech stack row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl bg-[#162032] border border-slate-700/40 p-8 mb-10"
        >
          <p className="text-center text-xs uppercase tracking-widest text-slate-500 font-semibold mb-6">
            Tools & Technologies I Work With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/40 hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-200 group cursor-default"
              >
                <span className="text-base">{tech.icon}</span>
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-slate-900/40 border border-blue-500/20 text-center">
            {/* Quote stars */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <blockquote className="text-slate-300 text-lg italic leading-relaxed mb-5">
              &ldquo;{testimonialPlaceholder.quote}&rdquo;
            </blockquote>
            <div>
              <p className="text-white font-semibold">{testimonialPlaceholder.author}</p>
              <p className="text-slate-500 text-sm">{testimonialPlaceholder.role}</p>
            </div>
            {/* Decorative quotes */}
            <div className="absolute top-4 left-6 text-6xl text-blue-500/10 font-serif leading-none select-none">
              "
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
