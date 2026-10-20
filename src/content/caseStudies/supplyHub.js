// CASE STUDY PENDUKUNG — Proto-A-Thon 2026 (BINUS University),
// case dari ID FOOD.
//
// Framing jujur dikunci:
//   - tidak menang. » VERIFIKASI: Brian ingat "sekitar 30 besar dari
//     ~100 tim" — jangan dipasang sebelum dicek di pengumuman.
//   - riset hanya data sekunder, tanpa wawancara pengguna
//   - durasi » VERIFIKASI: "sekitar 2 bulan", dari ingatan
//   - onboarding didesain anggota tim; sisanya modul Brian
//   - foto produk: generate AI atau hasil pencarian web
//
// Angka masalah diambil dari brief ID FOOD, bukan dari deck tim.
// Deck punya angka yang tidak konsisten (TAM USD 140M vs industri
// USD 101 miliar, klaim "memangkas waste 30–40%" tanpa bukti),
// jadi dampak hanya ditulis sebagai target.
//
// Gambar: page "Web export" di file Figma I-Love-Binus, WebP 600px.
// BPMN: halaman 11–12 deck pitch, digabung jadi satu.

const phone = (name, alt, label) => ({
  src: `/projects/supplyhub/${name}.webp`,
  alt,
  label,
  width: 600,
  height: 1267,
});

