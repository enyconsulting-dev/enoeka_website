import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Eno Eka and enoeka.com collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main className="px-6 py-16 lg:px-12">
      <article className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-char">Privacy Policy</h1>
        <p className="text-sm text-muted">Last updated: April 2026</p>
        <p className="mt-6 text-mid">
          This site ({site.url}) collects information you submit through forms (e.g. name, email,
          inquiry details) to respond to requests and, where permitted, send updates. Data may be
          processed through GoHighLevel and other service providers used by the ENY ecosystem.
        </p>
        <p className="mt-4 text-mid">
          For Canadian visitors, we comply with CASL: marketing emails require your express consent
          (checkbox on forms). You may unsubscribe at any time.
        </p>
        <p className="mt-4 text-mid">
          Analytics (e.g. GA4) and advertising tags may use cookies per your consent banner.
          Contact {site.email} for privacy requests.
        </p>
        <p className="mt-8">
          <Link href="/" className="text-pink-deep underline">
            ← Home
          </Link>
        </p>
      </article>
    </main>
  );
}
