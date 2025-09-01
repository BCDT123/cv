
import type {Profile} from "@/app/types";

let cachedProfile: Profile | null = null;
export async function getProfile(): Promise<Profile> {  
  if (cachedProfile) return cachedProfile;
  try {
    const response = await import("@/app/lib/profile.json");
    const profile: Profile = response.default;

    if (!profile.name || !profile.contact || !profile.projects) {
      throw new Error("Perfil incompleto o mal estructurado");
    }

    cachedProfile = profile;
    return profile;
  } catch (error) {
    console.error("Error al cargar el perfil:", error);
    throw new Error("No se pudo cargar el perfil");
  }
}