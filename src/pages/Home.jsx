import { Hero } from "../components/sections/Hero";
import { Work } from "../components/sections/Work";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { BeyondCode } from "../components/sections/BeyondCode";
import { Achievements } from "../components/sections/Achievements";
import { Contact } from "../components/sections/Contact";

// Skills naik tepat setelah Work: recruiter developer mencocokkan
// requirement (TypeScript, Git, SQL) lebih dulu daripada membaca bio.
export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Skills />
      <About />
      <Achievements />
      <BeyondCode />
      <Contact />
    </>
  );
}
