'use client'

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import React from 'react';
import Project from "@/components/Project";
import SectionTitle from "../SectionTitle";
import Link from "next/link"


export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="min-h-screen flex flex-col gap-y-10 md:p-10 scroll-m-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionTitle title='Projects' number='3'/>
      <div className="flex flex-wrap gap-10">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <Link href={'/projects'}>
          <h1 className="transition-colors duration-300 ease-in-out text-center text-[#00FF00] hover:text-white">View archive</h1>
      </Link>
    </motion.section>
  );
}
