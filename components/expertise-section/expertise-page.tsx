import React from "react";
import ExpertiseContainer from "./expertise-component";

const expertise = [
  {
    name: "Game Development",
    description:
      "Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.",
    link: "https://rakibulbhuiyan.engineer",
  },
  {
    name: "Game Development",
    description:
      "Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.",
    link: "https://rakibulbhuiyan.engineer",
  },
  {
    name: "Game Development",
    description:
      "Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.",
    link: "https://rakibulbhuiyan.engineer",
  },
];

const ExpertisePage = () => {
  return (
    <div className="bg-[#12162B] px-20 flex justify-center h-[44rem] items-center flex-col gap-20">
      <h1 className="text-white text-5xl font-bold">My Expertise</h1>
      <div className="flex gap-x-6">
        {expertise.map((expertise, i) => (
          <ExpertiseContainer
            name={expertise.name}
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
