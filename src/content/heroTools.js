// Tools yang mengelilingi potret di hero.
//
// POSISI — persen dari kotak pembungkus, bukan piksel, jadi seluruh
// gugusnya menskala utuh di lebar berapa pun. Foto menempati 18%–82%
// kotak; tiap simpul jatuh DI LUAR rentang itu — sebagian bahkan di
// luar 0–100 (SVG overflow-visible, simpul absolute) supaya ada jarak
// lega antara tepi foto dan ikonnya. Garis penghubungnya menyesuaikan
// sendiri — ia selalu ditarik dari pusat ke titik ini.
//
// UKURAN — 48–60px, bervariasi tapi DITETAPKAN, bukan diacak saat
// render. Ukuran acak per muat akan menggeser tata letak setiap kali
// halaman dibuka, dan membuat desainnya mustahil direproduksi saat
// di-screenshot atau direview. Variasinya tetap terbaca organik;
// yang hilang cuma ketidakpastiannya. Figma paling besar karena ia
// tool utama — variasi ini membawa hierarki, bukan sekadar acak.
//
// Tanpa penomoran: tiap simpul cukup namanya. Gugus ini punya
// labelnya sendiri ("TOOLS") yang muncul saat potret di-hover.

export const heroTools = [
  { id: "figma", name: "Figma", x: 16, y: -8, size: 76 },
  { id: "claude", name: "Claude", x: 84, y: -8, size: 66 },
  { id: "gemini", name: "Gemini", x: 97, y: 52, size: 60 },
  { id: "vscode", name: "VS Code", x: 62, y: 98, size: 68 },
  { id: "github", name: "GitHub", x: 0, y: 52, size: 64 },
];
