import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PinkRule, SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Eno Eka YouTube Channel | Business Analysis, Career & Consulting Videos",
  description:
    "Watch Eno Eka's latest videos on business analysis careers, consulting, AI, digital transformation, and building a six-figure income. Subscribe for weekly insights.",
};

const playlists = [
  "Business Analysis",
  "Consulting",
  "Thought Leadership",
  "Immigration",
  "AI",
];

export default function YouTubePage() {
  return (
    <main className="px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-content">
        <Eyebrow>YouTube</Eyebrow>
        <SectionHeading>
          Watch <em className="text-pink-deep not-italic">Eno</em> on YouTube
        </SectionHeading>
        <PinkRule />
        <p className="mt-4 max-w-2xl text-mid">
          Embed your channel trailer and latest videos here. Optional: YouTube Data API v3 for
          automatic updates (cache daily).
        </p>
        <div className="mt-12 aspect-video w-full max-w-3xl rounded-xl border border-dashed border-border bg-pink-light/40" />
        <h2 className="mt-12 font-display text-xl font-bold">Playlists by topic</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {playlists.map((p) => (
            <li
              key={p}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm text-mid"
            >
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-12 rounded-xl border border-border bg-cream p-8 text-center">
          <p className="text-mid">Placeholder grid for latest 12 videos (thumbnails + meta).</p>
        </div>
        <Link
          href="/content"
          className="mt-10 inline-block rounded-full bg-pink-deep px-8 py-3 text-sm font-semibold text-white"
        >
          Back to Content Hub
        </Link>
      </div>
    </main>
  );
}
