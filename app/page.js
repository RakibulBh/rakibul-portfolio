import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";

export default function Home() {
  return (
    <main className={`flex flex-col gap-96text-white font-sans`}>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}
