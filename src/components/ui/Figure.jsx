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

// Deretan screen ponsel. Di mobile menjadi strip geser (scroll-snap)
// supaya tiap screen tetap terbaca di lebar penuh; di desktop tampil
// berdampingan. Gambar sudah membawa bingkai perangkat dengan sudut
// transparan, jadi tidak diberi border atau latar seperti gambar biasa.
function Gallery({ images, caption }) {
  return (
    <figure>
      <div
        tabIndex={0}
        role="group"
        aria-label={caption ?? "Screens"}
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 focus-visible:outline-2 focus-visible:outline-accent md:mx-0 md:grid md:snap-none md:overflow-visible md:px-0 md:[grid-template-columns:repeat(var(--cols),minmax(0,1fr))]"
        // Minimal tiga kolom: dua screen tidak boleh membengkak jadi
        // setengah lebar halaman masing-masing.
        style={{ "--cols": Math.max(3, images.length) }}
      >
        {images.map((image) => (
          <div key={image.src} className="w-[68%] shrink-0 snap-center md:w-auto">
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              className="h-auto w-full"
            />
            {image.label ? (
              <p className="mt-2 text-center text-caption text-text-mute">
                {image.label}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      {caption ? (
        <figcaption className="mt-3 text-caption text-text-mute">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function Figure({ figure, className = "" }) {
  if (!figure) return null;
  const { src, alt, caption, todo, images, wide, width, height } = figure;

  if (images?.length) {
    return (
      <div className={className}>
        <Gallery images={images} caption={caption} />
      </div>
    );
  }

  return (
    <figure className={className}>
      {src && wide ? (
        // Diagram lebar (mis. BPMN): di layar sempit digeser, bukan
        // dikecilkan sampai teksnya tidak terbaca.
        <div
          tabIndex={0}
          role="group"
          aria-label={alt}
          className="overflow-x-auto rounded-card border border-hairline bg-white shadow-raise focus-visible:outline-2 focus-visible:outline-accent"
        >
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className="h-auto w-full min-w-[900px] md:min-w-0"
          />
        </div>
      ) : src ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
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
