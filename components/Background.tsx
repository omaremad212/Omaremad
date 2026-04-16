"use client";

// Gradient-noise background — pure CSS + inline SVG, zero external requests.
export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>

      {/* Layer 1: smooth grey gradient blobs */}
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

      {/* Layer 2: dark vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 90% 80% at 50% 50%, transparent 15%, rgba(0,0,0,0.72) 100%)`,
        }}
      />

      {/* Layer 3: inline SVG grain — zero HTTP request */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18, mixBlendMode: "overlay" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
