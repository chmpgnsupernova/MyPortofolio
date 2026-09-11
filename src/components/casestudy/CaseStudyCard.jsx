import { Link } from "react-router-dom";
import { Chip } from "../ui/Chip";

// Dua varian, bukan grid seragam. Bobot visual mengikuti bobot
// isinya: PLN memikul beban terberat, jadi kartunya paling besar.
// Grid tiga kolom yang rata akan membuat semuanya terasa setara —
// dan itu tidak benar.

export function CaseStudyCard({ study, variant = "compact" }) {
  const featured = variant === "featured";

  return (
    <Link
      to={`/work/${study.slug}`}
      className="group block overflow-hidden rounded-card border border-hairline bg-surface shadow-raise transition-colors duration-150 hover:border-accent/40"
    >
      <div className={featured ? "md:flex" : ""}>
        {featured ? (
          <div className="md:w-1/2">
            {study.card.thumbnail?.src ? (
              <img
                src={study.card.thumbnail.src}
                alt={study.card.thumbnail.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[16/10] w-full items-center justify-center border-b border-dashed border-hairline bg-surface-2 md:border-b-0 md:border-r">
                <span className="font-label text-label uppercase text-text-mute">
                  Image pending
                </span>
              </div>
            )}
          </div>
        ) : null}

        <div className={`p-6 md:p-8 ${featured ? "md:w-1/2" : ""}`}>
          <span className="font-label text-label uppercase text-accent">
            {study.card.meta}
          </span>

          <h3 className="mt-3 text-heading text-text-hi">{study.title}</h3>

          <p className="mt-3 text-body text-text">{study.card.summary}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {study.card.tags.map((tag) => (
              <Chip key={tag} muted>
                {tag}
              </Chip>
            ))}
          </div>

          <span className="mt-6 inline-flex items-center gap-2 font-label text-label uppercase text-accent">
            Read the case study
            <span
              aria-hidden="true"
              className="transition-transform duration-150 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
