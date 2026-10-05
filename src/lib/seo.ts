import type { Metadata } from "next";
import { servicePageContent, site, social, team } from "@/data/site";

export const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

/**
 * Per-page metadata. Pages must set Open Graph and Twitter themselves: Next
 * merges `openGraph` shallowly, so a page that only sets `title` would share
 * the home page's og:title and description.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const shareTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: shareTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
    },
  };
}

/** Site-wide entity graph: the business and the website, referenced by @id elsewhere. */
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": ORG_ID,
      name: site.name,
      alternateName: "Togala",
      url: site.url,
      logo: `${site.url}/img/togala-logo-stacked.png`,
      image: `${site.url}/opengraph-image`,
      description: site.description,
      telephone: "+1-877-864-2521",
      email: site.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Denver",
        addressRegion: "CO",
        addressCountry: "US",
      },
      areaServed: { "@type": "Country", name: "United States" },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-877-864-2521",
        email: site.email,
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
      sameAs: social.map((s) => s.href),
      knowsAbout: [
        "Construction defect consulting",
        "Capital improvement planning",
        "Large loss reconstruction",
        "Commercial roofing",
        "Property restoration",
        "Emergency response and mitigation",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: servicePageContent.map((p) => ({
          "@type": "Offer",
          itemOffered: { "@id": `${site.url}/${p.slug}#service` },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: site.url,
      name: site.name,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-US",
    },
  ],
};

export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${site.url}${crumb.path === "/" ? "" : crumb.path}`,
    })),
  };
}

export function serviceJsonLd(slug: string) {
  const page = servicePageContent.find((p) => p.slug === slug);
  if (!page) throw new Error(`No service content for slug "${slug}"`);
  const url = `${site.url}/${slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.metaTitle,
        serviceType: page.metaTitle,
        description: page.metaDescription,
        url,
        image: `${site.url}${page.image}`,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "United States" },
      },
      breadcrumbJsonLd([
        { name: "Services", path: "/services" },
        { name: page.metaTitle, path: `/${slug}` },
      ]),
    ],
  };
}

export function teamJsonLd() {
  return team.map((person) => ({
    "@type": "Person",
    name: person.name,
    jobTitle: person.title,
    image: `${site.url}${person.photo}`,
    worksFor: { "@id": ORG_ID },
  }));
}
