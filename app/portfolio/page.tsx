"use client";
import { useRef, useState, useEffect } from "react";
// data
import { getProjects } from "../lib/profileService";
import { Project } from "../types";

// components
import ScrollUp from "@/app/components/ScrollUp";
import CardProject from "../components/CardProject";

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    getProjects().then(setProjects).catch(console.error);
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);
  const projectList = (projects ?? []).map((project, index) => (
    <CardProject
      key={index}
      project={project}
      reverse={false} //{index % 2 !== 0} // Alterna la posición de la imagen
    />
  ));

  return (
    <div
      ref={scrollRef}
      className="h-[90vh] overflow-scroll snap-y snap-mandatory scroll-smooth"
    >
      <div className="m-10 gap-1 grid grid-cols-1 xl:grid-cols-2">
        {projectList}
      </div>
      <ScrollUp scrollContainerRef={scrollRef} />
    </div>
  );
}
