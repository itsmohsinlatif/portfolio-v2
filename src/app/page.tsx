import TopNav from "@/components/nav/TopNav";
import Hero from "@/components/sections/Hero";
import ToolsTicker from "@/components/ToolsTicker";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "var(--bg)", color: "var(--fg)" }}>
      <TopNav />
      <main>
        <Hero />
        <ToolsTicker />
        <TechStack />
        <Projects />
        <Timeline />
        <Certifications />
        <Contact />
        <Footer />
      </main>
      <Chatbot />
    </div>
  );
}
