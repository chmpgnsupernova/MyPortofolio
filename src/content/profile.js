// Identitas, copy hero, dan tautan kontak.
// Satu tempat untuk semua yang berhubungan dengan "siapa saya".

export const profile = {
  wordmark: "Brian Mariarvin",
  fullName: "Fransiskus Asisi Brian Nugrah Mariarvin",
  role: "UI/UX Designer",

  // Hero — thesis halaman ini. Ditulis sebagai kartu spesifikasi komponen.
  hero: {
    eyebrow: "Identity",
    headline: "Brian Mariarvin",
    tagline: "UI/UX Designer who ships the frontend too.",
    // Satu kalimat yang menjelaskan keunggulan tanpa mengklaimnya.
    summary:
      "I design interfaces, then build them. The specs I hand to engineers are ones I have had to implement myself, so they answer the questions a developer actually asks.",
    variants: ["Designer", "Builder", "ex-BA & QA"],
    status: "Open to UI/UX roles at startups",
  },

  about: {
    eyebrow: "About",
    paragraphs: [
      "I am a final-year IT student who moved toward design and stayed. Most of my work sits in internal tools and health products, places where a wrong flow costs someone real time, and where the interface has to survive contact with messy data.",
      "The IT background is not a second career. It is the reason my design decisions account for what is cheap to build and what is not, and why I write handoff documents that engineers can work from without coming back to ask.",
    ],
    // "Sekarang lagi apa" — menjaga halaman terasa hidup.
    now: "Currently in a bootcamp and designing a personal-finance app for a design competition.",
  },

  contact: {
    eyebrow: "Contact",
    headline: "Open to UI/UX roles at startups.",
    body: "Available for full-time and internship positions. The fastest way to reach me is email.",
    email: "brianmariarvin@gmail.com",
    links: [
      {
        label: "Email",
        href: "mailto:brianmariarvin@gmail.com",
        primary: true,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/fransiskus-asisi-brian-nugrah-mariarvin-ab852828a/",
      },
      {
        label: "GitHub",
        href: "https://github.com/chmpgnsupernova",
      },
    ],
  },
};
