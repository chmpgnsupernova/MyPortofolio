import { profile } from "../../content/profile";

// Tanpa "Built with React & Tailwind" — itu penanda portofolio
// developer, dan bertentangan dengan posisi halaman ini.
// Kontrol redline pindah ke nav; di sini ia tidak pernah ditemukan.

export function Footer() {
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
