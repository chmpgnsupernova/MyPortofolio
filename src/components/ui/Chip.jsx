// Tag statis. Bukan tombol — jangan diberi hover state yang
// menyiratkan bisa diklik.
//
// Sans, bukan mono uppercase: isinya nama teknologi yang dibaca,
// bukan label sistem. Mono uppercase disimpan untuk eyebrow saja.

export function Chip({ children, muted = false }) {
  return (
    <span
      className={`inline-block rounded-tag px-2.5 py-1 text-label font-medium tracking-normal ${
        muted
          ? "border border-hairline text-text-mute"
          : "bg-accent/10 text-accent"
      }`}
    >
      {children}
    </span>
  );
}
