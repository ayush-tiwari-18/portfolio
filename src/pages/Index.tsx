import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="pt-20">
        {activeSection === "home" && <Hero />}
        {activeSection === "resume" && <Resume />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact" && <Contact />}
      </main>
    </div>
  );
};

export default Index;