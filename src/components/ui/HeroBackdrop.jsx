// Latar kanvas untuk hero.
//
// Absolute di dalam hero, bukan fixed di halaman — jadi ia ikut
// tergulir dan menghilang begitu pembaca turun. Pemudarannya diatur
// lewat mask di `.hero-backdrop`, bukan lewat scroll listener: tidak
// ada JavaScript yang berjalan saat scroll.
//
// Lapisannya, dari bawah ke atas:
//   .hero-backdrop   grid dasar — tenang, aman di belakang teks
//   .hero-glow       semburat warna tipis di titik sorot
//   .hero-highlight  grid yang sama tapi lebih tegas, di-mask radial
//   .ruler-y         penggaris tepi
//
// Anak-anak mewarisi mask vertikal dari induknya, jadi seluruh
// tumpukan memudar bersama sebagai satu kesatuan.
//
// MENGGANTI DENGAN SVG SENDIRI
// Deklarasikan `--hero-art` di tiap blok tema pada theme.css:
//     --hero-art: url("/hero-dark.svg");
// Itu menggantikan grid dasar. Kalau SVG-mu sudah membawa sorotan
// dan penggarisnya sendiri, hapus juga tiga div di bawah ini.

export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="hero-backdrop pointer-events-none absolute inset-0"
    >
      <div className="hero-glow absolute inset-0" />
      <div className="hero-highlight absolute inset-0" />
      <div className="ruler-y absolute inset-y-0 left-0 hidden w-[14px] border-r border-hairline lg:block" />
    </div>
  );
}
