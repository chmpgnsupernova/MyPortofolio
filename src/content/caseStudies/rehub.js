// CASE STUDY PENDUKUNG — sengaja lebih pendek dari PLN.
//
// Tugas piece ini: problem framing. Kekuatannya ada di insight
// (stigma menahan orang dari rehabilitasi) yang didukung data,
// bukan pada kedalaman eksekusi. Ditulis ringkas dengan sadar —
// proyek kompetisi sampingan, dan melebih-lebihkannya akan terbaca.
//
// Gambar sudah tersedia di /public/projects — tidak confidential.

export const rehub = {
  slug: "rehub",
  featured: false,

  title: "Rehub",
  subtitle: "Connecting people to rehabilitation without making them ask in public",

  card: {
    summary:
      "A platform that links people who need physical or non-physical rehabilitation to nearby providers, designed around the reason most of them never start.",
    meta: "ISFEST competition · Top 5 Finalist · UI/UX",
    tags: ["Healthcare", "Problem framing", "Mobile"],
    thumbnail: {
      src: "/projects/Rehub.png",
      alt: "Rehub app screens",
    },
  },

  spec: [
    { key: "Role", value: "UI/UX Designer, user-facing modules" },
    { key: "Context", value: "ISFEST design competition · healthcare track" },
    { key: "Timeline", value: "~1 month" },
    { key: "Team", value: "4 designers, split by page" },
    { key: "Result", value: "Top 5 Finalist · reached the pitch round" },
  ],

  problem: {
    eyebrow: "Problem",
    intro:
      "People do not skip rehabilitation because facilities are missing. They skip it because being seen going is the cost they are unwilling to pay.",
    points: [
      {
        title: "Shame is the barrier, not access",
        body: "Rehabilitation still carries a negative stigma. People delay, the condition worsens, and the recovery they eventually need is longer and harder than the one they avoided.",
      },
      {
        title: "The gap is measurable",
        body: "We worked from secondary data on drug use in Indonesia against the number of people actually in rehabilitation. The distance between those two figures is the problem the product is aimed at.",
      },
      {
        title: "The services already exist",
        body: "Facilities and practitioners are in place. What is missing is a route from the person who needs help to the provider who can give it.",
      },
    ],
  },

  // TIMELINE — lihat catatan penempatan di pln.js.
  // » PERLU DIKONFIRMASI: pembagian minggu di bawah masih perkiraan
  //   dari rentang ~1 bulan. Betulkan agar sesuai yang sebenarnya.
  timeline: {
    eyebrow: "How it ran",
    placement: "after-problem",
    items: [
      {
        period: "Week 1",
        title: "Framing",
        body: "Read the brief against secondary data on drug use versus rehabilitation numbers, and settled on stigma as the barrier to design around.",
      },
      {
        period: "Week 2",
        title: "Flows",
        body: "Split roughly thirty pages across four designers and mapped the routes from first contact to a booked session.",
      },
      {
        period: "Week 3 – 4",
        title: "Prototype",
        body: "High-fidelity screens for the user-facing modules: dashboard, statistics, and MyPlan.",
      },
      {
        period: "Judging",
        title: "Pitch",
        body: "Top 5 Finalist, through to the pitch round.",
        current: true,
      },
    ],
  },

  decisions: {
    eyebrow: "What that led to",
    // Tiga keputusan produk yang lahir langsung dari insight di atas.
    items: [
      {
        id: "a",
        title: "Private by default, in person only when necessary",
        problem:
          "If being seen is the barrier, the first step has to be possible without being seen.",
        designed:
          "Rehabilitation can be started and carried out privately at a distance. Attending a facility in person is reserved for acute cases rather than being the default entry point.",
        rejected: [],
        tradeoff: "",
        figure: {
          src: "/projects/Rehub_1.png",
          alt: "Rehub privacy-first entry flow",
          caption: "The first step does not require showing up anywhere.",
        },
      },
      {
        id: "b",
        title: "A connector, not a provider",
        problem:
          "Building another clinic solves nothing. The failure is in the connection between people and the services that already exist.",
        designed:
          "The product sits as a third party: find nearby facilities, then bridge into consultation or an online session for non-medical rehabilitation.",
        rejected: [],
        tradeoff: "",
        figure: {
          src: "/projects/Rehub_2.png",
          alt: "Facility discovery and consultation booking",
          caption: "Find a nearby facility, or start an online session instead.",
        },
      },
      {
        id: "c",
        // TODO — lubang terakhir di case study ini.
        // Isi satu keputusan desain konkret di Dashboard atau MyPlan:
        //   - apa yang ditampilkan, metrik mana yang dipilih
        //   - apa yang sengaja TIDAK ditampilkan (agar user tidak down saat relapse)
        //   - kenapa bentuk itu yang dipilih
        // Satu paragraf cukup. Setelah terisi, hapus baris `draft` di bawah.
        draft: true,
        title: "Showing progress without punishing a bad week",
        problem:
          "Recovery is not linear. A dashboard that only rewards streaks turns a relapse into a second failure.",
        designed: "",
        rejected: [],
        tradeoff: "",
        figure: {
          src: "/projects/Rehub_3.png",
          alt: "Progress dashboard",
          caption: "",
        },
      },
    ],
  },

  outcome: {
    eyebrow: "Outcome",
    result:
      "Top 5 Finalist at ISFEST, through to the pitch round. The work stopped at prototype; it was a competition project alongside coursework.",
    reflections: [
      "Do primary research, even briefly. Short conversations with people who have avoided rehabilitation would have tested the central assumption instead of leaving it resting on secondary data.",
      "Agree a shared component system on day one. Thirty pages split across four designers stayed consistent by effort rather than by system.",
    ],
    learned:
      "A well-framed problem carries the rest of the work. The judges engaged with why the product needed to exist far more than with how the screens looked, and every design decision after the framing had an obvious reason to point back to.",
  },
};
