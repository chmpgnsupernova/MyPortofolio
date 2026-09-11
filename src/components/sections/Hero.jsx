import { profile } from "../../content/profile";
import { Button } from "../ui/Button";
import { HeroBackdrop } from "../ui/HeroBackdrop";
import { HeroPortrait } from "../ui/HeroPortrait";
import { Eyebrow } from "../ui/Eyebrow";
import { Annotation } from "../ui/Annotation";

// THESIS HALAMAN INI.
//
// Bukan headline besar yang bersinar. Identitas dirender sebagai
// kartu spesifikasi komponen — nama, varian, status — karena itulah
// klaim yang sedang dibuat: saya berpikir dalam komponen dan spec.
//
// Potret duduk di kolom kanan, tepat di titik sorot grid. Sebelum ini
// kolom kanan kosong; sekarang ia yang menyeimbangkan hero.

export function Hero() {
  const { hero } = profile;

  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <HeroBackdrop />

      <div className="relative mx-auto max-w-page px-6 pb-20 pt-28 md:pb-24 md:pt-36">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-12">
          <div>
            <Eyebrow className="mb-6 max-w-md">{hero.eyebrow}</Eyebrow>

            <h1 className="text-display text-text-hi">{hero.headline}</h1>

            <p className="mt-4 text-lead text-text-hi/90">{hero.tagline}</p>

            <p className="mt-6 max-w-xl text-body text-text">{hero.summary}</p>

            {/* Kartu spec — elemen paling khas di halaman ini.
                Anotasinya menghadap ke bawah, bukan ke kanan: di kanan
                sekarang ada potret, dan callout akan menabraknya. */}
            <div className="relative mt-8 max-w-md rounded-card border border-hairline bg-surface p-6 shadow-raise">
              <Annotation side="bottom">Card / radius 12</Annotation>

              <span className="font-label text-label uppercase text-accent">
                Variants
              </span>

              <div className="mt-3 flex flex-wrap gap-2">
                {hero.variants.map((variant) => (
                  <span
                    key={variant}
                    className="rounded-tag border border-hairline px-2.5 py-1 font-label text-label uppercase text-text"
                  >
                    {variant}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-hairline pt-4">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                />
                <span className="text-caption text-text">{hero.status}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#contact">Get in touch</Button>
              <Button href="#work" variant="ghost">
                See the work
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end lg:pl-8">
            <HeroPortrait />
          </div>
        </div>
      </div>
    </section>
  );
}
