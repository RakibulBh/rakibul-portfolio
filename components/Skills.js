"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Skill from "@/components/Skill";


export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <motion.section 
      ref={ref}
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
      }} id="skills" className="pt-40 flex flex-col gap-y-10">
        <p className="font-bold text-xl"><span className="text-[#00FF00]">04. </span>Skills</p>
        <div className="pl-10 md:pl-20 w-full flex flex-wrap gap-10">
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
        </div>
    </motion.section>
  )
}
