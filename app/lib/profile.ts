// Datos
import profileData from "@/app/data/profile.json";
import { Social, Contact, DetailName, Profile , SkillGroup, Language} from "@/app/types";

//fetch data
export function getProfile(): Profile {
    return profileData
}

export function getName(): String {
    return getProfile().name
}

export function getJobTitle(): String {
    return getProfile().titleJob
}

export function getSmDesc(): String {
    return getProfile().smDescription
}

export function getContact(): Contact{
    return getProfile().contact
}

export function getContactInfo(): Social[] {
    return getProfile().contact.social;
}

export function getLanguages(): Language[] {
  if (!getProfile().about || !getProfile().about.languages) {
    throw new Error('Category "about" not found or missing languages');
  }
  return getProfile().about.languages;
}

export function getSkills(): SkillGroup[] {
  
  if (!getProfile().about || !getProfile().about.skills) {
    throw new Error('Category "about" not found or missing languages');
  }
  return getProfile().about.skills;
}

export function getSummary(): String {
  if (!getProfile().about || !getProfile().about.summary) {
    throw new Error('Category "about" not found or missing languages');
  }
  return getProfile().about.summary;
}

export function getCategoriesNames(): DetailName[]{
  const categories : DetailName[] = [];
  categories.push(getProfile().about.detail);
  categories.push(getProfile().experience.detail);
  categories.push(getProfile().education.detail);
  categories.push(getProfile().projects.detail);
  categories.push(getProfile().contact.detail);
  return categories;
}

