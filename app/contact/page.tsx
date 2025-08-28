import React from "react";
//Icons
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
//Data
import { getContact } from "@/app/lib/profile";
import { Contact } from "@/app/types";
//components
import { RotateElement } from "@/app/components/Motion";
import IconLink from "@/app/components/IconLink";

export default function ContactPage() {
  const contactData: Contact = getContact();
  const address: String = contactData.address;
  const telephone: String = contactData.telephone;
  const email = contactData.email;

  function getContactList() {
    const contactSocial = contactData.social.map((item) => (
      <IconLink key={item.name} {...item} showUser={true} />
    ));

    return contactSocial;
  }

  return (
    <section className="flex flex-col grow justify-center items-center gap-5 m-10 ">
      <div className="flex flex-row  justify-center items-center gap-3 ">
        <RotateElement element={<FaLocationDot size={40} />} />
        <span>{address}</span>
      </div>
      <div className="flex flex-row  justify-center items-center gap-3 ">
        <RotateElement element={<BsFillTelephoneFill size={40} />} />
        <span> {telephone}</span>
      </div>
      <div className="flex flex-row  justify-center items-center gap-3 ">
        <RotateElement element={<SiGmail size={40} />} />
        <span> {email}</span>
      </div>
      {getContactList()}
    </section>
  );
}
