"use client";
import React, { useState, useRef } from "react";
// icons
import { IoDiamond } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// components
import PillContainer from "@/app/components/PillContainer";
import ScrollUp from "@/app/components/ScrollUp";
// data
import { getLanguages, getSkills, getSummary } from "@/app/lib/profile";
// Pages
import EducationPage from "@/app/Education/page";
import ExperiencePage from "@/app/Experience/page";

export default function AboutPage() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const toggleExpanded = () => setExpanded((val) => !val);
  const summary = getSummary();

  const languagesList: string[] = getLanguages().map((l) => {
    return `${l.name} : ${l.level} `;
  });

  const skillsList = getSkills().map((topic) => {
    return (
      <div key={topic.title}>
        <h3 className="pb-3 text-center ">{topic.title}</h3>
        <PillContainer items={topic.items} />
      </div>
    );
  });

  return (
    <div
      ref={scrollRef}
      className="h-[90vh] overflow-scroll snap-y snap-mandatory scroll-smooth "
    >
      <section className="snap-start snap-always min-h-[90vh] flex flex-col  py-10 gap-10 md:gap-25 justify-center items-center ">
        <div className="text-lg  md:w-3/4 ml-10 mr-10 ">
          <div className=" flex justify-center items-center flex-cols mb-5 gap-3 ">
            <h1 className="text-2xl font-bold uppercase text-center">
              Summary
            </h1>

            {!expanded && (
              <IoIosArrowDown
                size={20}
                className="hover:rounded-lg hover:text-white hover:bg-yellow-mustard md:hidden flex  "
                onClick={toggleExpanded}
              />
            )}
            {expanded && (
              <IoIosArrowUp
                size={20}
                className=" hover:rounded-lg hover:text-white hover:bg-yellow-mustard md:hidden flex "
                onClick={toggleExpanded}
              />
            )}
          </div>
          <p
            className={`text-wrap text-balance text-pretty ${
              expanded ? "line-clamp-none" : "line-clamp-3 md:line-clamp-none"
            }`}
          >
            {summary}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-3 md:divide-x-4 divide-gray-neutro/50">
          <div className="flex flex-col gap-3 ">
            <h1 className="flex flex-row gap-3 mb-5 uppercase justify-center items-center text-2xl font-bold ">
              <IoDiamond size={20} />
              Top Skills
            </h1>
            {skillsList}
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="flex flex-row gap-3 mb-5 uppercase justify-center items-center  text-2xl font-bold ">
              <IoDiamond size={20} />
              Languages
            </h1>
            <ul className="flex flex-row flex-wrap gap-3 items-center justify-center pl-9 pr-9">
              <PillContainer items={languagesList} />
            </ul>
          </div>
        </div>
      </section>
      <section className="snap-start min-h-[90vh] py-10  bg-rose-sand/30">
        <ExperiencePage />
      </section>
      <section className="snap-start min-h-[90vh] py-10  bg-rose-sand/60">
        <EducationPage />
      </section>
      <ScrollUp scrollContainerRef={scrollRef} />
    </div>
  );
}
