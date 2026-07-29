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
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-clay font-bold tracking-[0.16em] text-white transition-colors duration-(--duration-swift) hover:bg-clay-600 ${
        size === "lg" ? "px-9 py-4 text-sm" : "px-8 py-3.5 text-sm"
      } ${className}`}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}
