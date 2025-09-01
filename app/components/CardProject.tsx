//Icons
import { FaExternalLinkAlt } from "react-icons/fa";
import { CiImageOff } from "react-icons/ci";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";

//tipos
import { Project } from "@/app/types";

//Components
import PillContainer from "./PillContainer";

type Props = {
  project: Project;
  reverse?: boolean;
};

export default function CardProject({
  project: { name, description, technologies, url },
  reverse,
}: Props) {
  return (
    <div className="m-2">
      <div
        className={`flex flex-col  md:flex-col lg:flex-row rounded-lg shadow-lg bg-white ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="flex justify-center items-center bg-green-wash text-white min-w-2xs min-h-[288px]">
          <CiImageOff size={40} />
        </div>
        <div className="p-5 grow md:text-left">
          <div>
            <h1 className="text-lg font-medium mb-2">{name}</h1>
            <h2 className="text-md text-gray-neutro/70">{description}</h2>
          </div>
          <div className="flex justify-start text-xs items-start my-4">
            <PillContainer items={technologies} />
          </div>
          <div className="flex flex-row  gap-7">
            <a
              href={url}
              className="flex flex-row gap-3  hover:text-yellow-mustard 
              transition-transform duration-300 ease-in-out transform hover:scale-115"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt size={20} /> Visit Project
            </a>
            <a
              href={url}
              className="flex flex-row gap-3  hover:text-yellow-mustard 
              transition-transform duration-300 ease-in-out transform hover:scale-115"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGitRepositoryCommitsFill size={25} /> Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
