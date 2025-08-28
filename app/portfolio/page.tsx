"use client";
import { useRef } from "react";
// data
import { getProjects } from "../lib/profile";
import { Project } from "../types";

// components
import ScrollUp from "@/app/components/ScrollUp";
import CardProject from "../components/CardProject";

export default function PortfolioPage() {
  const projects: Project[] = getProjects();
  const scrollRef = useRef<HTMLDivElement>(null);
  const projectList = projects.map((project, index) => (
    <CardProject
      key={index}
      project={project}
      reverse={index % 2 !== 0} // Alterna la posición de la imagen
    />
  ));

  return (
    <div
      ref={scrollRef}
      className="h-[90vh] overflow-scroll snap-y snap-mandatory scroll-smooth"
    >
      <div className="m-10 gap-4 ">{projectList}</div>
      <ScrollUp scrollContainerRef={scrollRef} />
    </div>
  );
}
