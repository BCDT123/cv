"use client";
import React, { useEffect, useState } from "react";
//Icons
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
//Data
import { getContact } from "@/app/lib/profileService";
import { Contact } from "@/app/types";
//components
import IconLink from "@/app/components/IconLink";
import { ContactItem } from "@/app/components/ContactItem";

export default function ContactPage() {
  const [contactData, setContactData] = useState<Contact | null>(null);

  useEffect(() => {
    getContact().then(setContactData).catch(console.error);
  }, []);

  if (!contactData) return <p>No contact info available.</p>;

  return (
    <section
      className="flex flex-col grow justify-center items-center gap-5 m-10"
      role="contentinfo"
      aria-label="Contact Information "
    >
      <ContactItem
        icon={<FaLocationDot size={40} />}
        value={contactData.address ?? "Address not available"}
      />
      <ContactItem
        icon={<BsFillTelephoneFill size={40} />}
        value={contactData.telephone ?? "Telephone not available"}
      />
      <ContactItem icon={<SiGmail size={40} />} value={contactData.email} />
      {contactData.social?.length > 0 &&
        contactData.social.map((item) => (
          <IconLink key={item.name} {...item} showUser={true} />
        ))}
    </section>
  );
}
