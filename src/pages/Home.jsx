import { Hero } from "../components/sections/Hero";
import { Work } from "../components/sections/Work";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { BeyondDesign } from "../components/sections/BeyondDesign";
import { Achievements } from "../components/sections/Achievements";
import { Contact } from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Skills />
      <BeyondDesign />
      <Achievements />
      <Contact />
    </>
  );
}
