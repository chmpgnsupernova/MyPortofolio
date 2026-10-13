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

  // Kolom kiri (sticky di desktop). Satu kalimat saja — ringkasan
  // lengkap CV ada di About. Semua frasa diambil dari CV.
  hero: {
    headline: "Brian Mariarvin",
    tagline: "Front-End Developer · Informatics Student",
    summary:
      "Former Front-End Developer Intern at PT PLN Icon Plus, now growing toward full-stack development.",
    status: "Open to developer internships",
  },

  // CV final yang sama dengan yang dikirim ke recruiter. Kalau CV
  // diperbarui, ganti berkas ini juga — keduanya harus identik.
  cv: {
    href: "/Fransiskus_Asisi_Brian_CV.pdf",
    label: "Download CV",
  },

  about: {
    eyebrow: "About",
    // Paragraf pertama = ringkasan CV kata per kata.
    paragraphs: [
      "Informatics student (graduating 2027) and former Front-End Developer Intern at PT PLN Icon Plus, where I built Vue 3 and TypeScript interfaces for an internal LNG supply monitoring platform.",
      "Background in UI/UX and business analysis (BPMN, information architecture), now growing toward full-stack development.",
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

  // Repo situs ini sendiri — satu-satunya kode yang bisa ditautkan
  // langsung. Proyek lain tidak punya repo atau live yang tersisa.
  source: "https://github.com/chmpgnsupernova/MyPortofolio",
};
