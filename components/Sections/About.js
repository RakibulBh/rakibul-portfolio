"use client"

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionTitle from "../SectionTitle";
import { aboutCardData } from "@/lib/data";
import Card from "@/components/Card";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <>
      <motion.section
        id="about"
        ref={ref}
        className="min-h-screen w-full flex flex-col gap-y-12"
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
        <SectionTitle title="About me" number="2" />
        <div className="w-full gap-x-10 gap-y-10 md:gap-y-0 flex flex-col md:flex-row items-center justify-evenly">
          {aboutCardData.map((card) => (
            <Card
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </motion.section>
    </>
  );
}
