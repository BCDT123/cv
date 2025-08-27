"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineWork } from "react-icons/md";
import { TimelineItem } from "@/app/types";
import PillContainer from "./PillContainer";

type Props = {
  timeline: TimelineItem[];
};

export default function ExperienceTimeline({ timeline }: Props) {
  const [expanded, setExpanded] = useState<boolean[]>(
    timeline.map(() => false)
  );

  const handleToggle = (idx: number) => {
    setExpanded((prev) => prev.map((val, i) => (i === idx ? !val : val)));
  };

  return (
    <div>
      {timeline.map((item, idx) => {
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.3,
              scale: {
                type: "spring",
                visualDuration: 0.5,
                bounce: 0.5,
              },
            }}
            className="flex m-4 relative"
            key={idx}
          >
            {/* Decoration lateral*/}
            <div className="hidden items-start pt-0.5 relative sm:flex">
              <div className="pt-3 max-w-25">{item.period}</div>
              {/* Línea vertical decorativa */}
              <div className="bg-rose-sand w-[4px] h-full translate-x-6 translate-y-10 " />
              <div className="bg-rose-sand p-1 rounded-lg z-20 flex items-center justify-center text-white">
                <MdOutlineWork size={40} />
              </div>
              {/* Línea horizontal decorativa */}
              <div className="bg-rose-sand h-[4px] w-8 translate-y-5 " />
            </div>

            {/* Tarjeta principal */}
            <div className="rounded-lg px-8 py-4 bg-white w-full text-center z-10 shadow-lg mb-15">
              <div className="text-xl font-medium px-1">{item.title}</div>
              <div className="mb-6 sm:mb-8 sm:text-xs">
                {[item.company, item.location].filter(Boolean).join(" | ")}
                <span className="sm:hidden"> | {item.period}</span>
              </div>
              <div className="mb-4">
                <ul
                  className={`list-disc pl-5 text-sm text-left ${
                    expanded[idx]
                      ? "line-clamp-none"
                      : "line-clamp-3 md:line-clamp-none"
                  }`}
                  onClick={() => handleToggle(idx)}
                  style={{ cursor: "pointer" }}
                  title="Haz clic para expandir/cerrar"
                >
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
              {item.skills && <PillContainer items={item.skills} />}
              <div className="bg-rose-sand w-8 h-8 rounded-xl absolute left-2 top-2 sm:hidden flex items-center justify-center text-white">
                <MdOutlineWork size={20} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
