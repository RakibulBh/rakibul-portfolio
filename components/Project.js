import React from 'react';
import { FaRegFolder } from "react-icons/fa";
import Link from "next/link"
import { AiOutlineExport } from "react-icons/ai";
import Skill from './Sections/Skills/Skill';


const skillsClass = 'text-xs md:text-sm text-gray-300'

const Project = ({ title, githubUrl, description, skills, productionUrl }) => {
  return (
    <div className='justify-between gap-y-4 w-full md:w-[30rem] h-[20rem] md:h-[25rem] bg-[#112240] rounded-tr-xl p-6 flex flex-col'>
      <div className='flex justify-between items-center'>
        <FaRegFolder className='text-green-500 w-8 h-8' />
        <Link href={githubUrl}>
          <div className='flex gap-x-2 items-center hover:text-green-500 text-sm md:text-base text-white transition-colors duration-300 ease-in-out'>
            <p>
              GitHub
            </p>
            <AiOutlineExport />
          </div>
        </Link>
      </div>
      <div className='group hover:cursor-pointer w-full flex flex-col md:flex-row items-center text-center md:h-1/2'>
        <Link className='space-y-5' href={productionUrl}>
            <h3 className='group-hover:text-green-500 transition-colors duration-300 ease-in-out text-xl text-white'>{title}</h3>
            <p className='text-gray-400 text-xs md:text-sm'>{description}</p>
        </Link>
      </div>
      <div className='flex flex-wrap justify-center'>
        {skills.map((skill, index) => (
          <Skill color='green-500' key={index} skill={skill}/>
        ))}
      </div>
    </div>
  );
}




export default Project;
