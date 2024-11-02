import React from "react";
import ExpertiseContainer from "./expertise-component";
import { expertise } from "@/libs/data";

const ExpertisePage = () => {
  return (
    <div className="bg-[#12162B] py-20 flex flex-col items-center gap-8 md:gap-20 md:justify-center md:h-[44rem]">
      <div className="hidden lg:block bg-[#20688C] absolute blur-[14rem] w-[30rem] h-[20rem] z-0" />
      <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
        My Expertise
      </h1>
      <div className="flex flex-col md:flex-row gap-6 px-auto px-10 sm:px-24 md:px-8 lg:px-0 md:justify-between">
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
