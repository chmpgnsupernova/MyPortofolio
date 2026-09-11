import { beyondDesign } from "../../content/beyondDesign";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

// Engineering dan Leadership berdampingan, bobot setara.
// Keduanya konteks pendukung — tidak ada yang perlu menang di sini.

export function BeyondDesign() {
  const { engineering, leadership } = beyondDesign;

  return (
    <Section id="beyond" eyebrow={beyondDesign.eyebrow}>
      <Reveal className="grid gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h3 className="font-label text-label uppercase text-accent">
            {engineering.label}
          </h3>

          <div className="mt-4 flex flex-col gap-4">
            {engineering.items.map((item) => (
              <article
                key={item.title}
                className="rounded-card border border-hairline bg-surface shadow-raise p-5"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h4 className="text-lead text-text-hi">{item.title}</h4>
                  <span className="text-caption text-text-mute">
                    {item.role}
                  </span>
                </div>

                <p className="mt-3 text-caption text-text">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-col gap-1 border-t border-hairline pt-4">
                  <span className="font-label text-label uppercase text-text-mute">
                    {item.meta}
                  </span>
                  <span className="font-label text-label uppercase text-text-mute">
                    {item.context}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="border-t border-hairline pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
          <h3 className="font-label text-label uppercase text-accent">
            {leadership.label}
          </h3>
          <p className="mt-2 text-caption text-text-mute">{leadership.note}</p>

          {/* Dua kolom — daftar pendek yang tidak perlu memakan tinggi. */}
          <ul className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {leadership.items.map((item) => (
              <li key={item.role + item.org}>
                <span className="block text-caption text-text">
                  {item.role}
                </span>
                <span className="block text-caption text-text-mute">
                  {item.org}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
