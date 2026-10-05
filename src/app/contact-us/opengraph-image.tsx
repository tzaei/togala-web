import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Contact Togala Contractor Builder";

export default function Image() {
  return renderOg({ kicker: "Let's talk about your property", title: "Contact Togala" });
}
