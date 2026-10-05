import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Togala Contractor Builder services";

export default function Image() {
  return renderOg({ kicker: "Restoration, reconstruction & capital improvement", title: "Our services" });
}
