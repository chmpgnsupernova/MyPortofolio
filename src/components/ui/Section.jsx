import { Eyebrow } from "./Eyebrow";

// Section di kolom kanan homepage. Lebar diatur oleh kolomnya,
// bukan oleh section — jadi tidak ada container di sini.
//
// Di mobile, judulnya menempel di bawah nav saat digulir (pola
// Brittany Chiang): pembaca selalu tahu sedang di bagian mana tanpa
// harus membuka menu. Di desktop nav kolom kiri sudah memberi tahu
// itu, jadi judulnya kembali statis.

export function Section({ id, eyebrow, className = "", children }) {
  return (
    <section
      id={id}
      aria-label={eyebrow}
      className={`scroll-mt-16 py-12 md:py-16 lg:scroll-mt-24 ${className}`}
    >
      {eyebrow ? (
        <div className="sticky top-16 z-20 -mx-6 mb-6 bg-canvas/90 px-6 py-4 md:-mx-12 md:px-12 lg:static lg:mx-0 lg:bg-transparent lg:px-0 lg:py-0">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      {children}
    </section>
  );
}
