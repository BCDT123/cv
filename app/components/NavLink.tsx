import Link from "next/link";
import type { NavLinkProps } from "@/app/types";

export default function NavLink({
  href,
  isActive,
  onLinkClick,
  children,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className={`${
        isActive ? "font-bold " : "text-rose-sand contrast-70"
      } px-4 py-2 text-md tracking-widest uppercase transition-colors cursor-pointer hover:text-gray-neutro hover:font-bold `}
    >
      {children}
    </Link>
  );
}
