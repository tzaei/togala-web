import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Togala property recovery services";

export default function Image() {
  return renderOg({ kicker: "Stabilize fast, recover fully", title: "Property recovery services" });
}
