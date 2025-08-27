import React from "react";
import { ReactNode } from "react";
//Icons
import { FcBusinesswoman } from "react-icons/fc";
//Components
import Button from "@/app/components/Button";
import IconLink from "@/app/components/IconLink";
import { ScaleElement } from "@/app/components/MotionComponents";

import {
  getName,
  getJobTitle,
  getContactInfo,
  getSmDesc,
} from "@/app/lib/profile";

export default function Home() {
  const name: String = getName();
  const job: String = getJobTitle();
  const smDescription: String = getSmDesc();

  const contactList = getContactInfo().map((item) => (
    <IconLink key={item.name} {...item} showUser={false} />
  ));

  // imagen breve info
  return (
    <section className="flex flex-col grow justify-center items-center md:flex-row">
      <section className="flex flex-col justify-center items-center gap-5 m-10 ">
        <h2 className="text-5xl text-green-wash">Hello, I'm</h2>
        <h1 className="text-7xl uppercase text-center text-bold text-balance text-pretty text-yellow-mustard">
          {name}
        </h1>
        <h2 className="text-green-wash text-5xl">{job}</h2>
        <h3 className="text-green-wash text-2xl">{smDescription}</h3>
        <div className="flex flex-row justify-start gap-4 ">{contactList}</div>
        <ScaleElement element={<Button text="Download CV" />} />
      </section>
      <section className="justify-center items-center hidden md:block">
        <FcBusinesswoman size={400} />
      </section>
    </section>
  );
}
