import Reveal from "./Reveal";

/**
 * The repeating heading unit: an engraved lowercase display line with a small
 * all-caps kicker above it. The kicker sits ON TOP so the eye meets the
 * category before the statement — and so the display line is always the
 * largest thing in its block.
 */
export default function SectionHeading({
  kicker,
  eyebrow,
  tone = "dark",
  align = "center",
  id,
  className = "",
}: {
  /** Small all-caps line above the display heading. */
  kicker?: string;
  /** The engraved display line. */
  eyebrow: string;
  tone?: "dark" | "light";
  align?: "center" | "left";
  id?: string;
  className?: string;
}) {
  const centered = align === "center";

  return (
    <Reveal className={`${centered ? "text-center" : "text-left"} ${className}`}>
      {kicker && (
        <p
          className={`mb-2.5 text-[0.68rem] font-bold tracking-[0.24em] text-balance ${
            tone === "dark" ? "text-lime" : "text-forest"
          }`}
        >
          {kicker}
        </p>
      )}
      <h2
        id={id}
        className={`display-eyebrow text-[1.9rem] leading-[1.08] text-balance sm:text-[2.25rem] lg:text-[2.5rem] ${
          tone === "dark" ? "text-clay" : "text-ink"
        }`}
      >
        {eyebrow}
      </h2>
      <span
        aria-hidden
        className={`mt-4 block h-px w-12 ${centered ? "mx-auto" : ""} ${
          tone === "dark" ? "bg-clay/70" : "bg-ink/30"
        }`}
      />
    </Reveal>
  );
}
