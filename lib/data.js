import corpcommentImg from "@/public/placeholder.jpg";
import rmtdevImg from "@/public/placeholder.jpg";
import wordanalyticsImg from "@/public/placeholder.jpg";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
];

export const aboutData = [
  {
    text1: 'I am currently in my first year of university studying Computer Science, currently predicted a 1st class degree.',
    text2: 'At the age of 11 i started developing roblox games using Lua by watching youtube tutorials, which then began my passion for coding. At age 16 i was working on app development using android studio and java outside of school work. And at the moment, i am developing my fullstack web development skills.'
  }
]

export const aboutCardData = [
  {
    icon: 'Code',
    title: 'Coding Experience',
    descirption: '4+ years'
  },
  {
    icon: 'File',
    title: 'Projects',
    descirption: '20+'
  },
  {
    icon: 'LeetCode',
    title: 'Leetcode Problems Solved',
    descirption: '20+'
  }
]


export const projectsData = [
  {
    title: "Personal Portfolio",
    description:
      "I worked on this project as my first portfolio as i never had one before, i was quite bad at design so i took lots of UI inspiration, learnt many things in this project such as Next.js in depth, and using framermotion, very fun project.",
    tags: ["React", "Next.js", "Framermotion", "Tailwind", "React Context API", "Shadcn"],
    githubUrl: 'https://github.com/RakibulBh/rakibul-portfolio',
    productionUrl: 'https://rakibul-portfolio-7e5dlbsa5-rakibuls-projects-a63b5332.vercel.app/'
  },
  {
    title: "YelpCamp",
    description:
      "A full stack web application that involves Camp listings, authenticated users can create/edit/delete camps, and also add reviews to comments, overall as my first ever full-stack application it went extremely well.",
    tags: ["HTML/CSS", "JS", "Express.js", "Bootstrap", "EJS", "Node.js", "MongoDB"],
    githubUrl: 'https://github.com/RakibulBh/YelpCamp',
    productionUrl: 'https://extinct-rose-long-johns.cyclic.app/'
  },
  {
    title: "Expense Tracker",
    description:
      "A MERN Stack application that involves every logged in user to be able to add expenses of their onw, along with a category. Users can edit/delete and add expenses as much as they like, a dashboard is also shown showing weekly, monhtly expenses along with the time period. ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    githubUrl: 'https://github.com/RakibulBh/expensetracker-frontend',
    productionUrl: 'https://expensetracker-frontend-msozk3xde-rakibuls-projects-a63b5332.vercel.app/'
  },
  {
    title: "Food App",
    description:
      "A fullstack Next.js application that involves users to be able to add and delete their own menu items, learnt lots of things such as Server Side Rendering and App Router",
    tags: ["React", "Next.js", "mySQL"],
    githubUrl:'https://github.com/RakibulBh/nextjs-food-app/',
    productionUrl: 'https://github.com/RakibulBh/nextjs-food-app/'
  },
];

export const allProjectsData = [
  {
    date: "04/24",
    title: "Personal Portfolio",
    technologies: ["React", "Next.js", "Framermotion", "Tailwind", "React Context API", "Shadcn"],
    githubUrl: 'https://github.com/RakibulBh/rakibul-portfolio',
    productionUrl: 'https://rakibul-portfolio-7e5dlbsa5-rakibuls-projects-a63b5332.vercel.app/'
  },
  {
    date: '12/23',
    title: "YelpCamp",
    technologies: ["HTML/CSS", "JS", "Express.js", "Bootstrap", "EJS", "Node.js", "MongoDB"],
    githubUrl: 'https://github.com/RakibulBh/YelpCamp',
    productionUrl: 'https://extinct-rose-long-johns.cyclic.app/'
  },
  {
    date: '03/24',
    title: "Expense Tracker",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    githubUrl: 'https://github.com/RakibulBh/expensetracker-frontend',
    productionUrl: 'https://expensetracker-frontend-msozk3xde-rakibuls-projects-a63b5332.vercel.app'
  },
  {
    date: '04/24',
    title: "Food App",
    technologies: ["React", "Next.js", "mySQL"],
    githubUrl:'https://github.com/RakibulBh/nextjs-food-app',
  },
]


export const skillsData = {
  mobile: ['Java', 'Android Studio'],
  web: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Redux', 'Tailwind CSS', 'Next.js', 'MongoDB', 'Express.js', 'Node.js'],
  games: ['Lua', 'C++', 'Roblox Studio', 'PyGame'],
  other: ['Python', 'Discord.py'],
};
