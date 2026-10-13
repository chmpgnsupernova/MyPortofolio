// Proyek pendukung di bawah case study PLN.
// Urutan, stack, tahun, dan deskripsi = section Projects di CV final
// (cv_generator.py). Jangan menambah klaim di sini tanpa mengubah CV.
//
// Yang sengaja TIDAK diklaim: desain DB & auth ByBrandy (dikerjakan
// anggota lain), integrasi API Beautiful of Java (dikerjakan anggota
// lain), peran lead. Repo ByBrandy private, jadi tidak ditautkan.

export const projects = {
  label: "Other projects",

  items: [
    {
      title: "ByBrandy Website (Admin Panel)",
      stack: "Laravel · MySQL · Bootstrap",
      year: "2024",
      description:
        "Built the admin dashboard for a fashion rental client's website (8-person course project): product CRUD with image upload, order status and payment management with stock adjustment, and user role management.",
    },
    {
      title: "Moodlens",
      stack: "Kotlin · Jetpack Compose",
      year: "2025",
      description:
        "Built the Mood Journal module UI in Jetpack Compose, including a reusable Card component used across its screens.",
    },
    {
      title: "Beautiful of Java",
      stack: "React.js",
      year: "2024",
      description:
        "Designed the user flow and built the dashboard, interactive map, destination detail, and About pages of a regional tourism platform in a 4-person team; proposed shared components (buttons, cards) for UI consistency.",
    },
  ],
};
