import { projects } from "../../content/projects";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Chip } from "../ui/Chip";

// Pola Brittany Chiang: thumbnail di kolom sempit, isi di kanan.
// Di mobile thumbnail turun ke bawah teks — judul dibaca dulu.
// Tidak ada hover state: proyek ini tidak punya repo atau live,
// dan permukaan yang menyala menjanjikan klik yang tidak ada.

export function Projects() {
  return (
    <Section id="projects" eyebrow={projects.eyebrow}>
      <ol className="flex flex-col gap-12">
        {projects.items.map((item) => (
          <li key={item.title}>
            <Reveal className="grid gap-4 sm:grid-cols-8 sm:gap-6">
              <img
                src={item.thumbnail.src}
                alt={item.thumbnail.alt}
                width={item.thumbnail.width}
                height={item.thumbnail.height}
                loading="lazy"
                decoding="async"
                className="order-2 aspect-[16/10] w-full max-w-60 rounded-btn border border-hairline object-cover sm:order-1 sm:col-span-2 sm:mt-1"
              />

              <div className="order-1 sm:order-2 sm:col-span-6">
                <h3 className="text-lead text-text-hi">{item.title}</h3>
                <p className="text-caption text-text-mute">{item.year}</p>
                <p className="mt-3 text-caption text-text">{item.description}</p>

                <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">
                  {item.stack.split(" · ").map((tech) => (
                    <li key={tech}>
                      <Chip>{tech}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
