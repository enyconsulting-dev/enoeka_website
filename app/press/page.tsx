import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PinkRule, SectionHeading } from "@/components/SectionHeading";
import { PressDownloads } from "@/components/PressDownloads";
import { press } from "@/lib/copy";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Eno Eka | Press & Media Kit | Speaker, Author & Thought Leader",
  description:
    "Download Eno Eka's press kit, headshots, and speaker fact sheet. Featured on CTV, ABC, FOX, Forbes, and Channels TV. Media inquiries welcome.",
};

export default function PressPage() {
  return (
    <main className="px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-content">
        <Eyebrow>Media</Eyebrow>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-char">
          {press.heroTitle}
        </h1>
        <p className="mt-4 max-w-2xl text-mid">{press.heroSub}</p>

        <section className="mt-16">
          <SectionHeading>
            Featured <em className="text-pink-deep not-italic">coverage</em>
          </SectionHeading>
          <PinkRule />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {press.coverage.map((c) => (
              <div key={c.outlet} className="rounded-xl border border-border bg-cream p-6">
                <p className="text-[11px] font-bold uppercase text-muted">{c.outlet}</p>
                <p className="mt-2 text-sm text-mid">{c.headline}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading>
            Press kit <em className="text-pink-deep not-italic">downloads</em>
          </SectionHeading>
          <PinkRule />
          <PressDownloads />
        </section>

        <section className="mt-16">
          <SectionHeading>
            Interview <em className="text-pink-deep not-italic">formats</em>
          </SectionHeading>
          <PinkRule />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {press.interviewFormats.map((f) => (
              <div key={f.title} className="rounded-xl border border-border p-6">
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-mid">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 rounded-xl bg-pink-light p-8">
          <h2 className="font-display text-xl font-bold">Media contact</h2>
          <p className="mt-2 text-mid">
            <a
              href={`mailto:${site.mediaEmail}`}
              className="font-semibold text-pink-deep underline"
            >
              {site.mediaEmail}
            </a>
          </p>
          <p className="mt-2 text-sm text-muted">Typical response within 3 business days.</p>
        </div>

        <Link
          href="/contact"
          className="mt-10 inline-block rounded-full bg-pink-deep px-8 py-3 text-sm font-semibold text-white"
        >
          Media inquiries →
        </Link>
      </div>
    </main>
  );
}
