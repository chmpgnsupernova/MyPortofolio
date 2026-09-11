// Ringkasan proyek dirender sebagai tabel spesifikasi: kunci mono,
// nilai teks biasa. Ini pembuka setiap case study — pembaca tahu
// konteksnya sebelum masuk ke cerita.

export function SpecTable({ rows }) {
  return (
    <dl className="divide-y divide-hairline rounded-card border border-hairline bg-surface shadow-raise">
      {rows.map((row) => (
        <div
          key={row.key}
          className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-6"
        >
          <dt className="font-label text-label uppercase text-accent sm:w-28 sm:shrink-0 sm:pt-0.5">
            {row.key}
          </dt>
          <dd className="text-caption text-text">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
