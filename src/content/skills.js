// Hierarki di sini disengaja: Design tampil penuh, Engineering
// tampil sebagai baris pendukung. Urutan ini adalah positioning —
// jangan diratakan jadi satu daftar sejajar.

export const skills = {
  eyebrow: "Skills",

  primary: {
    label: "Design",
    items: [
      "Figma",
      "Prototyping",
      "Design systems",
      "Developer handoff",
      "Wireframing",
      "User flows",
      "UX research (secondary)",
    ],
  },

  secondary: {
    label: "Engineering",
    // Ditulis sebagai konteks, bukan pamer: kenapa ini relevan untuk desainer.
    note: "Enough to build what I design, and to know what it costs.",
    items: [
      "React",
      "Tailwind CSS",
      "Kotlin / Jetpack Compose",
      "Laravel / PHP",
      "MySQL",
      "Git",
    ],
  },
};
