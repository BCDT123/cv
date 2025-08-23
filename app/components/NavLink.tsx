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
        isActive ? "md:shadow-[0_4px_0_#637077] " : "text-rose-sand contrast-70"
      } px-4 py-2 text-sm uppercase transition-colors cursor-pointer hover:text-gray-neutro  md:hover:shadow-[0_4px_0_#637077]`}
    >
      {children}
    </Link>
  );
}
