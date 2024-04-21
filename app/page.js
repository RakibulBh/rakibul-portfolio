import Contact from "@/components/Sections/Contact";
import Projects from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";
import About from "@/components/Sections/About";
import HomePage from "@/components/Sections/HomePage";

export default function Home() {
  return (
    <main className={`items-center px-20 flex flex-col text-white font-sans`}>
      <HomePage/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}
