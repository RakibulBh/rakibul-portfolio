import React from "react";
import Timeline from "./time-line";
import ExperienceComponent from "./experience-component";
import { Experience } from "@/types";

const ExperienceSection = ({
  experience,
  i,
}: {
  experience: Experience;
  i: number;
}) => {
  return (
    <div className="flex items-center gap-4">
      {i % 2 == 0 ? (
        <div className="w-[45%] h-[20rem] p-4" />
      ) : (
        <ExperienceComponent experience={experience} />
      )}
      <Timeline i={i} />
      {i % 2 !== 0 ? (
        <div className="w-[45%] h-[20rem] p-4" />
      ) : (
        <ExperienceComponent experience={experience} />
      )}
    </div>
  );
};

export default ExperienceSection;
