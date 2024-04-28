"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionTitle from "../SectionTitle";
import Image from "next/image"

import { aboutData } from "@/lib/data";
import { aboutCardData } from "@/lib/data";

import Card from "@/components/Card";

export default function About() {
  const { ref } = useSectionInView("About");



  return (
    <motion.section 
      id="about"
      ref={ref}
      className="min-h-screen w-full scroll-m-24 flex flex-col "
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
        <div className="gap-x-5 w-full mt-10 flex flex-col items-center md:flex-row md:justify-evenly justify-start space-y-10 md:space-y-0">
          {aboutCardData.map((card) => (
            <Card key={card.title} icon={card.icon} title={card.title} description={card.descirption}/>
          ))}
        </div>
    </motion.section>
  )
}
