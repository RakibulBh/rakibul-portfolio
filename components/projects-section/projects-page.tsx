"use client";
import {
  gameProjects,
  otherProjects,
  topProjects,
  webProjects,
} from "@/libs/data";
import Navigation from "./navigation";
import { useState } from "react";
import { Project } from "@/types";
import ProjectComponent from "./project-component";
import SectionTitle from "../ui/section-title";
import SectionDescription from "../ui/section-description";

const ProjectsPage = () => {
  const [currentState, setCurrentState] = useState("top");

  return (
    <div className="min-h-screen bg-[#12162B]">
      <div className="hidden lg:block bg-[#20688C] absolute blur-[18rem] w-[40rem] h-[20rem] z-0 left-[8rem] top-[125rem] " />
      {/* CONTENT */}
      <div className="px-6 md:px-auto flex flex-col gap-10">
        <div className="text-center flex items-center flex-col gap-4">
          <SectionTitle>My Work</SectionTitle>
          <SectionDescription>
            My projects vary in technologies, I like to learn new things and
            challlenge myself for every new project I work on.
          </SectionDescription>
        </div>
        <Navigation
          currentState={currentState}
          setCurrentState={setCurrentState}
        />
        <div className="h-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentState === "top" &&
            topProjects.map((project: Project, i) => (
              <ProjectComponent key={i} project={project} />
            ))}
          {currentState === "web" &&
            webProjects.map((project: Project, i) => (
              <ProjectComponent key={i} project={project} />
            ))}
          {currentState === "game" &&
            gameProjects.map((project: Project, i) => (
              <ProjectComponent key={i} project={project} />
            ))}
          {currentState === "other" &&
            otherProjects.map((project: Project, i) => (
              <ProjectComponent key={i} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
