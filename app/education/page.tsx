// Componentes
import Timeline from "@/app/components/Timeline";

// Dados
import profile from "@/app/data/profile.json";

export default function EducationPage() {
  const timeline = profile.education.timeline;

  return (
    <>
      <section className="m-10 ">
        <h1 className="text-2xl font-bold uppercase mb-8 text-center">
          Education
        </h1>
        <Timeline timeline={timeline} />
      </section>
    </>
  );
}
