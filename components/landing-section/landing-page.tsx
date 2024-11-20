import React from "react";
import Github from "@/public/logos/github.svg";
import LeetCode from "@/public/logos/leetcode.svg";
import LinkedIn from "@/public/logos/linkedin.svg";
import DevTo from "@/public/logos/devto.svg";
import Stackoverflow from "@/public/logos/stackoverflow.svg";

const socialNetworks = [
  {
    icon: Github,
  },
  {
    icon: LinkedIn,
  },
  {
    icon: LeetCode,
  },
  {
    icon: Stackoverflow,
  },
  {
    icon: DevTo,
  },
];

const LandingPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#00B8D9] from-0% via-[#0891B2] via-10% to-[#12162B] h-screen flex flex-col justify-between">
        <div className="text-center space-y-2 pt-36 z-10 px-12 sm:px-10 md:px-8 lg:px-0">
          <p className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold text-white">
            I&apos;m Rakibul Bhuiyan
          </p>
          <p className="lg:text-md md:text-sm text-xs text-gray-400 font-bold">
            Web/Game Developer & 2nd year Computer Science Student
          </p>
        </div>
        {/* <div className="absolute bg-[#C05F44] w-[40rem] h-[28rem] rounded-full left-[10rem] top-[12rem] opacity-50 blur-[8rem] z-5" />
        <div className="absolute bg-[#00B8D9] w-[40rem] h-[38rem] rounded-full left-[40rem] top-[10rem] opacity-20 blur-3xl z-5" /> */}
        <div className="flex justify-center">
          {/* <Image
            className="absolute top-[20rem] z-10"
            width={900}
            height={900}
            alt="Project-Pic"
            src="/project-pic.png"
          /> */}
        </div>
        <div className="h-28 bg-[#14243C] flex items-center z-20 px-4 sm:px-20 md:px-36 lg:px-64 lg:py-4 py-6">
          <div className="h-full w-full justify-between items-center flex">
            {socialNetworks.map((social, i: number) => (
              <social.icon
                className="hover:cursor-pointer w-12 h-12 sm:w-full sm:h-full"
                key={i}
                style={{ opacity: 0.5 }}
                fill="#ffffff"
              />
            ))}
          </div>
        </div>
      </div>
      {/* <p className="letter-spacing text-[1rem] absolute -rotate-90 font-semibold text-gray-300 top-[20rem]">
        Rakibul Bhuiyan
      </p> */}
    </>
  );
};

export default LandingPage;
