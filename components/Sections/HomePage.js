"use client"

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Button } from "../ui/button";
import { IoNewspaperOutline } from "react-icons/io5";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";

export default function HomePage() {
  const { ref } = useSectionInView("Home");

  const typeWriterProps = {
    words: ['Undergraduate student', 'Frontend dev', 'Backend dev', 'Fullstack dev'],
  }

  return (
    <motion.section 
      id="home"
      ref={ref}
      className="h-screen w-full mx-auto flex flex-col gap-y-6 scroll-m-[100rem] justify-center text-left"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}>
        <div className="space-y-2">
          <p className="text-[#00FF00] text-md text-left">Hi, my name is</p>
          <p className="font-bold text-gray-300 text-5xl md:text-7xl">Rakibul Bhuiyan.</p>
          <p className="text-3xl md:text-4xl mt-1">I am a <span className="text-4xl text-[#00FF00]">&#123;<Typewriter cursorBlinking={true} cursor cursorStyle='_' loop={0} words={typeWriterProps.words}/>&#125;</span></p>
        </div>
        <p className="text-gray-500">I’m an 18 year old student in the process of building multipl full-stack web apps, currently learning machine learning and AI.</p>
        <div className="group">
          <a href="/Rakibul Bhuiyan fullstack CV.pdf" download={'Rakibul Bhuiyan fullstack CV.pdf'}>
            <Button className="border border-[#00FF00] p-7">
              Download Resume<span className="ml-3 group-hover:text-[#00FF00] transition-colors duration-300 ease-in-out"><IoNewspaperOutline className="w-5 h-5" /></span> 
            </Button>
          </a>
        </div>
    </motion.section>
  )
}
