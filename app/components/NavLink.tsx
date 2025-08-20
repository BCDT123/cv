import Link from "next/link";
import type { NavLinkProps } from "@/app/types";

export default function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`${
        isActive ? "text-gray-600 shadow-[0_4px_0_#4b5563] " : "text-gray-400 shadow-[0_4px_0_#e5e7eb]"
      } px-4 py-2 text-sm uppercase transition-colors cursor-pointer hover:text-gray-600  hover:shadow-[0_4px_0_#4b5563]`}
    >
      {children}
    </Link>
  );
}
