// Strip pendukung. Bukan case study — sengaja dijaga ringkas.
// Moodlens ada di sini, bukan di Work, karena peran saya di sana
// adalah front-end developer, bukan desainer. Mengklaim sebaliknya
// akan runtuh pada pertanyaan pertama di wawancara.

export const beyondDesign = {
  eyebrow: "Beyond design",

  engineering: {
    label: "Engineering",
    items: [
      {
        title: "Moodlens",
        role: "Front-end developer",
        description:
          "Android app for mental-health tracking with on-device emotion detection. Built core screens in Kotlin and Jetpack Compose, and owned the Reflection and Journal features end to end, from UI to local storage and Firebase sync.",
        meta: "Kotlin · Jetpack Compose · TensorFlow Lite · Firebase",
        context: "University project · team of 4 · 3–4 months",
      },
    ],
  },

  leadership: {
    label: "Leadership",
    // Dipadatkan menjadi baris, bukan kartu. Ini konteks, bukan portofolio.
    note: "Event operations roles: coordination under time pressure, with crews and guests.",
    items: [
      { role: "Floor Director", org: "Dewa United, Event Division" },
      { role: "Liaison Officer", org: "Tangerang Hawks Basketball" },
      { role: "Equipment Coordinator", org: "Feel d'Flow 2024" },
      { role: "Logistics Staff (Best Staff award)", org: "OMB UMN" },
    ],
  },
};
