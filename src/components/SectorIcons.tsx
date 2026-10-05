type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Multifamily — apartment block */
function MultifamilyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...base}>
      <path d="M10 40V10h28v30" />
      <path d="M6 40h36" />
      <path d="M16 16h4M28 16h4M16 23h4M28 23h4M16 30h4M28 30h4" />
      <path d="M21 40v-5h6v5" />
    </svg>
  );
}

/** Hospitality — service bell */
function HospitalityIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...base}>
      <path d="M10 32a14 14 0 0 1 28 0" />
      <path d="M6 32h36v4H6z" />
      <path d="M21 14h6M24 14v4" />
    </svg>
  );
}

/** Healthcare — building with medical cross */
function HealthcareIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...base}>
      <path d="M10 40V16h28v24" />
      <path d="M6 40h36" />
      <path d="M18 16V8h12v8" />
      <path d="M24 21v10M19 26h10" />
      <path d="M21 40v-5h6v5" />
    </svg>
  );
}

/** Retail — storefront with awning */
function RetailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...base}>
      <path d="M8 18l3-8h26l3 8" />
      <path d="M8 18a4 4 0 0 0 8 0 4 4 0 0 0 8 0 4 4 0 0 0 8 0 4 4 0 0 0 8 0" />
      <path d="M11 22v18h26V22" />
      <path d="M17 40v-10h7v10M28 30h5v5h-5z" />
    </svg>
  );
}

/** Commercial — office towers */
function CommercialIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...base}>
      <path d="M8 40V14l14-6v32" />
      <path d="M22 40V18h18v22" />
      <path d="M5 40h38" />
      <path d="M13 18v0M17 18v0M13 24v0M17 24v0M13 30v0M17 30v0" strokeWidth={2.4} />
      <path d="M27 24h8M27 29h8M27 34h8" />
    </svg>
  );
}

/** Community — row of homes */
export function CommunityIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...base}>
      <path d="M4 40h40" />
      <path d="M7 40V24l8-7 8 7v16" />
      <path d="M25 40V24l8-7 8 7v16" />
      <path d="M12.5 40v-7h5v7M30.5 40v-7h5v7" />
    </svg>
  );
}

export const sectorIcons: Record<string, (props: IconProps) => React.JSX.Element> = {
  Multifamily: MultifamilyIcon,
  Hospitality: HospitalityIcon,
  Healthcare: HealthcareIcon,
  Retail: RetailIcon,
  Commercial: CommercialIcon,
};
