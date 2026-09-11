import { useRedlines } from "../../hooks/redlineContext";

// SIGNATURE ELEMENT.
//
// Callout bergaya spec yang menempel di sisi sebuah elemen —
// nama komponen, radius, padding. Mati secara default.
//
// Aturan pemakaian:
//   - induknya harus `relative`
//   - dekoratif: selalu aria-hidden, tidak pernah jadi satu-satunya
//     pembawa informasi
//   - jaga total di seluruh situs di kisaran 6–8. Lebih dari itu
//     berubah jadi gimmick.

const sides = {
  right: "left-full top-0 ml-3 flex-row",
  left: "right-full top-0 mr-3 flex-row-reverse",
  bottom: "top-full left-0 mt-3 flex-row",
};

export function Annotation({ side = "right", offset, children }) {
  const { on } = useRedlines();
  if (!on) return null;

  return (
    <span
      aria-hidden="true"
      style={offset ? { top: offset } : undefined}
      className={`pointer-events-none absolute hidden items-center gap-2 whitespace-nowrap lg:flex ${sides[side]}`}
    >
      <span className="h-px w-6 bg-accent/60" />
      <span className="font-label text-label uppercase text-accent">
        {children}
      </span>
    </span>
  );
}
