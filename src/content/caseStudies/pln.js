// CASE STUDY UTAMA.
//
// Framing jujur dikunci: internship capstone, internal training project,
// selesai sampai internal testing. Jangan pernah ditulis seolah sistem
// produksi. Kejujuran ini yang membuat sisanya bisa dipercaya.
//
// Slot gambar: src masih null. Isi setelah screenshot di-blur.
// Setiap slot punya `todo` yang menjelaskan gambar apa yang dibutuhkan.

export const pln = {
  slug: "pln",
  featured: true,
  client: "PLN Icon Plus",

  title: "Internal logistics & contract system",
  subtitle: "Turning a manual fuel-procurement process into one integrated system",

  // Ringkasan untuk kartu di homepage.
  card: {
    summary:
      "Data management, automated contract comparison, and vessel tracking for an internal fuel-logistics workflow.",
    meta: "PLN Icon Plus · Internship · 4 months",
    tags: ["Internal tools", "Automation", "Data-heavy UI"],
    thumbnail: {
      src: "/projects/PLN.png",
      alt: "Operational dashboard: contract counters, a vessel register, and AIS positions on one screen",
    },
  },

  spec: [
    { key: "Role", value: "UI/UX Designer, also BA, front-end, and QA" },
    { key: "Client", value: "PLN Icon Plus (PT Indonesia Comnets Plus)" },
    { key: "Context", value: "Internship capstone · internal training project" },
    { key: "Timeline", value: "March – July 2026 · 4 months" },
    { key: "Team", value: "3 interns, no senior on the build" },
    { key: "Status", value: "Completed to internal testing · not deployed" },
  ],

  problem: {
    eyebrow: "Problem",
    intro:
      "The project rebuilt an internal system for fuel procurement and logistics at PLN Icon Plus. An earlier version existed in 2023 and was retired; we started from scratch, working from a Transfer of Knowledge module rather than a brief from active users. Three things were slow before the system existed.",
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
      "Output is confidential; screens shown here have their data blurred.",
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
      "I owned the design end to end. Because I also worked as BA, developer, and QA on the same product, I saw the whole picture, and that made the design decisions sharper, not just my task list longer.",
    points: [
      {
        title: "Took the lead informally",
        body: "Set the working timeline and prepared the team workspace.",
      },
      {
        title: "Analysis into design",
        body: "Worked the requirements out of the TOK module: which modules were needed, how the flow ran, what the business process was. Two gaps became the two largest design decisions: manual document comparison, and no visibility on vessel position.",
      },
      {
        title: "Design into code, then into testing",
        body: "I implemented my own designs and then tested them. That loop is where the handoff lesson at the end of this page comes from.",
      },
    ],
  },

  decisions: {
    eyebrow: "Key decisions",
    items: [
      {
        id: "a",
        title: "From scattered manual entry to one integrated record",
        problem:
          "The same data existed in several places and had to be retyped. Anything already captured should be reusable.",
        // » DRAFT — konfirmasi/edit sebelum publish
        designed:
          "A single source for each record. Fields already entered are pulled in or picked from a reference, never typed twice, so there is only one place to correct a mistake.",
        rejected: [
          "Give each module its own form and let users retype what already exists elsewhere. This is the manual status quo with a screen in front of it; the redundancy survives.",
        ],
        tradeoff:
          "Repeated entry works as an accidental cross-check: when the same value is typed differently twice, someone notices. A single source removes that check. Entering once is faster, but one wrong entry is now wrong everywhere, which makes validation at the point of entry the only remaining guard.",
        figure: {
          src: "/projects/PLN_1.png",
          alt: "Unit master-data form with identity, location, and coordinates already resolved",
          caption:
            "Identity, location, and coordinates resolve from the unit record instead of being retyped into every module that needs them.",
        },
      },
      {
        id: "b",
        title: "Automating contract comparison without removing the human",
        problem:
          "A manager has to approve a contract. If the system does the comparison, how do you show the result so that they trust it enough to sign, and stay accountable for signing?",
        designed:
          "The approval screen shows the loading and unloading figures side by side with the computed difference, marked by state: green when the values match, amber when they differ within tolerance, red when they fall outside it. Red blocks approval entirely.",
        rejected: [
          "Approve automatically with no human step; contracts carry money and legal weight, so someone accountable has to press the button.",
          "Show both documents raw and let the manager compare; that is the manual job with a screen around it, and saves no time.",
          "Make red a warning that can still be approved; a control that can be waved through is decoration, not a control.",
        ],
        tradeoff:
          "Speed against transparency. I went with transparency because this is a contract: the person accountable needs to see what the verdict was calculated from, not just the verdict, if it is ever audited.",
        figure: {
          src: "/projects/PLN_2.png",
          alt: "Contract detail: approval state per signatory, with the tolerance check written out beneath",
          caption:
            "The verdict is stated as a state per signatory — approved, pending — and the tolerance check that produced it is written out underneath, so the person signing sees what the system compared.",
        },
      },
      {
        id: "c",
        title: "An arrival estimate that keeps correcting itself",
        problem:
          "Teams needed to know when a vessel would actually arrive, not when it would arrive in theory.",
        designed:
          "Tracking begins once the loading document is approved. The vessel is identified by its registration, its position updates on a schedule using AIS data, and the estimate adjusts with it. Late arrivals are handled according to the terms already written in the contract.",
        rejected: [
          "A single static estimate calculated from distance at the start; it never updates when the vessel is held up by weather or routing, so the number quietly becomes a lie.",
        ],
        tradeoff:
          "Scheduled position updates and an external AIS dependency cost far more to build than one estimate field. Worth it, because accuracy is the entire point of the feature; an estimate nobody trusts is the same as having none.",
        figure: {
          src: "/projects/PLN_3.png",
          alt: "Vessel register listing each voyage with its departure and arrival estimate",
          caption:
            "Every voyage carries its own departure and arrival estimate rather than one figure fixed at the start.",
        },
      },
    ],
  },

  feedback: {
    eyebrow: "Feedback",
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
      "Treat the design system as a first-day decision, not a cleanup task. Styling page by page is what created the inconsistency the reviews caught.",
      "Set a realistic timeline and hold the lead role more firmly.",
      "Learn a professional collaborative coding workflow (branching and review) before the build starts, not during it.",
    ],
    learned:
      "Because I implemented my own designs, I felt the cost directly: screens styled one at a time are cheap in Figma and expensive in code. Once the button styles, the primary-color rule, and the action hierarchy became rules rather than drawings, consistency arrived on its own and the page-by-page revisions stopped.",
  },

  handoff: {
    eyebrow: "On handoff",
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
