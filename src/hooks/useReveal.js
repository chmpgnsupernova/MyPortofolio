import { useEffect, useRef, useState } from "react";

// Satu-satunya motion di situs ini: opacity + 8px saat elemen masuk
// viewport. Sekali jalan, lalu observer dilepas — tidak ada listener
// yang tertinggal, tidak ada kerja saat scroll.

const supportsObserver = typeof IntersectionObserver !== "undefined";

export function useReveal({ threshold = 0.12, rootMargin = "0px 0px -40px 0px" } = {}) {
  const ref = useRef(null);
  // Tanpa IntersectionObserver, konten tampil langsung —
  // animasi tidak pernah boleh jadi syarat konten terbaca.
  const [visible, setVisible] = useState(!supportsObserver);

  useEffect(() => {
    const node = ref.current;
    if (!node || !supportsObserver) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
}
