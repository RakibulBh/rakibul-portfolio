"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import TextField from '@mui/material/TextField';
import { FaBriefcase } from "react-icons/fa";
import SectionTitle from "../SectionTitle";
import { Button } from "../ui/button";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[message, setMessage] = useState('');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="h-screen w-full flex flex-col justify-center items-center p-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="w-full">
        <SectionTitle title='Contact me' number={5}/>
        <form className="mt-10 flex flex-col space-y-10">
             <div className="flex flex-col gap-y-2">
                <label className="text-md font-semibold">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md p-3 outline-none text-black" placeholder="Name"/>
             </div>
             <div className="flex flex-col gap-y-2">
                <label className="text-md font-semibold">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className=" w-full rounded-md p-3 outline-none text-black" name="email" placeholder="Email" type="email"/>
             </div>
             <div className="flex flex-col gap-y-2">
                <label className="flex flex-col gap-y-2">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="text-black p-4 w-full outline-none rounded-md" rows="10" name="message" placeholder="Enter your message here"/>
             </div>
             <Button variant='secondary'>Send Message</Button>
          </form>
      </div>
    </motion.section>
  );
}
