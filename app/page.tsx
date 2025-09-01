"use client";
import React, { useEffect, useState } from "react";
//Components
import Button from "@/app/components/Button";
import IconLink from "@/app/components/IconLink";
import PetAi from "./components/PetAi";
import { Social } from "@/app/types";

import {
  getName,
  getJobTitle,
  getContactInfo,
  getSmDesc,
} from "@/app/lib/profileService";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [smDescription, setSmDesc] = useState<string>("");

  const [socialInfo, setSocialInfo] = useState<Social[] | null>(null);

  useEffect(() => {
    getName().then(setName).catch(console.error);
  }, []);

  useEffect(() => {
    getJobTitle().then(setJob).catch(console.error);
  }, []);

  useEffect(() => {
    getSmDesc().then(setSmDesc).catch(console.error);
  }, []);

  useEffect(() => {
    getContactInfo().then(setSocialInfo).catch(console.error);
  }, []);

  const contactList = (socialInfo ?? []).map((item) => (
    <IconLink key={item.name} {...item} showUser={false} />
  ));

  return (
    <div className="flex flex-col grow justify-between md:flex-row m-10  max-h-screen">
      <section className="flex flex-col items-center md:items-start m-10 gap-4 md:w-1/2">
        <h2 className="text-3xl md:text-5xl">Hello, I'm</h2>
        <h1 className="text-5xl md:text-6xl uppercase text-center md:text-left text-yellow-mustard">
          {name}
        </h1>
        <h2 className="text-3xl md:text-5xl">{job}</h2>
        <h3 className="text-gray-neutro/70 text-md md:text-xl">
          {smDescription}
        </h3>
        <div className="flex flex-row justify-start gap-4 ">
          {(socialInfo ?? []).map((item) => (
            <IconLink key={item.name} {...item} showUser={false} />
          ))}
        </div>
        <Button aria-label="Download CV">
          <a href="./Profile.pdf" download>
            Download CV
          </a>
        </Button>
      </section>
      <section className="m-10 md:w-1/2 ">
        <PetAi name={name} />
      </section>
    </div>
  );
}
