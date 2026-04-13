"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

// =============================================================================
// [PROJECTS_PLACEHOLDER]
// Add your projects to this array. Each project should follow this shape:
//
// {
//   title: "Project Name",
//   description: "Short description of what the project does and the value it provides.",
//   image: "/projects/project-image.jpg", // Place image in /public/projects/
//   tags: ["WordPress", "WooCommerce", "Custom Theme"],
//   liveUrl: "https://your-project.com",
//   githubUrl: "https://github.com/your-repo", // optional, set to "" to hide
//   featured: true, // set to true to highlight this card
// }
//
// The grid is ready — just drop your projects in below.
// =============================================================================

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
};

const projects: Project[] = [
  // [PROJECTS_PLACEHOLDER] — Add your real projects here
  // Example structure (remove this block when adding real projects):
  {
    title: "Example: eCommerce Store",
    description:
      "A placeholder card. Replace this with your actual project details, description, and links.",
    image: "",
    tags: ["WordPress", "WooCommerce", "Custom Theme"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Example: AI Chatbot Integration",
    description:
      "Another placeholder card. Add a real screenshot, description, and live URL for your project.",
    image: "",
    tags: ["Next.js", "OpenAI", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Example: Business Dashboard",
    description:
      "Placeholder card. Replace with your real project — a dashboard, SaaS, or any web app you've built.",
    image: "",
    tags: ["React", "Node.js", "REST API"],
    liveUrl: "#",
    githubUrl: "",
    featured: false,
  },
];

// Tag color mapping
const tagColors: Record<string, string> = {
  WordPress: "bg-blue-900/40 text-blue-300 border-blue-500/20",
  WooCommerce: "bg-purple-900/40 text-purple-300 border-purple-500/20",
  "Custom Theme": "bg-slate-800 text-slate-300 border-slate-600/30",
  "Next.js": "bg-slate-900/80 text-slate-200 border-slate-600/30",
  OpenAI: "bg-emerald-900/40 text-emerald-300 border-emerald-500/20",
  TypeScript: "bg-blue-900/40 text-blue-300 border-blue-500/20",
  React: "bg-cyan-900/40 text-cyan-300 border-cyan-500/20",
  "Node.js": "bg-green-900/40 text-green-300 border-green-500/20",
  "REST API": "bg-orange-900/40 text-orange-300 border-orange-500/20",
};

function getTagClass(tag: string) {
  return (
    tagColors[tag] ||
    "bg-slate-800/80 text-slate-300 border-slate-600/30"
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative flex flex-col rounded-2xl bg-[#162032] card-border overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 ${
        project.featured ? "ring-1 ring-blue-500/30" : ""
      }`}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-bold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-sm">
          Featured
        </div>
      )}

      {/* Image / Placeholder */}
      <div className="relative w-full h-52 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Placeholder when no image is set */
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-slate-600">
            <FolderOpen className="w-10 h-10" />
            <span className="text-sm font-medium">
              {/* [PROJECTS_PLACEHOLDER] Add project screenshot */}
              Add screenshot
            </span>
          </div>
        )}

        {/* Overlay with links on hover */}
        <div className="absolute inset-0 bg-blue-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 font-semibold text-sm rounded-lg hover:bg-blue-50 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Site
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white font-semibold text-sm rounded-lg hover:bg-slate-700 transition-colors border border-slate-600"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md border ${getTagClass(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links row */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-300 transition-colors"
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

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

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
              Portfolio
            </span>
            <div className="h-px w-8 bg-blue-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4"
          >
            Projects I'm{" "}
            <span className="gradient-text">Proud Of</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Real projects, real results. Each one built to solve a specific
            business problem.
          </motion.p>
        </div>

        {/*
         * [PROJECTS_PLACEHOLDER]
         * The grid below renders project cards from the `projects` array above.
         * To add your projects:
         *   1. Add project objects to the `projects` array at the top of this file
         *   2. Place project screenshots in /public/projects/
         *   3. Remove or replace the placeholder example entries
         */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title + i} project={project} index={i} />
          ))}
        </div>

        {/* CTA below projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 text-sm mb-4">
            Want to see more or discuss a similar project?
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 border border-blue-500/40 text-blue-400 hover:text-white hover:bg-blue-500 font-semibold text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Let's Talk About Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
