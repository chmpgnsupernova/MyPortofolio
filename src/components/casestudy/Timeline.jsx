// Timeline proyek sebagai deretan milestone.
//
// Dibaca sebagai rel: satu garis hairline melintang, dengan penanda
// aksen di awal tiap fase. Di desktop ia mendatar — memberi jeda
// ritme di tengah halaman yang panjang, dan memakan tinggi jauh
// lebih sedikit daripada daftar bertumpuk. Di mobile ia melipat
// jadi tumpukan bergaris, karena rel mendatar dengan empat kolom
// tidak pernah terbaca di layar sempit.
//
// Jumlah kolom mengikuti jumlah milestone lewat custom property,
// supaya satu komponen melayani case study dengan fase berapa pun.
//
// Tidak ada animasi di sini. Rel-nya adalah border, penandanya
// adalah dot — nol biaya saat scroll.

export function Timeline({ items }) {
  if (!items?.length) return null;

  return (
    <ol
      style={{ "--cols": items.length }}
      className="grid grid-cols-1 gap-y-8 md:gap-y-0 md:[grid-template-columns:repeat(var(--cols),minmax(0,1fr))]"
    >
      {items.map((item, i) => (
        <li
          key={item.title}
          // pr menggantikan gap agar border-t tiap kolom bersambung
          // menjadi satu rel utuh, bukan potongan yang terputus.
          className="relative border-t border-hairline pt-5 md:pr-6"
        >
          <span
            aria-hidden="true"
            className={`absolute -top-[3.5px] left-0 h-1.5 w-1.5 rounded-full ${
              item.current ? "bg-accent" : "bg-hairline-strong"
            }`}
          />

          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="font-label text-label uppercase text-accent">
              {item.period}
            </span>
            <span className="font-label text-label uppercase text-text-mute">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          <h4 className="mt-2 text-caption font-medium text-text-hi">
            {item.title}
          </h4>

          {item.body ? (
            <p className="mt-2 text-caption text-text-mute">{item.body}</p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
