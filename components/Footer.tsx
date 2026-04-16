"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { useEffect, useRef, useState } from "react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="17.5" cy="6.5" r="0.01" fill="currentColor" strokeWidth={2.5} />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [splineVisible, setSplineVisible] = useState(false);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setSplineVisible(true); observer.disconnect(); } },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const today = new Date();
  const dateStr = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

  return (
    <footer className="relative border-t border-neutral-900/60 overflow-hidden">
      <div ref={triggerRef} aria-hidden />

      {/* ── Main footer grid: columns | robot | contact ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-10 items-center">

          {/* LEFT — info columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            {/* SOCIALS */}
            <div className="flex flex-col gap-2">
              <p className="text-neutral-300 font-semibold uppercase tracking-widest text-xs mb-1">Socials</p>
              <a href="https://github.com/omaremad212" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-300 transition-colors">Github</a>
              <a href="https://www.linkedin.com/in/omar-emad-4b361327b" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-300 transition-colors">LinkedIn</a>
              <a href="https://wa.me/201143811263" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-300 transition-colors">WhatsApp</a>
              <a href="mailto:oemad8637@gmail.com" className="text-neutral-600 hover:text-neutral-300 transition-colors">Email</a>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-2">
              <p className="text-neutral-300 font-semibold uppercase tracking-widest text-xs mb-1">Links</p>
              <Link href="/" className="text-neutral-600 hover:text-neutral-300 transition-colors">Home</Link>
              <Link href="/#about" className="text-neutral-600 hover:text-neutral-300 transition-colors">About</Link>
              <Link href="/#projects" className="text-neutral-600 hover:text-neutral-300 transition-colors">Projects</Link>
              <Link href="/contact" className="text-neutral-600 hover:text-neutral-300 transition-colors">Contact</Link>
            </div>

            {/* LOCATED TIME */}
            <div className="flex flex-col gap-2">
              <p className="text-neutral-300 font-semibold uppercase tracking-widest text-xs mb-1">Located Time</p>
              <span className="text-neutral-600">Cairo, Egypt</span>
              <span className="text-neutral-600">{dateStr}</span>
            </div>

            {/* VERSION */}
            <div className="flex flex-col gap-2">
              <p className="text-neutral-300 font-semibold uppercase tracking-widest text-xs mb-1">Version</p>
              <span className="text-neutral-600">2026 @ Edition</span>
            </div>
          </div>

          {/* RIGHT — contact buttons */}
          <div className="flex flex-col gap-3 items-start lg:items-end">
            <a
              href="tel:+201143811263"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-neutral-200 hover:border-neutral-600 transition-all text-sm whitespace-nowrap"
            >
              +20 1143811263
            </a>
            <a
              href="mailto:oemad8637@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-neutral-200 hover:border-neutral-600 transition-all text-sm whitespace-nowrap"
            >
              oemad8637@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* ── Robot centered ── */}
      <div className="flex justify-center -mb-6">
        <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]">
          {splineVisible && (
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          )}
        </div>
      </div>

      {/* ── Big ghost name ── */}
      <div className="w-full overflow-hidden select-none">
        <p
          className="text-center font-black uppercase tracking-tighter leading-none text-white/[0.07]"
          style={{ fontSize: "clamp(5rem, 18vw, 16rem)" }}
        >
          OMAR
        </p>
      </div>

      {/* ── Minimal copyright ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="pt-4 border-t border-neutral-900/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-700">
          <p>&copy; {new Date().getFullYear()} Omar Emad. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-neutral-500 fill-neutral-500 mx-0.5" /> using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
