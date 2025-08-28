import { ReactNode } from "react";
//Icons
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
//components
import { RotateElement } from "@/app/components/Motion";

export default function IconLink({
  name,
  url,
  user,
  showUser,
}: {
  name: string;
  url: string;
  user: string;
  showUser?: boolean;
}) {
  return (
    <a
      key={name}
      href={url}
      className="flex flex-row justify-center items-center  gap-3  hover:text-yellow-mustard"
      target="_blank"
      rel="noopener noreferrer"
    >
      {getIcon(name)}
      {showUser && <span> {user}</span>}
    </a>
  );
}

export const getIcon = (name: string): ReactNode => {
  const map: Record<string, ReactNode> = {
    leetcode: <RotateElement element={<SiLeetcode size={40} />} />,
    github: <RotateElement element={<FaGithub size={40} />} />,
    linkedin: <RotateElement element={<FaLinkedinIn size={40} />} />,
  };
  return map[name] ?? null;
};
