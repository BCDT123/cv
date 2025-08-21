import React from "react";
import { IoDiamond } from "react-icons/io5";
import {getLangujes, getSkills,getSumary} from "@/app/lib/profile"

export default function AboutPage(){

const languagesList = getLangujes().map(l => {
    return (<li key={l.name} className="rounded-lg bg-rose-sand/65 shadow-xl p-2" >{l.name} : {l.nivel}</li>)
    });

  const skillsList = getSkills().map(topic => {
    return (
      <div key={topic.titulo} className="pl-9 pr-9">
          <h3 className="pb-3">{topic.titulo}</h3>
          <ul className="list-none flex flex-row flex-wrap gap-4 items-center">
            {topic.items.map(i=> <li key={i} className="rounded-lg bg-yellow-baby/50 shadow-xl p-2">{i}</li>)}
          </ul>
      </div>
    )
  });
  
  const summary = getSumary()

  return( 
   <section className="flex flex-col grow gap-15 m-10 justify-center items-center">
      <div className="ml-10 mr-10 text-lg">
        <h2 className="uppercase font-bold mb-5">Sumary</h2>
        <p className="text-wrap text-balance text-pretty">{summary}</p>
      </div>
     
      <section className="grid grid-cols-2 gap-4 divide-x-4 divide-gray-neutro/50">
      <div className="flex flex-col gap-5 ">
        <h2 className="flex flex-row gap-3 uppercase justify-center items-center font-bold"><IoDiamond size={20}/>Top Skills</h2>
        {skillsList}
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="flex flex-row gap-3 uppercase justify-center items-center font-bold"><IoDiamond size={20} />Languajes</h2>
        <ul className="list-none flex flex-row flex-wrap gap-4 items-center pl-9 pr-9">
          {languagesList}
        </ul>
      </div>
      </section>
   </section>
    );
}