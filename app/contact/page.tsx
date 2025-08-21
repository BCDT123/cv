import React from "react";
//Icons 
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail, SiLeetcode } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";

import {getContact} from "@/app/lib/profile";
import { Contact } from "@/app/types";

export default function ContactPage(){

    const contactData : Contact = getContact();
    const address: String = contactData.address;

    function getContactList(){
         const contactList = contactData.data.map(item => { 
           return (
             item.url?
             <a key={item.name} 
                 href={item.url}
                 className="flex flex-row justify-center items-center gap-3 hover:text-yellow-mustard"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 {item.name==="leetcode" ? <SiLeetcode size={40} />
                 :item.name==="github"?<FaGithub size={40}   />
                 :<FaLinkedinIn size={40} />
                 }
                <span> {item.user}</span> 
             </a>
             :
             <div key={item.name} className="flex flex-row  justify-center items-center gap-3 ">
               {item.name==="telephone" ? <BsFillTelephoneFill size={40}  /> : <SiGmail size={40} />}
               <span> {item.data}</span>
             </div>
             
           )
               }
     
         );
          return contactList
       }
     
 return ( 
        <section className="flex flex-col grow justify-center items-center gap-5 m-10 ">
            <div  className="flex flex-row  justify-center items-center gap-3 ">
               <FaLocationDot size={40}/> 
               <span>{address}</span>
            </div>
            {getContactList()} 
          
        </section>
        );
}