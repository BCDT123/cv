"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
//icons
import { GiHamburgerMenu } from "react-icons/gi";

// Componentes
import ClientNavLinks from "@/app/components/ClientNavLinks";
import NavLink from "@/app/components/NavLink";
// Tipos
import { DetailName } from "@/app/types";

import { getCategoriesNames, getName } from "@/app/lib/profile";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const categories: DetailName[] = getCategoriesNames();
  const name: String[] = getName().split(" ");

  function NavLinks() {
    return (
      <>
        <li key="Home" className="text-sm uppercase cursor-pointer">
          <NavLink
            href="/"
            isActive={pathname.endsWith(`/`)}
            onLinkClick={() => setIsOpen(false)}
          >
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
    <header className="flex items-center justify-between w-full sticky top-0 z-50 p-4 pr-10 pl-10 gap-3 bg-rose-slight shadow-md">
      <div className="uppercase text-xl tracking-widest">
        <h5>{name[0]}</h5>
      </div>

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
        } flex-col absolute top-16 right-0 z-40 bg-rose-slight shadow-md gap-3 p-4 transition-all duration-300 ease-in-out
          md:flex md:flex-row md:static md:shadow-none`}
      >
        <ul className="flex flex-col gap-2 md:flex-row ">{NavLinks()}</ul>
      </nav>
    </header>
  );
}
