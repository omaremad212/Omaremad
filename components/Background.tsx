"use client";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>

      {/* ── Grid lines — pure white on black ─────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Animated grey clouds — blur applied ONCE by GPU ──────── */}
      <div
        style={{
          position: "absolute",
          inset: "-15%",
          filter: "blur(100px)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        {/* Cloud 1 — large, centre-left */}
        <div style={{
          position: "absolute",
          width: "65%", height: "58%",
          top: "16%", left: "10%",
          background: "radial-gradient(ellipse at 45% 45%, rgba(160,160,160,0.5) 0%, rgba(80,80,80,0.15) 55%, transparent 72%)",
          borderRadius: "62% 38% 54% 46% / 50% 62% 38% 50%",
          willChange: "transform",
          animation: "bg-blob-1 26s ease-in-out infinite",
        }} />

        {/* Cloud 2 — top right */}
        <div style={{
          position: "absolute",
          width: "52%", height: "48%",
          top: "-4%", right: "-2%",
          background: "radial-gradient(ellipse at 58% 48%, rgba(130,130,130,0.42) 0%, rgba(60,60,60,0.1) 55%, transparent 70%)",
          borderRadius: "42% 58% 46% 54% / 56% 44% 60% 40%",
          willChange: "transform",
          animation: "bg-blob-2 32s ease-in-out infinite -9s",
        }} />

        {/* Cloud 3 — bottom left */}
        <div style={{
          position: "absolute",
          width: "50%", height: "52%",
          bottom: "-5%", left: "-3%",
          background: "radial-gradient(ellipse at 44% 56%, rgba(140,140,140,0.38) 0%, rgba(70,70,70,0.1) 55%, transparent 70%)",
          borderRadius: "56% 44% 50% 50% / 46% 56% 44% 54%",
          willChange: "transform",
          animation: "bg-blob-3 22s ease-in-out infinite -5s",
        }} />

        {/* Cloud 4 — right-centre */}
        <div style={{
          position: "absolute",
          width: "42%", height: "44%",
          top: "38%", right: "1%",
          background: "radial-gradient(ellipse, rgba(120,120,120,0.32) 0%, transparent 64%)",
          borderRadius: "50%",
          willChange: "transform",
          animation: "bg-blob-4 28s ease-in-out infinite -14s",
        }} />

        {/* Cloud 5 — top-left accent */}
        <div style={{
          position: "absolute",
          width: "38%", height: "38%",
          top: "2%", left: "2%",
          background: "radial-gradient(ellipse at 54% 46%, rgba(125,125,125,0.30) 0%, transparent 65%)",
          borderRadius: "46% 54% 60% 40% / 60% 40% 56% 44%",
          willChange: "transform",
          animation: "bg-blob-5 36s ease-in-out infinite -7s",
        }} />
      </div>

      {/* ── Corner radial glows — black → grey ───────────────────── */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(ellipse 65% 50% at 15% 15%, rgba(150,150,150,0.11) 0%, transparent 70%),
          radial-gradient(ellipse 50% 40% at 85%  8%, rgba(130,130,130,0.08) 0%, transparent 65%),
          radial-gradient(ellipse 55% 45% at 88% 88%, rgba(120,120,120,0.08) 0%, transparent 65%)
        `,
      }} />

      {/* ── Centre vignette — deep black in the middle ───────────── */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 20%, rgba(0,0,0,0.65) 100%)",
      }} />

      {/* ── Noise grain ──────────────────────────────────────────── */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
        backgroundSize: 200,
        backgroundRepeat: "repeat",
        opacity: 0.045,
      }} />
    </div>
  );
}
