"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionTitle from "../SectionTitle";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section 
      id="about"
      ref={ref}
      className="h-screen flex flex-col gap-y-10 scroll-mt-28"
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
        <SectionTitle title='About' number='2'/>
        <div className="space-y-10 text-sm md:text-md">
          <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
          <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
          <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
        </div>
    </motion.section>
  )
}
