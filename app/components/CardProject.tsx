import { FaExternalLinkAlt } from "react-icons/fa";
import { CiImageOff } from "react-icons/ci";
import { Project } from "@/app/types";
import PillContainer from "./PillContainer";
import { ScaleElement } from "./Motion";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
type Props = {
  project: Project;
  reverse?: boolean;
};

export default function CardProject({
  project: { name, description, technologies, url },
  reverse,
}: Props) {
  return (
    <div className="m-10">
      <div
        className={`flex flex-col md:flex-row rounded-lg shadow-lg bg-white min-w-sm ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="flex justify-center items-center bg-green-wash text-white min-w-xs min-h-[320px]">
          <CiImageOff size={40} />
        </div>
        <div className="p-5 grow md:text-left">
          <div>
            <h1 className="text-xl font-bold mb-2">{name}</h1>
            <h2 className="text-lg">{description}</h2>
          </div>
          <div className="flex justify-start items-start my-4">
            <PillContainer items={technologies} />
          </div>
          <div className="flex flex-row  gap-7">
            <ScaleElement
              element={
                <a
                  href={url}
                  className="flex flex-row gap-3  hover:text-yellow-mustard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt size={20} /> Visit Project
                </a>
              }
            />
            <ScaleElement
              element={
                <a
                  href={url}
                  className="flex flex-row gap-3  hover:text-yellow-mustard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiGitRepositoryCommitsFill size={25} /> Repository
                </a>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
