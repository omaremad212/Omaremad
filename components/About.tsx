"use client";

import { motion, useInView } from "framer-motion";
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
    desc: "Most projects delivered in half the usual time.",
  },
  {
    icon: Users,
    title: "Client-First Thinking",
    desc: "Your business goals drive every decision I make.",
  },
];

const tools = [
  "WordPress", "React", "Next.js", "OpenAI",
  "WooCommerce", "Tailwind CSS", "PHP", "TypeScript", "Node.js", "Cursor AI",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative bg-black" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-neutral-600" />
          <span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest">
            About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >
              Hi, I'm Omar.
              <br />
              I make the web work
              <br />
              harder for you.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-400 text-lg leading-relaxed mb-5"
            >
              I'm a WordPress Developer and AI Fullstack Developer who builds
              websites that convert visitors into clients. With a modern
              AI-powered workflow, I deliver projects that are{" "}
              <span className="text-neutral-200 font-semibold">
                faster, smarter, and more effective
              </span>{" "}
              than what most agencies offer — at a fraction of the cost.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-400 text-lg leading-relaxed mb-8"
            >
              Whether you need a polished business site, a WooCommerce store, or
              a custom AI-integrated web app, I bring deep technical skill and a
              sharp business eye to every project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-xs uppercase tracking-widest text-neutral-600 font-semibold mb-3">
                Tools & Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-neutral-600 hover:text-neutral-200 transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/*
             * [PROJECTS_PLACEHOLDER]
             * Add featured project highlights or mini thumbnails here.
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
                className="group p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-4 group-hover:bg-white/[0.08] transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-neutral-300" />
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
