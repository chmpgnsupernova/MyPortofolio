import { profile } from "../../content/profile";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

export function About() {
  const { about } = profile;

  return (
    <Section id="about" eyebrow={about.eyebrow}>
      <Reveal className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-5">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="max-w-2xl text-body text-text">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="h-fit rounded-card border border-hairline bg-surface shadow-raise p-6">
          <span className="font-label text-label uppercase text-accent">
            Right now
          </span>
          <p className="mt-3 text-caption text-text">{about.now}</p>
        </aside>
      </Reveal>
    </Section>
  );
}
