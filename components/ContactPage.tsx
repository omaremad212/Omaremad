"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MessageCircle,
  CheckCircle,
  Loader2,
  Clock,
  Github,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

type FormState = { name: string; email: string; subject: string; message: string };
type FormStatus = "idle" | "loading" | "success";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="17.5" cy="6.5" r="0.01" fill="currentColor" strokeWidth={2.5} />
    </svg>
  );
}

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+20 114 381 1263",
    href: "https://wa.me/201143811263",
    cta: "Message now",
    accent: "hover:border-green-900/50 group-hover:text-green-400",
    badge: "Fastest",
    badgeClass: "bg-green-900/30 text-green-400 border-green-900/40",
  },
  {
    icon: Mail,
    label: "Email",
    value: "oemad8637@gmail.com",
    href: "mailto:oemad8637@gmail.com",
    cta: "Send email",
    accent: "hover:border-neutral-700",
    badge: null,
    badgeClass: "",
  },
];

const socials = [
  { icon: Github, href: "https://github.com/omaremad212", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/omar-emad-4b361327b", label: "LinkedIn" },
  { icon: InstagramIcon, href: "https://www.instagram.com/omaremad212/", label: "Instagram" },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
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
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass = (field: keyof FormState) =>
    `px-4 py-3 bg-neutral-950 border rounded-xl text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-all w-full ${
      errors[field]
        ? "border-red-500/50"
        : "border-neutral-800 hover:border-neutral-700 focus:border-neutral-600"
    }`;

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Spotlight */}
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 pointer-events-none">
          <Spotlight className="w-[600px] h-[600px] opacity-30" fill="white" />
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-neutral-700" />
            <span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest">
              Get In Touch
            </span>
            <div className="h-px w-8 bg-neutral-700" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-[1.1] mb-5">
            Let's Build Something
            <br />
            Great Together
          </h1>

          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message
            and I'll get back to you within{" "}
            <span className="text-neutral-200 font-semibold">24 hours</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Availability */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-neutral-100 font-semibold">Available for Work</span>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Currently accepting new projects for WordPress, AI solutions, and full stack development.
              </p>
            </div>

            {/* Response time */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-neutral-400" />
              </div>
              <div>
                <p className="text-neutral-200 font-semibold text-sm">Response Time</p>
                <p className="text-neutral-500 text-sm mt-0.5">
                  Within 24 hours — usually much faster during working hours.
                </p>
              </div>
            </div>

            {/* Contact methods */}
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-4 p-5 rounded-2xl bg-neutral-950 border border-neutral-800 ${method.accent} group transition-all duration-300`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.08] transition-colors">
                  <method.icon className={`w-5 h-5 text-neutral-400 transition-colors ${method.accent.includes("green") ? "group-hover:text-green-400" : ""}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-neutral-200 font-semibold text-sm">{method.label}</p>
                  <p className="text-neutral-500 text-sm mt-0.5 truncate">{method.value}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {method.badge && (
                    <span className={`px-2 py-0.5 text-xs font-bold rounded-full border ${method.badgeClass}`}>
                      {method.badge}
                    </span>
                  )}
                  <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-300 group-hover:translate-x-0.5 transition-all" />
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800">
              <p className="text-xs uppercase tracking-widest text-neutral-600 font-semibold mb-4">
                Find me on
              </p>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/60 text-neutral-500 hover:text-neutral-200 transition-all duration-200"
                  >
                    <s.icon className="w-4 h-4" />
                    <span className="text-xs font-medium hidden sm:block">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-14 gap-5"
                >
                  <div className="w-20 h-20 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-neutral-300" />
                  </div>
                  <h2 className="text-neutral-100 font-black text-2xl">Message Sent!</h2>
                  <p className="text-neutral-500 max-w-sm text-lg leading-relaxed">
                    Thanks for reaching out. I'll review your message and reply within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 px-6 py-3 border border-neutral-700 hover:border-neutral-500 text-neutral-400 hover:text-white font-semibold text-sm rounded-xl transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h2 className="text-neutral-100 font-bold text-xl mb-1">Send a Message</h2>
                    <p className="text-neutral-600 text-sm">Fill in the form and I'll be in touch shortly.</p>
                  </div>

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
                    <label htmlFor="subject" className="text-sm font-semibold text-neutral-400">Subject <span className="text-neutral-700">(optional)</span></label>
                    <input id="subject" name="subject" type="text" placeholder="e.g. WordPress site, AI chatbot, dashboard..." value={form.subject} onChange={handleChange} className={inputClass("subject")} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-semibold text-neutral-400">Your Message</label>
                    <textarea
                      id="message" name="message" rows={6}
                      placeholder="Hi Omar, I need help with... (describe your project, goals, timeline, and budget if you have one)"
                      value={form.message} onChange={handleChange}
                      className={`${inputClass("message")} resize-none`}
                    />
                    {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-white hover:bg-neutral-100 disabled:bg-neutral-800 disabled:text-neutral-500 text-black font-bold text-base rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-0.5 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <><Loader2 className="w-5 h-5 animate-spin" />Sending your message...</>
                    ) : (
                      <><Send className="w-5 h-5" />Send Message</>
                    )}
                  </button>

                  <p className="text-center text-xs text-neutral-600">
                    Or reach me directly on{" "}
                    <a href="https://wa.me/201143811263" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors font-medium">
                      WhatsApp
                    </a>{" "}
                    for the fastest response.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
