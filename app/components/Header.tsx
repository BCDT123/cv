
// Componentes
import ClientNavLinks from "@/app/components/ClientNavLinks";
//Icons 
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
// Tipos
import { DetailName, Contact } from "@/app/types";

import { getContactInfo, getCategoriesNames, getName } from "@/app/lib/profile";

export default function Header() {
  const categories: DetailName[] = getCategoriesNames();

  function getContact(){
    const contactList = getContactInfo().map(item => { 
      return (
        item.url?
        <a key={item.name} 
            href={item.url}
            className="flex flex-row gap-3 text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name==="leetcode" ? <SiLeetcode size={20} />
            :item.name==="github"?<FaGithub size={20} />
            :<FaLinkedinIn size={20}  />
            }
            <span> {item.user}</span>
        </a>
        :
        <div key={item.name} className="flex flex-row  gap-3 text-gray-600">
          {item.name==="telephone" ? <BsFillTelephoneFill size={20} /> : <SiGmail size={20} />}
          <span> {item.data}</span>
        </div>
        
      )
          }

    );
     return contactList
  }

  return (
    <header className="flex flex-row items-center w-full h-auto sticky top-0 z-20 bg-gray-200 p-4 pr-10 pl-10 gap-3">
    <div className="justify-self-start uppercase text-gray-600 text-xl tracking-widest">
      <h5 >Brenda</h5>
    </div>
     <nav className="grow">
        <ul className="flex justify-self-end gap-5">
          <ClientNavLinks categories={categories} />
        </ul>
      </nav> 
    </header>
  );
}
