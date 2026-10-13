// Penanda pembuka setiap section: label mono kecil, huruf besar,
// diikuti garis hairline yang memudar. Ini pengganti penomoran
// 01 / 02 / 03 — section di halaman ini bukan urutan wajib-baca,
// jadi angka hanya akan jadi dekorasi.
//
// Dirender sebagai heading (default h2) supaya struktur dokumen
// utuh: pembaca layar bisa melompat antar section, dan h1 → h3
// tidak pernah meloncat.

export function Eyebrow({ as, children, className = "" }) {
  const Tag = as ?? "h2";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Tag className="whitespace-nowrap font-label text-label font-normal uppercase text-accent">
        {children}
      </Tag>
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent"
      />
    </div>
  );
}
