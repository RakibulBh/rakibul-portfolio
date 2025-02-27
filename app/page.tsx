import Nav from "@/components/Nav";
import Experiences from "@/components/sections/Experiences/ExperienceSection";
import Hero from "@/components/sections/Home/Hero";
import Projects from "@/components/sections/Projects/ProjectsSection";

export default function Home() {
  return (
    <main className="">
      {/* <Nav /> */}
      <Hero />
      <Experiences />
      <Projects />
    </main>
  );
}
