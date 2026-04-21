"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react";

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
  {
    title: "C-VTAK",
    description: "A bold creative agency website with a striking visual identity — built to showcase the brand's portfolio and highlight key services.",
    image: "/projects/c-vtak.jpg",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://c-vtak.vercel.app/",
    featured: true,
  },
  {
    title: "Amaralaa",
    description: "A polished e-commerce experience combining a refined product layout and seamless WooCommerce integration.",
    image: "/projects/amaralaa.jpg",
    tags: ["WordPress", "WooCommerce", "PHP"],
    liveUrl: "https://amaralaa.vercel.app/",
    featured: true,
  },
  {
    title: "Noqta",
    description: "Sharp and minimal — Noqta's platform highlights services with a clean dark aesthetic and fast load times.",
    image: "/projects/noqta.jpg",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://noqta-rho.vercel.app/",
  },
  {
    title: "Enter Ten",
    description: "A high-impact entertainment platform with dynamic content sections and bold visuals designed to captivate.",
    image: "/projects/enter-ten.jpg",
    tags: ["Next.js", "TypeScript", "REST API"],
    liveUrl: "https://www.enter-ten.com/",
    featured: true,
  },
  {
    title: "Sparkle",
    description: "A Saudi-based beauty brand site blending modern aesthetics with bilingual support and conversion-focused design.",
    image: "/projects/sparkle.jpg",
    tags: ["WordPress", "WooCommerce", "PHP"],
    liveUrl: "https://sparkle.net.sa/",
  },
];

function HorizontalProjectCard({ project, index, progress, targetScale }: { project: Project; index: number; progress: any; targetScale: number }) {
  const containerRef = useRef(null);
  
  // Create unique depth effects based on progress
  const scale = useTransform(progress, [0, 1], [1, targetScale]);
  const rotate = useTransform(progress, [0, 1], [0, index % 2 === 0 ? -2 : 2]);
  const opacity = useTransform(progress, [0, 0.8, 1], [1, 1, 0.6]);

  return (
    <div className="h-screen sticky top-0 flex items-center justify-center">
      <motion.div
        style={{ scale, rotate, opacity }}
        className="relative w-full max-w-5xl h-[70vh] rounded-[2.5rem] bg-[#0A0A0A] border border-white/[0.05] shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col lg:flex-row group"
      >
        {/* Visual Content */}
        <div className="lg:w-[60%] h-full relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/20" />
        </div>

        {/* Textual Content */}
        <div className="lg:w-[40%] h-full p-8 lg:p-12 flex flex-col justify-between bg-neutral-950/40 backdrop-blur-md relative z-10 border-l border-white/[0.03]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Project 0{index + 1}
              </div>
              {project.featured && (
                <div className="flex items-center gap-1.5 text-xs text-yellow-500/80 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Featured
                </div>
              )}
            </div>

            <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
              {project.title}
            </h3>
            
            <p className="text-neutral-500 text-lg leading-relaxed mb-8 font-light">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-bold text-neutral-400 bg-white/[0.02] border border-white/[0.05] px-3 py-1 rounded-full uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group/link text-white font-bold text-sm tracking-tight"
            >
              <span>Visit Live Site</span>
              <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Dynamic Shadow Accent */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" ref={containerRef} className="relative bg-black">
      {/* Introduction */}
      <div className="h-[40vh] flex flex-col items-center justify-end pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-neutral-800" />
          <span className="text-neutral-500 text-xs font-bold uppercase tracking-[0.4em]">Portfolio</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 tracking-tight"
        >
          Selected Works
        </motion.h2>
      </div>

      {/* Projects Stack */}
      <div className="px-4 sm:px-8">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <HorizontalProjectCard 
              key={project.title} 
              project={project} 
              index={i} 
              progress={scrollYProgress}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="h-[50vh] flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-neutral-500 text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Ready to build something iconic? Let&apos;s turn your vision into a digital reality.
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Start a Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
