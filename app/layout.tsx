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
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Eno Eka",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
