import type { ReactNode } from "react";

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  onLinkClick?: () => void;
  isActive?: boolean;
};
 
export type DetailName = {
  displayName: string;
  slug: string;
  //data: AboutData //| ProjectsData | ExperienceData; // Aquí puedes usar una unión si hay más variantes
};

export type Profile = {
  name: string;
  titleJob:string;
  smDescription:string;
  contact: Contact;
  about: About;
  education: Education;
  experience: Experience;
  projects: Projects;
};

export type Contact = {
  detail: DetailName;
  address: string;
  telephone: string;
  email: string;
  social: Social[];
};

export type Education = {
  detail: DetailName;
  timeline: TimelineItem[];
};

export type Experience = {
  detail: DetailName;
  timeline: TimelineItem[];
};

export type TimelineItem = {
  title: string;
  company?: string;
  period: string;
  location: string;
  skills?: string[];
  description: string[];
};

export type Projects = {
  detail: DetailName;
  projectsData: Project[];
};

export type Project = {
  name: string;
  description: string;
  image: string;
  url?: string;
  repository?: string;
  technologies: string[];
}

export type Social = {
  name: string;
  url?: string;
  user?:string;
};

export type About = {
  detail: DetailName;
  summary: string;
  skills: SkillGroup[];
  languages: Language[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Language = {
  name: string;
  level: string;//"Native" | "Profesional" | "Elementary"| "Intermediate" | "Fluent";//forzar que solo se usen esos tres valores
};


export type ScaleElementProps = {
  element: ReactNode;
}
