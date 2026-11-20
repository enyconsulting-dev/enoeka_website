import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  pathname,
  keywords,
}: PageMetadataInput): Metadata {
  const url = new URL(pathname, site.url).toString();
  const image = {
    url: "/image.png",
    width: 828,
    height: 1023,
    alt: "Eno Eka, international keynote speaker and author",
  };

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_CA",
      siteName: site.name,
      url,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
      creator: site.handle,
    },
  };
}
