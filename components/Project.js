import React from 'react';
import { FaRegFolder } from "react-icons/fa";
import Link from "next/link"
import { AiOutlineExport } from "react-icons/ai";


const skillsClass = 'text-xs md:text-sm text-gray-300'

const Project = ({title, githubUrl, description, skills}) => {
  return (
    <div className='group justify-between gap-y-4 w-[30rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] bg-[#112240] rounded-tr-xl p-6 flex flex-col hover:cursor-pointer transition-colors duration-300'>
      <div className='flex justify-between items-center'>
        <FaRegFolder className='w-8 h-8' />
        <Link href={githubUrl}>
          <div className='flex gap-x-2 items-center hover:text-[#00FF00] text-sm lg:text-base text-white transition-colors duration-300 ease-in-out'>
            <p>
              GitHub
            </p>
            <AiOutlineExport />
          </div>

        </Link>
      </div>
      <div className='w-full h-1/2 flex items-center text-center flex-col gap-y-2'>
        <h3 className='group-hover:text-[#00FF00] transition-colors duration-300 ease-in-out text-xl text-white'>{title}</h3>
        <p className='text-gray-400 text-xs md:text-sm'>{description}</p>
      </div>
      <div className='flex flex-wrap text-center justify-evenly'>
        {skills.map((skill) => (
          <span className={skillsClass}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default Project;
