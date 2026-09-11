// Penanda pembuka setiap section: label mono kecil, huruf besar,
// diikuti garis hairline yang memudar. Ini pengganti penomoran
// 01 / 02 / 03 — section di halaman ini bukan urutan wajib-baca,
// jadi angka hanya akan jadi dekorasi.

export function Eyebrow({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="font-label text-label uppercase text-accent whitespace-nowrap">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent"
      />
    </div>
  );
}
