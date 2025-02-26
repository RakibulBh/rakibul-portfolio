import Nav from "@/components/Nav";
import Experience from "@/components/sections/Experiences";
import Hero from "@/components/sections/Home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Experience />
    </main>
  );
}
