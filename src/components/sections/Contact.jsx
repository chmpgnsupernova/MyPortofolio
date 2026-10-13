import { profile } from "../../content/profile";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

// Penutup kolom kanan. Di desktop tombol CV dan email sudah ada di
// kolom kiri; section ini untuk pembaca mobile yang sampai di bawah.
// Satu primary per section: email di sini, CV di kolom kiri.

export function Contact() {
  const { contact, cv } = profile;
  const primary = contact.links.find((link) => link.primary);
  const others = contact.links.filter((link) => !link.primary);

  return (
    <Section id="contact" eyebrow={contact.eyebrow}>
      <Reveal>
        <h3 className="text-heading text-text-hi">{contact.headline}</h3>

        <p className="mt-4 text-body text-text">{contact.body}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href={primary.href}>{contact.email}</Button>
          <Button href={cv.href} variant="ghost" download>
            {cv.label}
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {others.map((link) => (
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
        </div>
      </Reveal>
    </Section>
  );
}
