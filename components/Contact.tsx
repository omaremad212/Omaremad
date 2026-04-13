"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Send,
  Mail,
  MessageCircle,
  CheckCircle,
  Loader2,
  Clock,
} from "lucide-react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    else if (form.message.trim().length < 20)
      newErrors.message = "Message must be at least 20 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simulate form submission — wire up to a real backend/Formspree/EmailJS later
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
              Contact
            </span>
            <div className="h-px w-8 bg-blue-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4"
          >
            Ready to Build{" "}
            <span className="gradient-text">Something Great?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Drop me a message and I'll get back to you within 24 hours. Let's
            talk about your project.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left panel — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Availability indicator */}
            <div className="p-5 rounded-2xl bg-green-900/20 border border-green-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-300 font-semibold text-sm">
                  Available for Work
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Currently accepting new projects. Let's start something great.
              </p>
            </div>

            {/* Response time */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#162032] card-border">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Fast Response</p>
                <p className="text-slate-400 text-sm mt-0.5">
                  I reply within 24 hours. Usually much faster.
                </p>
              </div>
            </div>

            {/* Email */}
            <a
              href="mailto:hello@omaremad.dev"
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#162032] card-border group hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Email Me</p>
                <p className="text-blue-400 text-sm mt-0.5 group-hover:text-blue-300 transition-colors">
                  hello@omaremad.dev
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-green-500/20 hover:border-green-400/40 group transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">WhatsApp</p>
                <p className="text-green-400 text-sm mt-0.5">
                  Message me directly
                </p>
              </div>
              <div className="ml-auto">
                <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                  Fast
                </span>
              </div>
            </a>
          </motion.div>

          {/* Right panel — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl bg-[#162032] card-border">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 max-w-sm">
                    Thanks for reaching out. I'll review your message and get
                    back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-slate-300"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        className={`px-4 py-3 bg-slate-800/60 border rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                          errors.name
                            ? "border-red-500/50 bg-red-900/10"
                            : "border-slate-700/60 hover:border-slate-600 focus:border-blue-500/50"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-slate-300"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className={`px-4 py-3 bg-slate-800/60 border rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                          errors.email
                            ? "border-red-500/50 bg-red-900/10"
                            : "border-slate-700/60 hover:border-slate-600 focus:border-blue-500/50"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-slate-300"
                    >
                      Tell me about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Hi Omar, I need help with... (what you want to build, timeline, budget, etc.)"
                      value={form.message}
                      onChange={handleChange}
                      className={`px-4 py-3 bg-slate-800/60 border rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none ${
                        errors.message
                          ? "border-red-500/50 bg-red-900/10"
                          : "border-slate-700/60 hover:border-slate-600 focus:border-blue-500/50"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-blue-500 hover:bg-blue-400 disabled:bg-blue-500/50 text-white font-bold text-base rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    No spam, no subscriptions. Just a real conversation.
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
