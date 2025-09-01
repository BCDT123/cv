"use client";
import { useEffect, useState } from "react";
// Components
import Timeline from "@/app/components/Timeline";

// Data
import { getExperienceTimeline } from "@/app/lib/profileService";
import { TimelineItem } from "../types";

export default function ExperiencePage() {
  const [timeline, setTimeline] = useState<TimelineItem[] | null>(null);

  useEffect(() => {
    getExperienceTimeline().then(setTimeline).catch(console.error);
  }, []);

  return (
    <div
      id="education-section"
      aria-label="Education timeline"
      className="m-10"
    >
      <h1 className="text-2xl font-medium tracking-widest uppercase mb-8 text-center">
        Experience
      </h1>
      <Timeline timeline={timeline ?? []} />
    </div>
  );
}
