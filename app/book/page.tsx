import Link from "next/link";
import { Eyebrow, PinkRule, SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/seo";
import { book } from "@/lib/copy";

export const metadata = createPageMetadata({
  title: "The Six-Figure Business Analyst | Eno Eka",
  pathname: "/book",
  description:
    "Order Eno Eka's bestselling book — 12 simple steps to kickstart your business analysis career without a tech degree or experience.",
});

export default function BookPage() {
  return (
    <main className="px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-content">
        <Eyebrow>The Book</Eyebrow>
        <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold italic text-char">
          {book.title}
        </h1>
        <p className="mt-2 text-lg text-mid">{book.subtitle}</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
          <div className="flex justify-center lg:sticky lg:top-28">
            <div className="w-[240px] -rotate-2 rounded-lg bg-gradient-to-br from-pink-deep to-[#8B4F72] p-10 text-center text-white shadow-xl">
              <img
                src="https://businessanalysisschool.com/six-figure.webp"
                alt="The Six-Figure Business Analyst book cover"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div>
            <p className="text-mid">Practical, story-driven, and immediately applicable.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.amazon.com/dp/1738168301?ref_=cm_sw_r_cp_ud_dp_RYZ4H00E0M0NFJM74WRF"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-char transition hover:bg-gold-dark"
              >
                Buy on Amazon
              </a>
              <a
                href="https://www.barnesandnoble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-pink-deep px-8 py-3 text-sm font-semibold text-pink-deep"
              >
                Barnes &amp; Noble
              </a>
              <a
                href="https://thesixfigurebusinessanalystbook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-mid"
              >
                thesixfigurebusinessanalystbook.com
              </a>
            </div>

            <section className="mt-16">
              <SectionHeading>
                What you&apos;ll <em className="text-pink-deep not-italic">learn</em>
              </SectionHeading>
              <PinkRule />
              <ol className="mt-8 list-decimal space-y-3 pl-5 text-mid">
                {book.steps.map((s, i) => (
                  <li key={i}>
                    <span className="font-semibold text-char">Step {i + 1}.</span> {s}
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-16">
              <SectionHeading>
                Reader <em className="text-pink-deep not-italic">voices</em>
              </SectionHeading>
              <PinkRule />
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {book.reviews.map((r) => (
                  <blockquote
                    key={r.who}
                    className="rounded-xl border border-border bg-pink-light/40 p-6"
                  >
                    <span className="text-[10px] font-bold uppercase text-gold-dark">
                      {r.badge}
                    </span>
                    <p className="mt-3 font-display text-sm italic">&ldquo;{r.quote}&rdquo;</p>
                    <footer className="mt-3 text-[12px] text-muted">
                      {r.who} · {r.role}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </section>

            <section className="mt-16 rounded-xl bg-cream p-8">
              <h2 className="font-display text-xl font-bold">About the author</h2>
              <p className="mt-4 text-mid">
                Eno Eka is an international keynote speaker, CBAP-certified business analyst, and the
                founder of the ENY Consulting ecosystem. She has trained 100,000+ professionals
                across 90+ countries.
              </p>
              <Link href="/about" className="mt-4 inline-block font-semibold text-pink-deep">
                Full story →
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
