import { Link } from "react-router-dom";
import { experience } from "../../content/experience";
import { profile } from "../../content/profile";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Chip } from "../ui/Chip";

// Pola Brittany Chiang: periode di kolom sempit kiri, isi di kanan.
// Seluruh kartu adalah tautan ke case study (lewat ::after pada
// judul), jadi hover-nya memberi permukaan — penanda bisa diklik.

export function Experience() {
  return (
    <Section id="experience" eyebrow={experience.eyebrow}>
      <ol className="flex flex-col gap-10">
        {experience.items.map((item) => (
          <li key={item.title + item.org}>
            <Reveal className="group relative grid gap-2 sm:grid-cols-8 sm:gap-6">
              <span
                aria-hidden="true"
                className="absolute -inset-4 hidden rounded-card transition-colors duration-150 group-hover:bg-surface lg:block"
              />

              <p className="relative text-caption text-text-mute sm:col-span-2 sm:pt-0.5">
                {item.period}
              </p>

              <div className="relative sm:col-span-6">
                <h3 className="text-lead text-text-hi">
                  <Link
                    to={`/work/${item.caseStudy}`}
                    className="transition-colors duration-150 group-hover:text-accent lg:after:absolute lg:after:-inset-4 lg:after:content-['']"
                  >
                    {item.title} · {item.org}
                  </Link>
                </h3>
                <p className="text-caption text-text-mute">{item.location}</p>

                <ul className="mt-4 flex list-disc flex-col gap-2 pl-4 text-caption text-text marker:text-text-mute">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag}>
                      <Chip>{tag}</Chip>
                    </li>
                  ))}
                </ul>

                <p aria-hidden="true" className="mt-4 text-caption font-medium text-accent">
                  Read the case study{" "}
                  <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <a
        href={profile.cv.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex text-caption font-medium text-text-hi underline-offset-4 hover:text-accent hover:underline"
      >
        {experience.resumeLabel} ↗
      </a>
    </Section>
  );
}
