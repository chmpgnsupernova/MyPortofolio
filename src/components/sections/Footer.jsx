import { useLocation } from "react-router-dom";
import { profile } from "../../content/profile";

// Footer halaman case study. Homepage memakai colophon sendiri
// (dengan tautan source) di kolom kanan.

export function Footer() {
  // Homepage punya colophon sendiri di kolom kanan.
  if (useLocation().pathname === "/") return null;

  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-4 px-6 py-8">
        <span className="font-label text-label uppercase text-text-mute">
          © {new Date().getFullYear()} {profile.wordmark}
        </span>

        <a
          href={`mailto:${profile.contact.email}`}
          className="font-label text-label uppercase text-text-mute transition-colors duration-150 hover:text-text-hi"
        >
          {profile.contact.email}
        </a>
      </div>
    </footer>
  );
}
