import { cn } from "@/libs/utils";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
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
        "px-8 py-4 w-full h-64  flex flex-col border-[1px] border-white border-opacity-10 justify-between rounded-tl-2xl rounded-br-2xl rounded-tr-xl rounded-bl-xl text-white z-10 md:hover:-translate-y-10 transition-transform ease-in-out duration-700 bg-[#959AA5]/10 hover:bg-[#00B8D9] hover:bg-opacity-10 pb-12",
        i == 1 ? "lg:w-80 lg:h-64 md:h-80" : "lg:w-72 lg:h-56 md:h-72"
      )}
    >
      <div className="space-y-[2px]">
        <p className="text-gray-500 opac">0{i + 1}</p>
        <h3 className="capitalize">{name}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <Link href={link}>
        <div className="flex gap-x-2 items-center hover:cursor-pointer group">
          <div className="w-6 h-6 flex justify-center items-center rounded-full text-white bg-white bg-opacity-5 border-opacity-10 border-[1px] border-white">
            <MoveUpRight className="" size={14} />
          </div>
          <p className="text-xs lg:text-sm group-hover:underline group-hover:underline-offset-6 ">
            WEBDEV PROJECTS
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ExpertiseContainer;
