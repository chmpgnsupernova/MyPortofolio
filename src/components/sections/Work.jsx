import { caseStudies } from "../../content/caseStudies";
import { projects } from "../../content/projects";
import { CaseStudyCard } from "../casestudy/CaseStudyCard";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

// Case study featured di atas, proyek engineering lain sebagai kartu
// ringkas di bawahnya. Case study desain (Rehub) tidak tampil di sini;
// ia tetap bisa dibuka lewat kartu ISFEST di Achievements.

export function Work() {
  const featured = caseStudies.filter((study) => study.featured);

  return (
    <Section id="work" eyebrow="Selected work">
      <div className="flex flex-col gap-6">
        {featured.map((study) => (
          <Reveal key={study.slug}>
            <CaseStudyCard study={study} variant="featured" />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <h3 className="font-label text-label uppercase text-accent">
          {projects.label}
        </h3>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {projects.items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-card border border-hairline bg-surface p-5 shadow-raise"
            >
              <h4 className="text-lead text-text-hi">{item.title}</h4>
              <span className="mt-1 text-caption text-text-mute">
                {item.stack}
              </span>

              <p className="mt-3 flex-1 text-caption text-text">
                {item.description}
              </p>

              <span className="mt-4 border-t border-hairline pt-4 font-label text-label uppercase text-text-mute">
                {item.year}
              </span>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
