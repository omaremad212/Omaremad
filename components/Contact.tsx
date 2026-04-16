"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MessageCircle, CheckCircle, Loader2, Clock } from "lucide-react";

type FormState = { name: string; email: string; message: string };
type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.trim().length < 20) e.message = "At least 20 characters please.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormState])
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormState) =>
    `px-4 py-3 bg-neutral-950 border rounded-xl text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-all ${
      errors[field]
        ? "border-red-500/50"
        : "border-neutral-800 hover:border-neutral-700 focus:border-neutral-600"
    }`;

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-neutral-700" />
            <span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest">Contact</span>
            <div className="h-px w-8 bg-neutral-700" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight mb-4"
          >
            Ready to Build Something Great?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-500 text-lg max-w-xl mx-auto"
          >
            Drop me a message and I'll get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-neutral-200 font-semibold text-sm">Available for Work</span>
              </div>
              <p className="text-neutral-500 text-sm">Currently accepting new projects.</p>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-neutral-400" />
              </div>
              <div>
                <p className="text-neutral-200 font-semibold text-sm">Fast Response</p>
                <p className="text-neutral-500 text-sm mt-0.5">I reply within 24 hours. Usually much faster.</p>
              </div>
            </div>

            <a
              href="mailto:oemad8637@gmail.com"
              className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 group transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.07] transition-colors">
                <Mail className="w-5 h-5 text-neutral-400" />
              </div>
              <div>
                <p className="text-neutral-200 font-semibold text-sm">Email Me</p>
                <p className="text-neutral-400 text-sm mt-0.5 group-hover:text-neutral-200 transition-colors">oemad8637@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/201143811263"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-green-900/50 group transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover:bg-green-900/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-neutral-400 group-hover:text-green-400 transition-colors" />
              </div>
              <div>
                <p className="text-neutral-200 font-semibold text-sm">WhatsApp</p>
                <p className="text-neutral-500 text-sm mt-0.5">+20 114 381 1263</p>
              </div>
              <div className="ml-auto">
                <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-green-900/30 text-green-400 border border-green-900/40">Fast</span>
              </div>
            </a>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800">
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center"
                >
                  Something went wrong. Please try emailing me directly at oemad8637@gmail.com
                </motion.p>
              )}
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-neutral-300" />
                  </div>
                  <h3 className="text-neutral-100 font-bold text-xl">Message Sent!</h3>
                  <p className="text-neutral-500 max-w-sm">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button onClick={() => setStatus("idle")} className="mt-2 text-sm text-neutral-400 hover:text-neutral-200 font-medium transition-colors">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-semibold text-neutral-400">Your Name</label>
                      <input id="name" name="name" type="text" placeholder="John Smith" value={form.name} onChange={handleChange} className={inputClass("name")} />
                      {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-neutral-400">Email Address</label>
                      <input id="email" name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} className={inputClass("email")} />
                      {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-semibold text-neutral-400">Tell me about your project</label>
                    <textarea
                      id="message" name="message" rows={5}
                      placeholder="Hi Omar, I need help with..."
                      value={form.message} onChange={handleChange}
                      className={`${inputClass("message")} resize-none`}
                    />
                    {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-white hover:bg-neutral-100 disabled:bg-neutral-800 disabled:text-neutral-500 text-black font-bold text-sm rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-0.5 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <><Loader2 className="w-5 h-5 animate-spin" />Sending...</>
                    ) : (
                      <><Send className="w-5 h-5" />Send Message</>
                    )}
                  </button>

                  <p className="text-center text-xs text-neutral-600">
                    No spam. Just a real conversation.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
