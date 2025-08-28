// Components
import Timeline from "@/app/components/Timeline";

// Data
import { getExperienceTimeline } from "@/app/lib/profile";
import { TimelineItem } from "../types";

export default function ExperiencePage() {
  const timeline: TimelineItem[] = getExperienceTimeline();

  return (
    <section className="m-10 ">
      <h1 className="text-2xl font-bold uppercase mb-8 text-center">
        Experience
      </h1>
      <Timeline timeline={timeline} />
    </section>
  );
}
