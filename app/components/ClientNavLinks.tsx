"use client"; //creando el componente en el cliente para usar pathname
import { usePathname } from "next/navigation";
import NavLink from "@/app/components/NavLink";
import { CategoryNames } from "../types";

export default function ClientNavLinks({ categories }: { categories: CategoryNames[] }) {
  const pathname = usePathname();

  return (
    <>
      <li key="Home" className="text-sm uppercase cursor-pointer">
          <NavLink href="/" isActive={pathname.endsWith(`/`)}>
            Home
          </NavLink>
      </li>
      {categories.map((categorie) => (
        <li key={categorie.displayName} className="text-sm uppercase cursor-pointer">
          <NavLink
            href={categorie.slug}
            isActive={pathname.endsWith(`/${categorie.slug}`)}
          >
            {categorie.displayName}
          </NavLink>
        </li>
      ))}
    </>
  );
}