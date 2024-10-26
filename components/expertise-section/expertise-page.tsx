import React from "react";
import ExpertiseContainer from "./expertise-component";
import { expertise } from "@/libs/data";

const ExpertisePage = () => {
  return (
    <div className="bg-[#12162B] flex justify-center h-[44rem] items-center flex-col gap-20">
      <div className="bg-[#20688C] absolute blur-[14rem] w-[30rem] h-[20rem] z-0" />
      <h1 className="text-white text-5xl font-bold">My Expertise</h1>
      <div className="flex gap-x-6">
        {expertise.map((expertise, i) => (
          <ExpertiseContainer
            key={expertise.title}
            name={expertise.title}
            description={expertise.description}
            i={i}
            link={expertise.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertisePage;
