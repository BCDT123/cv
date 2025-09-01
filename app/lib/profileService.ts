
import {getProfile as getProfileMock } from "./profileMock";
import {getProfile as getProfileReal } from "./profileMock";

import type {
  Social,
  Contact,
  DetailName,
  Profile,
  SkillGroup,
  Language,
  TimelineItem,
  Project,
} from "@/app/types";

export const profileServiceType = {
  profileMockService: "profileMockService",
  profileService: "profileService",
};

export async function getProfile(): Promise<Profile> {  
 
    const serviceType = process.env.NEXT_PUBLIC_PROFILE_SERVICE_TYPE || profileServiceType.profileMockService;
   
   if (serviceType === "profileMockService") {
     return getProfileMock();
   } else if (serviceType === profileServiceType.profileService) {
     return getProfileReal();
   }
 
   throw "Invalid profile service type";
}

//función auxiliar que lanza un error cuando el valor es undefined o null.
function ensure<T>(value: T | null | undefined, errorMsg: string): T {
  if (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.trim() === "")
  ) {
    throw new Error(errorMsg);
  }
  return value;
}

export async function getCategoriesNames(): Promise <DetailName[]>{
  const categories : DetailName[] = [];
  const profile = await getProfile();
  categories.push(profile.about?.detail);
  // categories.push(getProfile().experience.detail);
  // categories.push(getProfile().education.detail);
  categories.push(profile.projects?.detail);
  categories.push(profile.contact?.detail);
  return categories;
}

export async function getName(): Promise<string> {
  const profile = await getProfile();
  return ensure(profile.name,'No se encontro el nombre');
}

export async function getJobTitle(): Promise<string> {
  const profile = await getProfile();
  return ensure(profile.titleJob,'No se encontro Cargo de Trabajo');
}

export async function getSmDesc(): Promise<string> {
  const profile = await getProfile();
  return ensure(profile.smDescription,'No se encontro una pequeña descripcion');
}

export async function getContact(): Promise<Contact> {
  const profile = await getProfile();
  return ensure(profile.contact,'No se encontro dato');
}

export async function getContactInfo(): Promise<Social[]> {
  const profile = await getProfile();
  return ensure(profile.contact?.social,'No se encontro dato');
}

export async function getLanguages(): Promise<Language[]> {
  const profile = await getProfile();
  return ensure(profile.about?.languages, 'No se encontraron idiomas en "about"');
}
export async function getSkills(): Promise<SkillGroup[]> {
  const profile = await getProfile();
  return ensure(profile.about?.skills,'No se encontro dato');
}

export async function getSummary(): Promise<string> {
  const profile = await getProfile();
  return ensure(profile.about?.summary,'No se encontro dato');
}
export async function getExperienceTimeline(): Promise<TimelineItem[]> {
  const profile = await getProfile();
  return ensure(profile.experience?.timeline,'No se encontro dato');
}

export async function getEducationTimeline(): Promise<TimelineItem[]> {
  const profile = await getProfile();
  return ensure(profile.education?.timeline,'No se encontro dato');;
}

export async function getProjects(): Promise<Project[]> {
  const profile = await getProfile();
  return ensure(profile.projects?.projectsData,'No se encontro dato');
}
