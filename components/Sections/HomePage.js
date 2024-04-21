"use client"

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Button } from "../ui/button";

export default function HomePage() {
  const { ref } = useSectionInView("Home");

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
        <p className="text-2xl md:text-3xl">Hi, i am <span className="md:text-4xl">Rakibul Bhuiyan</span>,<br/> a computer science student<br/> and a <span className="text-[#00FF00]">&#123;web developer&#125;</span></p>
        <div>
          <a href="/Rakibul Bhuiyan fullstack CV.pdf" download={'Rakibul Bhuiyan fullstack CV.pdf'}>
            <Button variant='secondary'>
              Download Resume
            </Button>
          </a>
        </div>
    </motion.section>
  )
}
