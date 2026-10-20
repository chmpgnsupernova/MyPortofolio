// CASE STUDY PENDUKUNG — kompetisi IsFest 2026, setahun setelah ReHub.
//
// Framing jujur dikunci:
//   - peringkat 7 dari 26 di babak penyisihan, bukan finalis
//   - berhenti di prototype, belum diuji ke pengguna
//   - kerja tim: keputusan a dan b milik tim, hanya c yang desain
//     Brian sepenuhnya. Label di tiap keputusan wajib mencerminkan itu.
//   - layar kewajiban/cicilan didesain anggota tim lain
//
// Sumber: laporan lomba (KataFransApaAja_Penyisihan_UI-UX_Laporan),
// deck portofolio di Figma, dan penjelasan Brian soal pembagian kerja.
// Gambar: page "Web export" di file Figma IsFest_2026, WebP 600px.

const phone = (name, alt, label) => ({
  src: `/projects/pocket-friend/${name}.webp`,
  alt,
  label,
  width: 600,
  height: 1267,
});

export const pocketFriend = {
  slug: "pocket-friend",
  featured: false,

  title: "Pocket Friend",
  subtitle:
    "A money tracker that steps in two seconds before you pay, not at the end of the month",

  // Dibuka dari section Design di homepage.
  back: { href: "/#design", label: "Design case studies" },

  spec: [
    { key: "Role", value: "Team lead · UI/UX Designer" },
    { key: "Context", value: "IsFest UI/UX Competition 2026 · theme: From Awareness to Action" },
    { key: "Timeline", value: "1 month · 7 deliverables" },
    { key: "Team", value: "4 people in two parallel tracks: design and pitch" },
    { key: "Result", value: "Ranked 7th of 26 teams · preliminary round" },
    { key: "Status", value: "Clickable prototype · not yet tested with users" },
    // Sama dengan disclosure di laporan lomba, ditambah bantuan AI
    // saat merapikan visual untuk portofolio ini.
    { key: "AI use", value: "Literature search, report editing, part of the mascot artwork, and tidying the visuals for this portfolio" },
  ],

  links: [
    {
      label: "Try the prototype",
      href: "https://pocket-friend-prototype.vercel.app/",
      variant: "primary",
    },
  ],

  problem: {
    eyebrow: "Problem",
    intro:
      "Young earners already know they should save. The gap is behaviour, not knowledge: among Gen Z, fear of missing out and impulse buying correlate at r = 0.827 (Pramesty & Merida, 2025).",
    points: [
      {
        title: "Every rupiah looks spendable",
        body: "Money sits in one combined balance across two to four e-wallets. Part of it is already committed to instalments, but the total still reads as safe. That is mental accounting at work (Thaler, 1999).",
      },
      {
        title: "Small amounts feel free at checkout",
        body: "Rp 75,000 does not register as expensive in the moment. It only adds up at the end of the month.",
      },
      {
        title: "Trackers arrive too late",
        body: "Existing apps report what has already been spent. By the time the monthly summary lands, there is nothing left to change.",
      },
      {
        title: "Two income patterns, one mechanic",
        body: "We designed for Rania, 24, salaried and paying off a paylater balance, and Bagas, 21, a freelancer with no emergency fund. The same product had to make sense for both.",
      },
    ],
  },

  timeline: {
    eyebrow: "How it ran",
    placement: "after-problem",
    items: [
      {
        period: "Week 1",
        title: "Framing",
        body: "Divided the team's work, chose the features while leading the brainstorm, and wrote the report sections outside the mockups.",
      },
      {
        period: "Week 2 – 4",
        title: "Design track",
        body: "High-fidelity screens and the web prototype, built in parallel with the pitch.",
      },
      {
        period: "Week 2 – 4",
        title: "Pitch track",
        body: "Deck and demo, worked from a module of supporting documents so the pitch never waited on finished screens.",
      },
      {
        period: "Judging",
        title: "Result",
        body: "Ranked 7th of 26 teams in the preliminary round.",
        current: true,
      },
    ],
  },

  role: {
    eyebrow: "My role",
    intro:
      "A year after reaching the IsFest 2025 final as a designer, I came back to lead a team of four. Leading turned out to be mostly about designing how the work flows, not only assigning it.",
    points: [
      {
        title: "Direction",
        body: "Split the work by track, set the feature list during brainstorming, and wrote the report sections that framed the problem.",
      },
      {
        title: "Design",
        body: "Onboarding personalisation and settings end to end. Challenges and history polished with teammates, plus support on the dashboard.",
      },
      {
        title: "Supporting documents",
        body: "Kept every supporting document in one place and turned it into a module the pitch track could work from on its own.",
      },
      {
        title: "Not mine",
        body: "The debt and instalment screens were designed by teammates. They appear below because the team decision they carry is central to the product.",
      },
    ],
  },

  decisions: {
    eyebrow: "Key decisions",
    items: [
      {
        id: "a",
        title: "Consequences in days, not rupiah",
        label: "What the team designed",
        problem:
          "A rupiah amount is easy to rationalise. A pay-off date that slips is not.",
        designed:
          "Spending is translated into time the user already cares about: an instalment paid off six days later, a savings target pushed back, or fewer days of emergency cover. It appears where the decision happens, on the debt screen and in the weekly recap, and progress is measured the same way, as days of financial freedom gained.",
        rejected: [
          "Showing the rupiah amount alone. Rp 75,000 feels trivial at checkout.",
          "Relying on a monthly report. It lands after the money is gone.",
        ],
        tradeoff:
          "Every conversion depends on what the user logs. Input stays manual, so the mechanic is only as accurate as the user's discipline. We flagged this as the main weakness in our own SWOT.",
        figure: {
          caption:
            "Debt overview, weekly recap, and allocation calibration. The debt screen was designed by a teammate.",
          images: [
            phone("time-1", "Debt overview warning that impulse spending today pushes the pay-off back by six days", "Debt overview"),
            phone("time-2", "Weekly recap explaining which savings target moved back and by how many days", "Weekly recap"),
            phone("time-3", "Allocation calibration showing fourteen days of financial freedom gained", "Calibration"),
          ],
        },
      },
      {
        id: "b",
        title: "Consistency that is celebrated, never punished",
        label: "What we designed together",
        problem:
          "People quit habit apps when one missed day wipes their progress. Both personas had done exactly that.",
        designed:
          "Challenges are evaluated weekly, as N out of 7 days, so one bad day does not erase the week. Reaching a milestone opens a chest whose contents are fixed in advance, and the item is worn by Bucky, the mascot, on the home screen. Bucky only grows or rests. It never gets sick or looks worse when the user is away.",
        rejected: [
          "Daily streaks that reset after one missed day.",
          "Loot-box rewards with random contents.",
          "Leaderboards and comparison with other users.",
        ],
        tradeoff:
          "Milestones arrive more slowly than the rapid rewards commercial apps rely on. We accepted less short-term pull to stay clear of dark patterns.",
        figure: {
          caption: "Weekly challenge, opening the chest, and the reward worn by Bucky.",
          images: [
            phone("habit-1", "Weekly challenge screen with a seven-day check-in row and savings targets", "Weekly challenge"),
            phone("habit-2", "Chest opening screen announcing an achievement chest", "Chest"),
            phone("habit-3", "Bucky the cat wearing the unlocked accessory above the accessory grid", "Reward on Bucky"),
          ],
        },
      },
      {
        id: "c",
        title: "A budget calculated from you",
        problem:
          "A generic monthly budget fails anyone whose income changes, and a combined balance hides what is already committed.",
        designed:
          "Onboarding starts from the user's situation instead of a form: a priority question such as “my cash flow is negative” picks the allocation strategy. The app recommends a ratio, which the user can accept or set by hand. The final screen shows one number, how much is safe to spend this week from the lifestyle pocket, instead of the monthly income the user already knows.",
        rejected: [
          "Showing the total monthly income. The user knows it already, and a large figure makes everything feel spendable.",
          "A monthly figure. Too far away to hold back a decision at checkout.",
          "Asking for sign-in first. People reluctant to hand over account access see how the app works before they are asked.",
        ],
        tradeoff:
          "Onboarding asks more questions up front than a typical tracker. Moving sign-in to the end was how we paid for that.",
        figure: {
          caption: "Priority question, recommended ratio, and the weekly safe-to-spend figure.",
          images: [
            phone("onboard-1", "Onboarding question asking for the user's main financial priority", "Priority"),
            phone("onboard-2", "Recommended allocation ratio with an option to set it manually", "Recommended ratio"),
            phone("onboard-3", "Financial summary showing Rp 350,000 safe to spend this week", "Safe to spend"),
          ],
        },
      },
    ],
  },

  outcome: {
    eyebrow: "Outcome",
    result:
      "Ranked 7th of 26 teams in the preliminary round of IsFest UI/UX Competition 2026. The work stopped at a clickable prototype, and none of it has been tested with users yet.",
    reflections: [
      "Split the team by strength, not evenly. A technical track for high-fidelity work and prototyping in Figma, and a fundamentals track for brainstorming, the report, and the deck.",
      "Remove waiting between tracks. Any asset ready in Figma should go straight into the deck instead of waiting for every screen to be final.",
      "Test the core mechanic before polishing it. The next step is an A/B test of time framing against rupiah framing, and usability tests of onboarding and logging with people like Rania and Bagas.",
    ],
    learned:
      "The module of supporting documents is what let four people ship seven deliverables in a month: the pitch track could start while the designs were still moving.",
  },
};
