import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enoeka.com"),
  title: {
    default: "Eno Eka | International Keynote Speaker, Author & Educator | enoeka.com",
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
    siteName: "Eno Eka",
    title: "Eno Eka | International Keynote Speaker, Author & Educator",
    description:
      "Discover Eno Eka: Award-winning speaker, bestselling author, and career coach. Book Eno for your next event or explore her resources for professional growth.",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
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
  verification: {
    google: "your-google-site-verification-code", // Replace with actual code
  },
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
              "@type": "Person",
              name: "Eno Eka",
              jobTitle: "International Keynote Speaker, Author, Educator",
              description: "Eno Eka is an international keynote speaker, author of 'The Six-Figure Business Analyst', and founder of ENY Consulting. She has trained over 100,000 professionals and is recognized as one of Canada's Most Powerful Women.",
              url: "https://enoeka.com",
              sameAs: [
                "https://www.linkedin.com/in/enoeka",
                "https://twitter.com/misspragmatic",
                "https://www.instagram.com/misspragmatic",
              ],
              knowsAbout: [
                "Business Analysis",
                "Career Development",
                "Professional Training",
                "Keynote Speaking",
                "Entrepreneurship",
                "Women in Tech",
                "Immigrant Success Stories",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Keynote Speaker and Career Coach",
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
            }),
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
