/**
 * The nudging arrow used on every link and button.
 * Place inside an element with `group` — it slides on group hover.
 */
export default function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 transition-transform duration-(--duration-glide) ease-(--ease-out-soft) group-hover:translate-x-1 ${className}`}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
