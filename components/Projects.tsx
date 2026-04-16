"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
  category?: string;
};

const projects: Project[] = [
  {
    title: "C-VTAK",
    description:
      "A bold creative agency website with a striking visual identity — built to showcase the brand's portfolio, highlight key services, and make a strong first impression on every visitor.",
    image: "/projects/c-vtak.jpg",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://c-vtak.vercel.app/",
    featured: true,
    category: "Agency",
  },
  {
    title: "Amaralaa",
    description:
      "A polished e-commerce experience for the Amaralaa brand — combining a refined product layout, seamless WooCommerce integration, and a UI designed to drive sales and build trust.",
    image: "/projects/amaralaa.jpg",
    tags: ["WordPress", "WooCommerce", "PHP"],
    liveUrl: "https://amaralaa.vercel.app/",
    featured: true,
    category: "E-Commerce",
  },
  {
    title: "Enter Ten",
    description:
      "A high-impact entertainment platform — dynamic content sections, bold visuals, and a homepage designed to captivate audiences from the first scroll.",
    image: "/projects/enter-ten.jpg",
    tags: ["Next.js", "TypeScript", "REST API"],
    liveUrl: "https://www.enter-ten.com/",
    featured: true,
    category: "Entertainment",
  },
  {
    title: "Noqta",
    description:
      "Sharp and minimal — Noqta's platform highlights services with a clean dark aesthetic, fast load times, and a layout built to convert visitors into clients.",
    image: "/projects/noqta.jpg",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://noqta-rho.vercel.app/",
    category: "Services",
  },
  {
    title: "Faris Group",
    description:
      "A professional corporate website — structured to communicate credibility, present services clearly, and give clients an easy path to get in touch.",
    image: "/projects/faris-group.jpg",
    tags: ["WordPress", "ACF", "Custom Theme"],
    liveUrl: "https://farisgroup.vercel.app/",
    category: "Corporate",
  },
  {
    title: "Sparkle",
    description:
      "A Saudi-based beauty brand site — blending modern aesthetics with bilingual support and strong conversion-focused design for a growing online customer base.",
    image: "/projects/sparkle.jpg",
    tags: ["WordPress", "WooCommerce", "PHP"],
    liveUrl: "https://sparkle.net.sa/",
    category: "E-Commerce",
  },
  {
    title: "To Do List",
    description:
      "A clean and intuitive task management app — fast, distraction-free, and designed with a minimal UI that keeps you focused on what actually needs to get done.",
    image: "/projects/todo-list.jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://hanoush.vercel.app/",
    category: "App",
  },
];

const categoryColors: Record<string, string> = {
  Agency: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  "E-Commerce": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Entertainment: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  Services: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Corporate: "text-neutral-400 bg-neutral-400/10 border-neutral-400/20",
  App: "text-pink-400 bg-pink-400/10 border-pink-400/20",
};

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.07] bg-neutral-950 hover:border-white/[0.15] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60"
    >
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden bg-neutral-900">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800" />
        )}
        {/* Gradient fade into card body */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />

        {/* Category badge */}
        {project.category && (
          <div className={`absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold rounded-full border ${categoryColors[project.category] ?? "text-neutral-400 bg-neutral-800 border-neutral-700"}`}>
            {project.category}
          </div>
        )}

        {/* Live link button */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
        >
          <ArrowUpRight className="w-4 h-4 text-white" />
        </a>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-white font-bold text-lg leading-tight mb-2">{project.title}</h3>
        <p className="text-neutral-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] font-semibold rounded-md bg-white/[0.05] text-neutral-400 border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3.5 border-t border-white/[0.06]">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View Live
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-300 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function CompactCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative flex gap-4 rounded-xl p-4 border border-white/[0.06] bg-neutral-950/60 hover:border-white/[0.12] hover:bg-neutral-900/60 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-neutral-800">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-700" />
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="text-neutral-100 font-bold text-sm truncate">{project.title}</h3>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ArrowUpRight className="w-4 h-4 text-neutral-400 hover:text-white transition-colors" />
          </a>
        </div>

        {project.category && (
          <span className={`self-start px-2 py-0.5 text-[10px] font-bold rounded-full border mb-1.5 ${categoryColors[project.category] ?? "text-neutral-500 bg-neutral-800 border-neutral-700"}`}>
            {project.category}
          </span>
        )}

        <p className="text-neutral-600 text-xs leading-snug line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-1 mt-2">
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-1.5 py-0.5 text-[10px] rounded bg-white/[0.04] text-neutral-500 border border-white/[0.05]">
              {tag}
            </span>
          ))}
          {project.tags.length > 2 && (
            <span className="px-1.5 py-0.5 text-[10px] rounded bg-white/[0.04] text-neutral-600 border border-white/[0.05]">
              +{project.tags.length - 2}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-neutral-700" />
            <span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest">Portfolio</span>
            <div className="h-px w-8 bg-neutral-700" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight mb-4"
          >
            Projects I&apos;m Proud Of
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-500 text-lg max-w-xl mx-auto"
          >
            Real projects, real results. Each one built to solve a specific business problem.
          </motion.p>
        </div>

        {/* Featured projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {featured.map((project, i) => (
            <FeaturedCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-white/[0.05]" />
          <span className="text-neutral-700 text-xs font-semibold uppercase tracking-widest">More Work</span>
          <div className="flex-1 h-px bg-white/[0.05]" />
        </div>

        {/* Compact list for remaining projects */}
        <div className="grid sm:grid-cols-2 gap-3">
          {rest.map((project, i) => (
            <CompactCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-neutral-600 text-sm mb-4">Want to discuss a project or see more work?</p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 border border-neutral-700 hover:border-neutral-500 text-neutral-400 hover:text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.04]"
          >
            Let&apos;s Talk About Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
