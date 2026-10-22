// CASE STUDY PENDUKUNG — proyek akhir mata kuliah IF450 Interaksi
// Manusia Komputer, UMN 2025.
//
// Framing jujur dikunci:
//   - proyek kuliah, bukan lomba. Hasil: nilai A.
//   - tim 5 orang: 3 desain di Figma, 2 fokus laporan.
//     Brian: sebagian besar screen hi-fi, wiring prototype, splash.
//   - evaluasi di laporan berupa analisis 8 Golden Rules dan Gestalt;
//     tidak ada angka usability test, jadi tidak ada metrik di sini.
//   - persona dari laporan, ditampilkan tanpa foto.
//
// Sumber: laporan UAS (Fransiskus_Asisi_Brian_..._IF450_C_UAS) dan
// file Figma "HCI-UI-Holinery (Copy)", section "Redesign · Polished".
// Screen dibangun ulang untuk portofolio (auto-layout, komponen, satu
// font, token warna) di atas alur dan konten asli — ditulis di spec
// agar tidak terbaca sebagai hasil asli tugas.

const phone = (name, alt, label) => ({
  src: `/projects/holinery/${name}.webp`,
  alt,
  label,
  width: 600,
  height: 1316,
});

export const holinery = {
  slug: "holinery",
  featured: false,

  title: "Holinery",
  subtitle:
    "A holiday itinerary app: plan the trip day by day, then split the bill with the people you travel with",

  back: { href: "/#design", label: "Design case studies" },

  spec: [
    { key: "Role", value: "Team lead · UI designer" },
    { key: "Context", value: "Final project · IF450 Human-Computer Interaction, Universitas Multimedia Nusantara" },
    { key: "Year", value: "2025" },
    { key: "Team", value: "5 people · 3 on design in Figma, 2 on the report" },
    { key: "My part", value: "Most of the high-fidelity screens, prototype wiring, and the splash screen" },
    { key: "Result", value: "Grade A" },
    { key: "Method", value: "User-Centered Design · reviewed against Shneiderman’s 8 Golden Rules and Gestalt" },
    { key: "Note", value: "Screens rebuilt for this portfolio on the original flows and content: one typeface (Inter), colour tokens, shared components, contrast-checked buttons" },
  ],

  problem: {
    eyebrow: "Problem",
    intro:
      "Planning a trip means juggling several apps: where to go, how far places are from each other, when they open, and later, who paid for what.",
    points: [
      {
        title: "Existing apps cover one part each",
        body: "Google Travel builds a plan from booking emails but makes the order of places hard to change. TripIt syncs schedules but keeps maps and live updates behind premium. Traveloka is strong for tickets and hotels, not for a day-by-day plan.",
      },
      {
        title: "Different travellers, same friction",
        body: "We designed for domestic travellers aged 18–35, written up as personas such as Alice, who travels solo on annual leave, Arkane, a pilot with short layovers, and John, who is restarting family trips.",
      },
      {
        title: "Shared costs live somewhere else",
        body: "Groups track spending in chats or spreadsheets, separate from the plan they are following.",
      },
    ],
  },

  journey: {
    eyebrow: "A day with Holinery",
    intro:
      "The key flows read as one travel day, from browsing in the morning to settling the bill at night.",
    stops: [
      { time: "08:00", label: "Explore", title: "Find a place worth going to",
        body: "Each row gives photo, area, rating, and a one-line description; the detail page adds address, phone number, and opening hours.",
        figure: { frameless: true, images: [
          phone("explore-1", "Explore list of destinations with photos, areas, and descriptions", "Explore"),
          phone("explore-2", "Labuan Bajo destination detail with description and address", "Detail"),
        ] } },
      { time: "10:30", label: "Wishlist", title: "Keep it for later",
        body: "One tap on the heart saves a place, ready for the next plan.",
        figure: { frameless: true, images: [ phone("explore-3", "Wishlist of saved places with heart buttons", "Wishlist") ] } },
      { time: "12:15", label: "Create plan", title: "Start with the trip, not the places",
        body: "Name, dates, and travel partners come first; everything after hangs off this plan.",
        figure: { frameless: true, images: [ phone("plan-1", "Create new plan form with trip name, dates, and travel partners", "Create plan") ] } },
      { time: "14:00", label: "Pick places", title: "Suggestions around where you stay",
        body: "Pick a province, city, and hotel; places near it are listed with ratings and an add button.",
        figure: { frameless: true, images: [ phone("plan-2", "Places to visit in Bandung near Hotel Nusantara, each with an add button", "Pick places") ] } },
      { time: "17:00", label: "Schedule", title: "The plan becomes a day-by-day schedule",
        body: "Each stop gets a time slot and a check mark, grouped under its date.",
        figure: { frameless: true, images: [ phone("plan-3", "Itinerary tab with time slots grouped under 06 Jun and 07 Jun", "Itinerary") ] } },
      { time: "19:30", label: "Split bills", title: "Settle up inside the same trip",
        body: "Partners from the plan become bill members; each total expands into items, quantities, and prices.",
        figure: { frameless: true, images: [
          phone("bills-1", "Bills tab listing trip members and each member’s total", "Bills"),
          phone("bills-2", "Expanded bill showing items, quantities, and prices for one member", "Bill detail"),
        ] } },
    ],
  },

  decisions: {
    eyebrow: "Why it works this way",
    items: [
      {
        id: "a",
        title: "From destination to a day-by-day plan",
        problem:
          "A list of places is not a plan. People need to know what happens when, on which day, starting from where they stay.",
        designed:
          "The trip is created first with a name, dates, and travel partners. The user then picks a province, city, and hotel, and places near that hotel are suggested with ratings and an add button. Chosen places turn into a schedule grouped by date, each with a time slot and a check mark.",
        rejected: [
          "Generating the whole itinerary automatically. The prototype keeps the user choosing each place, because the report scoped recommendations to manual input, without personalisation or AI.",
        ],
        tradeoff:
          "Distances are simple geographic estimates, not live routes; map and navigation integration was left for future work.",
      },
      {
        id: "b",
        title: "Split the bill inside the trip",
        problem:
          "When friends or family travel together, costs are shared, but the record of who paid for what usually lives outside the trip plan.",
        designed:
          "Bills is a tab of the trip itself. Members come from the travel partners added when the plan was created. Each member shows a total that expands into items, quantities, and prices, and Add Bills opens a short form for item, quantity, price, and member.",
        rejected: [],
        tradeoff: "",
      },
      {
        id: "c",
        title: "Find a place, keep it for later",
        problem:
          "Before planning, people browse. They need enough information to decide quickly, and somewhere to keep places they like.",
        designed:
          "Explore lists destinations with a photo, area, rating, and one-line description, with filters for rating, nearest, and newest. The detail page puts address, phone number, and opening hours under the description. A heart saves the place to the wishlist.",
        rejected: [],
        tradeoff: "",
      },
    ],
  },

  outcome: {
    eyebrow: "Outcome",
    result:
      "The prototype earned an A for the course. It stayed a Figma prototype; no backend was built and the evaluation was a principle-based review rather than a measured usability test.",
    reflections: [
      "Measure, not only map to principles. The report argues each screen against the 8 Golden Rules, but a short task-based test would have shown where people actually got stuck.",
      "Agree on one type and colour system on day one. Three designers working in parallel produced several fonts and oranges that I had to unify later for this portfolio.",
      "Check contrast early. White text on our brand orange only reached 2.66:1, so buttons now use a darker orange.",
    ],
    learned:
      "Wiring the prototype myself made gaps in the flow obvious: every screen had to lead somewhere, so missing states showed up before the report did.",
  },
};
