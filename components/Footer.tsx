"use client";

import Link from "next/link";
import { Code2, Heart, Github, Linkedin } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Why Me", href: "/#why-me" },
  { label: "Contact", href: "/contact" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="17.5" cy="6.5" r="0.01" fill="currentColor" strokeWidth={2.5} />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [splineVisible, setSplineVisible] = useState(false);

  // Only load the Spline scene when the footer is close to the viewport
  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSplineVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" } // start loading 300px before it enters view
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="relative border-t border-neutral-900/60 overflow-hidden">

      {/* Trigger sentinel — invisible, sits at top of footer */}
      <div ref={triggerRef} aria-hidden />

      {/* ── Robot section ── */}
      <div className="flex flex-col items-center pt-12 pb-0">
        {/* Robot — fixed height so layout never shifts */}
        <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]">
          {splineVisible && (
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          )}
        </div>

        {/* Big ghost name — OMAR only */}
        <div className="w-full overflow-hidden select-none -mt-6">
          <p
            className="text-center font-black uppercase tracking-tighter leading-none text-white/[0.07]"
            style={{ fontSize: "clamp(5rem, 18vw, 16rem)" }}
          >
            OMAR
          </p>
        </div>
      </div>

      {/* ── Standard footer content (always below robot + text) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-neutral-300" />
              </div>
              <span className="font-bold text-neutral-200 text-lg tracking-tight">
                Omar<span className="text-neutral-600">.</span>dev
              </span>
            </div>
            <p className="text-neutral-600 text-sm text-center md:text-left max-w-xs">
              Building fast, smart websites powered by AI — that actually grow your business.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 hover:text-neutral-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/omaremad212"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-neutral-200 hover:border-neutral-700 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/omar-emad-4b361327b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-neutral-200 hover:border-neutral-700 transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/omaremad212/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-neutral-200 hover:border-neutral-700 transition-all duration-200"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/201143811263"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-green-400 hover:border-neutral-700 transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-neutral-900/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-700">
          <p>&copy; {new Date().getFullYear()} Omar Emad. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-neutral-500 fill-neutral-500 mx-0.5" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
