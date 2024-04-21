'use client'

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import React from 'react';
import Project from "@/components/Project";
import SectionTitle from "../SectionTitle";


export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="min-h-screen flex flex-col gap-y-10 md:p-10 lg:scroll-m-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionTitle title='Projects' number='3'/>
      <div className="flex flex-wrap justify-center gap-10">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </motion.section>
  );
}
