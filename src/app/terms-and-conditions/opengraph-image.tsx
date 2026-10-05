import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Togala Contractor Builder terms and conditions";

export default function Image() {
  return renderOg({ kicker: "Togala Contractor Builder", title: "Project master terms and conditions" });
}
