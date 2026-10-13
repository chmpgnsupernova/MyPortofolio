import { Figure } from "../ui/Figure";

// Pola yang berulang di setiap case study, dan alasan halaman ini
// bukan galeri: masalah → yang dibuat → opsi yang ditolak →
// trade-off. Bagian "ditolak" yang membuat sebuah keputusan
// terbaca sebagai penilaian, bukan sekadar hasil akhir.
//
// `built` untuk keputusan engineering (PLN), `designed` untuk
// keputusan desain (ReHub). `code` opsional — hanya tampil kalau
// diisi, jadi slot kosong tidak pernah bocor ke halaman.

export function DecisionBlock({ decision, index }) {
  const {
    title,
    problem,
    built,
    designed,
    rejected,
    tradeoff,
    code,
    figure,
    draft,
  } = decision;

  return (
    <article className="border-t border-hairline pt-8">
      <div className="flex items-baseline gap-4">
        <span className="font-label text-label uppercase text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-lead text-text-hi">{title}</h3>
      </div>

      {/* Penanda kerja: hanya tampil saat development. */}
      {import.meta.env.DEV && draft ? (
        <p className="mt-3 rounded-input border border-dashed border-accent/40 px-3 py-2 font-label text-label text-accent/80">
          Draft — belum lengkap, lihat catatan di file konten.
        </p>
      ) : null}

      <div className="mt-5 flex flex-col gap-5 md:pl-12">
        {problem ? (
          <p className="max-w-2xl text-body text-text">{problem}</p>
        ) : null}

        {built || designed ? (
          <div>
            <span className="font-label text-label uppercase text-text-mute">
              {built ? "What I built" : "What I designed"}
            </span>
            <p className="mt-2 max-w-2xl text-body text-text">
              {built ?? designed}
            </p>
          </div>
        ) : null}

        {code?.snippet ? (
          <figure className="max-w-2xl">
            <pre className="overflow-x-auto rounded-card border border-hairline bg-surface p-4 font-label text-caption text-text">
              <code>{code.snippet}</code>
            </pre>
            {code.caption ? (
              <figcaption className="mt-2 text-caption text-text-mute">
                {code.caption}
              </figcaption>
            ) : null}
          </figure>
        ) : null}

        {rejected?.length ? (
          <div>
            <span className="font-label text-label uppercase text-text-mute">
              Rejected
            </span>
            <ul className="mt-2 flex max-w-2xl flex-col gap-2">
              {rejected.map((item, i) => (
                <li
                  key={i}
                  className="border-l border-hairline pl-4 text-caption text-text-mute"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {tradeoff ? (
          <div>
            <span className="font-label text-label uppercase text-text-mute">
              Trade-off
            </span>
            <p className="mt-2 max-w-2xl text-body text-text">{tradeoff}</p>
          </div>
        ) : null}

        {figure ? <Figure figure={figure} className="mt-2 max-w-3xl" /> : null}
      </div>
    </article>
  );
}
