import Image from "next/image";
import { Fira_Code } from "next/font/google";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const firacode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-firacode',
})

export default function Home() {
  return (
    <>
    <main className={`flex flex-col gap-96 pl-10 text-white ${firacode.variable} font-sans`}>
      <section id="home" className="pt-40 flex flex-col gap-y-20">
        <p className="text-2xl md:text-3xl">Hi, i am <span className="md:text-4xl">Rakibul Bhuiyan</span>,<br/> a computer science student<br/> and a <span className="text-[#00FF00]">&#123;web developer&#125;</span></p>
        <div>
          <Button variant='secondary'>
            Download Resume
          </Button>
        </div>
      </section>
      <section id="about" className="pt-40 flex flex-col gap-y-10">
        <p className="font-bold text-xl"><span className="text-[#00FF00]">01. </span>About me</p>
        <div className="space-y-10 text-sm md:text-md">
          <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
          <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
          <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
        </div>
      </section>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
    <Footer/>
    </>
  );
}
