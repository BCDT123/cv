
// Componentes
import ClientNavLinks from "@/app/components/ClientNavLinks";

// Tipos
import { DetailName} from "@/app/types";

import {getCategoriesNames, getName } from "@/app/lib/profile";

export default function Header() {
  const categories: DetailName[] = getCategoriesNames();
  const name: String[] = getName().split(" ");

  
  return (
    <header className="flex flex-row items-center w-full h-auto sticky top-0 z-20 p-4 pr-10 pl-10 gap-3 
      bg-rose-slight shadow-md backdrop-blur-md">
    <div className="justify-self-start uppercase text-xl tracking-widest">
      <h5 >{name[0]}</h5>
    </div>
     <nav className="grow">
        <ul className="flex justify-self-end gap-5">
          <ClientNavLinks categories={categories} />
        </ul>
      </nav> 
    </header>
  );
}
