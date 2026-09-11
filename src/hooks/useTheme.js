import { useCallback, useState } from "react";

// Tema punya tiga keadaan di CSS: dark (dasar), light lewat
// prefers-color-scheme, dan pilihan eksplisit lewat [data-theme].
// Hook ini hanya mengurus keadaan ketiga — selama pengguna belum
// memilih, preferensi sistem yang menang.

const STORAGE_KEY = "theme";

// localStorage bisa melempar (mode privat, site data diblokir).
// Tema tidak boleh pernah menjadi alasan halaman gagal render.
function readStored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function systemTheme() {
  return window.matchMedia?.("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function useTheme() {
  const [theme, setThemeState] = useState(() => readStored() ?? systemTheme());

  const setTheme = useCallback((next) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Pilihan tetap berlaku untuk sesi ini walau tidak tersimpan.
    }
    setThemeState(next);
  }, []);

  const toggle = useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [theme, setTheme],
  );

  return { theme, toggle };
}
