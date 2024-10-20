import Image from "next/image";
import Technology from "./technology";

const Project = () => {
  return (
    <div className="rounded-xl p-4 bg-[#FFFFFF] bg-opacity-5 border-[1px] border-white flex flex-col gap-4">
      <div className="flex justify-center">
        <Image src="/image.png" alt="project-picture" width={400} height={10} />
      </div>
      <div className="space-y-2">
        <h1 className="font-bold text-white">Project Home</h1>
        <p className="text-sm text-gray-300">
          Project description loremipsum lorm ipsum lorem itsum ipsum lorem{" "}
        </p>
      </div>
      <div className="flex justify-between gap-2">
        <Technology name="Next.js" />
        <Technology name="Next.js" />
        <Technology name="Next.js" />
        <Technology name="Next.js" />
      </div>
    </div>
  );
};

export default Project;
