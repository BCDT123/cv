"use client";
import { useRef } from "react";

// components
import ScrollUp from "@/app/components/ScrollUp";

// Pages
import EducationPage from "@/app/Education/page";
import ExperiencePage from "@/app/Experience/page";
import SummaryPage from "@/app/Summary/page";

export default function AboutPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionStyles = "snap-start min-h-[90vh] py-10";
  return (
    <div
      ref={scrollRef}
      className="h-[90vh] overflow-scroll snap-y snap-mandatory scroll-smooth "
    >
      <section className={`${sectionStyles} snap-always `}>
        <SummaryPage />
      </section>
      <section className={`${sectionStyles} bg-rose-sand/30`}>
        <ExperiencePage />
      </section>
      <section className={`${sectionStyles} bg-rose-sand/60`}>
        <EducationPage />
      </section>
      <ScrollUp scrollContainerRef={scrollRef} />
    </div>
  );
}
