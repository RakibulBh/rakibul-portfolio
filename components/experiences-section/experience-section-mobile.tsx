import { cn } from "@/lib/utils";
import { Experience } from "@/types";
import React from "react";
import { Skill } from "./skill";

const Timeline = ({ i }: { i: number }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-[1px] h-1/2 bg-gray-500" />
      <div className="w-8 h-8 bg-white bg-opacity-5 border-[1px] border-white border-opacity-15 flex items-center justify-center rounded-full">
        <p className="text-white text-xs">
          {i < 10 ? "0" : ""}
          {i}
        </p>
      </div>
      <div className="w-[1px] h-1/2 bg-gray-500" />
    </div>
  );
};

const ExperienceComponent = ({
  i,
  experience,
}: {
  i: number;
  experience: Experience;
}) => {
  return (
    <div
      className={cn(
        "flex-1 space-y-4 bg-white bg-opacity-5 border-white border-[1px] border-opacity-15 px-4 py-6 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md",
        i === 1 ? "mt-0" : "mt-6"
      )}
    >
      {/* TOP PART */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-100 text-[0.5rem] sm:text-xs">
            {experience.companyName}
          </p>
          <h1 className="text-xs sm:text-md text-white">{experience.role}</h1>
        </div>
        <div className="p-1 bg-white bg-opacity-5 border-[1px] border-white border-opacity-15 ">
          <p className="text-[0.65rem] text-white truncate">
            {experience.date}
          </p>
        </div>
      </div>

      {/* Description */}
      <ul className="text-gray-400">
        {experience.description.map((point: string) => (
          <li
            className="ml-4 text-[10px]"
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

const ExperienceSectionMobile = ({
  experience,
  i,
}: {
  experience: Experience;
  i: number;
}) => {
  return (
    <div className="flex gap-2">
      <Timeline i={i} />
      <ExperienceComponent i={i} experience={experience} />
    </div>
  );
};

export default ExperienceSectionMobile;
