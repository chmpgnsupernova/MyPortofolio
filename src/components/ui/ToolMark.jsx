// Lambang tool.
//
// Berkasnya berwarna penuh dengan latar kotaknya sendiri, jadi ia
// TIDAK diwarnai ulang oleh tema — hanya bingkainya yang ikut.
//
// Dimuat sebagai <img> WebP, bukan di-inline: berkasnya tetap terpisah
// dan bisa di-cache browser, dan tidak menggelembungkan bundel JS.
// Kelima berkas ~32 KB total. Sumber asli (SVG) disimpan di
// design-assets/logo-tools-original/, di luar public.

export function ToolMark({ id, className = "" }) {
  return (
    <img
      src={`/Logo_tools/${id}.webp`}
      alt=""
      aria-hidden="true"
      width="48"
      height="48"
      className={className}
      draggable="false"
    />
  );
}
