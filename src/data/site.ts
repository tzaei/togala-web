export const site = {
  name: "Togala Contractor Builder",
  shortName: "Togala",
  url: "https://www.togalacb.com",
  title: "Togala Contractor Builder | Nationwide",
  description:
    "Togala Contractor Builder provides commercial property assessments and real estate due diligence services across Colorado and nationwide. Specializing in construction defect analysis, capital improvement planning, roofing, reconstruction, and emergency recovery, Togala supports asset owners and managers with clear, actionable insights for smarter investment and long-term asset performance.",
  copyright: "© 2020-2026 Togala Contractor Builder",
} as const;

export const social = [
  {
    label: "Togala LinkedIn",
    href: "https://www.linkedin.com/company/togala-contractor-builder/",
    icon: "linkedin",
  },
  {
    label: "Togala's Facebook",
    href: "https://www.facebook.com/togalacontractorbuilder",
    icon: "facebook",
  },
  {
    label: "Togala's Instagram",
    href: "https://www.instagram.com/togalacb/",
    icon: "instagram",
  },
] as const;

/** Service detail pages, in the order they appear in the site menu. */
export const servicePages = [
  {
    title: "Construction Defect Consulting",
    href: "/construction-defect-consulting",
  },
  { title: "Capital Improvement Strategy", href: "/capital-improvement-strategy" },
  {
    title: "Large Loss Reconstruction Management",
    href: "/large-loss-reconstruction-management",
  },
  { title: "Commercial Roofing", href: "/commercial-roofing" },
  {
    title: "Hospitality & Retail Renovation Planning",
    href: "/hospitality-retail-renovation-planning",
  },
  { title: "Property Recovery Services", href: "/property-recovery-services" },
] as const;

export const nav = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services", children: servicePages },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT US", href: "/contact-us" },
  { label: "TOGALA SELECT", href: "/togala-select" },
] as const;

/** The six cards in the "services snapshot" grid on the homepage. */
export const serviceCards = [
  {
    title: "Emergency Response & Mitigation",
    href: "/property-recovery-services",
    image: "/img/banners/recovery-crew.jpg",
    body: "Rapid emergency response services for fire, water, and structural damage. Togala's mitigation team stabilizes properties fast, prevents further loss, and coordinates restoration from the first hour through full recovery.",
  },
  {
    title: "Construction Defect Repair",
    href: "/construction-defect-consulting",
    image: "/img/banners/defect-inspection.jpg",
    body: "Expert construction defect repair backed by forensic evaluation and root-cause analysis. Togala identifies system failures, designs compliant repair scopes, and restores buildings to long-term performance standards.",
  },
  {
    title: "Capital Improvements",
    href: "/capital-improvement-strategy",
    image: "/img/banners/capital-multifamily.jpg",
    body: "Strategic capital improvement planning and execution for multifamily, commercial, and hospitality assets. Togala strengthens building performance with modern upgrades, façade enhancements, and lifecycle-driven renovations.",
  },
  {
    title: "Commercial Roofing",
    href: "/commercial-roofing",
    image: "/img/banners/roofing-tearoff.jpg",
    body: "Full-service commercial roofing solutions including inspections, repairs, replacements, and ongoing maintenance. Togala delivers durable, code-compliant roofing systems designed for long-term protection and performance.",
  },
  {
    title: "Large Loss Reconstruction",
    href: "/large-loss-reconstruction-management",
    image: "/img/banners/largeloss-fire.jpg",
    body: "Comprehensive large-loss reconstruction for fire, water, structural, and catastrophic events. Togala manages everything from demolition to full rebuilds, restoring properties safely, efficiently, and to pre-loss condition or better.",
  },
  {
    title: "& More!",
    href: "/services",
    image: "/img/banners/entrance.jpg",
    body: "Nationwide construction and restoration solutions tailored to ownership groups, commercial operators, and asset managers. Togala delivers high-level consulting, project management, property assessments, and specialty services across diverse project types.",
  },
] as const;

/**
 * "Who we serve" client logo strip.
 *
 * The Wix build rendered this as a gallery widget whose images are not exposed
 * in the public page markup, so the logo files could not be pulled across in
 * the migration. Drop the logo PNG/SVGs into `public/img/clients/` and list
 * them here — the marquee renders automatically once this array is non-empty,
 * and the section falls back to the audience list below while it is empty.
 */
export const clientLogos: { name: string; src: string }[] = [];

/** Fallback for the "who we serve" band until client logos are supplied. */
export const audiences = [
  "Property Owners",
  "HOAs & Community Associations",
  "Asset & Portfolio Managers",
  "Multifamily Operators",
  "Hospitality & Retail Groups",
  "Commercial Property Managers",
] as const;

