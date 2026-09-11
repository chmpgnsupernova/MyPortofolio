// Tag statis. Bukan tombol — jangan diberi hover state yang
// menyiratkan bisa diklik.

export function Chip({ children, muted = false }) {
  return (
    <span
      className={`rounded-tag border border-hairline px-2.5 py-1 text-label font-label uppercase ${
        muted ? "text-text-mute" : "text-text"
      }`}
    >
      {children}
    </span>
  );
}
