
import type { ReactNode } from "react";

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  isActive?: boolean;
};
 
export type DetailName = {
  displayName: string;
  slug: string;
  //data: AboutData //| ProjectsData | ExperienceData; // Aquí puedes usar una unión si hay más variantes
};
export type Profile = {
  name: string;
  contact: Contact;
  about: AboutData;
};

export type Contact = {
  detail: DetailName;
  data: ContactData[];
};

export type ContactData = {
  name: string;
  url?: string;
  user?:string;
  data?:string;
};

export type AboutData = {
  detail: DetailName;
  summary: string;
  skills: SkillGroup[];
  languajes: Language[];
};

export type SkillGroup = {
  titulo: string;
  items: string[];
};

export type Language = {
  name: string;
  nivel: string;//"Native" | "Profesional" | "Elementary"| "Intermediate" | "Fluent";//forzar que solo se usen esos tres valores
};