/** Full copy for each service detail page, migrated from togalacb.com. */
export type ServicePage = {
  slug: string;
  /** Engraved display heading. */
  heading: string;
  /** Small all-caps line above the heading. */
  kicker: string;
  intro: string;
  steps: { title: string; body: string }[];
  cta: { label: string; href: string };
  metaTitle: string;
  metaDescription: string;
  image: string;
};

export const servicePageContent: ServicePage[] = [
  {
    slug: "construction-defect-consulting",
    heading: "construction defect consulting",
    kicker: "FORENSIC EVALUATION, ROOT-CAUSE ANALYSIS, COMPLIANT REPAIR SCOPES",
    intro:
      "Togala combines destructive testing coordination, defect evaluation, and repair planning to help owners resolve complex construction issues with clarity and control. We bridge the gap between field testing and practical repair strategies that protect your long-term capital plan.",
    steps: [
      {
        title: "Test Coordination",
        body: "Work with specialized contractors for safe, targeted openings.",
      },
      {
        title: "Data Collection",
        body: "Moisture readings, material evaluation, design comparison.",
      },
      {
        title: "Root Cause Analysis",
        body: "Identify failures in assemblies, systems, or interfaces.",
      },
      {
        title: "Scope Definition",
        body: "Strategic repair recommendations, cost forecasting, and long-term planning.",
      },
      {
        title: "Implementation Oversight",
        body: "Ensure corrections meet design intent and eliminate recurrence.",
      },
    ],
    cta: { label: "REQUEST CONSTRUCTION DEFECT CONSULTING", href: "/contact-us" },
    metaTitle: "Construction Defect Consulting",
    metaDescription:
      "Destructive testing coordination, defect evaluation, and repair planning that help owners resolve complex construction issues with clarity and control.",
    image: "/img/banners/defect-inspection.jpg",
  },
  {
    slug: "capital-improvement-strategy",
    heading: "capital improvement strategy",
    kicker: "LIFECYCLE-DRIVEN PLANNING FOR HOA, HEALTHCARE, AND MULTIFAMILY PORTFOLIOS",
    intro:
      "Capital improvements require foresight, disciplined planning, and clear communication, especially for HOAs, healthcare facilities, and multifamily portfolios. Togala provides capital improvement consulting that aligns budgets, timelines, and scope to your asset strategy. We ensure each improvement supports long-term performance, while minimizing disruption and unexpected costs.",
    steps: [
      {
        title: "Condition Review",
        body: "Evaluate existing systems, wear patterns, deferred maintenance, and future risks.",
      },
      {
        title: "Strategic Planning",
        body: "Define priorities, cost forecasts, and long-term improvement pathways.",
      },
      {
        title: "Scope Development",
        body: "Create clear, measurable scopes of work tailored to property operations.",
      },
      {
        title: "Vendor Alignment",
        body: "Assist with contractor selection, bid comparison, and contracting guidance.",
      },
      {
        title: "Execution Oversight",
        body: "Monitor schedule, quality, and budget adherence with transparent reporting.",
      },
    ],
    cta: { label: "REQUEST CAPITAL IMPROVEMENT STRATEGY", href: "/contact-us" },
    metaTitle: "Capital Improvement Strategy",
    metaDescription:
      "Capital improvement consulting that aligns budgets, timelines, and scope to your asset strategy for HOAs, healthcare facilities, and multifamily portfolios.",
    image: "/img/banners/capital-multifamily.jpg",
  },
  {
    slug: "large-loss-reconstruction-management",
    heading: "large loss reconstruction management",
    kicker: "LEADERSHIP THROUGH FIRE, WATER, STRUCTURAL, AND CATASTROPHIC LOSS",
    intro:
      "Major property losses demand leadership, not reaction. Togala provides large-loss reconstruction management that brings clarity to complex situations: coordinating assessment, insurance alignment, contractor oversight, and reconstruction schedules. We stabilize uncertainty and deliver a strategic, well-documented path to full recovery.",
    steps: [
      {
        title: "Damage Evaluation",
        body: "Comprehensive loss assessment, photo logs, moisture mapping, and safety review.",
      },
      {
        title: "Scope Validation",
        body: "Develop an accurate reconstruction scope aligned with carrier and owner expectations.",
      },
      {
        title: "Contractor Coordination",
        body: "Manage drying, demolition, environmental, & building teams with disciplined oversight.",
      },
      {
        title: "Schedule Management",
        body: "Sequence phases to minimize downtime and protect tenant/resident impact.",
      },
      {
        title: "Quality & Closeout",
        body: "Final inspections, punchlist resolution, and full project documentation.",
      },
    ],
    cta: { label: "REQUEST LARGE LOSS RECONSTRUCTION", href: "/contact-us" },
    metaTitle: "Large Loss Reconstruction Management",
    metaDescription:
      "Large-loss reconstruction management coordinating assessment, insurance alignment, contractor oversight, and reconstruction schedules — a documented path to full recovery.",
    image: "/img/banners/largeloss-fire.jpg",
  },
  {
    slug: "commercial-roofing",
    heading: "commercial roofing",
    kicker: "SYSTEM SELECTION, BUDGETING, AND OVERSIGHT WITH COMPLETE CONFIDENCE",
    intro:
      "A roofing investment impacts operational costs, safety, and long-term performance of assets. Togala provides commercial roofing services that ensure owners and managers make informed decisions based on system condition, lifespan, performance expectations, and warranty requirements. We help you select, budget, and oversee roofing projects with complete confidence.",
    steps: [
      {
        title: "Roof Assessment",
        body: "Condition evaluation, moisture detection, and warranty review.",
      },
      {
        title: "System Planning",
        body: "Compare roofing systems based on life cycle, climate, and operational impact.",
      },
      {
        title: "Bid Management",
        body: "Prepare specifications, evaluate contractor bids, and ensure alignment.",
      },
      {
        title: "Construction Oversight",
        body: "Monitor installation quality, safety protocols, and phasing.",
      },
      {
        title: "Final Validation",
        body: "Confirm compliance with manufacturer and warranty requirements.",
      },
    ],
    cta: { label: "REQUEST COMMERCIAL ROOFING", href: "/contact-us" },
    metaTitle: "Commercial Roofing",
    metaDescription:
      "Commercial roofing services covering system condition, lifespan, performance expectations, and warranty requirements — select, budget, and oversee with confidence.",
    image: "/img/banners/roofing-tearoff.jpg",
  },
  {
    slug: "hospitality-retail-renovation-planning",
    heading: "hospitality & retail renovation planning",
    kicker: "RENOVATIONS THAT RESPECT BRAND STANDARDS AND REVENUE CYCLES",
    intro:
      "Hospitality and retail environments require renovations that respect brand standards, revenue cycles, and the experience of both guests and tenants. Togala provides renovation planning and construction consulting that minimizes disruption and protects commercial performance during improvements.",
    steps: [
      {
        title: "Preconstruction Planning",
        body: "Evaluate brand requirements, operational constraints, and sequencing.",
      },
      {
        title: "Phasing Strategy",
        body: "Develop plans that maintain access, safety, and customer experience.",
      },
      {
        title: "Vendor Coordination",
        body: "Oversee bidding, contracting, and performance expectations.",
      },
      {
        title: "On-Site Management",
        body: "Ensure quality control, communication, and schedule adherence.",
      },
      {
        title: "Delivery",
        body: "Final inspections, brand compliance checks, and turnover documentation.",
      },
    ],
    cta: { label: "DISCUSS YOUR RENOVATION PROJECT", href: "/contact-us" },
    metaTitle: "Hospitality & Retail Renovation Planning",
    metaDescription:
      "Renovation planning and construction consulting for hospitality and retail that minimizes disruption and protects commercial performance during improvements.",
    image: "/img/banners/entrance.jpg",
  },
  {
    slug: "property-recovery-services",
    heading: "property recovery services",
    kicker: "EMERGENCY — STABILIZE FAST, PREVENT FURTHER LOSS, RECOVER FULLY",
    intro:
      "Unexpected damage requires structured leadership to prevent further loss and restore operations quickly. Togala provides property recovery consulting: overseeing assessment, stabilization, mitigation, and the transition into reconstruction. For eligible clients, Togala Select offers guaranteed nationwide 24/7 access through an invitation-only emergency response program.",
    steps: [
      {
        title: "Initial Assessment",
        body: "Immediate evaluation of affected areas, hazards, and stabilization needs.",
      },
      {
        title: "Response Coordination",
        body: "Mobilize restoration partners, control moisture, and environmental risks.",
      },
      {
        title: "Documentation",
        body: "Detailed logs, readings, and timelines for insurance and stakeholders.",
      },
      {
        title: "Restoration Planning",
        body: "Define scope, align with carriers, and transition to reconstruction strategy.",
      },
      {
        title: "Oversight",
        body: "Provide end-to-end management through full restoration and closeout.",
      },
    ],
    cta: { label: "LEARN ABOUT TOGALA SELECT", href: "/togala-select" },
    metaTitle: "Property Recovery Services",
    metaDescription:
      "Property recovery consulting overseeing assessment, stabilization, mitigation, and the transition into reconstruction, with 24/7 access for Togala Select members.",
    image: "/img/banners/recovery-crew.jpg",
  },
];

