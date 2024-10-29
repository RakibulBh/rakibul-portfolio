import { Experience } from "@/types";
import React from "react";

export const Skill = ({ name }: { name: string }) => {
  return (
    <div className="w-full h-8 flex items-center justify-center rounded-md bg-white bg-opacity-5 border-[1px] border-white border-opacity-15 px-[2px] py-1 text-[#00B8D9] text-center">
      <p className="text-xs">{name}</p>
    </div>
  );
};

export const Links = ({ name }: { name: string }) => {
  return (
    <div className="w-full flex items-center justify-center rounded-md bg-white bg-opacity-5 border-[1px] border-white border-opacity-15 px-2 py-1 text-[#00B8D9]">
      <p className="truncate">{name}</p>
    </div>
  );
};

const ExperienceComponent = ({ experience }: { experience: Experience }) => {
  return (
    <div className="bg-white bg-opacity-5 border-[1px] border-white border-opacity-15 rounded-md p-4 w-[45%] h-[20rem] flex flex-col justify-between hover:bg-[#00B8D9] hover:bg-opacity-10 transition-colors ease-in-out duration-500 ">
      <div className="">
        <div className="flex justify-end">
          <p className="p-2 text-white bg-white bg-opacity-5 border-[1px] border-opacity-15 text-xs rounded-md">
            {experience.date}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-gray-400">{experience.companyName}</p>
          <h1 className="text-white text-xl">{experience.role}</h1>
        </div>
      </div>
      <div>
        <ul className="ml-3">
          {experience.description.map((point) => (
            <li
              style={{ listStyle: "disc" }}
              className="text-xs text-gray-400"
              key={point}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-x-2">
        <div className="flex gap-2">
          <p className="text-sm text-white">Musickit.js</p>
        </div>
      </div>
      <div className="flex gap-4">
        {experience.skills.map((skill) => (
          <Skill key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceComponent;
