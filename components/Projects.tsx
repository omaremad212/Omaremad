"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

// =============================================================================
// [PROJECTS_PLACEHOLDER]
// Add your projects to this array. Each project should follow this shape:
//
// {
//   title: "Project Name",
//   description: "Short description of what the project does.",
//   image: "/projects/project-image.jpg", // Place image in /public/projects/
//   tags: ["WordPress", "WooCommerce", "Custom Theme"],
//   liveUrl: "https://your-project.com",
//   githubUrl: "https://github.com/your-repo", // optional
//   featured: true,
// }
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
  // [PROJECTS_PLACEHOLDER] — Replace these examples with your real projects
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
      "Another placeholder. Add a real screenshot, description, and live URL for your project.",
    image: "",
    tags: ["Next.js", "OpenAI", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Example: Business Dashboard",
    description:
      "Placeholder card. Replace with a real dashboard, SaaS app, or web project you've built.",
    image: "",
    tags: ["React", "Node.js", "REST API"],
    liveUrl: "#",
    githubUrl: "",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative flex flex-col rounded-2xl bg-black/[0.96] overflow-hidden border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 ${
        project.featured ? "ring-1 ring-white/10" : ""
      }`}
    >
      {project.featured && (
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-bold rounded-full bg-neutral-800/80 text-neutral-300 border border-neutral-700 backdrop-blur-sm">
          Featured
        </div>
      )}

      {/* Image / Placeholder */}
      <div className="relative w-full h-52 bg-neutral-900 overflow-hidden">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-neutral-700">
            <FolderOpen className="w-10 h-10" />
            <span className="text-sm font-medium">
              {/* [PROJECTS_PLACEHOLDER] Add project screenshot */}
              Add screenshot
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-black font-semibold text-sm rounded-lg hover:bg-neutral-100 transition-colors"
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
              className="flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white font-semibold text-sm rounded-lg hover:bg-neutral-700 transition-colors border border-neutral-600"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-neutral-100 font-bold text-lg mb-2">{project.title}</h3>
        <p className="text-neutral-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-semibold rounded-md bg-neutral-900 text-neutral-400 border border-neutral-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-neutral-800/60">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
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
              className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-300 transition-colors"
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
    <section id="projects" className="section-padding relative bg-black" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
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
            Projects I'm Proud Of
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-500 text-lg max-w-2xl mx-auto"
          >
            Real projects, real results. Each one built to solve a specific business problem.
          </motion.p>
        </div>

        {/*
         * [PROJECTS_PLACEHOLDER]
         * Grid renders cards from the `projects` array above.
         * Add your real projects there — screenshots go in /public/projects/
         */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title + i} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-600 text-sm mb-4">
            Want to see more or discuss a similar project?
          </p>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 border border-neutral-700 hover:border-neutral-500 text-neutral-400 hover:text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.04]"
          >
            Let's Talk About Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
