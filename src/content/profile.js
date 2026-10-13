// Identitas, copy hero, dan tautan kontak.
// Satu tempat untuk semua yang berhubungan dengan "siapa saya".
//
// Posisi: front-end developer (TypeScript) yang sedang tumbuh ke
// full-stack. Latar desain dan BA tetap ada, tapi sebagai pembeda,
// bukan identitas utama. Harus konsisten dengan CV developer.

export const profile = {
  wordmark: "Brian Mariarvin",
  fullName: "Fransiskus Asisi Brian Nugrah Mariarvin",
  role: "Front-End Developer",

  // Hero — thesis halaman ini. Ditulis sebagai kartu spesifikasi komponen.
  hero: {
    eyebrow: "Identity",
    headline: "Brian Mariarvin",
    // Tagline dan summary = header & ringkasan CV, kata per kata.
    tagline: "Front-End Developer · Informatics Student",
    summary:
      "Informatics student (graduating 2027) and former Front-End Developer Intern at PT PLN Icon Plus, where I built Vue 3 and TypeScript interfaces for an internal LNG supply monitoring platform. Background in UI/UX and business analysis (BPMN, information architecture), now growing toward full-stack development.",
    variants: ["TypeScript", "Vue · React", "REST · SQL"],
    status: "Open to developer internships",
  },

  about: {
    eyebrow: "About",
    // Hanya fakta yang juga ada di CV.
    paragraphs: [
      "I am an Informatics student at Universitas Multimedia Nusantara, graduating in 2027. From March to July 2026 I was a Front-End Developer Intern at PT PLN Icon Plus, building Vue 3 and TypeScript interfaces for an internal LNG supply monitoring platform.",
      "I started in UI/UX design and business analysis (BPMN, information architecture) and moved into front-end development. I am now growing toward full-stack development.",
    ],
    education: {
      school: "Universitas Multimedia Nusantara",
      degree: "Bachelor of Informatics",
      period: "Aug 2023 – Jun 2027 (expected)",
      gpa: "GPA 3.55 / 4.00",
      coursework:
        "Database Systems, Software Engineering, Web Programming, Object-Oriented Programming",
    },
    // "Sekarang lagi apa" — menjaga halaman terasa hidup.
    now: "Working on two personal projects while learning back-end development.",
  },

  contact: {
    eyebrow: "Contact",
    headline: "Open to developer internships.",
    body: "Available for a full-time internship. The fastest way to reach me is email.",
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
