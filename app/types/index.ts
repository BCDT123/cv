
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
  experience: Experience;
  projects: Projects;
};

export type Contact = {
  detail: DetailName;
  address: String;
  telephone: String;
  email: String;
  social: Social[];
};

export type Experience = {
  detail: DetailName;
};

export type Projects = {
  detail: DetailName;
};

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