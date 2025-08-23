"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdOutlineWork } from "react-icons/md";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  location: string;
  skills: string[];
  description: string[];
};

type Props = {
  timeline: ExperienceItem[];
};

export default function ExperienceTimeline({ timeline }: Props) {
  return (
    <div>
      {timeline.map((item, idx) => {
        return (
          <div key={idx} className="flex m-4 relative">
            {/* Línea vertical decorativa */}
            <div className="bg-rose-sandw-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden" />
            <div className="bg-rose-sand w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden" />

            {/* Fecha y línea lateral en desktop */}
            <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
              <div className="w-4/5 text-gray-500">{item.period}</div>
              <div className="bg-rose-sand w-[4px] h-full translate-x-5 translate-y-10 opacity-30" />
              <div className="bg-rose-sand w-10 p-1 rounded-lg z-20 flex items-center justify-center font-bold text-white">
                <MdOutlineWork size={40} />
              </div>
              <div className="bg-rose-sand  h-[4px] w-8 translate-y-5 opacity-30" />
            </div>

            {/* Tarjeta principal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="border border-gray-200 rounded-lg px-8 py-4 bg-white w-full text-center z-10 sm:w-96 shadow-lg"
            >
              <div className="text-xl font-medium">{item.title}</div>
              <div className="text-gray-500 mb-6 sm:mb-8 sm:text-xs">
                {item.company} · {item.location}
                <span className="sm:hidden"> | {item.period}</span>
              </div>
              <div className="mb-4 text-left">
                <ul className="list-disc pl-5 text-sm text-left">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap mb-6 justify-center">
                {item.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-yellow-baby/50 rounded-xl px-2 py-1 text-xs m-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="bg-rose-sand w-8 h-8 rounded-xl absolute left-4 top-4 sm:hidden flex items-center justify-center font-bold text-white">
                <MdOutlineWork size={20} />
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
