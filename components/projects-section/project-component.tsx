import Image from "next/image";
import Technology from "./technology";
import img from "../../public/project-pic.png";

const Project = ({
  title,
  description,
  technologies,
}: {
  title: string;
  description: string;
  technologies: string[];
}) => {
  return (
    <div className="rounded-xl p-4 bg-white bg-opacity-5 border-[1px] border-white border-opacity-15 flex flex-col gap-4">
      <div className="flex justify-center h-48 ">
        <Image className="max-w-[300px]" src={img} alt="project-picture" />
      </div>
      <div className="space-y-2">
        <h1 className="font-bold text-white">{title}</h1>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
      <div className="flex flex-1 items-end">
        <div className="w-full flex flex-wrap text-center justify-center gap-2">
          {technologies.map((technology) => (
            <Technology key={technology} name={technology} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
