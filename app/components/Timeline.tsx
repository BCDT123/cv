"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TimelineItem } from "@/app/types";
import PillContainer from "./PillContainer";
import { useMediaQuery } from "react-responsive";

type Props = {
  timeline: TimelineItem[];
};

export default function ExperienceTimeline({ timeline }: Props) {
  const [expanded, setExpanded] = useState<boolean[]>(
    timeline.map(() => false)
  );
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setExpanded(timeline.map(() => !isMobile)); // false si es móvil, true si no
  }, [isMobile, timeline]);

  const handleToggle = (idx: number) => {
    setExpanded((prev) => prev.map((val, i) => (i === idx ? !val : val)));
  };

  return (
    <div>
      {timeline.map((item, idx) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.2,
        });
        return (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: idx * 0.3,
              ease: "easeOut",
            }}
            key={idx}
            className="flex justify-center"
          >
            {/* Tarjeta  */}
            <div className="rounded-lg p-8 bg-white  md:w-3/4 text-center z-10 shadow-lg mb-5">
              <div className="flex flex-col md:flex-row justify-between items-top mb-6 ">
                <div className="text-left">
                  <div className="text-xl font-medium">{item.title}</div>
                  <div className="sm:text-xs">
                    {[item.company, item.location].filter(Boolean).join(" | ")}
                  </div>
                </div>
                <div className="text-left md:text-right md:text-lg font-bold text-sm">
                  {item.period}
                </div>
              </div>

              <div className="mb-4">
                <ul
                  className={`list-disc pl-5 text-sm text-left ${
                    isMobile ? "cursor-pointer" : "cursor-default"
                  }  ${
                    expanded[idx]
                      ? "line-clamp-none"
                      : "line-clamp-3 md:line-clamp-none"
                  }`}
                  onClick={isMobile ? () => handleToggle(idx) : undefined}
                  title="Haz clic para expandir/cerrar"
                >
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
              {item.skills && <PillContainer items={item.skills} />}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
