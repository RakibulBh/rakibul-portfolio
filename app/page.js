import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import HomePage from "@/components/HomePage";

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
