import { cn } from "@/libs/utils";
import { MoveUpRight } from "lucide-react";
import React from "react";

const ExpertiseContainer = ({
  name,
  description,
  link,
  i,
}: {
  name: string;
  description: string;
  link: string;
  i: number;
}) => {
  return (
    <div
      className={cn(
        "px-8 py-4 flex flex-col justify-between rounded-md text-white",
        i == 0 ? "bg-[#00B8D9]/10" : "bg-[#959AA5]/10",
        i == 2 && "border-[2px] border-white",
        i == 1 ? "w-80 h-64" : "w-72 h-56 "
      )}
    >
      <div>
        <p className="text-gray-500 opac">0{i}</p>
        <h3 className="capitalize">{name}</h3>
      </div>
      <p className="text-sm text-gray-400">{description}</p>
      <div className="flex gap-x-2 items-center hover:cursor-pointer group">
        <div className="w-6 h-6 flex justify-center items-center rounded-full text-white bg-transparent border-[1px] border-white">
          <MoveUpRight size={14} />
        </div>
        <p className="text-sm group-hover:underline group-hover:underline-offset-6 ">
          WEBDEV PROJECTS
        </p>
      </div>
    </div>
  );
};

export default ExpertiseContainer;
