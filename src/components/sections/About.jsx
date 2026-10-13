import { profile } from "../../content/profile";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { HeroPortrait } from "../ui/HeroPortrait";

// Section pertama kolom kanan — di desktop ini yang terlihat di
// samping nama saat halaman dibuka, jadi potret (dan cluster tools-nya)
// tinggal di sini, bukan di kolom kiri yang harus muat setinggi layar.

export function About() {
  const { about } = profile;
  const { education } = about;

  return (
    <Section id="about" eyebrow={about.eyebrow}>
      <Reveal>
        <div className="flex justify-center lg:py-10">
          <HeroPortrait />
        </div>

        <div className="mt-10 flex flex-col gap-4">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-body text-text">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {/* Pendidikan tampil eksplisit: lowongan magang mensyaratkan
              status mahasiswa aktif, jadi ini dicari lebih dulu. */}
          <aside className="rounded-card border border-hairline bg-surface p-5 shadow-raise">
            <h3 className="font-label text-label font-normal uppercase text-accent">
              Education
            </h3>
            <p className="mt-3 text-caption text-text-hi">{education.school}</p>
            <p className="text-caption text-text">{education.degree}</p>
            <p className="mt-2 text-caption text-text-mute">
              {education.period} · {education.gpa}
            </p>
            <p className="mt-3 border-t border-hairline pt-3 text-caption text-text-mute">
              {education.coursework}
            </p>
          </aside>

          <aside className="rounded-card border border-hairline bg-surface p-5 shadow-raise">
            <h3 className="font-label text-label font-normal uppercase text-accent">
              Right now
            </h3>
            <p className="mt-3 text-caption text-text">{about.now}</p>
          </aside>
        </div>
      </Reveal>
    </Section>
  );
}
