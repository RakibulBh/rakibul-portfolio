import React from "react";
import ExperienceSection from "./experience-section";
import { experiences } from "@/libs/data";
import { Experience } from "@/types";

const ExperiencesPage = () => {
  return (
    <div className="min-h-screen px-8 bg-[#12162B] pt-20 flex flex-col items-center">
      <div className="space-y-2 text-center">
        <h1 className="text-white font-bold text-5xl">
          Professional Experience
        </h1>
        <p className="tetx-md font-semibold text-gray-400">
          I am not just another student.
        </p>
      </div>
      <div className="mt-20 w-full">
        {experiences.map((experience: Experience, i) => (
          <ExperienceSection experience={experience} key={i} i={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default ExperiencesPage;
