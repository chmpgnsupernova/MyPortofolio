import { useReveal } from "../../hooks/useReveal";

// Pembungkus motion. Kelas `.reveal` di base.css sudah menonaktifkan
// dirinya sendiri saat prefers-reduced-motion aktif.

export function Reveal({ className = "", children, ...props }) {
  const { ref, visible } = useReveal();

  return (
    <div ref={ref} data-visible={visible} className={`reveal ${className}`} {...props}>
      {children}
    </div>
  );
}
