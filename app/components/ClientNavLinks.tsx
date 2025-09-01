"use client"; //creando el componente en el cliente para usar pathname
import { usePathname } from "next/navigation";
import NavLink from "@/app/components/NavLink";
import { DetailName } from "../types";
import { useState } from "react";
//icons
import { GiHamburgerMenu } from "react-icons/gi";

export default function ClientNavLinks({
  categories,
}: {
  categories: DetailName[];
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function NavLinks() {
    return (
      <>
        <li key="Home">
          <NavLink
            href="/"
            isActive={pathname.endsWith(`/`)}
            onLinkClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
        </li>
        {categories.map((category) => (
          <li key={category.displayName}>
            <NavLink
              href={category.slug}
              isActive={pathname.endsWith(`/${category.slug}`)}
              onLinkClick={() => setIsOpen(false)}
            >
              {category.displayName}
            </NavLink>
          </li>
        ))}
      </>
    );
  }

  return (
    <>
      {/* Botón hamburguesa solo visible en pantallas pequeñas */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden ml-auto text-gray-800"
      >
        <GiHamburgerMenu size={20} />
      </button>

      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col absolute top-16 right-0 z-40 bg-rose-slight shadow-md gap-3 transition-all duration-300 ease-in-out
            md:flex md:flex-row md:static md:shadow-none`}
      >
        <ul className="flex flex-col gap-2 md:flex-row ">{NavLinks()}</ul>
      </nav>
    </>
  );
}
