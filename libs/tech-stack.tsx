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

export const TECH_STACK: Technology[] = [
  {
    icon: <Dotnet fill="#FFFFFF" />,
    label: "Dotnet",
    description: "backend language",
    bgColor: "#512BD4",
  },
  {
    icon: <JS fill="#F7DF1E" />,
    label: "JavaScript",
    description: "backend language",
  },
  {
    icon: <TS fill="#3178C6" />,
    label: "TypeScript",
    description: "backend language",
  },
  {
    icon: <Python fill="#3776AB" />,
    label: "Python",
    description: "backend language",
    bgColor: "",
  },
  {
    icon: <Prisma fill="#2D3748" />,
    label: "Prisma",
    description: "An open source ORM",
  },
  {
    icon: <PG fill="#4169E1" />,
    label: "PostgreSQL",
    description: "A database.",
    bgColor: "#FFFFFF",
  },
  {
    icon: <Mongo fill="#47A248" />,
    label: "MongoDB",
    description: "A database.",
  },
  {
    icon: <Next fill="#000000" />,
    label: "Next.js",
    description: "A database.",
  },
  {
    icon: <Tailwind fill="#06B6D4" />,
    label: "Tailwind CSS",
    description: "A database.",
  },
  {
    icon: <React fill="#61DAFB" />,
    label: "Tailwind CSS",
    description: "A database.",
  },
  {
    icon: <Git fill="#F05032" />,
    label: "Tailwind CSS",
    description: "A database.",
  },
];