export const supplyHub = {
  slug: "supplyhub",
  featured: false,

  title: "SupplyHub",
  subtitle:
    "A pre-order marketplace that connects farmers directly with bulk food buyers",

  back: { href: "/#design", label: "Design case studies" },

  spec: [
    { key: "Role", value: "Team lead · UI/UX Designer" },
    { key: "Context", value: "Proto-A-Thon 2026 · BINUS University · case brief by ID FOOD" },
    { key: "Timeline", value: "~2 months" },
    { key: "Team", value: "3 people" },
    { key: "Result", value: "Participant · did not place" },
    { key: "Research", value: "Secondary data only · no user interviews" },
    { key: "AI use", value: "Layout exploration and part of the product imagery; other photos are web placeholders" },
  ],

  links: [
    {
      label: "Try the prototype",
      href: "https://supplyhub-alpha.vercel.app/index.html",
      variant: "primary",
    },
  ],

  problem: {
    eyebrow: "Problem",
    intro:
      "ID FOOD's brief asked how a digital product could make the food supply chain more transparent, efficient, and inclusive, from farmer to consumer. We narrowed it to one link in that chain: smallholder farmers selling to bulk buyers such as hotels, restaurants, and food manufacturers.",
    points: [
      {
        title: "Too many hands in between",
        body: "Produce passes through 7–10 intermediaries before it reaches the buyer, and farmers receive only 15–20% of the retail price.",
      },
      {
        title: "Food is lost before it is sold",
        body: "30–40% of fresh produce is wasted along the way, largely because supply and demand are not coordinated and fewer than 10% of products reach proper cold storage.",
      },
      {
        title: "Neither side can plan",
        body: "Farmers harvest without a guaranteed buyer, and buyers face volatile prices they cannot lock in ahead of time.",
      },
    ],
  },

  role: {
    eyebrow: "My role",
    intro:
      "I led a team of three and owned most of the product design. The flow below is the BPMN I mapped before any screen was drawn: it fixed who does what between supplier, buyer, distributor, and the system.",
    points: [
      {
        title: "System flow",
        body: "Mapped the end-to-end BPMN across four lanes, from listing a harvest to the final payment.",
      },
      {
        title: "Screens",
        body: "Home and product pages, chat and contract making, commodity prices, articles, forum, and transaction history.",
      },
      {
        title: "Not mine",
        body: "Onboarding and sign-in were designed by teammates.",
      },
    ],
    figure: {
      src: "/projects/supplyhub/bpmn.webp",
      alt: "BPMN diagram with four lanes: raw material supplier, big customer, distributor, and app system, from listing crops to total payment",
      caption:
        "Pre-order flow: the buyer pays a down payment at contract, the supplier is paid in full only after the buyer checks the delivered crops.",
      wide: true,
      width: 2000,
      height: 556,
    },
  },

  decisions: {
    eyebrow: "Key decisions",
    items: [
      {
        id: "a",
        title: "The contract starts in the chat",
        problem:
          "Bulk produce is not bought with a cart. Price, quantity, and harvest date get negotiated first, and that conversation is where the deal actually happens.",
        designed:
          "The chat with a farmer pins the product and its estimated harvest date. From the chat, a sheet opens a contract draft pre-filled with the seller and commodity. The form covers quantity, unit price, delivery tier, schedule, and an optional quality check, then shows the total contract value before it is sent.",
        rejected: [
          "A consumer-style cart and checkout. It assumes a fixed price and stock that already exists.",
          "Negotiating in chat and closing elsewhere. Every hand-off is a chance to go back to the middleman.",
        ],
        tradeoff:
          "Making a contract takes many more steps than tapping Buy. We accepted that because the contract is what protects both sides before the harvest exists.",
        figure: {
          caption: "Chat with a farmer, opening a contract draft, and the contract form.",
          images: [
            phone("contract-1", "Chat with farmer Pak Budi about a pre-order of organic carrots", "Chat"),
            phone("contract-2", "Bottom sheet in the chat offering to start a contract draft", "Start a contract"),
            phone("contract-3", "Contract form with seller, commodity, quantity, unit price, and delivery options", "Contract form"),
          ],
        },
      },
      {
        id: "b",
        title: "Every price shown next to a benchmark",
        problem:
          "A farmer's price alone says nothing about whether it is fair. Without a reference, both sides fall back on whatever the middleman says.",
        designed:
          "Commodity prices are listed with their daily change. Each commodity opens to an annual trend and a comparison against state-owned and national retail prices, with a short market note on what to expect next.",
        rejected: [
          "Showing only the seller's asking price.",
        ],
        tradeoff:
          "The benchmark is only as good as its source. The brief allowed public government data, but the prototype uses illustrative figures and no data pipeline was built.",
        figure: {
          caption: "Commodity price list and the detail view with benchmark comparison. Figures are illustrative.",
          images: [
            phone("price-1", "Commodity price list with market insight and daily price changes", "Commodity prices"),
            phone("price-2", "Premium rice detail with annual trend and benchmark against state and retail prices", "Benchmark"),
          ],
        },
      },
      {
        id: "c",
        title: "Who, where, and what state, before any deal",
        problem:
          "Trading without middlemen means trusting a stranger. Buyers need to see who the farmer is and where the produce comes from before they message.",
        designed:
          "Home groups suppliers by the buyer's location and puts prices and matching products up front. A product page shows the seller, their location on a map, and ratings, with Message as the primary action rather than Buy. Transaction history separates completed, pending, and cancelled orders.",
        rejected: [
          "A Buy Now button on the product page. The product has not been harvested yet.",
        ],
        tradeoff: "",
        figure: {
          caption: "Home, product detail, and transaction history.",
          images: [
            phone("trust-1", "Home screen with nearby suppliers, market insight, and current prices", "Home"),
            phone("trust-2", "Product detail for organic carrots with seller info and Message action", "Product"),
            phone("trust-3", "Recent transactions filtered by completed, pending, and cancelled", "Transactions"),
          ],
        },
      },
    ],
  },

  outcome: {
    eyebrow: "Outcome",
    result:
      "We did not place. The deliverables were a pitch deck with problem analysis, BPMN, business model canvas, and risk matrix, plus a clickable prototype. Our targets, such as cutting the chain to two layers and locking the buyer's price at pre-order, stayed hypotheses.",
    reflections: [
      "Talk to farmers and buyers. The brief asked for UX research and we used secondary data only, so the central assumption that buyers want to negotiate before harvest was never tested.",
      "Check every number before it goes on a slide. A few figures in our deck did not add up, and in a pitch that costs more trust than a missing number.",
      "Design for the farmer, not only the buyer. Our own risk matrix rated farmer digital literacy as the highest risk, yet most screens were built around the buyer.",
    ],
    learned:
      "Mapping the BPMN first made the screens easier to argue for: every screen answered a step in the flow, and the contract-in-chat idea came straight out of seeing where the deal was really made.",
  },
};
