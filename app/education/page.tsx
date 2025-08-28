// Components
import Timeline from "@/app/components/Timeline";

// Data
import { getEducationTimeline } from "../lib/profile";
import { TimelineItem } from "../types";

export default function EducationPage() {
  const timeline: TimelineItem[] = getEducationTimeline();

  return (
    <section className="m-10 ">
      <h1 className="text-2xl font-bold uppercase mb-8 text-center">
        Education
      </h1>
      <Timeline timeline={timeline} />
    </section>
  );
}
