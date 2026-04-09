import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PinkRule, SectionHeading } from "@/components/SectionHeading";
import { NewsletterForm } from "@/components/NewsletterForm";
import { podcast } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Fireside Chat With Eno | Podcast | Apple Podcasts & Spotify",
  description:
    "51 episodes on career success, business analysis, entrepreneurship, and navigating life as a professional immigrant in Canada. Hosted by Eno Eka.",
};

export default function PodcastPage() {
  return (
    <main>
      <div className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-content">
          <Eyebrow>Podcast</Eyebrow>
          <SectionHeading>
            {podcast.title}
          </SectionHeading>
          <PinkRule />
          <p className="mt-4 max-w-2xl text-mid">{podcast.blurb}</p>
          <p className="mt-2 text-sm text-muted">
            Site:{" "}
            <a
              href="https://firesidechatwitheno.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-pink-deep underline"
            >
              firesidechatwitheno.com
            </a>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Apple Podcasts", "Spotify", "YouTube", "Google Podcasts"].map((p) => (
              <span
                key={p}
                className="rounded-full border border-pink-deep px-5 py-2 text-[13px] font-semibold text-pink-deep"
              >
                {p}
              </span>
            ))}
          </div>

          <h2 className="mt-16 font-display text-2xl font-bold">Sample episodes</h2>
          <p className="mt-2 text-sm text-muted">
            Full library: {podcast.episodes} episodes — import via CMS or podcast host.
          </p>
          <div className="mt-8 space-y-4">
            {podcast.sampleEpisodes.map((ep) => (
              <div
                key={ep.n}
                className="flex flex-col gap-2 rounded-xl border border-border bg-white p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-pink-deep">
                    EP {ep.n}
                  </span>
                  <h3 className="font-display text-lg font-bold">{ep.title}</h3>
                </div>
                <span className="text-sm text-muted">{ep.duration}</span>
              </div>
            ))}
          </div>
          <Link
            href="/content"
            className="mt-10 inline-block rounded-full border-2 border-pink-deep px-8 py-3 text-sm font-semibold text-pink-deep"
          >
            Content Hub →
          </Link>
        </div>
      </div>
      <section className="bg-pink-deep px-6 py-16 text-white lg:px-12">
        <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <Eyebrow light>Never miss an episode</Eyebrow>
            <h2 className="font-display text-3xl font-bold">Subscribe for new episodes</h2>
            <p className="mt-4 text-white/70">
              Or join the newsletter for weekly insights from Eno.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </main>
  );
}
