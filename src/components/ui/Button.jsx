// Aturan tombol, diturunkan dari review mingguan di proyek PLN —
// dan diterapkan pada situs ini sendiri:
//   1. satu `primary` per section, tidak lebih
//   2. primary dan ghost tidak pernah berbobot visual sama
//   3. warna aksen hanya untuk aksi utama, bukan dekorasi

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn px-5 py-2.5 " +
  "text-caption font-medium transition-colors duration-150 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover",
  ghost:
    "border border-hairline text-text-hi hover:border-hairline-strong hover:bg-surface",
};

export function Button({
  as,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const Tag = as ?? (props.href ? "a" : "button");
  const isExternal = props.href?.startsWith("http");

  return (
    <Tag
      className={`${base} ${variants[variant]} ${className}`}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : null)}
      {...props}
    >
      {children}
    </Tag>
  );
}
