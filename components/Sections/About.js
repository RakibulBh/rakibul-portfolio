"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionTitle from "../SectionTitle";
import Image from "next/image"

import Card from "@/components/Card";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section 
      id="about"
      ref={ref}
      className="h-screen w-full scroll-m-32"
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
        <SectionTitle title='About me' number='2'/>
        <div className="w-full mt-10 flex flex-col md:flex-row md:justify-around justify-start space-y-10 md:space-y-0">
          <Card title="Experience" description="8+ years"/>
          <Card title="Experience" description="8+ years"/>
          <Card title="Experience" description="8+ years"/>
        </div>
        <p className="w-full mt-10 text-center text-gray-400 break-words">
          I have been coding since the age of 11, from developing Roblox games to developign android apps, python automations and full stack web applications. I am currently developing all my developer skills, learning new things everyday.
        </p>
    </motion.section>
  )
}
