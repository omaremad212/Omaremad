"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Rocket, Code, Users } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "WordPress Mastery",
    desc: "Custom themes, plugins, WooCommerce — built the right way.",
  },
  {
    icon: Brain,
    title: "AI-Powered Workflow",
    desc: "I use AI to ship faster without cutting corners on quality.",
  },
  {
    icon: Rocket,
    title: "Rapid Delivery",
    desc: "Most projects delivered in half the usual time, guaranteed.",
  },
  {
    icon: Users,
    title: "Client-First Thinking",
    desc: "Your business goals drive every decision I make.",
  },
];

const tools = [
  "WordPress",
  "React",
  "Next.js",
  "OpenAI",
  "WooCommerce",
  "Tailwind CSS",
  "PHP",
  "TypeScript",
  "Node.js",
  "Cursor AI",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Subtle divider gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-blue-500" />
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
            About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6 text-white"
            >
              Hi, I'm Omar.
              <br />
              <span className="gradient-text">I make the web work harder</span>
              <br />
              for you.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-5"
            >
              I'm a WordPress Developer and AI Fullstack Developer who builds
              websites that convert visitors into clients. With years of
              experience in WordPress and a modern AI-powered workflow, I deliver
              projects that are{" "}
              <span className="text-white font-semibold">
                faster, smarter, and more effective
              </span>{" "}
              than what most agencies offer — at a fraction of the cost.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-lg leading-relaxed mb-8"
            >
              Whether you need a polished business site, a WooCommerce store, or
              a custom AI-integrated web app, I bring deep technical skill and a
              sharp business eye to every project.
            </motion.p>

            {/* Tools I use */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3">
                Tools & Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-blue-500/40 hover:text-blue-300 transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/*
             * [PROJECTS_PLACEHOLDER]
             * Add featured project highlights or a mini project showcase here.
             * Example: A row of 2-3 featured project thumbnails with links.
             */}
          </div>

          {/* Right — highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group p-6 rounded-2xl bg-[#162032] card-border hover:bg-[#1a2540] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
