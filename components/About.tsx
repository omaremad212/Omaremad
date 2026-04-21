"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Brain, Rocket, Code, Users, Cpu, Globe, Zap, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "WordPress Mastery",
    desc: "Bespoke themes and architecture. Scalable, performant, and pixel-perfect.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Brain,
    title: "AI Integrations",
    desc: "Leveraging LLMs to automate complexity and build intelligent interfaces.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Rocket,
    title: "Performance First",
    desc: "Speed is a feature. I optimize every byte for conversion and SEO.",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Sparkles,
    title: "Premium Design",
    desc: "Aesthetic precision combined with functional excellence.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

const baseRow1 = ["WordPress", "React", "Next.js", "Claude AI", "WooCommerce", "Tailwind CSS", "TypeScript", "Node.js", "Cursor AI", "Framer Motion"];
const baseRow2 = ["PHP", "MySQL", "REST APIs", "OpenAI", "Python", "GraphQL", "Docker", "Figma", "Redux", "PostgreSQL"];

const toolsRow1 = [...baseRow1, ...baseRow1];
const toolsRow2 = [...baseRow2, ...baseRow2];

function ToolChip({ tool }: { tool: string }) {
  return (
    <div className="group relative px-5 py-2.5 rounded-full bg-neutral-900/40 backdrop-blur-md border border-white/5 hover:border-white/20 transition-all duration-500 cursor-default">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="relative text-sm font-medium text-neutral-500 group-hover:text-neutral-200 transition-colors duration-300 whitespace-nowrap">
        {tool}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden w-full mask-fade-edges">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex gap-4 w-max py-4"
      >
        {items.map((tool, i) => (
          <ToolChip key={i} tool={tool} />
        ))}
      </motion.div>
    </div>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-32 overflow-hidden bg-[#030303]" 
      ref={containerRef}
    >
      {/* ── Atmospheric Atmosphere ─────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20 items-start">
          
          {/* ── Left Content ─────────────────────────────────────────── */}
          <div className="sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-neutral-800 to-transparent" />
              <span className="text-neutral-500 text-xs font-bold uppercase tracking-[0.3em]">
                The Architect
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-black leading-[1.1] mb-10 tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                Bridging the gap 
              </span>
              <br />
              <span className="text-white">between </span>
              <span className="italic font-serif text-neutral-400">code </span>
              <span className="text-white">&amp; </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600">
                capital.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 max-w-xl"
            >
              <p className="text-neutral-400 text-xl leading-relaxed font-light">
                I am <span className="text-white font-medium">Omar Emad</span>, a digital engineer specializing 
                in high-conversion WordPress ecosystems and AI-driven full-stack applications.
              </p>
              <p className="text-neutral-500 text-lg leading-relaxed">
                My workflow integrates <span className="text-neutral-300">Generative AI</span> at the architectural level, 
                allowing me to build complex, enterprise-grade solutions with the agility of a startup. 
                I don&apos;t just write code; I design systems that scale your bottom line.
              </p>
            </motion.div>

            {/* Premium Tools Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-20"
            >
              <div className="flex items-center gap-4 mb-6">
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 font-bold">
                  Core Stack
                </p>
                <div className="flex-1 h-px bg-neutral-900" />
              </div>
              <div className="flex flex-col gap-1 -mx-24 lg:-mx-0">
                <MarqueeRow items={toolsRow1} />
                <MarqueeRow items={toolsRow2} reverse />
              </div>
            </motion.div>
          </div>

          {/* ── Right Feature Cards ─────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 pt-10 lg:pt-0">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60, rotateX: 15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + i * 0.15, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative group p-8 rounded-[2rem] bg-neutral-950/40 border border-white/[0.03] hover:border-white/10 transition-all duration-500 backdrop-blur-sm overflow-hidden"
              >
                {/* Glossy inner glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-2xl">
                    <item.icon className="w-6 h-6 text-white/70" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-400 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="w-4 h-4 text-white/20" />
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>

      {/* ── Section Transition ─────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
