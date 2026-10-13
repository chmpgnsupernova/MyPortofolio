import { beyondCode } from "../../content/beyondCode";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

// Konteks pendukung di luar kode. Proyek engineering sudah pindah
// ke section Work, jadi yang tersisa hanya baris leadership.

export function BeyondCode() {
  const { leadership } = beyondCode;

  return (
    <Section id="beyond" eyebrow={beyondCode.eyebrow}>
      <Reveal>
        <h3 className="font-label text-label uppercase text-accent">
          {leadership.label}
        </h3>
        <p className="mt-2 text-caption text-text-mute">{leadership.note}</p>

        <ul className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2">
          {leadership.items.map((item) => (
            <li key={item.role + item.org}>
              <span className="block text-caption text-text">{item.role}</span>
              <span className="block text-caption text-text-mute">
                {item.org}
              </span>
              {item.period ? (
                <span className="mt-1 block font-label text-label uppercase text-text-mute">
                  {item.period}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
