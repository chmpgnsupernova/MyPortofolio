import { profile } from "../content/profile";
import { Sidebar } from "../components/sections/Sidebar";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { Projects } from "../components/sections/Projects";
import { DesignWork } from "../components/sections/DesignWork";
import { Skills } from "../components/sections/Skills";
import { Achievements } from "../components/sections/Achievements";
import { BeyondCode } from "../components/sections/BeyondCode";
import { Contact } from "../components/sections/Contact";
import { HeroBackdrop } from "../components/ui/HeroBackdrop";

// Layout dua kolom (pola Brittany Chiang): identitas sticky di kiri,
// isi bergulir di kanan. Gaya visual tetap Redline — token, hairline,
// eyebrow mono, satu aksen.
//
// Urutan section kanan = urutan baca recruiter magang: siapa (About),
// sudah kerja apa (Experience), bikin apa (Projects), desain apa
// (Design case studies), bisa apa (Skills), bukti tambahan, lalu kontak.

export default function Home() {
  return (
    <div className="relative">
      {/* Grid blueprint hanya di layar pertama, memudar ke bawah. */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-screen">
        <HeroBackdrop />
      </div>

      <div className="relative mx-auto max-w-wide px-6 md:px-12 lg:flex lg:justify-between lg:gap-12 lg:px-16">
        <Sidebar />

        <div className="lg:w-[54%] lg:py-12">
          <About />
          <Experience />
          <Projects />
          <DesignWork />
          <Skills />
          <Achievements />
          <BeyondCode />
          <Contact />

          {/* Colophon. Dulu sengaja dihapus karena "Built with React"
              menandai porto developer — sekarang justru itu posisinya,
              dan tautan source adalah satu-satunya kode publik. */}
          <footer className="border-t border-hairline py-10 text-caption text-text-mute">
            <p>
              Designed in Figma and built with React, Vite, and Tailwind
              CSS.{" "}
              <a
                href={profile.source}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-text-hi underline-offset-4 hover:text-accent hover:underline"
              >
                View source ↗
              </a>
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} {profile.fullName}
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
