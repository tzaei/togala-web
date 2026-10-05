import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Togala Contractor Builder: property restoration and construction consulting";

export default function Image() {
  return renderOg({ kicker: "Property Restoration & Construction Consulting", title: "Helping you get back to business faster." });
}
