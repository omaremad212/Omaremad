"use client";

// Pure CSS animated background — identical grey-smoke aesthetic to the
// SVG turbulence version, but 100% GPU compositor (zero CPU per frame).
//
// How it works:
//   - Heavy filter: blur() is applied ONCE to a container; the GPU
//     composites it and never recomputes it unless the DOM changes.
//   - Blobs animate with CSS transform (translate/scale/rotate), which
//     the compositor handles entirely on the GPU without touching the CPU.
//   - No JavaScript runs at all during animation.

export function Background() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      aria-hidden
    >
      {/* Blur container — filter applied once by GPU, not per-frame */}
      <div
        style={{
          position: "absolute",
          inset: "-15%",          // extra room so blobs don't clip at edges
          filter: "blur(90px)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        {/* Blob 1 — large centre mass */}
        <div
          className="bg-blob-1"
          style={{
            position: "absolute",
            width: "65%", height: "58%",
            top: "18%", left: "17%",
            background:
              "radial-gradient(ellipse at 42% 42%, rgba(145,145,145,0.55) 0%, rgba(90,90,90,0.18) 50%, transparent 70%)",
            borderRadius: "62% 38% 54% 46% / 50% 62% 38% 50%",
            willChange: "transform",
            animation: "bg-blob-1 22s ease-in-out infinite",
          }}
        />

        {/* Blob 2 — top-right drift */}
        <div
          className="bg-blob-2"
          style={{
            position: "absolute",
            width: "52%", height: "48%",
            top: "-8%", right: "-4%",
            background:
              "radial-gradient(ellipse at 58% 50%, rgba(120,120,120,0.45) 0%, transparent 65%)",
            borderRadius: "42% 58% 46% 54% / 56% 44% 60% 40%",
            willChange: "transform",
            animation: "bg-blob-2 27s ease-in-out infinite -8s",
          }}
        />

        {/* Blob 3 — bottom-left drift */}
        <div
          className="bg-blob-3"
          style={{
            position: "absolute",
            width: "48%", height: "52%",
            bottom: "-8%", left: "-4%",
            background:
              "radial-gradient(ellipse at 46% 56%, rgba(130,130,130,0.4) 0%, transparent 65%)",
            borderRadius: "56% 44% 50% 50% / 46% 56% 44% 54%",
            willChange: "transform",
            animation: "bg-blob-3 19s ease-in-out infinite -4s",
          }}
        />

        {/* Blob 4 — right-centre accent */}
        <div
          className="bg-blob-4"
          style={{
            position: "absolute",
            width: "42%", height: "44%",
            top: "42%", right: "4%",
            background:
              "radial-gradient(ellipse, rgba(105,105,105,0.35) 0%, transparent 62%)",
            borderRadius: "50%",
            willChange: "transform",
            animation: "bg-blob-4 24s ease-in-out infinite -12s",
          }}
        />

        {/* Blob 5 — top-left accent */}
        <div
          className="bg-blob-5"
          style={{
            position: "absolute",
            width: "38%", height: "38%",
            top: "4%", left: "4%",
            background:
              "radial-gradient(ellipse at 54% 46%, rgba(115,115,115,0.3) 0%, transparent 65%)",
            borderRadius: "46% 54% 60% 40% / 60% 40% 56% 44%",
            willChange: "transform",
            animation: "bg-blob-5 31s ease-in-out infinite -6s",
          }}
        />
      </div>

      {/* Grain texture overlay — static, very cheap */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            'url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")',
          backgroundSize: 240,
          backgroundRepeat: "repeat",
          opacity: 0.055,
        }}
      />
    </div>
  );
}
