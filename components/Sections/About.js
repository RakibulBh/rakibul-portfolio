"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionTitle from "../SectionTitle";
import { aboutCardData, aboutDataText } from "@/lib/data";
import Card from "@/components/Card";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <>
      <motion.section
        id="about"
        ref={ref}
        className="min-h-screen lg:p-20 w-full flex gap-y-10 flex-col justify-center items-center scroll-m-0 md:scroll-m-28 lg:justify-center"
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
        <div className="flex justify-center gap-y-10 gap-x-20">
          <div className="flex flex-col gap-y-10">
            <h1 className="font-extrabold text-gray-400">Biography</h1>
            {aboutDataText.map((text, index) => (
              <p className="text-gray-500 text-md break-words">{text}</p>
            ))}
          </div>
          <div className="hidden md:flex flex-col gap-y-10 justify-center">
            {aboutCardData.map((card, index) => (
              <Card
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
