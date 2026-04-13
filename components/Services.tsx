"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Bot, LayoutDashboard, ArrowRight, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "WordPress Development",
    tagline: "Your business deserves more than a template.",
    description:
      "Custom WordPress themes and plugins built from the ground up. WooCommerce stores, membership sites, speed optimization — done right.",
    features: [
      "Custom theme & plugin development",
      "WooCommerce / eCommerce stores",
      "Performance optimization",
      "Elementor / ACF / Gutenberg",
    ],
    color: "from-blue-500/10 to-blue-600/5",
    border: "group-hover:border-blue-500/50",
    iconBg: "bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20",
    iconColor: "text-blue-400",
    badge: "Most Popular",
  },
  {
    icon: Bot,
    title: "AI-Powered Web Solutions",
    tagline: "Give your website a brain.",
    description:
      "Integrate AI into your workflows, automate repetitive tasks, and build intelligent features that make your business run faster.",
    features: [
      "OpenAI / ChatGPT integration",
      "AI chatbots & automation",
      "Smart content generation",
      "Workflow automation & APIs",
    ],
    color: "from-cyan-500/10 to-cyan-600/5",
    border: "group-hover:border-cyan-500/50",
    iconBg: "bg-cyan-500/10 border-cyan-500/20 group-hover:bg-cyan-500/20",
    iconColor: "text-cyan-400",
    badge: "Trending",
  },
  {
    icon: LayoutDashboard,
    title: "Full Stack Development",
    tagline: "Modern web apps, built to scale.",
    description:
      "From Next.js frontends to REST APIs and custom dashboards — I build complete web applications that are fast, secure, and maintainable.",
    features: [
      "Next.js / React applications",
      "REST APIs & backend services",
      "Admin dashboards & portals",
      "Database design & integration",
    ],
    color: "from-violet-500/10 to-violet-600/5",
    border: "group-hover:border-violet-500/50",
    iconBg: "bg-violet-500/10 border-violet-500/20 group-hover:bg-violet-500/20",
    iconColor: "text-violet-400",
    badge: null,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

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
              Services
            </span>
            <div className="h-px w-8 bg-blue-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4"
          >
            What I Can Build{" "}
            <span className="gradient-text">For You</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Every service is designed with one goal: help your business grow
            online — faster, smarter, and without the usual headaches.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className={`group relative p-7 rounded-2xl bg-gradient-to-br ${service.color} bg-[#162032] border border-slate-700/40 ${service.border} hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 card-border overflow-hidden`}
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4 px-2.5 py-1 text-xs font-bold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {service.badge}
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${service.iconBg} transition-colors duration-300`}
              >
                <service.icon className={`w-6 h-6 ${service.iconColor}`} />
              </div>

              {/* Title & tagline */}
              <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${service.iconColor} opacity-70`}>
                {service.tagline}
              </p>
              <h3 className="text-white font-bold text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <Check className={`w-4 h-4 flex-shrink-0 ${service.iconColor}`} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`flex items-center gap-2 text-sm font-semibold ${service.iconColor} group/btn`}
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
