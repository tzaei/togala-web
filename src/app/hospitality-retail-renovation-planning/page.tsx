import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { servicePageContent } from "@/data/site";

const SLUG = "hospitality-retail-renovation-planning";
const content = servicePageContent.find((p) => p.slug === SLUG)!;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function Page() {
  return <ServiceDetail slug={SLUG} />;
}