/** About page copy, migrated from togalacb.com. */
export const aboutContent = {
  kicker: "BASED IN THE ROCKY MOUNTAIN REGION, SERVING OWNERS NATIONWIDE",
  paragraphs: [
    "Based in the Rocky Mountain Region, Togala Contractor Builder is a general contractor that works with property owners, asset managers, and consultants in the multifamily, hospitality, healthcare, retail and commercial property spaces.",
    "Our team of experts specializes in construction defect, capital improvement, large loss reconstruction, commercial roofing, and emergency response and mitigation. We partner with our clients and provide open and honest communication and collaboration from the first day of the project to the last.",
    "We develop deep, long lasting relationships with our clients and provide next-level customer care and service that is not the norm in today's construction industry. We pride ourselves on delivering top-tier service for the nation's top asset owners and managers.",
  ],
  sectors: [
    "Multifamily",
    "Hospitality",
    "Healthcare",
    "Retail",
    "Commercial",
  ],
} as const;

/**
 * Team, from the About page on togalacb.com.
 *
 * On the Wix site the names, titles and bios are rendered INTO the images —
 * they are not text, so search engines and screen readers can't read a word of
 * them. Transcribed here as real markup, which is a straight improvement.
 */
export const team = [
  {
    name: "John Tripp",
    title: "Vice President of Sales",
    photo: "/img/team/john-tripp.jpg",
    bio: [
      "John Tripp is a construction industry veteran and sales leader with over 35 years of experience driving growth in construction defect, roofing, and restoration services. He combines his deep technical background in budgeting, estimating, and project management with a proven ability to build client relationships, negotiate high-value contracts, and lead revenue-generating strategies.",
      "John has consistently delivered measurable business outcomes, including eliminating hidden cost drivers, negotiating national rebate programs, and securing multimillion-dollar savings for clients and employers. He is widely respected as both a sales strategist and an industry expert witness.",
    ],
  },
  {
    name: "Rich Reno",
    title: "Vice President of Operations",
    photo: "/img/team/rich-reno.jpg",
    bio: [
      "Rich Reno is a seasoned professional specializing in multifamily and commercial structure analysis, restoration, and roofing. His career emphasizes the application of ICC building codes, ASTM testing, and the development of innovative construction and roofing trade practices.",
      "Recognized for his cost-modeling expertise, Rich has delivered millions in client savings through his analytical and strategic approach. His client-focused strategies consistently deliver measurable value. He is also respected for training and leading sales/estimating teams on projects ranging from $1M to $25M.",
    ],
  },
] as const;

