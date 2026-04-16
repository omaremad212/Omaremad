"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
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
    badge: "Most Popular",
  },
  {
    icon: Bot,
    title: "AI-Powered Web Solutions",
    tagline: "Give your website a brain.",
    description:
      "Integrate AI into your workflows, automate repetitive tasks, and build intelligent features that make your business run faster.",
    features: [
      "Claude & OpenAI integration",
      "AI chatbots & automation",
      "Smart content generation",
      "Workflow automation & APIs",
    ],
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
    badge: null,
  },
];

function ServiceCard({ service, index, isInView }: { service: typeof services[0]; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.12, type: "spring", stiffness: 90, damping: 20 }}
      onMouseMove={handleMouseMove}
      className="card-spotlight group relative p-7 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 overflow-hidden"
    >
      {service.badge && (
        <div className="absolute top-4 right-4 px-2.5 py-1 text-xs font-bold rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700 z-10">
          {service.badge}
        </div>
      )}

      <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-5 group-hover:bg-white/[0.09] group-hover:border-white/[0.15] transition-all duration-300 relative z-10">
        <service.icon className="w-6 h-6 text-neutral-300" />
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider mb-1 text-neutral-600 relative z-10">
        {service.tagline}
      </p>
      <h3 className="text-neutral-100 font-bold text-xl mb-3 relative z-10">{service.title}</h3>
      <p className="text-neutral-500 text-sm leading-relaxed mb-5 relative z-10">{service.description}</p>

      <ul className="space-y-2 mb-6 relative z-10">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-neutral-400">
            <Check className="w-4 h-4 flex-shrink-0 text-neutral-500" />
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        className="flex items-center gap-2 text-sm font-semibold text-neutral-400 hover:text-white transition-colors group/btn relative z-10"
      >
        Get a Quote
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
      </button>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
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
            <span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest">Services</span>
            <div className="h-px w-8 bg-neutral-700" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight mb-4"
          >
            What I Can Build For You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-500 text-lg max-w-2xl mx-auto"
          >
            Every service is designed with one goal: help your business grow
            online — faster, smarter, and without the usual headaches.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
