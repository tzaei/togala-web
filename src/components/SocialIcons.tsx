type IconProps = { className?: string };

/*
 * All three marks are drawn as SOLID glyphs at a matched optical weight so the
 * row reads as one set. (Mixing Facebook's filled disc with an outlined
 * Instagram camera made them look like they came from different icon packs.)
 */

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.2 9.3h3.56V21H3.2V9.3Zm6.02 0h3.41v1.6h.05a3.74 3.74 0 0 1 3.36-1.85c3.6 0 4.26 2.37 4.26 5.45V21h-3.55v-5.79c0-1.38-.02-3.16-1.92-3.16-1.93 0-2.22 1.5-2.22 3.06V21H9.22V9.3Z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M15.2 21.8v-8.9h3.13l.6-3.94H15.2V6.55c0-1.14.35-1.92 2-1.92h2.03V1.3A28.4 28.4 0 0 0 16.2 1.1c-3.02 0-5.09 1.9-5.09 5.38v3.48H7.9v3.94h3.21v8.9h4.09Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      aria-hidden
      className={className}
    >
      <path d="M8.4 2.2h7.2a6.2 6.2 0 0 1 6.2 6.2v7.2a6.2 6.2 0 0 1-6.2 6.2H8.4a6.2 6.2 0 0 1-6.2-6.2V8.4a6.2 6.2 0 0 1 6.2-6.2Zm3.6 5.4a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Zm0 1.9a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm5.05-3.4a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3Z" />
    </svg>
  );
}

export const socialIcons = {
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
} as const;
