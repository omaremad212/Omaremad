import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact — Omar Emad | Let's Work Together",
  description:
    "Get in touch with Omar Emad for WordPress development, AI-powered web solutions, and full stack projects. Fast response guaranteed.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactPage />
      <Footer />
    </>
  );
}
