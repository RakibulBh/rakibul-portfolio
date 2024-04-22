"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionTitle from "../SectionTitle";
import Buttons from "../Buttons";

import Web from "./Skills/Web";
import Mobile from "./Skills/Mobile";
import Games from "./Skills/Games";
import Other from "./Skills/Other";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const [current, setCurrent] = useState('Web')

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
      }} 
      id="skills" 
      className="mt-32 w-full min-h-screen flex flex-col gap-y-10 scroll-m-28">
        <SectionTitle title="Skills" number='4'/>
        <Buttons setCurrent={setCurrent} current={current}/>
        {current === 'Web' && <Web/>}
        {current === 'Mobile' && <Mobile/>}
        {current === 'Games' && <Games/>}
        {current === 'Other' && <Other/>}
    </motion.section>
  )
}
