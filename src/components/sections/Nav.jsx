import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../../content/profile";
import { ThemeToggle } from "../ui/ThemeToggle";

const links = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  // Dibaca sekali saat mount — halaman bisa saja dimuat dalam
  // keadaan sudah tergulir (tautan dengan anchor, atau refresh).
  const [scrolled, setScrolled] = useState(() => window.scrollY > 16);
  const [open, setOpen] = useState(false);

  // Hairline hanya muncul setelah halaman digulir — di puncak,
  // nav menyatu dengan canvas.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-canvas/90 transition-colors duration-200 ${
        scrolled ? "border-b border-hairline" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-6">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-display text-caption font-medium text-text-hi"
        >
          {profile.wordmark}
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-label text-label uppercase text-text-mute transition-colors duration-150 hover:text-text-hi"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden"
          >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
            className="text-text-hi"
          >
            {open ? (
              <>
                <path d="M5 5l10 10" />
                <path d="M15 5L5 15" />
              </>
            ) : (
              <>
                <path d="M3 6h14" />
                <path d="M3 13h14" />
              </>
            )}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <ul
          id="mobile-nav"
          className="border-t border-hairline bg-canvas px-6 py-2 md:hidden"
        >
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-hairline py-3 font-label text-label uppercase text-text last:border-0"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
