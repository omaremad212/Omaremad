"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, ArrowUpRight, Sparkles } from "lucide-react";

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

function ProjectSlide({ project, index, range, scrollYProgress }: { project: Project; index: number; range: [number, number]; scrollYProgress: any }) {
  // We want the card to animate in, stay active, and then animate out
  // The 'active' window is when scrollYProgress is within our range.
  
  const opacity = useTransform(scrollYProgress, 
    [range[0] - 0.1, range[0], range[1], range[1] + 0.1], 
    [0, 1, 1, 0]
  );

  const scale = useTransform(scrollYProgress, 
    [range[0] - 0.1, range[0], range[1], range[1] + 0.1], 
    [0.8, 1, 1, 1.1]
  );

  const y = useTransform(scrollYProgress, 
    [range[0] - 0.1, range[0], range[1], range[1] + 0.1], 
    ["20%", "0%", "0%", "-20%"]
  );

  const rotateX = useTransform(scrollYProgress, 
    [range[0] - 0.1, range[0], range[1], range[1] + 0.1], 
    [15, 0, 0, -15]
  );

  return (
    <motion.div
      style={{ opacity, scale, y, rotateX, perspective: "1200px" }}
      className="absolute inset-0 flex items-center justify-center p-4 sm:p-8"
    >
      <div className="relative w-full max-w-6xl h-[75vh] md:h-[70vh] rounded-[2rem] md:rounded-[3rem] bg-[#080808] border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col lg:flex-row">
        
        {/* Visual Content (Left/Top) */}
        <div className="w-full lg:w-[65%] h-[45%] lg:h-full relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30" />
          
          {/* Project Counter */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
            <div className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-white/90">
              0{index + 1} — {projects.length}
            </div>
          </div>
        </div>

        {/* Textual Content (Right/Bottom) */}
        <div className="w-full lg:w-[35%] h-[55%] lg:h-full p-8 md:p-12 flex flex-col justify-between bg-neutral-950/20 backdrop-blur-xl border-t lg:border-t-0 lg:border-l border-white/[0.03] relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              {project.featured && (
                <span className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-yellow-500/90 tracking-widest px-2.5 py-1 rounded-full bg-yellow-500/5 border border-yellow-500/10">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </span>
              )}
              <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">Case Study</span>
            </div>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
              {project.title}
            </h3>
            
            <p className="text-neutral-500 text-base md:text-lg leading-relaxed mb-8 font-light max-w-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-bold text-neutral-400 bg-white/[0.03] border border-white/[0.05] px-3 py-1 rounded-md uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest transition-all"
            >
              <span>Visit Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-white/40 group-hover/btn:w-full transition-all duration-500" />
            </a>
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Glossy Overlay */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      id="projects" 
      ref={containerRef} 
      className="relative bg-black"
      style={{ height: `${projects.length * 100}vh` }}
    >
      {/* The Pinned Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Intro Text (Visible only at the start) */}
        <motion.div 
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]),
            y: useTransform(scrollYProgress, [0, 0.05], [0, -50])
          }}
          className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-neutral-800" />
            <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.5em]">Portfolio</span>
            <div className="h-px w-8 bg-neutral-800" />
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
            Selected Works
          </h2>
          <p className="text-neutral-600 mt-6 text-sm uppercase tracking-widest animate-pulse">
            Scroll to discover
          </p>
        </motion.div>

        {/* Project Slides */}
        <div className="relative w-full h-full">
          {projects.map((project, i) => {
            const step = 1 / projects.length;
            const start = i * step;
            const end = (i + 1) * step;
            return (
              <ProjectSlide 
                key={project.title} 
                project={project} 
                index={i} 
                range={[start, end]}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
        </div>

        {/* Background Atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
        </div>
      </div>
    </section>
  );
}
