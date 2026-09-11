import { caseStudies } from "../../content/caseStudies";
import { CaseStudyCard } from "../casestudy/CaseStudyCard";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

export function Work() {
  return (
    <Section id="work" eyebrow="Selected work">
      <div className="flex flex-col gap-6">
        {caseStudies.map((study) => (
          <Reveal key={study.slug}>
            <CaseStudyCard
              study={study}
              variant={study.featured ? "featured" : "compact"}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
