import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Terms of Service | Eno Eka",
  description: "Terms of use for enoeka.com.",
  pathname: "/terms",
});

export default function TermsPage() {
  return (
    <main className="px-6 py-16 lg:px-12">
      <article className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-char">Terms of Service</h1>
        <p className="text-sm text-muted">Last updated: April 2026</p>
        <p className="mt-6 text-mid">
          By using {site.url}, you agree to use the site lawfully and not to misuse forms or
          content. Speaking and business engagements are subject to separate contracts. Links to
          third-party sites (ENY schools, consulting, retailers) are provided for convenience;
          those sites have their own terms.
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
