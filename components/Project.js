import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
  return (
    <div className='w-full sm:w-[38%] lg:w-[30%] xl:w-[22%] bg-[#112240] rounded-tr-xl p-6 flex flex-col justify-between hover:bg-[#112255] transition-colors duration-300'>
      <div className='flex justify-between items-center'>
        <FontAwesomeIcon className='text-green-400 h-8 w-8' icon={faCoffee} />
        <p className="text-sm lg:text-base text-white">GitHub</p>
      </div>
      <div className='flex flex-col gap-y-2'>
        <h3 className='text-xl text-white'>Time to have more fun</h3>
        <p className='text-gray-400 text-xs md:text-sm'>A single web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS.</p>
      </div>
      <div>
        <p className="text-xs md:text-sm text-gray-300">GitHub | VSCode | Linux</p>
      </div>
    </div>
  );
}

export default Project;
