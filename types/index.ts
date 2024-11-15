export type Experience = {
  companyName: string;
  role: string;
  description: string[];
  skills: string[];
  date: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  img: string | null;
  link: string;
};
