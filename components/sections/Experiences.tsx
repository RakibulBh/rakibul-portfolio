"use client";
import {
  Experience as ExperienceType,
  WORK_EXPERIENCES,
} from "@/contstants/Experiences";
import { cn } from "@/utils/cn";
import exp from "constants";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

const Experiences = () => {
  const [section, setSection] = useState<"work" | "education">("work");
  return (
    <section className="h-screen flex flex-col items-center py-16">
      <div className="flex-1 container px-6 flex flex-col space-y-2">
        <div className="rounded-md bg-card flex">
          <Navlink section={section} setSection={setSection} name="Work" />
          <Navlink section={section} setSection={setSection} name="Education" />
        </div>
        <div className="flex-1 w-full border border-softgray rounded-lg p-4 overflow-y-auto">
          {WORK_EXPERIENCES.map((experience) => (
            <Experience key={experience.company} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = ({ experience }: { experience: ExperienceType }) => {
  return (
    <div className="flex gap-6 p-4">
      <div className="flex flex-col items-start">
        <Image
          className="rounded-full"
          width={40}
          height={40}
          src={`/brands/${experience.image}`}
          alt={`${experience.company}-logo`}
        />
      </div>
      <div className="flex-1 text-white">
        <p className="text-xs text-gray-400">{experience.date}</p>
        <h1 className="text-xl">{experience.company}</h1>
        <p className="text-gray-100 text-md font-bold">{experience.role}</p>
        <ul className="mt-2 space-y-1">
          {experience.bullets.map((bullet, idx) => (
            <li key={idx} className="text-sm list-disc text-gray-200">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Navlink = ({
  name,
  section,
  setSection,
}: {
  name: "Work" | "Education";
  section: "work" | "education";
  setSection: Dispatch<SetStateAction<"work" | "education">>;
}) => {
  const isActive = section === name.toLowerCase();
  return (
    <div className="flex-1 p-1">
      <div
        onClick={() => setSection(section === "work" ? "education" : "work")}
        className={cn(
          "p-1  rounded-md hover:cursor-pointer",
          isActive && "bg-softgray"
        )}
      >
        <p
          className={cn(
            "text-center  font-semibold",
            isActive ? "text-white" : "text-gray-400"
          )}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default Experiences;
