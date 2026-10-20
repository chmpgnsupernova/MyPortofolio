// Semua kartu berukuran sama. Penanda (marked) pindah ke sertifikasi
// Database karena itu yang menjawab requirement SQL di lowongan
// developer. ISFEST 2025 tetap menautkan ke case study Rehub, sebagai
// pintu masuk kedua selain section Design.

export const achievements = {
  eyebrow: "Achievements",

  items: [
    // IsFest 2026 (Pocket Friend) sengaja tidak di sini: peringkat
    // penyisihan bukan penghargaan. Pintu masuknya section Design.
    {
      title: "Top 5 Finalist — IsFest UI/UX Competition 2025",
      issuer: "Information Systems Dept.",
      detail:
        "Designed “ReHub”, an accessible rehabilitation web prototype based on Shneiderman’s 8 Golden Rules.",
      caseStudy: "rehub",
      image: "/certificates/Top_5_Finalist.jpg",
    },
    {
      title: "2nd Place — Career Case Competition 2025",
      issuer: "Career Development Center",
      detail:
        "Developed and pitched an analytical framework for an organizational business case.",
      image: "/certificates/2nd_Winner.jpg",
    },
    {
      title: "EF SET English Certificate (C2)",
      issuer: "EF Standard English Test",
      href: "https://cert.efset.org/id/h7qVrd",
    },
    {
      title: "Huawei Certified in AI",
      issuer: "Huawei ICT Academy",
      image: "/certificates/Artificial_Intellegence_Certificate.jpg",
    },
    {
      title: "Huawei Certified in Database",
      issuer: "Huawei ICT Academy",
      marked: true,
      image: "/certificates/Database_Certificate.jpg",
    },
  ],
};
