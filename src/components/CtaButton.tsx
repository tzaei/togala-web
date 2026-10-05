import Link from "next/link";
import ArrowIcon from "./ArrowIcon";

/** The primary orange pill CTA, used in the hero, services and closing bands. */
export default function CtaButton({
  href,
  children,
  size = "md",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-clay text-center leading-snug font-bold tracking-[0.12em] text-balance text-white transition-colors duration-(--duration-swift) hover:bg-clay-600 sm:tracking-[0.16em] ${
        size === "lg" ? "px-7 py-3.5 text-[0.8rem] sm:px-9 sm:py-4 sm:text-sm" : "px-7 py-3 text-[0.8rem] sm:px-8 sm:py-3.5 sm:text-sm"
      } ${className}`}
    >
      <span>{children}</span>
      <ArrowIcon />
    </Link>
  );
}
