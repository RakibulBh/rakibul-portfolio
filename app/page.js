import Contact from "@/components/Sections/Contact";
import Projects from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";
import About from "@/components/Sections/About";
import HomePage from "@/components/Sections/HomePage";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main className={`flex flex-col text-white font-sans`}>
      <Analytics />
      <HomePage />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
