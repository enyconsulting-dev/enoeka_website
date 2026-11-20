import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieConsent } from "@/components/CookieConsent";
import { site } from "@/lib/site";

const inter = localFont({
  src: "./fonts/Inter-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "300 700",
});

const playfair = localFont({
  src: [
    {
      path: "./fonts/PlayfairDisplay-latin.woff2",
      style: "normal",
      weight: "400 900",
    },
    {
      path: "./fonts/PlayfairDisplay-italic-latin.woff2",
      style: "italic",
      weight: "400 900",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Eno Eka | International Keynote Speaker, Author & Educator",
    template: "%s | Eno Eka",
  },
  description:
    "Eno Eka — Canada's Top 100 Most Powerful Women winner, international keynote speaker, author of The Six-Figure Business Analyst, and founder of the ENY Consulting ecosystem. Book Eno to speak.",
  keywords: [
    "Eno Eka",
    "keynote speaker",
    "business analyst",
    "author",
    "The Six-Figure Business Analyst",
    "career coach",
    "women in tech",
    "immigrant success",
    "business analysis training",
    "professional development",
    "ENY Consulting",
    "Canada's Most Powerful Women",
  ],
  authors: [{ name: "Eno Eka" }],
  creator: "Eno Eka",
  publisher: "ENY Consulting Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: site.name,
    title: "Eno Eka | International Keynote Speaker, Author & Educator",
    description:
      "Discover Eno Eka: Award-winning speaker, bestselling author, and career coach. Book Eno for your next event or explore her resources for professional growth.",
    images: [
      {
        url: "/image.png",
        width: 828,
        height: 1023,
        alt: "Eno Eka - Keynote Speaker and Author",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eno Eka | International Keynote Speaker, Author & Educator",
    description:
      "Eno Eka — Canada's Top 100 Most Powerful Women winner, international keynote speaker, author of The Six-Figure Business Analyst, and founder of the ENY Consulting ecosystem.",
    images: ["/image.png"],
    creator: "@misspragmatic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${site.url}/#website`,
                  url: site.url,
                  name: site.name,
                  inLanguage: "en-CA",
                  mainEntity: { "@id": `${site.url}/#person` },
                },
                {
                  "@type": "Person",
                  "@id": `${site.url}/#person`,
                  name: site.name,
                  url: site.url,
                  image: `${site.url}/image.png`,
                  jobTitle: "International keynote speaker, author, and educator",
                  description:
                    "Eno Eka is an international keynote speaker, author of The Six-Figure Business Analyst, and educator who has trained more than 100,000 professionals.",
                  sameAs: [
                    "https://www.linkedin.com/in/enoeka",
                    "https://twitter.com/misspragmatic",
                    "https://www.instagram.com/misspragmatic",
                  ],
                  knowsAbout: [
                    "Business analysis",
                    "Career development",
                    "Professional training",
                    "Keynote speaking",
                    "Entrepreneurship",
                    "Women in technology",
                  ],
                  hasOccupation: {
                    "@type": "Occupation",
                    name: "Keynote speaker and career coach",
                    occupationLocation: {
                      "@type": "Country",
                      name: "Canada",
                    },
                  },
                  award: [
                    "Canada's Most Powerful Women Top 100 (2022)",
                    "Forbes 30 Under 30 Nominee",
                    "Millionaire Mogul Award",
                  ],
                  alumniOf: {
                    "@type": "EducationalOrganization",
                    name: "University of Calgary",
                  },
                  nationality: {
                    "@type": "Country",
                    name: "Canada",
                  },
                },
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
