import { Experience } from "@/types";

export const projects = [
  {
    title: "Habituate",
    description:
      "Habituate not jus tany habit tracking app, it rewards you for completing habits, gamifying the idea. Complete habits and gain XP as well as level up with friends!",
    technologies: ["Next.js", "MongoDB", "Node.js", "React.js", "TypeScript"],
  },
  {
    title: "resumatch.ai",
    description:
      "Tired of tailoring your resume for hundreds of applications? Let resumatch.ai do it for you in 2 seconds!",
    technologies: [
      "Next.js",
      "MongoDB",
      "Node.js",
      "React.js",
      "TypeScript",
      "AWS",
    ],
  },
];

export const expertise = [
  {
    title: "Game Developer",
    description: "I like developing games when I have some free time",
    link: "https://www.rakibulbhuiyan.engineer",
  },
  {
    title: "Web developer",
    description:
      "This is what I have most experience with, having created many full-stack web applications.",
    link: "https://www.rakibulbhuiyan.engineer",
  },
  {
    title: "Bot developer",
    description:
      "Building discord bots, webscrapers can be fun a lot of the times.",
    link: "https://www.rakibulbhuiyan.engineer",
  },
];

export const experiences: Experience[] = [
  {
    companyName: "Code Camp",
    role: "Head Teacher",
    description: [
      "Teaching children essential programming concepts like loops, functions, and conditionals as well as game development.",
      "Tutored individual children on debugging procedures and thinking computationally when solving problems.",
      "Teaching groups of up to 20 children collaborating and communicating with other teaching staff, following lesson plans, and coordinating with each other to work efficiently.",
    ],
    skills: ["Team", "Teaching", "Game development", "Project Management"],
    date: "Oct 2024 - Present",
  },
  {
    companyName: "Mercedes AMG F1 Team",
    role: "IT Technician",
    description: [
      "Diagnosed technical issues occurring within the team, this included issues within the SAP software or setting up computer hardware and peripherals.",
      "Worked with IT professionals to set up environments for new upcoming employees.",
      "Attended daily team meetings with members from every department understanding how a large team works together to develop strategies and plans for success in upcoming races.",
    ],
    skills: ["Team", "IT", "SAP", "Software", "Hardware Peripherals"],
    date: "Jul 2022 - Jul 2022",
  },
];
