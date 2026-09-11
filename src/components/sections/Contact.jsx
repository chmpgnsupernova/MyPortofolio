import { profile } from "../../content/profile";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function Contact() {
  const { contact } = profile;
  const primary = contact.links.find((link) => link.primary);
  const others = contact.links.filter((link) => !link.primary);

  return (
    <Section id="contact" eyebrow={contact.eyebrow}>
      <Reveal>
        <h2 className="max-w-2xl text-heading text-text-hi">
          {contact.headline}
        </h2>

        <p className="mt-4 max-w-xl text-body text-text">{contact.body}</p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Button href={primary.href}>{contact.email}</Button>

          {others.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-label uppercase text-text-mute transition-colors duration-150 hover:text-text-hi"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
