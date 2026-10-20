// Case study desain, terpisah dari Projects (yang mengikuti CV dan
// berisi kerja developer). Dua tahun IsFest berurutan sengaja
// ditampilkan berdampingan: 2025 sebagai designer, 2026 sebagai
// team lead.
//
// Klaim di sini harus sama dengan spec di file case study masing-masing.

export const designWork = {
  eyebrow: "Design case studies",

  items: [
    {
      slug: "pocket-friend",
      title: "Pocket Friend",
      year: "2026",
      meta: "Team lead · 7th of 26 · IsFest UI/UX Competition",
      description:
        "Led a team of four on a money tracker that turns spending into days on the user's own goals. Designed the onboarding personalisation end to end.",
      thumbnail: {
        src: "/projects/thumbs/PocketFriend.webp",
        alt: "Pocket Friend app screens with the Bebe mascot",
        width: 640,
        height: 400,
      },
    },
    {
      slug: "rehub",
      title: "ReHub",
      year: "2025",
      meta: "UI/UX Designer · Top 5 Finalist · IsFest UI/UX Competition",
      description:
        "An accessible rehabilitation web prototype that lets people start recovery privately, built on Shneiderman’s 8 Golden Rules.",
      thumbnail: {
        src: "/projects/thumbs/Rehub.webp",
        alt: "ReHub cover",
        width: 640,
        height: 360,
      },
    },
  ],
};
