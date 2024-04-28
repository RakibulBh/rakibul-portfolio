'use client'

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import React from 'react';
import Project from "@/components/Project";
import SectionTitle from "../SectionTitle";
import Link from "next/link"

import { projectsData } from "@/lib/data";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="mt-32 min-h-screen w-full flex flex-col gap-y-10 scroll-m-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionTitle title='Projects' number='3'/>
      <div className="flex items-center justify-around flex-wrap gap-y-10 gap-x-5">
        {projectsData.map((project)=> (
          <Project key={project.githubUrl} productionUrl={project.productionUrl} title={project.title} description={project.description} skills={project.tags} githubUrl={project.githubUrl} />
        ))}
      </div>
      <Link href={'/projects'}>
          <h1 className="transition-colors duration-300 ease-in-out text-center text-green-500 hover:text-white">View archive</h1>
      </Link>
    </motion.section>
  );
}
