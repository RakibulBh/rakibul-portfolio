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
      className="h-screen w-full pt-40 flex flex-col gap-y-10 scroll-m-[100rem]"
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
        <p className="text-2xl md:text-3xl">Hi, i am <span className="md:text-4xl">Rakibul Bhuiyan</span>,</p>
        <p className="text-2xl md:text-3xl mt-1">I am a <span className="text-4xl text-[#00FF00]">&#123;<Typewriter cursorBlinking={true} cursor cursorStyle='_' loop={0} words={typeWriterProps.words}/>&#125;</span></p>
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
