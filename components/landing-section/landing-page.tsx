import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div className="mx-auto bg-gradient-to-r from-[#00B8D9] from-10% to-80% to-[#12162B] h-screen flex flex-col justify-between">
      <div className="text-center space-y-2 pt-44">
        <p className="text-6xl font-bold text-white">I'm Rakibul Bhuiyan</p>
        <p className="font-sm text-gray-400 font-bold">
          Web/Game Developer & 2nd year Computer Science Student
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          className="absolute top-[26rem] z-1"
          width={900}
          height={900}
          alt="Project-Pic"
          src="/project-pic.png"
        />
      </div>
      <div className="h-28 bg-[#14243C] z-0 flex items-center px-40">
        <div className="flex gap-x-10"></div>
      </div>
    </div>
  );
};

export default LandingPage;
