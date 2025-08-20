"use client"; //creando el componente en el cliente para usar pathname
import React from "react";
import NavLink from "@/app/components/NavLink";
import { usePathname } from "next/navigation";
import categoriesData from "../data/categories.json"
import { Category } from "../types"
//import { FaGithub } from "react-icons/fa";

export default function Header() {

  const pathname = usePathname();
  const categories : Category[] = categoriesData

  function getCategories(){
    const categorieslista = categories.map(categorie => { 
      return (<li className="text-sm uppercase cursor-pointer">
            <NavLink
              href={`/${categorie.slug}`}
              isActive={pathname.startsWith(`/${categorie.slug}`)}
            >
              {categorie.displayName}
            </NavLink>
          </li>)
          }

    );
     return categorieslista
  }

  return (
    <header className="flex flex-col w-full h-auto sticky top-0 z-20 ">
     <section className="bg-gray-200 p-4 pt-10">
      <div className="text-5xl uppercase text-gray-600 pb-3 text-center ">Brenda Carolina Del Toro Santana</div>
      <div className="">
        {/* <FaGithub size={40} color="black" />; */}
        gmail
      </div>
    </section> 
     <nav className="p-4 mr-10 ml-10">
        <ul className="flex items-center justify-center gap-5">
          {getCategories()}
        </ul>
      </nav> 
    </header>
  );
}
