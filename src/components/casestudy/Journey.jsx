import { Figure } from "../ui/Figure";

// Alur utama dibaca sebagai satu hari: rel vertikal dengan jam di
// tiap stop. Dipakai Holinery (aplikasi itinerary) — bentuknya sendiri
// meniru kartu jadwal di aplikasinya, jadi tidak seragam dengan case
// study lain yang memakai DecisionBlock bergambar.
//
// Di mobile rel menempel di kiri; jam duduk di atas judul.

export function Journey({ stops }) {
  if (!stops?.length) return null;

  return (
    <ol className="relative flex flex-col gap-14 border-l border-accent/30 pl-6 md:pl-10">
      {stops.map((stop) => (
        <li key={stop.time + stop.title} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-canvas md:-left-[47px]"
          />

          <div className="flex flex-wrap items-baseline gap-x-3">
            <span className="font-label text-label uppercase text-accent">
              {stop.time}
            </span>
            <span className="font-label text-label uppercase text-text-mute">
              {stop.label}
            </span>
          </div>

          <h3 className="mt-2 text-lead text-text-hi">{stop.title}</h3>
          <p className="mt-2 max-w-2xl text-body text-text">{stop.body}</p>

          {stop.figure ? (
            <Figure figure={stop.figure} className="mt-6 max-w-3xl" />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
