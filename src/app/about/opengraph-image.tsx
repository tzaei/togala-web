import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "About Togala Contractor Builder";

export default function Image() {
  return renderOg({ kicker: "Denver, Colorado · Serving nationwide", title: "A contractor, and a partner" });
}
