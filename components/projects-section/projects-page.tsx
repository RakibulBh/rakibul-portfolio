"use client";
import { projects } from "@/libs/data";
import Navigation from "./navigation";
import Project from "./project-component";
import { useState } from "react";

const ProjectsPage = () => {
  const [currentState, setCurrentState] = useState("top-projects");

  return (
    <div className="min-h-screen bg-[#12162B]">
      <div className="hidden lg:block bg-[#20688C] absolute blur-[18rem] w-[40rem] h-[20rem] z-0 left-[8rem] top-[125rem] " />
      {/* CONTENT */}
      <div className="px-6 md:px-auto flex flex-col gap-10">
        <div className="text-center flex items-center flex-col gap-4">
          <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold">
            My Work
          </h1>
          <p className="text-gray-200 md:text-md text-xs">
            I am not just another player in the game; Iam the disruptor
          </p>
        </div>
        <Navigation
          currentState={currentState}
          setCurrentState={setCurrentState}
        />
        <div className="h-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
