import Image from "next/image";
import { Fira_Code } from "next/font/google";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";

const firacode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-firacode',
})

export default function Home() {
  return (
    <main className={`flex flex-col gap-96text-white ${firacode.variable} font-sans`}>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}
