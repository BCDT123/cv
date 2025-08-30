//Components
import Button from "@/app/components/Button";
import IconLink from "@/app/components/IconLink";
import PetAi from "./components/PetAi";

import {
  getName,
  getJobTitle,
  getContactInfo,
  getSmDesc,
} from "@/app/lib/profile";

export default function Home() {
  const name: string = getName();
  const job: string = getJobTitle();
  const smDescription: String = getSmDesc();
  const contactList = getContactInfo().map((item) => (
    <IconLink key={item.name} {...item} showUser={false} />
  ));

  return (
    <section className="flex flex-col grow justify-between md:flex-row m-10  max-h-screen">
      <section className="flex flex-col items-center md:items-start m-10 gap-4 md:w-1/2">
        <h2 className="text-3xl md:text-5xl">Hello, I'm</h2>
        <h1 className="text-5xl md:text-6xl uppercase text-bold text-center md:text-left text-yellow-mustard">
          {name}
        </h1>
        <h2 className="text-3xl md:text-5xl">{job}</h2>
        <h3 className="text-gray-neutro/70 text-md md:text-xl">
          {smDescription}
        </h3>
        <div className="flex flex-row justify-start gap-4 ">{contactList}</div>
        <Button>
          <a href="./Profile.pdf" download>
            Download CV
          </a>
        </Button>
      </section>
      <section className="m-10 md:w-1/2 ">
        <PetAi name={name} />
      </section>
    </section>
  );
}
