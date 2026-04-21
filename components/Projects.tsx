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

function ProjectSlide({ project, index, total, scrollYProgress }: { project: Project; index: number; total: number; scrollYProgress: any }) {
  // Logic: 
  // 0.0 to 0.15 is Intro
  // The rest (0.15 to 1.0) is divided among projects
  const sectionStart = 0.15 + (index / total) * 0.85;
  const sectionEnd = 0.15 + ((index + 1) / total) * 0.85;
  
  // Entering: starts before sectionStart, finishes at sectionStart
  // Active: sectionStart to sectionEnd
  // Exiting: starts at sectionEnd, finishes after sectionEnd
  
  const enterRange = [sectionStart - 0.1, sectionStart];
  const exitRange = [sectionEnd, sectionEnd + 0.1];

  const opacity = useTransform(scrollYProgress, 
    [enterRange[0], sectionStart, sectionEnd, exitRange[1]], 
    [0, 1, 1, 0]
  );

  const scale = useTransform(scrollYProgress, 
    [enterRange[0], sectionStart, sectionEnd, exitRange[1]], 
    [0.8, 1, 1, 0.9]
  );

  const rotateX = useTransform(scrollYProgress, 
    [enterRange[0], sectionStart, sectionEnd, exitRange[1]], 
    [20, 0, 0, -20]
  );

  const y = useTransform(scrollYProgress, 
    [enterRange[0], sectionStart, sectionEnd, exitRange[1]], 
    ["15%", "0%", "0%", "-15%"]
  );

  return (
    <motion.div
      style={{ 
        opacity, 
        scale, 
        rotateX, 
        y, 
        perspective: "1200px",
        zIndex: index + 10
      }}
      className="absolute inset-0 flex items-center justify-center p-4 sm:p-10 pointer-events-none"
    >
      <div className="relative w-full max-w-6xl h-[75vh] md:h-[70vh] rounded-[2rem] md:rounded-[3rem] bg-[#0A0A0A] border border-white/[0.08] shadow-[0_60px_120px_rgba(0,0,0,1)] overflow-hidden flex flex-col lg:flex-row pointer-events-auto">
        
        {/* Visual Side */}
        <div className="w-full lg:w-[60%] h-[40%] lg:h-full relative overflow-hidden group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/40" />
          
          <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
            <div className="px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-white">
              Project {index + 1} / {total}
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-[40%] h-[60%] lg:h-full p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-neutral-950/40 backdrop-blur-3xl relative z-10 border-t lg:border-t-0 lg:border-l border-white/[0.03]">
          <div>
            <div className="flex items-center gap-2 mb-8">
              {project.featured && (
                <span className="flex items-center gap-1.5 text-[9px] uppercase font-black text-yellow-500 tracking-[0.2em] px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
                  <Sparkles className="w-2.5 h-2.5" />
                  Featured
                </span>
              )}
              <span className="text-[9px] uppercase font-black text-neutral-600 tracking-[0.2em]">Full Case Study</span>
            </div>

            <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[0.85] tracking-tighter">
              {project.title}
            </h3>
            
            <p className="text-neutral-500 text-base md:text-lg leading-relaxed mb-8 font-light max-w-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-bold text-neutral-400 bg-white/[0.03] border border-white/[0.05] px-3 py-1 rounded-md uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.3em] transition-all"
            >
              <span>Visit Site</span>
              <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300 text-neutral-400 group-hover/btn:text-white" />
              <div className="absolute -bottom-2 left-0 w-0 h-px bg-white/60 group-hover/btn:w-full transition-all duration-500" />
            </a>
            
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-all hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02),transparent_40%)]" />
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

  // Calculate the total height: 100vh for intro + 100vh for each project + 50vh for buffer
  const totalSteps = projects.length + 1.5;

  return (
    <section 
      id="projects" 
      ref={containerRef} 
      className="relative bg-black"
      style={{ height: `${totalSteps * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Unified Background Atmos */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_80%)]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
        </div>

        {/* ── Heading (Step 0) ─────────────────────────────────── */}
        <motion.div 
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.1, 0.15], [0, 1, 0]),
            scale: useTransform(scrollYProgress, [0, 0.1, 0.15], [0.9, 1, 1.1]),
            y: useTransform(scrollYProgress, [0, 0.1, 0.15], [20, 0, -20])
          }}
          className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none px-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-neutral-800" />
            <span className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.6em]">Portfolio</span>
            <div className="h-px w-10 bg-neutral-800" />
          </div>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter text-center leading-none">
            Selected <br /> <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700">Works</span>
          </h2>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-12 text-[10px] font-bold text-neutral-600 uppercase tracking-[0.4em]"
          >
            Scroll to Navigate
          </motion.div>
        </motion.div>

        {/* ── Project Slides ──────────────────────────────────── */}
        <div className="relative w-full h-full">
          {projects.map((project, i) => (
            <ProjectSlide 
              key={project.title} 
              project={project} 
              index={i} 
              total={projects.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
