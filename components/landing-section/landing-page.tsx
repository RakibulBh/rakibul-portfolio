import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#00B8D9] from-0% via-[#0891B2] via-10% to-[#12162B] h-screen flex flex-col justify-between">
        <div className="text-center space-y-2 pt-36 z-10">
          <p className="text-6xl font-bold text-white">
            I&apos;m Rakibul Bhuiyan
          </p>
          <p className="font-sm text-gray-400 font-bold">
            Web/Game Developer & 2nd year Computer Science Student
          </p>
        </div>
        <div className="absolute bg-[#C05F44] w-[40rem] h-[28rem] rounded-full left-[10rem] top-[12rem] opacity-50 blur-[8rem] z-5" />
        <div className="absolute bg-[#00B8D9] w-[40rem] h-[38rem] rounded-full left-[40rem] top-[10rem] opacity-20 blur-3xl z-5" />
        <div className="flex justify-center">
          {/* <Image
            className="absolute top-[20rem] z-10"
            width={900}
            height={900}
            alt="Project-Pic"
            src="/project-pic.png"
          /> */}
        </div>
        <div className="h-28 bg-[#14243C] flex items-center px-40 z-20">
          <div className="flex gap-x-10"></div>
        </div>
      </div>
      <p className="letter-spacing text-[1rem] absolute -rotate-90 font-semibold text-gray-300 top-[20rem]">
        Rakibul Bhuiyan
      </p>
    </>
  );
};

export default LandingPage;
