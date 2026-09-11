// Gambar case study. Menerima slot yang belum terisi.
//
// Selama `src` masih null, komponen ini menggambar placeholder yang
// terlihat disengaja — bukan gambar rusak — dan menampilkan catatan
// `todo` saat mode development, supaya jelas gambar apa yang kurang.
//
// Semua gambar wajib punya width/height agar CLS tetap nol.

function Placeholder({ alt, todo }) {
  return (
    <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-card border border-dashed border-hairline bg-surface px-6 text-center">
      <span className="font-label text-label uppercase text-text-mute">
        Image pending
      </span>
      <span className="max-w-sm text-caption text-text-mute">{alt}</span>
      {import.meta.env.DEV && todo ? (
        <span className="mt-2 max-w-md border-t border-hairline pt-3 font-label text-label text-accent/70">
          {todo}
        </span>
      ) : null}
    </div>
  );
}

export function Figure({ figure, className = "" }) {
  if (!figure) return null;
  const { src, alt, caption, todo } = figure;

  return (
    <figure className={className}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full rounded-card border border-hairline bg-surface shadow-raise"
        />
      ) : (
        <Placeholder alt={alt} todo={todo} />
      )}

      {caption ? (
        <figcaption className="mt-3 text-caption text-text-mute">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
