"use client";

// Gradient-noise background — pure CSS, zero JS, zero animation cost.
// Technique: layered radial gradients (smooth blobs) + grain texture overlay.
// The combination produces the "gradient noise" look from the reference image,
// re-coloured to our black / grey palette.

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>

      {/* ── Layer 1: smooth grey gradient blobs on black ─────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 75% 60% at 18% 28%,  rgba(110,110,110,0.70) 0%, transparent 60%),
            radial-gradient(ellipse 65% 65% at 82% 72%,  rgba( 80, 80, 80,0.60) 0%, transparent 58%),
            radial-gradient(ellipse 55% 50% at 55%  5%,  rgba(130,130,130,0.50) 0%, transparent 52%),
            radial-gradient(ellipse 45% 55% at 90% 35%,  rgba( 70, 70, 70,0.45) 0%, transparent 50%),
            radial-gradient(ellipse 50% 45% at 10% 80%,  rgba( 90, 90, 90,0.40) 0%, transparent 52%)
          `,
        }}
      />

      {/* ── Layer 2: dark vignette keeps edges/centre deep black ─── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 90% 80% at 50% 50%, transparent 15%, rgba(0,0,0,0.72) 100%)
          `,
        }}
      />

      {/* ── Layer 3: grain / noise texture — the "noise" in gradient-noise */}
      {/* Using a tiled grain image at higher opacity gives the sandy texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
          backgroundSize: 180,
          backgroundRepeat: "repeat",
          opacity: 0.12,
          mixBlendMode: "overlay",
        }}
      />

      {/* ── Layer 4: second grain pass at lower opacity for depth ─── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
          backgroundSize: 320,
          backgroundRepeat: "repeat",
          opacity: 0.06,
        }}
      />
    </div>
  );
}
