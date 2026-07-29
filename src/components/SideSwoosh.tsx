import Image from "next/image";

/** Aspect ratio of the swoosh artwork (long edge : short edge). */
const RATIO = 2.49;

/** Content column width the page is built on — see CONTENT in page sections. */
const CONTENT = "1060px";

/**
 * Large vertical swoosh anchored FLUSH to the side of a section.
 *
 * Thickness is derived from the section's own gutter — `(100vw - content) / 2`
 * — so it fills the margin exactly: always flush to the edge, always as large
 * as the layout allows, and never wide enough to run underneath the text. The
 * whole shape stays on-canvas, so neither tapered tail gets sliced.
 *
 * `align` pins it to the top or bottom edge of the section, so it starts flush
 * rather than floating with a gap above it.
 *
 * Hidden below xl, where there is no gutter to fill.
 */
export default function SideSwoosh({
  side,
  align = "top",
  /** Upper bound on thickness so it doesn't get absurd on ultra-wide screens. */
  maxThickness = "24rem",
  className = "",
}: {
  side: "left" | "right";
  align?: "top" | "bottom";
  maxThickness?: string;
  className?: string;
}) {
  /* Viewport units, not `100%`: a percentage inside the height calc below
     would resolve against the parent's HEIGHT and collapse the element. */
  const thickness = `min(calc((100vw - ${CONTENT}) / 2 - 8px), ${maxThickness})`;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 hidden xl:block ${className}`}
      style={
        {
          "--sw": thickness,
          [align]: 0,
          [side]: 0,
          width: "var(--sw)",
          height: `calc(var(--sw) * ${RATIO})`,
        } as React.CSSProperties
      }
    >
      <Image
        src="/img/togala-swoosh.png"
        alt=""
        width={2400}
        height={960}
        className={`absolute top-1/2 left-1/2 h-auto max-w-none -translate-x-1/2 -translate-y-1/2 ${
          side === "left" ? "rotate-90" : "-rotate-90"
        }`}
        style={{ width: `calc(var(--sw) * ${RATIO})` }}
      />
    </div>
  );
}
