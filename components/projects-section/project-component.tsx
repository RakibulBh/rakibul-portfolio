import Image from "next/image";
import Technology from "./technology";

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
    <div className="rounded-xl p-4 bg-[#FFFFFF] bg-opacity-5 border-[1px] border-white flex flex-col gap-4">
      <div className="flex justify-center">
        <Image src="/image.png" alt="project-picture" width={400} height={10} />
      </div>
      <div className="space-y-2">
        <h1 className="font-bold text-white">{title}</h1>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
      <div className="flex justify-between gap-2">
        {technologies.map((technology) => (
          <Technology name={technology} />
        ))}
      </div>
    </div>
  );
};

export default Project;
