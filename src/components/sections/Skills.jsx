import { skills } from "../../content/skills";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

// Empat kelompok setara, mengikuti section Skills di CV. Tidak ada
// kelompok yang diredam — urutan kelompoknya sudah membawa hierarki.

export function Skills() {
  return (
    <Section id="skills" eyebrow={skills.eyebrow}>
      <Reveal className="grid gap-10 sm:grid-cols-2 md:gap-12">
        {skills.groups.map((group) => (
          <div key={group.label}>
            <h3 className="font-label text-label uppercase text-accent">
              {group.label}
            </h3>

            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-tag border border-hairline bg-surface px-3 py-1.5 text-caption text-text"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
