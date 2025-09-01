"use client";
import React, { useState, useEffect } from "react";
// icons
import { IoDiamond } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// data
import { getLanguages, getSkills, getSummary } from "@/app/lib/profileService";
// components
import PillContainer from "@/app/components/PillContainer";
import { Language, SkillGroup } from "../types";

export default function SummaryPage() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [summary, setSummary] = useState<string>("");
  const [languages, setLanguages] = useState<Language[] | null>(null);
  const [skills, setSkills] = useState<SkillGroup[] | null>(null);
  const toggleExpanded = () => setExpanded((val) => !val);

  useEffect(() => {
    Promise.all([getSummary(), getLanguages(), getSkills()])
      .then(([summaryData, languagesData, skillsData]) => {
        setSummary(summaryData);
        setLanguages(languagesData);
        setSkills(skillsData);
      })
      .catch(console.error);
  }, []);

  const languagesList: string[] = (languages ?? []).map((l) => {
    return `${l.name} : ${l.level} `;
  });

  const skillsList = (skills ?? []).map((topic) => {
    return (
      <div key={topic.title}>
        <h3 className="pb-3 text-center">{topic.title}</h3>
        <PillContainer items={topic.items} />
      </div>
    );
  });

  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <div className="text-lg  md:w-3/4 ml-10 mr-10 ">
        <div className=" flex justify-center items-center flex-cols mb-5 gap-3 ">
          <h1 className="text-2xl font-medium uppercase text-center tracking-widest">
            Summary
          </h1>

          {!expanded && (
            <IoIosArrowDown
              size={20}
              className="hover:rounded-lg hover:text-white hover:bg-yellow-mustard md:hidden flex   "
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
          className={`text-wrap text-balance text-pretty text-gray-neutro/80 ${
            expanded ? "line-clamp-none" : "line-clamp-3 md:line-clamp-none"
          }`}
        >
          {summary}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-3 md:divide-x-4 divide-gray-neutro/50 md:w-3/4 ml-10 mr-10">
        <div className="flex flex-col gap-3 ">
          <h1 className="flex flex-row gap-3 mb-5 uppercase tracking-widest justify-center items-center text-2xl font-medium ">
            <IoDiamond size={20} />
            Top Skills
          </h1>
          {skillsList}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="flex flex-row gap-3 mb-5 uppercase tracking-widest justify-center items-center  text-2xl font-medium ">
            <IoDiamond size={20} />
            Languages
          </h1>
          <ul className="flex flex-row flex-wrap gap-3 items-center justify-center pl-9 pr-9">
            <PillContainer items={languagesList} />
          </ul>
        </div>
      </div>
    </div>
  );
}
