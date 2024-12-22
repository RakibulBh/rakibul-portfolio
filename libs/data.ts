import { Experience, Project } from "@/types";
import CountryDisplay from "@/public/project-images/countries-display.jpeg";
import TTTMinimax from "@/public/project-images/ttt-minimax.png";
import MedicineDashboard from "@/public/project-images/medicine-dashboard.png";
import JustDeenWaitlist from "@/public/project-images/justdeen-waitlistt.png";
import JsonCompare from "@/public/project-images/json-compare.png";
import Portfolio from "@/public/project-images/portfolio.jpeg";

export const topProjects: Project[] = [
  {
    title: "Rakibul's Portfolio",
    description: "Checkout how this portfolio was made!",
    technologies: ["Next.js", "TypeScript", "Node.js"],
    img: Portfolio,
    link: "https://github.com/RakibulBh/rakibul-portfolio",
  },
  {
    title: "Habituate",
    description:
      "Habituate is not just any habit tracking app, it rewards you for completing habits, gamifying the idea. Complete habits and gain XP as well as level up with friends!",
    technologies: ["Next.js", "MongoDB", "Node.js", "React.js", "TypeScript"],
    link: "https://github.com/RakibulBh/Habituate",
    img: null,
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
    img: null,
    link: "https://github.com/RakibulBh/resumatch-ai",
  },
  {
    title: "TicTacToe AI",
    description: "Implemented a TicTacToe AI using the MiniMax algorithm.",
    technologies: ["Next.js", "Node.js", "React.js", "TypeScript"],
    link: "https://github.com/RakibulBh/ttt-minimax-algorithm",
    img: TTTMinimax,
  },
  {
    title: "YelpCamp",
    description:
      "YelpCamp is an app that helps you review and rate camps around the US, it also allows you to create your own camp!",
    technologies: ["EJS", "JavaScript", "MongoDB", "Express.js", "Cloudinary"],
    link: "https://github.com/RakibulBh/YelpCamp",
    img: null,
  },
];

export const webProjects: Project[] = [
  {
    title: "Country Displayer",
    description:
      "This project was created to make it easy to view different countries and their data such as population. Features like real time search, sorting and filtering by population make it very user friendly and aims to solve the main problem perfectly.",
    technologies: ["Next.js", "TypeScript", "Tailwind-CSS"],
    link: "https://github.com/RakibulBh/elanco-second-interview-assignment",
    img: CountryDisplay,
  },
  {
    title: "Medicine Dashboard",
    description:
      "This project is aimed to create an interactive dashboard for an admin to manage medicine data from a dummy backend, the user is able to delete, edit, search, sort and filter medicines based on their lking as well as get an overview statistic of the current medicines in the database such as medicine count and avarage price. ",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind-CSS",
      "Python",
      "FastAPI",
    ],
    link: "lilly",
    img: MedicineDashboard,
  },
  {
    title: "JustDeen waitlist",
    description:
      "This waitlist was created to validate an app idea I had in mind, I created this waitlist allows me to present my product and give users the ability join the waitlist but also be able to suggest a feature they would like to see in the final app.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind-CSS",
      "PostegreSQL",
      "NeonDB",
    ],
    link: "https://github.com/RakibulBh/justdeen-waitlist",
    img: JustDeenWaitlist,
  },
  {
    title: "Json Compare",
    description:
      "This project was created by me to share to my co-workers, this software would be used to help compare JSON data and analyze the differences.",
    technologies: ["Next.js", "TypeScript", "Tailwind-CSS"],
    link: "https://github.com/RakibulBh/json-compare",
    img: JsonCompare,
  },
  {
    title: "Notion Inspired To-List",
    description:
      "Not just any ordinary to-do list, this to-do list includes O-Auth, and users can have tagged to-dos as well as a sidebar including all information about their to-dos.",
    technologies: [
      "Next.js",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "PrismaORM",
    ],
    link: "https://github.com/RakibulBh/YelpCamp",
    img: null,
  },
];

export const gameProjects: Project[] = [];

export const otherProjects: Project[] = [];

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
    companyName: "SquaredUp",
    role: "Software Engineer Placement",
    description: ["N/A"],
    skills: ["TypeScript", "React.js", "Node.js", "DynamoDB", "AWS"],
    date: "Sep 2025 - Sep 2026",
  },
  {
    companyName: "Brunel Talent Marketplace",
    role: "Full-stack developer",
    description: [
      "Involved in the development of full-stack projects for various clients through BTM consulting, delivering high-quality software within established timelines. ",
      "Architected university software systems while seamlessly adapting to varied codebases and tech stacks. ",
      "Collaborated in a scrum environment to drive project deliverables, taking part in sprint planning and daily stand-ups. ",
    ],
    skills: ["Python", "React", "AI", "Algorithms"],
    date: "Nov 2024 - Present",
  },
  {
    companyName: "Code Camp",
    role: "Lead Code Tutor",
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
