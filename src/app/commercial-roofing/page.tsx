import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { servicePageContent } from "@/data/site";

const SLUG = "commercial-roofing";
const content = servicePageContent.find((p) => p.slug === SLUG)!;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: content.metaTitle,
  description: content.metaDescription,
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.togalacb.com/#organization",
    name: "Togala Contractor Builder",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceDetail slug={SLUG} />
    </>
  );
}
