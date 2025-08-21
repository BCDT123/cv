import React from "react";
import {  getName } from "@/app/lib/profile";

export default function Home() {
 const name: String = getName();
  // imagen breve info
     return ( 
        <section className="flex flex-col items-center  gap-3  p-10  bg-aa">
          <h2>Hello I'm</h2>
          <h1 className="text-6xl uppercase text-orange_accent text-left text-balance text-pretty">{name}</h1>
          <h3>Front-End Developer </h3>
          <p>Exploring AI & QA | Advocate for Smart Innovation</p>
          <div className="flex flex-col justify-start gap-2 ">
            {/* {getContact()} */}
          </div>
    
          <button> Download CV</button>
   
        </section> 
    );
}