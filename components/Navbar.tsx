"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "Home",     href: "#"         },
  { label: "About",    href: "#about"    },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Me",   href: "#why-me"   },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const pathname = usePathname();
  const router   = useRouter();
  const isHome   = pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "#") {
      if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
      else router.push("/");
      return;
    }
    if (isHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${href}`);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
      >
        <div 
          className={`w-full max-w-6xl transition-all duration-700 ease-in-out border flex items-center justify-between h-16 px-6 relative overflow-hidden ${
            isScrolled 
              ? "bg-[#0a0908]/80 backdrop-blur-3xl border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
              : "bg-[#141210]/60 backdrop-blur-xl border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          }`}
          style={{ borderRadius: '24px' }}
        >
          {/* Subtle Glossy Reflection Effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {/* ── Logo (left) ─────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0 z-10">
            <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
              <Code2 className="w-4 h-4 text-white/80" />
            </div>
            <span className="font-bold text-lg text-white/90 tracking-tight">
              Omar<span className="text-neutral-500">.</span>dev
            </span>
          </Link>

          {/* ── Nav links – Integrated (center) ──────────── */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => {
                  if (isHome) { e.preventDefault(); handleNavClick(link.href); }
                }}
                className="px-5 py-2 text-[13px] font-medium text-neutral-400 hover:text-white transition-all duration-300 whitespace-nowrap relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </a>
            ))}
          </nav>

          {/* ── Hire Me (right, desktop) ─────────────────────────── */}
          <Link
            href="/contact"
            className="hidden md:inline-flex flex-shrink-0 px-6 py-2 text-[13px] font-bold bg-white hover:bg-neutral-100 text-black rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 z-10"
          >
            Hire Me
          </Link>

          {/* ── Mobile hamburger ─────────────────────────────────── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.07] transition-all flex-shrink-0 z-10"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="block"
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="block"
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ── Full-screen mobile menu ───────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden fixed inset-0 z-40 bg-black/97 backdrop-blur-2xl flex flex-col pt-16"
          >
            {/* Nav links — centered */}
            <nav className="flex-1 flex flex-col justify-center items-center gap-0 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={(e) => {
                    if (isHome) e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.06 + i * 0.07,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-3xl font-black text-neutral-500 hover:text-white transition-colors duration-200 py-4 w-full text-center"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Hire Me CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 pb-14 pt-6 border-t border-white/[0.05]"
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full py-4 bg-white text-black font-bold text-base rounded-2xl text-center hover:bg-neutral-100 transition-colors"
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
