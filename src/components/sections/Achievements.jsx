import { Link } from "react-router-dom";
import { achievements } from "../../content/achievements";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

// Daftar, bukan grid kartu: lima baris pendek terbaca lebih cepat
// berurutan daripada disebar dalam tiga kolom di kolom yang sempit.
// Yang ditandai dibedakan oleh warna penanda, bukan ukuran.

export function Achievements() {
  return (
    <Section id="achievements" eyebrow={achievements.eyebrow}>
      <Reveal>
        <ul className="divide-y divide-hairline border-y border-hairline">
          {achievements.items.map((item) => {
            const external = item.href ?? item.image;

            return (
              <li
                key={item.title}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                      item.marked ? "bg-accent" : "bg-hairline-strong"
                    }`}
                  />
                  <div>
                    <h3 className="text-caption font-medium text-text-hi">
                      {item.title}
                    </h3>
                    <p className="text-caption text-text-mute">{item.issuer}</p>
                  </div>
                </div>

                <div className="flex shrink-0 gap-4 pl-[18px] sm:pl-0">
                  {item.caseStudy ? (
                    <Link
                      to={`/work/${item.caseStudy}`}
                      className="text-caption font-medium text-accent hover:underline"
                    >
                      Case study →
                    </Link>
                  ) : null}
                  {external ? (
                    <a
                      href={external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-caption text-text-mute transition-colors duration-150 hover:text-text-hi"
                    >
                      {item.href ? "Credential ↗" : "Certificate ↗"}
                    </a>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
