import React from "react";
import Timeline from "./time-line";
import ExperienceComponent from "./experience-component";

const ExperienceSection = ({ i }: { i: number }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      {i % 2 == 0 ? <div className="w-1/2 h-20" /> : <ExperienceComponent />}
      <Timeline />
      {i % 2 !== 0 ? <div className="w-1/2 h-20" /> : <ExperienceComponent />}
    </div>
  );
};

export default ExperienceSection;
