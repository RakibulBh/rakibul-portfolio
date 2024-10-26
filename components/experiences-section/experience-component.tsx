import React from "react";

export const Skill = ({ name }: { name: string }) => {
  return (
    <div className="w-full flex items-center justify-center rounded-md bg-white bg-opacity-5 border-[1px] border-white border-opacity-15 px-2 py-1 text-[#00B8D9]">
      <p>{name}</p>
    </div>
  );
};

export const Links = ({ name }: { name: string }) => {
  return (
    <div className="w-full flex items-center justify-center rounded-md bg-white bg-opacity-5 border-[1px] border-white border-opacity-15 px-2 py-1 text-[#00B8D9]">
      <p>{name}</p>
    </div>
  );
};

const ExperienceComponent = () => {
  return (
    <div className="bg-white bg-opacity-5 border-[1px] border-white border-opacity-15 rounded-md p-4 w-[45%] h-[20rem] flex flex-col justify-between hover:bg-[#00B8D9] hover:bg-opacity-10 transition-colors ease-in-out duration-500 ">
      <div className="">
        <div className="flex justify-end">
          <p className="p-2 text-white bg-white bg-opacity-5 border-[1px] border-opacity-15 text-xs rounded-md">
            2024 PRESENT
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-gray-400">Company Name</p>
          <h1 className="text-white text-xl">WEB DEVELOPER</h1>
        </div>
      </div>
      <div>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          lacinia ipsum. Quisque a magna sed tortor eleifend mattis vitae sit
          amet quam. Sed viverra lacinia enim rutrum vehicula.
        </p>
      </div>
      <div className="flex gap-x-2">
        <div className="font-bold text-md text-sm text-white">Musickit.js</div>
      </div>
      <div className="flex gap-4">
        <Skill name="css" />
        <Skill name="css" />
        <Skill name="css" />
        <Skill name="css" />
        <Skill name="css" />
      </div>
    </div>
  );
};

export default ExperienceComponent;
