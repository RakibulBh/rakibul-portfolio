import { projects } from "@/libs/data";
import Navigation from "./navigation";
import Project from "./project-component";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#12162B]">
      <div className="bg-[#20688C] absolute blur-[18rem] w-[40rem] h-[20rem] z-0 left-[8rem] top-[125rem] " />

      {/* CONTENT */}
      <div className="mx-20 flex flex-col gap-10">
        <div className="text-center flex items-center flex-col gap-4">
          <h1 className="text-white text-5xl font-bold">My Work</h1>
          <p className="text-gray-200">
            I am not just another player in the game; Iam the disruptor
          </p>
        </div>
        <Navigation />
        <div className="h-[60%] projects-container">
          {projects.map((project, i) => (
            <Project
              key={i}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
