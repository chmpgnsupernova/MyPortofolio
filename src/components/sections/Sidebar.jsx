import { profile } from "../../content/profile";
import { sections } from "../../content/sections";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";

// KOLOM KIRI — pola layout Brittany Chiang, gaya visual Redline.
//
// Desktop: sticky setinggi layar. Identitas di atas, nav section di
// tengah, tautan di bawah — recruiter tidak pernah kehilangan nama,
// tombol CV, dan posisi bacanya.
// Mobile: menjadi blok pembuka biasa. Nav section disembunyikan
// karena nav atas sudah punya menu.

export function Sidebar() {
  const { hero, cv, contact } = profile;
  const active = useScrollSpy(sections.map((s) => s.id));

  return (
    <header className="pt-28 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[46%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-title text-text-hi">{hero.headline}</h1>
        <p className="mt-3 text-lead text-text-hi">{hero.tagline}</p>
        <p className="mt-4 max-w-sm text-body text-text">{hero.summary}</p>

        {/* Status di dekat nama, bukan terkubur di dalam kartu —
            ini hal kedua yang dicari recruiter setelah nama. */}
        <p className="mt-6 inline-flex items-center gap-2 rounded-tag border border-hairline px-3 py-1.5 text-caption text-text">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-accent"
          />
          {hero.status}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={cv.href} download>
            {cv.label}
          </Button>
          <Button href={`mailto:${contact.email}`} variant="ghost">
            Email me
          </Button>
        </div>

        <nav aria-label="Sections" className="hidden lg:mt-14 lg:block">
          <ul className="flex flex-col gap-1">
            {sections.map((section) => {
              const isActive = active === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className="group flex items-center gap-4 py-2"
                  >
                    {/* Garis memanjang saat aktif — penanda posisi
                        yang terbaca sekilas, tanpa warna tambahan. */}
                    <span
                      aria-hidden="true"
                      className={`h-px transition-all duration-200 motion-reduce:transition-none ${
                        isActive
                          ? "w-16 bg-text-hi"
                          : "w-8 bg-text-mute group-hover:w-16 group-hover:bg-text-hi"
                      }`}
                    />
                    <span
                      className={`font-label text-label uppercase transition-colors duration-150 ${
                        isActive
                          ? "text-text-hi"
                          : "text-text-mute group-hover:text-text-hi"
                      }`}
                    >
                      {section.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
        {contact.links
          .filter((link) => !link.primary)
          .map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-text-mute transition-colors duration-150 hover:text-text-hi"
            >
              {link.label} ↗
            </a>
          ))}
        <span className="hidden lg:block">
          <ThemeToggle />
        </span>
      </div>
    </header>
  );
}
