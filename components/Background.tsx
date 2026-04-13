"use client";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>

      {/* ── Grid lines ───────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Grey cloud blobs — filter:blur applied once by GPU ───── */}
      <div
        style={{
          position: "absolute",
          inset: "-15%",
          filter: "blur(90px)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        {/* Cloud 1 — large centre-left */}
        <div
          style={{
            position: "absolute",
            width: "60%", height: "55%",
            top: "18%", left: "12%",
            background: "radial-gradient(ellipse at 45% 45%, rgba(135,135,135,0.45) 0%, rgba(90,90,90,0.12) 55%, transparent 72%)",
            borderRadius: "62% 38% 54% 46% / 50% 62% 38% 50%",
            willChange: "transform",
            animation: "bg-blob-1 26s ease-in-out infinite",
          }}
        />

        {/* Cloud 2 — top right */}
        <div
          style={{
            position: "absolute",
            width: "50%", height: "45%",
            top: "-5%", right: "-3%",
            background: "radial-gradient(ellipse at 58% 48%, rgba(115,115,115,0.38) 0%, transparent 65%)",
            borderRadius: "42% 58% 46% 54% / 56% 44% 60% 40%",
            willChange: "transform",
            animation: "bg-blob-2 32s ease-in-out infinite -9s",
          }}
        />

        {/* Cloud 3 — bottom left */}
        <div
          style={{
            position: "absolute",
            width: "48%", height: "50%",
            bottom: "-6%", left: "-4%",
            background: "radial-gradient(ellipse at 44% 56%, rgba(125,125,125,0.35) 0%, transparent 65%)",
            borderRadius: "56% 44% 50% 50% / 46% 56% 44% 54%",
            willChange: "transform",
            animation: "bg-blob-3 22s ease-in-out infinite -5s",
          }}
        />

        {/* Cloud 4 — right-centre accent */}
        <div
          style={{
            position: "absolute",
            width: "40%", height: "42%",
            top: "40%", right: "2%",
            background: "radial-gradient(ellipse, rgba(105,105,105,0.3) 0%, transparent 62%)",
            borderRadius: "50%",
            willChange: "transform",
            animation: "bg-blob-4 28s ease-in-out infinite -14s",
          }}
        />

        {/* Cloud 5 — top-left accent */}
        <div
          style={{
            position: "absolute",
            width: "36%", height: "36%",
            top: "3%", left: "3%",
            background: "radial-gradient(ellipse at 54% 46%, rgba(110,110,110,0.28) 0%, transparent 65%)",
            borderRadius: "46% 54% 60% 40% / 60% 40% 56% 44%",
            willChange: "transform",
            animation: "bg-blob-5 36s ease-in-out infinite -7s",
          }}
        />
      </div>

      {/* ── Corner radial glows ───────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 65% 50% at 15% 15%, rgba(140,140,140,0.1) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 85%  8%, rgba(120,120,120,0.07) 0%, transparent 65%),
            radial-gradient(ellipse 55% 45% at 88% 88%, rgba(110,110,110,0.07) 0%, transparent 65%)
          `,
        }}
      />

      {/* ── Centre vignette ──────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 25%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* ── Noise grain ──────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
          backgroundSize: 200,
          backgroundRepeat: "repeat",
          opacity: 0.04,
        }}
      />
    </div>
  );
}
