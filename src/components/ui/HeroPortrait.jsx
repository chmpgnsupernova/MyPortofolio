import { heroTools } from "../../content/heroTools";
import { ToolMark } from "./ToolMark";

// Potret sebagai simpul pusat, tools sebagai simpul yang terhubung.
//
// Seluruh interaksinya CSS: `group-hover` menyalakan tools, menarik
// garisnya, dan memiringkan foto. Tidak ada state React untuk hover
// dan tidak ada listener — jadi interaksinya gratis sampai kursor
// benar-benar masuk.
//
// Perilaku sentuh: di perangkat tanpa hover, semuanya tampil sejak
// awal (lihat @media (hover: hover) di base.css). Informasi tidak
// boleh terkunci di balik hover — di HP hover tidak pernah terjadi.
//
// Label tiap simpul hanya nama tool (tanpa nomor). Nama juga tersemat
// sebagai aria-label pada ubinnya, jadi pembaca layar tetap mendapatnya
// walau labelnya baru terlihat saat hover.

const PHOTO_INSET = 18; // persen — sisa ruangnya untuk simpul tools

export function HeroPortrait() {
  return (
    <div className="portrait group relative aspect-square w-full max-w-95 lg:max-w-110">
      {/* Garis penghubung. Ditarik dari pusat, lalu tertutup foto —
          jadi yang terlihat hanya ruas di luar bingkai. Solid, dan
          hanya memudar masuk saat hover (lihat .portrait-line). */}
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        {heroTools.map((tool, i) => (
          <line
            key={tool.id}
            x1="50"
            y1="50"
            x2={tool.x}
            y2={tool.y}
            style={{ transitionDelay: `${60 + i * 45}ms` }}
            className="portrait-line"
            stroke="var(--ui-accent)"
            strokeWidth="0.35"
          />
        ))}
      </svg>

      <div
        className="portrait-photo absolute overflow-hidden rounded-card border border-hairline shadow-raise"
        style={{ inset: `${PHOTO_INSET}%` }}
      >
        <img
          src="/Profile_Picture.jpg"
          alt="Brian Mariarvin"
          width="868"
          height="868"
          className="h-full w-full object-cover"
        />
      </div>

      {heroTools.map((tool, i) => {
        // Arah "keluar" tiap simpul: vektor satuan dari pusat menuju
        // titiknya. Keadaan tersembunyi menariknya kembali ke arah
        // foto sejauh PULL, sehingga saat muncul ia terlihat meletus
        // keluar dari potret, bukan sekadar membesar di tempat.
        const dx = tool.x - 50;
        const dy = tool.y - 50;
        const len = Math.hypot(dx, dy) || 1;
        const PULL = 30; // px

        return (
        <div
          key={tool.id}
          style={{
            left: `${tool.x}%`,
            top: `${tool.y}%`,
            transitionDelay: `${60 + i * 45}ms`,
            "--ox": `${(-dx / len) * PULL}px`,
            "--oy": `${(-dy / len) * PULL}px`,
          }}
          className="portrait-node absolute flex flex-col items-center gap-1"
        >
          {/* Lambangnya berwarna penuh dengan latar kotaknya sendiri,
              jadi ia mengisi ubin — bukan ikon di atas permukaan.
              Yang tersisa dari sistem: radius dan hairline. */}
          <span
            role="img"
            aria-label={tool.name}
            style={{ width: tool.size, height: tool.size }}
            className="block overflow-hidden rounded-btn border border-accent shadow-raise transition-[scale] duration-150 hover:scale-110"
          >
            <ToolMark id={tool.id} className="h-full w-full" />
          </span>

          <span className="whitespace-nowrap font-label text-label uppercase text-text-mute">
            {tool.name}
          </span>
        </div>
        );
      })}
    </div>
  );
}
