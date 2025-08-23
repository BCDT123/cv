import React from "react";
//Icons
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
// import foto from "@/public/yo.png"
import { getName, getJobTitle, getContactInfo } from "@/app/lib/profile";
import { FcBusinesswoman } from "react-icons/fc";

export default function Home() {
  const name: String = getName();
  const job: String = getJobTitle();

  function getContact() {
    const contactList = getContactInfo().map((item) => {
      return (
        item.url && (
          <a
            key={item.name}
            href={item.url}
            className="flex flex-row gap-3 hover:text-yellow-mustard"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name === "leetcode" ? (
              <SiLeetcode size={40} />
            ) : item.name === "github" ? (
              <FaGithub size={40} />
            ) : (
              <FaLinkedinIn size={40} />
            )}
          </a>
        )
      );
    });
    return contactList;
  }

  // imagen breve info
  return (
    <section
      className="flex flex-col grow justify-center items-center 
         md:flex-row"
    >
      <section className="flex flex-col justify-center items-center gap-5 m-10 ">
        <h2 className="text-yellow-mustard text-4xl">Hello, I'm</h2>
        <h1 className="text-6xl uppercase text-center text-bold text-balance text-pretty">
          {name}
        </h1>
        <h3 className="text-green-wash text-2xl">{job}</h3>
        <div className="flex flex-row justify-start gap-4 ">{getContact()}</div>
        <button className="rounded-lg bg-green-wash/30 tracking-widest uppercase shadow-xl px-4 py-3 hover:bg-yellow-mustard/50 hover:text-rose-sligth">
          {" "}
          Download CV
        </button>
      </section>
      <section className="justify-center items-center hidden md:block">
        <FcBusinesswoman size={400} />
        {/* <img
              src={foto.src}
              alt="name"
              className="object-bottom-right  max-w-2xl"
          /> */}
      </section>
    </section>
  );
}
