import React from "react";
import ExperienceSection from "./experience-section";
import { experiences } from "@/libs/data";
import { Experience } from "@/types";
import ExperienceSectionMobile from "./experience-section-mobile";
import SectionTitle from "../ui/section-title";

const ExperiencesPage = () => {
  return (
    <div className="min-h-screen px-8 bg-[#12162B] pt-20 flex flex-col items-center">
      <div className="space-y-2 text-center">
        <SectionTitle>Professional Experience</SectionTitle>
        <p className="text-xs md:text-sm lg:text-md font-semibold text-gray-400">
          I am not just another student.
        </p>
      </div>
      <div className="hidden md:block mt-20 w-full px-12">
        {experiences.map((experience: Experience, i) => (
          <ExperienceSection experience={experience} key={i} i={i + 1} />
        ))}
      </div>
      <div className="mt-16 w-full block md:hidden">
        {experiences.map((experience: Experience, i) => (
          <ExperienceSectionMobile experience={experience} key={i} i={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default ExperiencesPage;
