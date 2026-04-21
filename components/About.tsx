"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Rocket, Code, Users, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "WordPress Mastery",
    desc: "Custom themes, plugins, and WooCommerce — built for scale and speed.",
  },
  {
    icon: Brain,
    title: "AI-Powered Workflow",
    desc: "Leveraging LLMs to deliver high-quality projects in half the time.",
  },
  {
    icon: Rocket,
    title: "Rapid Delivery",
    desc: "Moving from concept to launch with agility and technical precision.",
  },
  {
    icon: Users,
    title: "Client-First Strategy",
    desc: "Designing systems that solve real business problems and drive growth.",
  },
];

const baseRow1 = ["WordPress", "React", "Next.js", "Claude AI", "WooCommerce", "Tailwind CSS", "TypeScript", "Node.js", "Cursor AI"];
const baseRow2 = ["PHP", "MySQL", "REST APIs", "OpenAI", "Framer Motion", "GraphQL", "Docker", "Figma", "Next.js"];

const toolsRow1 = [...baseRow1, ...baseRow1, ...baseRow1, ...baseRow1];
const toolsRow2 = [...baseRow2, ...baseRow2, ...baseRow2, ...baseRow2];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden w-full select-none">
      <motion.div
        animate={{ x: reverse ? ["-25%", "0%"] : ["0%", "-25%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-2 w-max"
      >
        {items.map((tool, i) => (
          <span
            key={i}
            className="px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-neutral-900 text-neutral-500 border border-neutral-800 whitespace-nowrap"
          >
            {tool}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-x-hidden" ref={ref}>
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-8 bg-neutral-800" />
          <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest">
            About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Content */}
          <div className="flex flex-col gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
            >
              Engineering the web <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                to work for your business.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 max-w-xl"
            >
              <p className="text-neutral-400 text-lg leading-relaxed">
                I am <span className="text-white font-medium">Omar Emad</span>, a developer who bridges the gap between <span className="text-neutral-200">clean code</span> and <span className="text-neutral-200">business objectives</span>. I specialize in building custom WordPress ecosystems and modern full-stack applications.
              </p>
              <p className="text-neutral-500 text-base leading-relaxed border-l border-neutral-800 pl-6">
                By integrating AI into my development workflow, I deliver complex solutions with high technical precision in significantly shorter timelines. No bloat, just performance-focused results.
              </p>
            </motion.div>

            {/* Tools Marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-bold mb-4">
                Core Technologies
              </p>
              <div className="flex flex-col gap-2 opacity-60">
                <MarqueeRow items={toolsRow1} />
                <MarqueeRow items={toolsRow2} reverse />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="p-6 rounded-2xl bg-neutral-950/50 border border-neutral-900 hover:border-neutral-800 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-4 group-hover:bg-white/[0.06] transition-colors">
                  <item.icon className="w-5 h-5 text-neutral-400" />
                </div>
                <h3 className="text-neutral-100 font-bold text-base mb-2">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
