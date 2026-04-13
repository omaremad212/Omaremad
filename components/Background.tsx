"use client";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>

      {/* ── Subtle grid lines ─────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Radial grey glows (corner / edge light sources) ──────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 70% 55% at 15% 15%,  rgba(140,140,140,0.13) 0%, transparent 70%),
            radial-gradient(ellipse 55% 45% at 85%  8%,  rgba(120,120,120,0.09) 0%, transparent 65%),
            radial-gradient(ellipse 60% 50% at 90% 85%,  rgba(110,110,110,0.08) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 10% 90%,  rgba(100,100,100,0.07) 0%, transparent 60%)
          `,
        }}
      />

      {/* ── Centre vignette — keeps the middle darker / more depth ─ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* ── Noise grain for texture (same as original) ───────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
          backgroundSize: 200,
          backgroundRepeat: "repeat",
          opacity: 0.045,
        }}
      />
    </div>
  );
}
