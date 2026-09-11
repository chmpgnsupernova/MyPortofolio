import { skills } from "../../content/skills";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

// Dua kolom, bukan tumpukan — memangkas scroll dan membuat kedua
// sisi terbaca bersamaan. Hierarki tetap ada, tapi lewat lebar kolom
// dan kontras chip, bukan lewat salah satunya dibuang ke bawah.

function Group({ label, note, items, muted = false }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-label text-label uppercase text-accent">{label}</h3>
        {note ? <p className="text-caption text-text-mute">{note}</p> : null}
      </div>

      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className={`rounded-tag border px-3 py-1.5 text-caption ${
              muted
                ? "border-hairline/60 text-text-mute"
                : "border-hairline bg-surface text-text"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow={skills.eyebrow}>
      <Reveal className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-12">
        <Group label={skills.primary.label} items={skills.primary.items} />
        <div className="border-t border-hairline pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
          <Group
            label={skills.secondary.label}
            note={skills.secondary.note}
            items={skills.secondary.items}
            muted
          />
        </div>
      </Reveal>
    </Section>
  );
}
