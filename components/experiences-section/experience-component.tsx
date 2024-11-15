import { Experience } from "@/types";
import React from "react";
import { Skill } from "./skill";

const ExperienceComponent = ({ experience }: { experience: Experience }) => {
  return (
    <div
      className={
        "w-[45%] min-h-80 space-y-4 bg-white bg-opacity-5 border-white border-[1px] border-opacity-15 px-4 py-6 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md"
      }
    >
      {/* TOP PART */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-100 text-xs lg:text-lg">
            {experience.companyName}
          </p>
          <h1 className="text-md text-white lg:text-2xl">{experience.role}</h1>
        </div>
        <div className="p-1 bg-white bg-opacity-5 border-[1px] border-white border-opacity-15 ">
          <p className="text-[0.65rem] lg:text-[1rem] text-white truncate">
            {experience.date}
          </p>
        </div>
      </div>

      {/* Description */}
      <ul className="text-gray-400">
        {experience.description.map((point: string) => (
          <li
            className="ml-4 text-[9px] lg:text-[1rem]"
            style={{ listStyle: "disc" }}
            key={point}
          >
            {point}
          </li>
        ))}
      </ul>

      {/* Bottom part */}

      <div className="flex gap-2 flex-wrap justify-center">
        {experience.skills.map((skill, i) => (
          <Skill key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceComponent;
