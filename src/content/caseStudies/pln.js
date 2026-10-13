// CASE STUDY UTAMA.
//
// Framing jujur dikunci: internship capstone, internal training project,
// selesai sampai internal testing. Jangan pernah ditulis seolah sistem
// produksi. Kejujuran ini yang membuat sisanya bisa dipercaya.


export const pln = {
  slug: "pln",
  featured: true,
  client: "PT PLN Icon Plus",

  title: "LNG supply monitoring platform",
  subtitle: "Building the Vue 3 and TypeScript front end of an internal monitoring and contract system",

  // Tautan kembali — pembaca datang dari section Experience.
  back: { href: "/#experience", label: "Experience" },

  spec: [
    // Harus sama dengan CV. » VERIFIKASI jabatan resmi di surat magang.
    { key: "Role", value: "Front-End Developer Intern" },
    { key: "Stack", value: "Vue 3 · TypeScript · Leaflet · REST APIs from the back-end team" },
    { key: "Company", value: "PT PLN Icon Plus · Jakarta Selatan" },
    { key: "Context", value: "Internship capstone · internal training project" },
    { key: "Timeline", value: "Mar 2026 – Jul 2026" },
    // Dikonfirmasi: ketiganya BA merangkap UI/UX; dua juga developer
    // (Brian front end, satu intern back end). Tidak ada senior.
    { key: "Team", value: "3 interns, all BA and UI/UX · 2 also developers: front end (me) and back end · no senior" },
    { key: "Status", value: "Completed to internal testing · not deployed" },
    // Ditampilkan di spec, bukan cuma di Constraints: dibaca sebelum
    // pembaca sampai ke screenshot pertama.
    { key: "Data", value: "Dummy data only · every screen shown uses no real operational records" },
  ],

  problem: {
    eyebrow: "Problem",
    intro:
      "The project rebuilt an internal LNG supply monitoring platform at PT PLN Icon Plus. An earlier version existed in 2023 and was retired; we started from scratch, working from a Transfer of Knowledge module rather than a brief from active users. Three things were slow before the system existed.",
    points: [
      {
        title: "Data was entered manually, in several places",
        body: "The same values had to be typed again in different modules. I did not have direct access to the operational detail (who entered what, how often) because the project started from documentation, not from users. The stated goal was digital transformation of a manual process.",
      },
      {
        title: "Contract analysis was done by hand",
        body: "Fuel contracts run about two pages and cover fuel specification under a Take or Pay scheme. The slow part was comparing loading against unloading documents line by line before a manager could approve anything.",
      },
      {
        title: "Shipment status was invisible",
        body: "Nobody knew when a vessel would arrive. Distance-based estimates are unreliable at sea (weather, routing, delays), so the team could not plan what came next.",
      },
    ],
  },

  constraints: {
    eyebrow: "Constraints",
    items: [
      "Three interns, no senior engineer or designer on the team; architecture and design decisions were ours.",
      "Four months, building from zero.",
      "Requirements came from a legacy Transfer of Knowledge module, not from active users.",
      "Dummy data only; no access to real operational records.",
    ],
  },

  // TIMELINE.
  //
  // Pindahkan blok ini di halaman dengan mengganti `placement`:
  //   after-header | after-problem | after-constraints | after-role
  //   after-decisions | after-feedback | after-outcome
  //
  // » PERLU DIKONFIRMASI: batas bulan tiap fase di bawah masih perkiraan
  //   dari rentang Maret–Juli. Betulkan agar sesuai yang sebenarnya.
  timeline: {
    eyebrow: "How it ran",
    placement: "after-constraints",
    items: [
      {
        period: "March",
        title: "Analysis",
        body: "Worked the requirements out of the Transfer of Knowledge module (modules needed, process flow, business rules) and compared against similar tools to find the gaps.",
      },
      {
        period: "April – May",
        title: "Design",
        body: "Screens and flows, reviewed weekly with the mentor and PM. The button and action-hierarchy rules came out of these reviews.",
      },
      {
        period: "May – June",
        title: "Build",
        body: "Implemented the front end from my own designs, the loop that produced the handoff lessons at the end of this page.",
      },
      {
        period: "July",
        title: "Internal testing",
        body: "Reached internal testing. The internship period ended before deployment.",
        current: true,
      },
    ],
  },

  role: {
    eyebrow: "My role",
    intro:
      "I built the front end; the three engineering decisions below are the core of it. Before that I did the analysis and the UI design for the same product, so I implemented screens whose data and process I had already modelled.",
    points: [
      {
        title: "Took the lead informally",
        body: "Set the working timeline and prepared the team workspace.",
      },
      {
        title: "Analysis before code",
        body: "BPMN process models, information architecture, ERDs for five core modules, and the Figma design system and hi-fi prototypes the build worked from.",
      },
    ],
  },

  // KEPUTUSAN ENGINEERING.
  //
  // `built` = bullet CV (fakta). `problem`, `rejected`, `tradeoff`
  // yang bertanda » DRAFT adalah susunan Claude dari bullet CV —
  // KONFIRMASI atau betulkan sebelum publish. Aturan: kalau tidak bisa
  // kamu pertahankan 2 menit di depan interviewer, turunkan klaimnya.
  //
  // `code` sengaja kosong. Isi dengan potongan yang DISEDERHANAKAN dan
  // tanpa nama field/endpoint internal — bukan disalin dari repo PLN.
  // Selama kosong, slot ini tidak tampil di halaman.
  decisions: {
    eyebrow: "Key engineering decisions",
    items: [
      {
        id: "a",
        title: "One config-driven data view instead of a page per module",
        // » DRAFT — konfirmasi alasannya
        problem:
          "Most modules needed the same screen: a table backed by the API, with search, filters, pagination, create, edit, delete, export, and actions that depend on the user's role. Hand-building that screen per module would mean fixing the same bug in every copy.",
        built:
          "A config-driven generic data view reused across modules: server-side pagination, search and two-stage filtering, CRUD modals, PDF/XLSX export, and role-based action visibility. Each module describes its columns, filters, and actions; the view does the rest.",
        // » DRAFT
        rejected: [
          "A hand-built list page per module. Fastest for the first module, but every fix and every new feature (an export format, a new filter) has to be repeated in each copy.",
        ],
        // » DRAFT
        tradeoff:
          "The config becomes an API of its own. A module that needs something the generic view does not support either bends the config or falls back to a custom page, so the generic view has to stay small enough for a teammate to read.",
        code: {
          snippet: "",
          caption: "",
        },
        figure: {
          src: "/projects/PLN_1.png",
          alt: "Unit master-data form with identity, location, and coordinates already resolved",
          caption:
            "A form opened from the generic data view: fields resolve from the unit record instead of being retyped.",
        },
      },
      {
        id: "b",
        title: "Approval workflows with a check the approver cannot skip",
        problem:
          "A manager has to approve a contract. If the system does the comparison, the screen has to show the result clearly enough that they trust it, and stay accountable for signing.",
        // » DRAFT — kalimat kedua (status warna & red memblokir approve):
        //   konfirmasi bahwa ini memang kamu implementasikan, bukan cuma desain.
        built:
          "Contract and transaction workflows (approval and rejection, draft saving, document upload) backed by shared composables for validation, formatting, and drafts, so every form behaves the same way. The loading-versus-unloading comparison carries a state: green when the values match, amber within tolerance, red outside it, and red disables approval.",
        // » DRAFT
        rejected: [
          "Validation and formatting written inside each form. The same rule drifts between screens, and a fix lands in one place only.",
          "Red as a warning that can still be approved. A control that can be waved through is decoration, not a control.",
        ],
        tradeoff:
          "Speed against transparency. The approver sees what the verdict was calculated from, not just the verdict, because a contract carries money and may be audited.",
        figure: {
          src: "/projects/PLN_2.png",
          alt: "Contract detail: approval state per signatory, with the tolerance check written out beneath",
          caption:
            "Approval state per signatory, with the tolerance check that produced it written out underneath.",
        },
      },
      {
        id: "c",
        title: "A vessel map that loads its endpoints in parallel",
        problem:
          "Teams needed to see where each vessel was and how deliveries were going, and the map's data came from several endpoints. Arrival estimates were designed around AIS position data, since a distance-only estimate goes stale when a vessel is held up.",
        built:
          "An interactive Leaflet map dashboard showing vessel routes and delivery realisation, loading data from multiple endpoints in parallel.",
        // » DRAFT
        rejected: [
          "Requesting the endpoints one after another. Simpler to write, but the map's load time becomes the sum of every request instead of the slowest one.",
        ],
        // » DRAFT — dan TANYA: kalau satu endpoint gagal, apa yang
        //   ditampilkan peta? Ini hampir pasti ditanya interviewer.
        tradeoff:
          "Parallel requests can partially fail: one endpoint errors while the others succeed. The map has to decide whether to show what it has or show an error, and that decision needs to be explicit.",
        figure: {
          src: "/projects/PLN_3.png",
          alt: "Vessel register listing each voyage with its departure and arrival estimate",
          caption:
            "Each voyage carries its own departure and arrival estimate.",
        },
      },
    ],
  },

  feedback: {
    eyebrow: "Review feedback",
    intro:
      "Design reviews ran weekly with my mentor, acting as QA, and the project manager. Their focus was consistency, the button system in particular.",
    // » DRAFT — konfirmasi detailnya akurat sebelum publish
    items: [
      {
        said: "Action buttons were styled differently from page to page.",
        changed:
          "Consolidated them into one set of button styles reused across every screen.",
      },
      {
        said: "The primary color was applied without a rule, so no single action read as the main one.",
        changed:
          "Restricted the primary color to one main action per screen; everything else uses a neutral or outlined style.",
      },
      {
        said: "Two calls to action sat next to each other with equal visual weight, so users could not tell which to press.",
        changed:
          "Set a fixed action hierarchy (one filled primary, one outlined secondary, with enough space between them) applied across the whole flow.",
      },
    ],
    outro:
      "The effect was structural: instead of styling each page, I ended up with button rules an engineer could follow without asking.",
  },

  outcome: {
    eyebrow: "Outcome",
    result:
      "The system reached internal testing. It was not deployed; the internship period ended before we finished.",
    reflections: [
      "Write tests alongside the code. The project reached internal testing without automated tests, so every change was checked by hand.",
      "Work in branches and pull requests from day one, so every change is reviewed and recorded instead of merged straight in.",
      "Treat shared components as a first-day decision, not a cleanup task. Styling page by page is what created the inconsistency the reviews caught.",
    ],
    learned:
      "Because I implemented my own designs, I felt the cost directly: screens styled one at a time are cheap in Figma and expensive in code. Once the button styles, the primary-color rule, and the action hierarchy became rules rather than drawings, consistency arrived on its own and the page-by-page revisions stopped.",
  },

  handoff: {
    eyebrow: "From design to code",
    intro:
      "On this project I was the business analyst, then the designer, then the developer, then QA, for the same product. I received my own designs as a developer and tested them as QA.",
    // » DRAFT — bullet 1 & 2 masih inferensi, konfirmasi sebelum publish
    points: [
      {
        title: "What a spec has to carry",
        body: "The tolerance states are not just green, amber, and red. An engineer needs the exact threshold, what each state does (green and amber pass, red blocks the approve button) and which compared fields the state is calculated from. Leave any of the three implicit and the developer either asks or guesses.",
      },
      {
        title: "Cheap in Figma, expensive in code",
        body: "The contract comparison is a table and some numbers on a canvas; parsing the documents and matching the fields is the real work. Vessel tracking is a moving dot on a map; scheduled position polling against AIS data is the hard part.",
      },
      {
        title: "What changed in how I hand work over",
        body: "After the button reviews I stopped delivering a set of screens and started delivering rules (the button styles, when the primary color applies, the primary-versus-secondary hierarchy) so the result stays consistent in code without me standing over it.",
      },
      {
        title: "The counter-example",
        body: "On an earlier university project the design was generated and implemented straight away with no handoff document. Reusable components were never defined up front, so the developer had to work out component boundaries alone. That contrast is why I now settle components, spacing, and states before implementation rather than after.",
      },
    ],
  },
};
