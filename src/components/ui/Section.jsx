import { Eyebrow } from "./Eyebrow";

// Pembungkus section: container, ritme vertikal, dan pembuka eyebrow.
//
// Jarak diatur oleh hubungan, bukan selera. Eyebrow adalah label dari
// section-nya, jadi ia duduk dekat (24px) dengan yang dilabeli.
// Jarak antar section tetap lebar (2 × 80px) karena itu yang memisah
// satu unit dari unit berikutnya. Merapatkan keduanya sekaligus
// justru menghapus strukturnya.

export function Section({ id, eyebrow, className = "", children }) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-page px-6 py-14 md:py-20 ${className}`}
    >
      {eyebrow ? <Eyebrow className="mb-6">{eyebrow}</Eyebrow> : null}
      {children}
    </section>
  );
}
