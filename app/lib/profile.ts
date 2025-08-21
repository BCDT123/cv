// Datos
import profileData from "@/app/data/profile.json";
import { ContactData, Contact, DetailName, Profile , SkillGroup, Language} from "@/app/types";

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

export function getContactInfo(): ContactData[] {
    return getProfile().contact.data
}

export function getLangujes(): Language[] {
  if (!getProfile().about || !getProfile().about.languajes) {
    throw new Error('Category "about" not found or missing languajes');
  }
  return getProfile().about.languajes;
}

export function getSkills(): SkillGroup[] {
  
  if (!getProfile().about || !getProfile().about.skills) {
    throw new Error('Category "about" not found or missing languajes');
  }
  return getProfile().about.skills;
}

export function getSumary(): String {
  if (!getProfile().about || !getProfile().about.summary) {
    throw new Error('Category "about" not found or missing languajes');
  }
  return getProfile().about.summary;
}

export function getCategoriesNames(): DetailName[]{
  const categories : DetailName[] = [];
  categories.push(getProfile().about.detail);
  categories.push(getProfile().contact.detail);
  return categories;
}
