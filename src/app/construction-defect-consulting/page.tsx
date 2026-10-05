import JsonLd from "@/components/JsonLd";
import ServiceDetail from "@/components/ServiceDetail";
import { servicePageContent } from "@/data/site";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

const SLUG = "construction-defect-consulting";
const content = servicePageContent.find((p) => p.slug === SLUG)!;

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: `/${SLUG}`,
});

export default function Page() {
  return (
    <>
      <JsonLd data={serviceJsonLd(SLUG)} />
      <ServiceDetail slug={SLUG} />
    </>
  );
}
