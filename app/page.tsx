import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GeminiSection from "@/components/GeminiSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyMe from "@/components/WhyMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-black">
      <Navbar />
      <Hero />
      <GeminiSection />
      <About />
      <Services />
      <Projects />
      <WhyMe />
      <Contact />
      <Footer />
    </main>
  );
}
