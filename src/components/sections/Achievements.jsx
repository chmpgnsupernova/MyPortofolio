import { Link } from "react-router-dom";
import { achievements } from "../../content/achievements";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

// Grid setara. Yang ditandai dibedakan oleh warna label dan sebuah
// tautan — bukan oleh ukuran kartu.

function Card({ item }) {
  const external = item.href ?? item.image;

  return (
    <article
      className={`flex flex-col rounded-card border bg-surface p-5 shadow-raise transition-colors duration-150 ${
        item.marked
          ? "border-accent/30 hover:border-accent/50"
          : "border-hairline hover:border-hairline-strong"
      }`}
    >
      <span
        className={`font-label text-label uppercase ${
          item.marked ? "text-accent" : "text-text-mute"
        }`}
      >
        {item.issuer}
      </span>

      {/* Judul saja — cerita di baliknya ada di case study, bukan
          diulang di kartu sertifikat. */}
      <h3 className="mt-2 flex-1 text-caption text-text-hi">{item.title}</h3>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-hairline pt-3">
        {item.caseStudy ? (
          <Link
            to={`/work/${item.caseStudy}`}
            className="font-label text-label uppercase text-accent hover:underline"
          >
            Read the case study →
          </Link>
        ) : null}

        {external ? (
          <a
            href={external}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-label uppercase text-text-mute transition-colors hover:text-text-hi"
          >
            {item.href ? "Credential ↗" : "Certificate ↗"}
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function Achievements() {
  return (
    <Section id="achievements" eyebrow={achievements.eyebrow}>
      <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.items.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </Reveal>
    </Section>
  );
}