/** Togala Select program copy, migrated from togalacb.com. */
export const selectContent = {
  tagline: "Confidence on Call.",
  intro:
    "Togala Select was created for property owners and managers who demand guaranteed readiness when the unexpected happens. Members receive priority access to Togala's nationwide emergency network — managed by our consulting and project teams who already know your facilities, documentation standards, and operating requirements.",
  benefits: [
    "Exclusive, invitation-only access to 24/7 emergency response",
    "Centralized 800 number routed to Select Coordination Center",
    "Guaranteed priority mobilization and communication",
    "Preloaded property profiles and contact hierarchies for rapid dispatch",
    "Seamless project documentation and reporting",
    "Supported by Togala's national network of licensed recovery partners",
  ],
  audience: [
    "HOA & Community Associations",
    "Healthcare Facilities",
    "Multifamily Property Owners",
  ],
  howItWorks: [
    "Clients enroll through their Togala Account Manager or Project Director.",
    "Each property's emergency readiness profile is created and stored securely.",
    "Upon activation, the Togala Select Coordination Center mobilizes immediately.",
    "Project Managers communicate and document every phase of response.",
  ],
  enrollment:
    "Currently by invitation only. Contact your Togala representative for qualification details.",
} as const;

export const processSteps = [
  {
    step: "01",
    title: "Assess",
    body: "Detailed site evaluation, damage assessment, and documentation that establishes exactly what happened and what it will take to fix it.",
  },
  {
    step: "02",
    title: "Plan",
    body: "Scope development, budgeting, and sequencing — a defensible plan built around your asset, your timeline, and your stakeholders.",
  },
  {
    step: "03",
    title: "Implement",
    body: "Field oversight and vendor coordination with transparent reporting, so every phase moves on schedule and nothing gets lost between trades.",
  },
  {
    step: "04",
    title: "Review",
    body: "Close-out, verification, and final reporting that confirms the work performed, the standards met, and the value restored.",
  },
] as const;
