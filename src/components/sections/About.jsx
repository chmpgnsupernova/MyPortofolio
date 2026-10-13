import { profile } from "../../content/profile";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

export function About() {
  const { about } = profile;
  const { education } = about;

  return (
    <Section id="about" eyebrow={about.eyebrow}>
      <Reveal className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-5">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="max-w-2xl text-body text-text">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {/* Pendidikan tampil eksplisit: lowongan magang mensyaratkan
              status mahasiswa aktif, jadi ini dicari lebih dulu. */}
          <aside className="rounded-card border border-hairline bg-surface p-6 shadow-raise">
            <span className="font-label text-label uppercase text-accent">
              Education
            </span>
            <p className="mt-3 text-caption text-text-hi">{education.school}</p>
            <p className="text-caption text-text">{education.degree}</p>
            <p className="mt-2 font-label text-label uppercase text-text-mute">
              {education.period} · {education.gpa}
            </p>
            <p className="mt-3 border-t border-hairline pt-3 text-caption text-text-mute">
              {education.coursework}
            </p>
          </aside>

          <aside className="rounded-card border border-hairline bg-surface p-6 shadow-raise">
            <span className="font-label text-label uppercase text-accent">
              Right now
            </span>
            <p className="mt-3 text-caption text-text">{about.now}</p>
          </aside>
        </div>
      </Reveal>
    </Section>
  );
}
