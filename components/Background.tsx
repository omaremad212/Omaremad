"use client";

import { useEffect, useRef } from "react";

// ─── Vertex shader — full-screen quad ────────────────────────────────────────
const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

// ─── Fragment shader — GPU turbulence smoke ──────────────────────────────────
// Replicates the SVG feTurbulence + feDisplacementMap aesthetic using
// gradient noise + domain-warping, all computed on the GPU.
const FRAG = `
precision mediump float;
uniform float u_time;
uniform vec2  u_res;

vec2 hash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453);
}

float gnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(dot(hash2(i),             f),
        dot(hash2(i+vec2(1,0)),   f-vec2(1,0)), u.x),
    mix(dot(hash2(i+vec2(0,1)),   f-vec2(0,1)),
        dot(hash2(i+vec2(1,1)),   f-vec2(1,1)), u.x), u.y);
}

// Two-octave turbulence with time-driven hue rotation (= feColorMatrix hueRotate)
float turb(vec2 p, float t) {
  float a = t * 0.38;
  float s = sin(a), c = cos(a);
  p = vec2(c*p.x - s*p.y, s*p.x + c*p.y) * 2.8;
  return gnoise(p) * 0.55
       + gnoise(p * 2.1 + vec2(3.1, 1.7)) * 0.28
       + gnoise(p * 4.3 + vec2(1.3, 5.2)) * 0.13;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float ar = u_res.x / u_res.y;
  vec2  p  = (uv - 0.5) * vec2(ar, 1.0);
  float t  = u_time;

  // Domain-warping — replicates double feDisplacementMap
  vec2 q = vec2(turb(p,                      t      ),
                turb(p + vec2(1.3,  5.7),    t      ));
  vec2 r = vec2(turb(p + 4.0*q + vec2(1.7, 9.2), t * 0.85),
                turb(p + 4.0*q + vec2(8.3, 2.8),  t * 0.78));
  float f = turb(p + 4.0*r, t * 0.9) * 0.5 + 0.5;
  f = clamp(pow(f, 1.6), 0.0, 1.0);

  // Radial mask — replicates the framerusercontent mask image
  float dist = length(uv - 0.5) * 2.0;
  float mask = pow(1.0 - smoothstep(0.3, 0.98, dist), 0.75);

  // rgba(128,128,128) = vec3(0.502)
  gl_FragColor = vec4(vec3(0.502) * f, f * mask * 0.9);
}
`;

// ─── Helpers ──────────────────────────────────────────────────────────────────
function compileShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return s;
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
    });
    if (!gl) return; // WebGL unavailable — canvas stays hidden, black bg shows

    // Build program
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER,   VERT));
    gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    // Full-screen quad
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER,
      new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes  = gl.getUniformLocation(prog, "u_res");

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    let raf: number;
    const t0 = performance.now();

    const render = () => {
      raf = requestAnimationFrame(render);
      const w = canvas.clientWidth  | 0;
      const h = canvas.clientHeight | 0;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, (performance.now() - t0) / 1000);
      gl.uniform2f(uRes, w, h);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
      {/* Grain texture — same as original */}
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
