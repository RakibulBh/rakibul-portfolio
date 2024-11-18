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

export type Technology = {
  icon: any;
  label: string;
  description: string;
  bgColor?: string;
};
