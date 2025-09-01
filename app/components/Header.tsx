"use client";
import React, { useEffect, useState } from "react";
// Tipos
import { DetailName } from "@/app/types";
import { getCategoriesNames, getName } from "@/app/lib/profileService";
//Componets
import ClientNavLinks from "./ClientNavLinks";

export default function Header() {
  const [categories, setCategories] = useState<DetailName[] | null>(null);

  const [name, setName] = useState<string>("");

  useEffect(() => {
    getCategoriesNames().then(setCategories).catch(console.error);
  }, []);

  useEffect(() => {
    getName().then(setName).catch(console.error);
  }, []);

  return (
    <header className="flex h-[10vh] items-center justify-between w-full sticky top-0 z-50 p-4 pr-10 pl-10 gap-3 bg-rose-slight">
      <div className="uppercase text-xl tracking-widest">
        <h5>{name.split(" ")[0]}</h5>
      </div>

      <ClientNavLinks categories={categories ?? []} />
    </header>
  );
}
