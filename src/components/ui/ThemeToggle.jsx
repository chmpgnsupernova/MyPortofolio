import { useTheme } from "../../hooks/useTheme";

// Kontrol tema. Diletakkan di nav karena ini preferensi pengguna,
// bukan easter egg — dan karena ia sekaligus memperlihatkan bahwa
// seluruh palet situs ini berjalan di atas token semantik.

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  "aria-hidden": "true",
};

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-8 w-8 items-center justify-center rounded-btn border border-hairline text-text-mute transition-colors duration-150 hover:border-hairline-strong hover:text-text-hi"
    >
      {isDark ? (
        <svg {...iconProps}>
          {/* bulan */}
          <path d="M13.2 9.6A5.6 5.6 0 0 1 6.4 2.8a5.6 5.6 0 1 0 6.8 6.8Z" />
        </svg>
      ) : (
        <svg {...iconProps}>
          {/* matahari */}
          <circle cx="8" cy="8" r="3.1" />
          <path d="M8 1.4v1.4M8 13.2v1.4M14.6 8h-1.4M2.8 8H1.4M12.66 3.34l-.99.99M4.33 11.67l-.99.99M12.66 12.66l-.99-.99M4.33 4.33l-.99-.99" />
        </svg>
      )}
    </button>
  );
}
