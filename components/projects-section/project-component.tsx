import Image from "next/image";
import Technology from "./technology";
import img from "../../public/project-pic.png";
import { Project } from "@/types";
import Link from "next/link";
import { Link2 } from "lucide-react";

const ProjectComponent = ({ project }: { project: Project }) => {
  return (
    <div className="rounded-xl p-4 bg-white bg-opacity-5 border-[1px] border-white border-opacity-15 flex flex-col gap-4">
      <div className="flex justify-center h-48 ">
        <Image className="max-w-[300px]" src={img} alt="project-picture" />
      </div>
      <div className="space-y-2">
        <Link className="max-w-fit" href={project.link}>
          <div className="border-b-2 hover:cursor-pointer hover:border-white border-transparent pb-[2px] flex items-center gap-2 max-w-fit">
            <h1 className="font-bold text-white">{project.title}</h1>
            <Link2 className="text-white" />
          </div>
        </Link>
        <p className="text-sm text-gray-300">{project.description}</p>
      </div>
      <div className="flex flex-1 items-end">
        <div className="w-full flex flex-wrap text-center justify-center gap-2">
          {project.technologies.map((technology) => (
            <Technology key={technology} name={technology} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
