import React from 'react';
import { FaRegFolder } from "react-icons/fa";


const Project = () => {
  return (
    <div className='group gap-y-4 w-full sm:w-[38%] lg:w-[30%] xl:w-[22%] bg-[#112240] rounded-tr-xl p-6 flex flex-col justify-between hover:cursor-pointer transition-colors duration-300'>
      <div className='flex justify-between items-center'>
        <FaRegFolder className='w-8 h-8' />
        <p className="hover:text-[#00FF00] text-sm lg:text-base text-white transition-colors duration-300 ease-in-out">GitHub</p>
      </div>
      <div className='flex flex-col gap-y-2'>
        <h3 className='group-hover:text-[#00FF00] transition-colors duration-300 ease-in-out text-xl text-white'>Time to have more fun</h3>
        <p className='text-gray-400 text-xs md:text-sm'>A single web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS.</p>
      </div>
      <div>
        <p className="text-xs md:text-sm text-gray-300">GitHub | VSCode | Linux</p>
      </div>
    </div>
  );
}

export default Project;
