import { useRedlines } from "../../hooks/redlineContext";

// Kontrol untuk lapisan anotasi.
//
// Sebelumnya ini bersembunyi di footer — dan itu keliru: ini elemen
// paling khas di situs ini, tapi hampir tidak ada yang menemukannya.
// Sekarang duduk di nav, sejajar dengan kontrol tema.
//
// Hanya tampil dari lg ke atas, karena anotasinya sendiri butuh
// ruang di samping elemen — kontrol yang tidak melakukan apa pun
// lebih buruk daripada kontrol yang tidak ada.

export function RedlineToggle() {
  const { on, toggle } = useRedlines();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      className={`hidden h-8 items-center gap-2 rounded-btn border px-3 font-label text-label uppercase transition-colors duration-150 lg:inline-flex ${
        on
          ? "border-accent/50 text-accent"
          : "border-hairline text-text-mute hover:border-hairline-strong hover:text-text-hi"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${on ? "bg-accent" : "bg-text-mute"}`}
      />
      Redlines
    </button>
  );
}
