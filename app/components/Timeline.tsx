"use client";
import React, { useState, useEffect } from "react";
import { TimelineItem } from "@/app/types";
import { useMediaQuery } from "react-responsive";
import TimelineCard from "./TimeLineCard";

type Props = {
  timeline: TimelineItem[];
};

export default function Timeline({ timeline }: { timeline: TimelineItem[] }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [expanded, setExpanded] = useState<boolean[]>(
    timeline.map(() => false)
  );

  useEffect(() => {
    setExpanded(timeline.map(() => !isMobile));
  }, [isMobile, timeline]);

  const handleToggle = (idx: number) => {
    setExpanded((prev) => prev.map((val, i) => (i === idx ? !val : val)));
  };

  return (
    <div>
      {timeline.map((item, idx) => (
        <TimelineCard
          key={idx}
          item={item}
          index={idx}
          isMobile={isMobile}
          expanded={expanded[idx]}
          onToggle={() => handleToggle(idx)}
        />
      ))}
    </div>
  );
}
