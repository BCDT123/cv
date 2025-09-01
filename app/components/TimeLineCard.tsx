import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PillContainer from "./PillContainer";
import { TimelineItem } from "@/app/types";
import { useMediaQuery } from "react-responsive";

type Props = {
  item: TimelineItem;
  index: number;
  isMobile: boolean;
  expanded: boolean;
  onToggle: () => void;
};

export default function TimelineCard({
  item,
  index,
  isMobile,
  expanded,
  onToggle,
}: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.3,
        ease: "easeOut",
      }}
      className="flex justify-center"
    >
      <div className="rounded-lg p-8 bg-white md:w-3/4 text-center z-10 shadow-lg mb-5">
        <div className="flex flex-col md:flex-row justify-between items-top mb-6">
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
            } ${
              expanded ? "line-clamp-none" : "line-clamp-3 md:line-clamp-none"
            }`}
            onClick={isMobile ? onToggle : undefined}
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
}
