"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";

export default function Contact() {
  const success = () => toast.success("Email sent!");
  const warning = () => toast.warning("Please fill all fields.");
  const error = () => toast.error("Error sending email.");

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
      setIsLoading(false);
      warning();
      return;
    }

    emailjs
      .sendForm("service_gnn950g", "template_0pxzc0n", form.current, {
        publicKey: "27QLv3NaCTySTqG-c",
      })
      .then(
        () => {
          success();
          setEmail("");
          setMessage("");
          setName("");
          setIsLoading(false);
        },
        (error) => {
          error();
          setIsLoading(false);
        }
      );
  };

  const inputStyle =
    "w-full bg-transparent border-b-2 border-[#334155] text-white py-2 px-4 focus:outline-none focus:border-white transition duration-300";
  const labelStyle = "block text-gray-300 text-sm font-bold mb-2";
  const buttonStyle = `w-full ${
    isLoading ? "bg-[#334155]" : "bg-[#1e293b]"
  } text-white font-bold py-2 px-4 rounded hover:bg-[#334155] focus:outline-none focus:shadow-outline transition duration-300`;

  return (
    <motion.section
      id="contact"
      className="w-full h-screen flex flex-col justify-center items-center bg-[#0F172A]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
      <div className="w-full max-w-2xl mx-auto">
        <SectionTitle title="Contact me" number={5} />
        <form ref={form} onSubmit={sendEmail} className="mt-10 space-y-6">
          <div>
            <label htmlFor="user_name" className={labelStyle}>
              Name
            </label>
            <input
              name="user_name"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="user_email" className={labelStyle}>
              Email
            </label>
            <input
              name="user_email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="user_message" className={labelStyle}>
              Message
            </label>
            <textarea
              name="user_message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message here"
              rows="4"
              className={`${inputStyle} resize-none outline-none`}
            />
          </div>
          <button disabled={isLoading} type="submit" className={buttonStyle}>
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </motion.section>
  );
}
