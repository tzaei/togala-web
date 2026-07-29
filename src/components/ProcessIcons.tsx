type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Assess — clipboard + magnifier */
export function AssessIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...base}>
      <path d="M18 8h12v5H18z" />
      <path d="M30 10.5h6a2 2 0 0 1 2 2V38a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V12.5a2 2 0 0 1 2-2h6" />
      <circle cx="22" cy="26" r="6" />
      <path d="m26.5 30.5 5 5" />
    </svg>
  );
}

/** Plan — blueprint sheet + compass */
export function PlanIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...base}>
      <path d="M8 12h32v26H8z" />
      <path d="M8 20h32M18 20v18M28 12v8" />
      <path d="M24 26v8M24 26l-4 8M24 26l4 8" />
    </svg>
  );
}

/** Implement — hard hat + gear */
export function ImplementIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...base}>
      <path d="M11 30v-2a13 13 0 0 1 26 0v2" />
      <path d="M7.5 30h33a2.5 2.5 0 0 1 0 5h-33a2.5 2.5 0 0 1 0-5Z" />
      <path d="M19 30V19.5a12 12 0 0 1 1.6-5.9M29 30V19.5a12 12 0 0 0-1.6-5.9" />
      <path d="M20.6 13.6a5 5 0 0 1 6.8 0" />
    </svg>
  );
}

/** Review — document with a check */
export function ReviewIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...base}>
      <path d="M12 8h16l8 8v24a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Z" />
      <path d="M28 8v9h8" />
      <path d="m17 29 4.5 4.5L31 24" />
    </svg>
  );
}

export const processIcons = [AssessIcon, PlanIcon, ImplementIcon, ReviewIcon];
