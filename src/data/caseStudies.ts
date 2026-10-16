/**
 * Case studies, from "Capabilities - Case Studies.pdf" (Marketing/02 Sales
 * Collateral). Hidden for now: the pages are noindex, not in the sitemap, and
 * nothing on the site links to them. Each entry renders /case-studies/<slug>.
 */
export type CaseStudy = {
  slug: string;
  name: string;
  location: string;
  sector: string;
  /** Service pages this project best illustrates. */
  services: { title: string; href: string }[];
  /** The one-line project summary, shown under the title and on cards. */
  headline: string;
  overview: string;
  /** Scope items, pulled from the overview. */
  scope: string[];
  process: string[];
  /** Hard numbers stated in the source. Never estimated. */
  facts: { value: string; label: string }[];
  image: string;
  /** Intrinsic size of `image`, so the banner keeps the photo's own shape. */
  imageSize: { width: number; height: number };
  imageAlt: string;
  /** Optional photo story, rendered as titled groups below the process section. */
  gallery?: GalleryGroup[];
};

export type GalleryPhoto = { src: string; alt: string; caption: string; width: number; height: number };
export type GalleryGroup = { title: string; quote?: string; photos: GalleryPhoto[] };

const svc = {
  defect: { title: "Construction Defect Consulting", href: "/construction-defect-consulting" },
  largeLoss: { title: "Large Loss Reconstruction Management", href: "/large-loss-reconstruction-management" },
  roofing: { title: "Commercial Roofing", href: "/commercial-roofing" },
  recovery: { title: "Property Recovery Services", href: "/property-recovery-services" },
  capital: { title: "Capital Improvement Strategy", href: "/capital-improvement-strategy" },
} as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "the-viv-on-west-dallas",
    name: "The Viv on West Dallas",
    location: "Houston, TX",
    sector: "Multifamily",
    services: [svc.defect, svc.largeLoss],
    headline:
      "Exterior envelope removal and replacement across 85% of the community, including the leasing office building.",
    overview:
      "The Viv is a 4-story, 8-building, 483-unit gated apartment community in Houston, Texas affected by prolonged water intrusion due to a construction defect issue involving the exterior stucco system, flashing, and the lack of U-control joints and termination bars, resulting in structural framing damage.",
    scope: [
      "Exterior stucco envelope removal and replacement",
      "Flashing corrections",
      "U-control joints and termination bars",
      "Structural framing repairs",
      "Leasing office building included",
    ],
    process: [
      "This project required the submittal and approval of extensive reconstruction repair designs to the City of Houston Building Department. Each submittal was accompanied by daily inspection for compliance by the engineering firm of record and the building department's inspectors.",
      "Daily progress logs and weekly production summary reports with photo documentation were shared with the investors and the on-site property management staff to ensure stakeholders and residents were aware of the progress, upcoming schedules, and any issue to be resolved.",
    ],
    facts: [
      { value: "483", label: "Units" },
      { value: "8", label: "Buildings" },
      { value: "85%", label: "Envelope replaced" },
    ],
    image: "/img/case-studies/the-viv-on-west-dallas.jpg",
    imageSize: { width: 1800, height: 726 },
    imageAlt: "The Viv on West Dallas pool courtyard surrounded by four-story apartment buildings",
  },
  {
    slug: "veridian-at-bellevue",
    name: "Veridian at Bellevue Apartments",
    location: "Webster, TX",
    sector: "Multifamily",
    services: [svc.largeLoss, svc.recovery],
    headline: "Weather event reconstruction of 337 first-floor apartment units damaged by flood water.",
    overview:
      "The Veridian at Bellevue Apartments is a for-rent apartment complex with 44 buildings requiring the removal of all finishes down to framing, and the removal and replacement of furnaces, water heaters, cabinets, toilets, and bathtubs in 337 first-floor apartment units.",
    scope: [
      "All finishes removed down to framing",
      "Furnaces and water heaters replaced",
      "Cabinets, toilets, and bathtubs replaced",
      "337 first-floor units across 44 buildings",
    ],
    process: [
      "This project required the submittal and approval of extensive reconstruction repair designs by the City of Houston Building Department with daily inspection of compliance with the engineering firm of record and the building department inspectors.",
      "Daily progress logs and weekly production summary reports with photo documentation were communicated with the investors and the on-site property management staff to ensure that the stakeholders and the residents were aware of progress, upcoming schedules, and issues that needed to be overcome and those that were resolved.",
      "This project was completed in 8 months.",
    ],
    facts: [
      { value: "337", label: "Units rebuilt" },
      { value: "44", label: "Buildings" },
      { value: "8 mo", label: "To completion" },
    ],
    image: "/img/case-studies/veridian-at-bellevue.jpg",
    imageSize: { width: 1800, height: 691 },
    imageAlt: "Veridian at Bellevue courtyard with a covered grill pavilion between brick apartment buildings",
  },
  {
    slug: "threesixty-at-south-bay",
    name: "Threesixty at South Bay",
    location: "El Segundo, CA",
    sector: "Multifamily",
    services: [svc.roofing, svc.defect],
    headline:
      "Removal and replacement of the roofing system, and discovery of compromised substrates and framing elements.",
    overview:
      "Threesixty at South Bay is a gated, 65-building, stacked flat and townhome community located in El Segundo, California. The project included commercial low-slope TPO roofing and flashing. It was discovered that the overflow drains were misinstalled, resulting in exterior stucco envelope system damage and structural roof truss and framing damage.",
    scope: [
      "Low-slope TPO roofing replacement",
      "Flashing",
      "Overflow drain corrections",
      "Exterior stucco envelope repairs",
      "Structural roof truss and framing repairs",
    ],
    process: [
      "This project required the submittal and approval of extensive reconstruction repair designs to the City of Hawthorne Building Department with daily inspection of compliance with the engineering firm of record and the building department inspectors.",
      "Daily progress logs and weekly production summary reports with photo documentation were communicated with the on-site property management staff and their owner's rep to ensure that the stakeholders and the residents were aware of the project's progress, upcoming schedules, and issues that needed to be overcome and those that were resolved.",
      "This project lasted 18 months during the height of COVID, with residents working from home. Our attention to communication, safety, and the minimization of disruption to the residents was of the utmost importance.",
    ],
    facts: [
      { value: "65", label: "Buildings" },
      { value: "18 mo", label: "Fully occupied" },
    ],
    image: "/img/case-studies/threesixty-at-south-bay.jpg",
    imageSize: { width: 1800, height: 598 },
    imageAlt: "Gated entrance to Threesixty at South Bay lined with palm trees",
  },
  {
    slug: "wellington-village",
    name: "Wellington Village",
    location: "Wellington, CO",
    sector: "Residential community",
    services: [svc.defect],
    headline: "Large-scale construction defect repair within an occupied residential community.",
    overview:
      "Wellington Village was a large-scale construction defect repair project within an occupied residential community. The scope addressed a combination of civil, structural, drainage, and fire-resistive assembly issues throughout the property.",
    scope: [
      "Regrading and drainage improvements",
      "Replacement of below-grade drain lines",
      "New area inlets and sidewalk chases",
      "Concrete and window well repairs",
      "Roof truss and framing corrections",
      "Foundation crack and sheathing repairs",
      "Firestopping improvements",
    ],
    process: [
      "Because residents remained in place throughout the project, our team developed a carefully coordinated approach focused on safety, communication, and minimizing disruption to daily life.",
      "Dedicated project management and field supervision helped coordinate trades, maintain site documentation, manage permitting, and provide ongoing engineering updates.",
      "Whenever possible, repairs were completed from attic or basement spaces to reduce the impact on occupied areas, with work field-verified against the construction documents before moving into restoration and site completion.",
    ],
    facts: [],
    image: "/img/case-studies/wellington-village.jpg",
    imageSize: { width: 1800, height: 327 },
    imageAlt: "Excavator working on drainage beside townhomes at Wellington Village",
  },
  {
    slug: "sky-ridge-medical-center",
    name: "Sky Ridge Medical Center",
    location: "Lone Tree, CO",
    sector: "Healthcare",
    services: [svc.recovery],
    headline: "Flooring repairs after a water-loss event inside an active, operating hospital.",
    overview:
      "Sky Ridge Medical Center required flooring repairs following a water-loss event within an active healthcare environment. Because the work took place inside an operating hospital, the scope also required extensive infection-control containment and air-quality management.",
    scope: [
      "Damaged flooring removed and replaced in the kitchen office area",
      "New vinyl tile and matching cove base",
      "New sheet vinyl with a six-inch integral curb in the men's restroom",
      "ICRA-compliant infection-control containment",
      "Air-quality management",
    ],
    process: [
      "Before construction began, our team coordinated multiple ICRA-compliant containment zones using hard-panel wall systems, controlled-access doors, HEPA filtration, and negative-air equipment to isolate the work areas and prevent dust or contaminants from affecting surrounding hospital operations.",
      "Once containment was in place, we removed the existing flooring, completed the necessary substrate preparation, installed the new vinyl flooring and cove base, and maintained dedicated project supervision throughout the work.",
      "The project concluded with containment removal and a detailed final cleaning so the renovated spaces could be returned to hospital staff safely and efficiently.",
    ],
    facts: [],
    image: "/img/case-studies/sky-ridge-medical-center.jpg",
    imageSize: { width: 1800, height: 865 },
    imageAlt: "Sky Ridge Medical Center main entrance at dusk",
  },
  {
    slug: "amberwood-post-acute",
    name: "Amberwood Post Acute",
    location: "Denver, CO",
    sector: "Senior living",
    services: [svc.capital],
    headline:
      "Interior renovation of nursing stations and surrounding common areas within an occupied post-acute care community.",
    overview:
      "The Amberwood Post Acute project included updates to key interior spaces through the removal and replacement of cabinetry and countertops, new framing at the nursing stations, installation of stone tile, and replacement of existing light fixtures.",
    scope: [
      "Nursing station, corridor, and cafeteria refresh",
      "Cabinetry and countertops replaced",
      "New framing at the nursing stations",
      "Stone tile installation",
      "Light fixtures replaced",
      "Rails, artwork, and trim removed; electrical boxes safely terminated",
      "Demolition debris managed throughout",
    ],
    process: [
      "Because the work was completed within an occupied healthcare environment, our team carefully coordinated each phase to limit disruption to residents, staff, and daily care operations.",
      "Existing finishes and fixtures were removed first, followed by the required framing and electrical adjustments. New cabinetry, countertops, stone tile, and lighting were then installed to create updated, functional spaces for staff and residents.",
      "Dedicated project management helped coordinate the different trades, maintain safe and organized work areas, and keep the renovation moving efficiently from demolition through final installation.",
    ],
    facts: [],
    image: "/img/case-studies/amberwood-post-acute.jpg",
    imageSize: { width: 1800, height: 714 },
    imageAlt: "Amberwood Post Acute entrance and sign",
    gallery: [
      {
        title: "the finished spaces",
        quote:
          "Spaces like these set the tone for residents, families, and the team who show up every day to care for them. When the environment feels warm and well cared for, people feel it too.",
        photos: [
          { src: "/img/case-studies/amberwood/nurse-station-lounge.jpg", alt: "Nursing station with a lounge seating area in front", caption: "Nursing station and lounge", width: 880, height: 930 },
          { src: "/img/case-studies/amberwood/lobby-fireplace.jpg", alt: "Lobby with a tiled fireplace wall and stone reception desk", caption: "Lobby", width: 1040, height: 1180 },
          { src: "/img/case-studies/amberwood/dining-room.jpg", alt: "Dining room with pendant lighting and round tables", caption: "Dining room", width: 1080, height: 1180 },
          { src: "/img/case-studies/amberwood/hallway.jpg", alt: "Bright resident corridor with new flooring", caption: "Resident corridor", width: 910, height: 1180 },
          { src: "/img/case-studies/amberwood/exterior-sign.jpg", alt: "Amberwood Post Acute entrance sign and landscaping", caption: "Front entrance", width: 1080, height: 780 },
          { src: "/img/case-studies/amberwood/aerial-roof.jpg", alt: "Aerial view of the Amberwood building and courtyard", caption: "From above", width: 550, height: 1100 },
        ],
      },
      {
        title: "celebrating with the amberwood team",
        photos: [
          { src: "/img/case-studies/amberwood/open-house.jpg", alt: "Togala team member holding a gift basket under a balloon arch at the Amberwood entrance", caption: "Open house at Amberwood", width: 1080, height: 1180 },
          { src: "/img/case-studies/amberwood/team.jpg", alt: "Two Togala team members smiling on site", caption: "The Togala team on site", width: 1000, height: 1180 },
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
