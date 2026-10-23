import { Link } from "react-router-dom";
import { designWork } from "../../content/designWork";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

// Tata letak sama dengan Projects supaya kolom kanan terbaca sebagai
// satu sistem. Bedanya: setiap kartu membuka case study, jadi di sini
// hover state justru wajib — permukaan yang menyala menjanjikan klik
// yang memang ada.
//
// Seluruh kartu bisa diklik lewat pola stretched link: satu <Link>
// di judul, pseudo-element-nya menutupi kartu. Pembaca layar tetap
// hanya mendengar satu tautan per kartu.

export function DesignWork() {
  return (
    <Section id="design" eyebrow={designWork.eyebrow}>
      <ol className="flex flex-col gap-4">
        {designWork.items.map((item) => (
          <li key={item.slug}>
            <Reveal className="group relative -mx-4 grid gap-4 rounded-card p-4 transition-colors duration-150 hover:bg-surface sm:grid-cols-8 sm:gap-6">
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
                <h3 className="text-lead text-text-hi">
                  <Link
                    to={`/work/${item.slug}`}
                    className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-accent group-hover:text-accent"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="text-caption text-text-mute">
                  {item.year} · {item.meta}
                </p>
                <p className="mt-3 text-caption text-text">
                  {item.description}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
