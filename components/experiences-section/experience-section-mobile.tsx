import { Experience } from "@/types";
import React from "react";
import ExperienceComponent from "./experience-component";
import Timeline from "./time-line";

const ExperienceSectionMobile = ({
  experience,
  i,
}: {
  experience: Experience;
  i: number;
}) => {
  return (
    <div className="flex justify-start items-center gap-4">
      <Timeline i={i} />
      <ExperienceComponent experience={experience} />
    </div>
  );
};

export default ExperienceSectionMobile;
