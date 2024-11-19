import { Technology } from "@/types";
import Dotnet from "@/public/icons/dotnet.svg";
import Mongo from "@/public/icons/mongo.svg";
import Prisma from "@/public/icons/prisma.svg";
import PG from "@/public/icons/pg.svg";
import JS from "@/public/icons/js.svg";
import TS from "@/public/icons/ts.svg";
import Python from "@/public/icons/python.svg";
import Tailwind from "@/public/icons/tailwind.svg";
import Next from "@/public/icons/next.svg";
import Git from "@/public/icons/git.svg";
import React from "@/public/icons/react.svg";
import HTML from "@/public/icons/html.svg";
import AWS from "@/public/icons/aws.svg";

export const TECH_STACK: Technology[] = [
  // Languages
  {
    icon: <Python fill="#3776AB" />,
    label: "Python",
    description: "General language.",
  },
  {
    icon: <JS fill="#F7DF1E" />,
    label: "JavaScript",
    description: "Web scripting language.",
  },
  {
    icon: <TS fill="#3178C6" />,
    label: "TypeScript",
    description: "Typed JavaScript superset.",
  },
  {
    icon: <Dotnet fill="#FFFFFF" />,
    label: ".NET",
    description: "App Development Platform",
    bgColor: "#512BD4",
  },

  // Frameworks & Libraries
  {
    icon: <React fill="#61DAFB" />,
    label: "React",
    description: "JavaScript framwork",
  },
  {
    icon: <Next fill="#000000" />,
    label: "Next.js",
    description: "React framework.",
  },
  {
    icon: <Tailwind fill="#06B6D4" />,
    label: "Tailwind",
    description: "Utility-first CSS.",
  },
  {
    icon: <Prisma fill="#2D3748" />,
    label: "Prisma",
    description: "Modern ORM tool.",
  },

  // Databases & Tools
  {
    icon: <PG fill="#4169E1" />,
    label: "PostgreSQL",
    description: "Relational database.",
  },
  {
    icon: <Mongo fill="#47A248" />,
    label: "MongoDB",
    description: "NoSQL database.",
  },
  {
    icon: <Git fill="#F05032" />,
    label: "Git",
    description: "Version control.",
  },
  {
    icon: <AWS fill="#232F3E" />,
    label: "AWS",
    description: "Cloud infrastructure.",
    bgColor: "#ffffff",
  },
];
