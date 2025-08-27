"use client";
import React, { useState } from "react";
import { IoDiamond } from "react-icons/io5";
import { getLanguages, getSkills, getSummary } from "@/app/lib/profile";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PillContainer from "@/app/components/PillContainer";

export default function AboutPage() {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = () => setExpanded((val) => !val);

  const languagesList: string[] = getLanguages().map((l) => {
    return `${l.name} : ${l.level} `;
  });

  const skillsList = getSkills().map((topic) => {
    return (
      <div key={topic.title}>
        <h3 className="pb-3">{topic.title}</h3>
        <PillContainer items={topic.items} />
      </div>
    );
  });

  const summary = getSummary();

  return (
    <section className="flex flex-col grow gap-10 md:gap-25 m-10 justify-center items-center text-center ">
      <div className="ml-10 mr-10 text-lg">
        <div className=" flex justify-center items-center flex-cols mb-5 gap-3">
          <h1 className="uppercase font-bold  ">Summary</h1>
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
          <h1 className="flex flex-row gap-3 uppercase justify-center items-center font-bold ">
            <IoDiamond size={20} />
            Top Skills
          </h1>
          {skillsList}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="flex flex-row gap-3 uppercase justify-center items-center font-bold ">
            <IoDiamond size={20} />
            Languages
          </h1>
          <ul className="flex flex-row flex-wrap gap-3 items-center justify-center pl-9 pr-9">
            <PillContainer items={languagesList} />
          </ul>
        </div>
      </div>
    </section>
  );
}
