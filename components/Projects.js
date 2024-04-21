'use client'

import Project from "@/components/Project";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="pt-40 flex flex-col gap-y-10 -scroll-m-10"
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
      }}
    >
      <p className="font-bold text-xl"><span className="text-[#00FF00]">03. </span>Projects</p>
      <div className="flex justify-evenly flex-wrap gap-y-10">
        <Project/>
        <Project/>
        <Project/>
        <Project/>
      </div>
    </motion.section>
  )
}
