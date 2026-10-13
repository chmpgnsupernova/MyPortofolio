import { useEffect, useState } from "react";

// Section mana yang sedang dibaca. Dipakai nav kolom kiri untuk
// menandai item aktif.
//
// IntersectionObserver, bukan scroll listener: tidak ada kerja di
// main thread selama scroll. Pita deteksinya sempit di sekitar
// sepertiga atas viewport — section yang "sedang dibaca" adalah yang
// melewati garis itu, bukan yang kebetulan paling banyak terlihat.

export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join(",");

  useEffect(() => {
    const sections = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
