// Componentes
import PetIcon from "@/app/components/PetIcon";
import ExperienceTimeline from "@/app/components/ExperienceTimeline";

// Dados
import profile from "@/app/data/profile.json";

export default function ExperiencePage() {
  const timeline = profile.experience.timeline;

  return (
    <>
      <section className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold uppercase mb-8 text-center">
          Experience
        </h1>
        <ExperienceTimeline timeline={timeline} />
      </section>
    </>
  );
}
