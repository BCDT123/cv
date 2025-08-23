"use client"; //creando el componente en el cliente para usar pathname
import { usePathname } from "next/navigation";
import NavLink from "@/app/components/NavLink";
import { DetailName } from "../types";

export default function ClientNavLinks({
  categories,
}: {
  categories: DetailName[];
}) {
  const pathname = usePathname();

  return (
    <>
      <li key="Home" className="text-sm uppercase cursor-pointer">
        <NavLink href="/" isActive={pathname.endsWith(`/`)}>
          Home
        </NavLink>
      </li>
      {categories.map((category) => (
        <li
          key={category.displayName}
          className="text-sm uppercase cursor-pointer"
        >
          <NavLink
            href={category.slug}
            isActive={pathname.endsWith(`/${category.slug}`)}
          >
            {category.displayName}
          </NavLink>
        </li>
      ))}
    </>
  );
}
