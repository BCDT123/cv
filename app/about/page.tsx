import React from "react";
import { IoDiamond } from "react-icons/io5";
import { getLanguages, getSkills, getSummary } from "@/app/lib/profile";

export default function AboutPage() {
  const languagesList = getLanguages().map((l) => {
    return (
      <li key={l.name} className="rounded-lg bg-rose-sand/65 shadow-xl p-2">
        {l.name} : {l.level}
      </li>
    );
  });

  const skillsList = getSkills().map((topic) => {
    return (
      <div key={topic.title}>
        <h3 className="pb-3">{topic.title}</h3>
        <ul className="flex flex-row flex-wrap gap-3 items-center justify-center">
          {topic.items.map((i) => (
            <li key={i} className="rounded-lg bg-yellow-baby/50 shadow-xl p-2">
              {i}
            </li>
          ))}
        </ul>
      </div>
    );
  });

  const summary = getSummary();

  return (
    <section className="flex flex-col grow gap-10 m-10 justify-center items-center text-center ">
      <div className="ml-10 mr-10 text-lg">
        <h1 className="uppercase font-bold mb-5">Summary</h1>
        <p className="text-wrap text-balance text-pretty line-clamp-3 md:line-clamp-none">
          {summary}
        </p>
      </div>

      <section className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-3 md:divide-x-4 divide-gray-neutro/50">
        <div className="flex flex-col gap-3 ">
          <h1 className="flex flex-row gap-3 uppercase justify-center items-center font-bold">
            <IoDiamond size={20} />
            Top Skills
          </h1>
          {skillsList}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="flex flex-row gap-3 uppercase justify-center items-center font-bold">
            <IoDiamond size={20} />
            Languages
          </h1>
          <ul className="flex flex-row flex-wrap gap-3 items-center justify-center pl-9 pr-9">
            {languagesList}
          </ul>
        </div>
      </section>
    </section>
  );
}
