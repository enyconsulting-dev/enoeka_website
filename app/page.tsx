import Link from "next/link";
import { EnoPortrait } from "@/components/EnoPortrait";
import { ContentTypeIcon, IconDiamond } from "@/components/icons";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Eyebrow, PinkRule, SectionHeading } from "@/components/SectionHeading";
import { TickerStrip } from "@/components/TickerStrip";
import { home } from "@/lib/copy";
import { ecosystem } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eno Eka | International Keynote Speaker, Author & Educator | Home",
  description:
    "Welcome to Eno Eka's official website. Discover her journey from Nigerian immigrant to Canada's Most Powerful Women winner. Book Eno for keynote speeches, explore her bestselling book 'The Six-Figure Business Analyst', and access professional development resources.",
  keywords: [
    "Eno Eka",
    "keynote speaker Canada",
    "business analyst career",
    "immigrant success story",
    "women in business",
    "professional training",
    "career coaching",
    "business analysis certification",
    "ENY Consulting",
    "The Six-Figure Business Analyst book",
  ],
  openGraph: {
    title: "Eno Eka | International Keynote Speaker, Author & Educator",
    description:
      "Eno Eka: Award-winning speaker, author, and coach. From immigrant to mogul in 5 years. Book Eno or explore her resources.",
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
    title: "Eno Eka | International Keynote Speaker, Author & Educator",
    description:
      "Discover Eno Eka: Canada's Top 100 Most Powerful Women, bestselling author, and international speaker. #EnoEka #KeynoteSpeaker",
    images: ["/image.png"],
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-76px)] items-center overflow-hidden px-6 pb-16 pt-8 lg:px-12">
        <div className="pointer-events-none absolute -right-24 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(242,167,195,0.15)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_70%)]" />
        <div className="relative z-[1] mx-auto grid max-w-content gap-12 lg:grid-cols-[1fr_400px] lg:items-center lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[2px] text-pink-deep">
              Hello, I&apos;m
            </p>
            <h1 className="font-display text-[clamp(3rem,7vw,6.25rem)] font-black italic leading-[0.95] tracking-[-0.03em] text-char">
              Eno Eka.
            </h1>
            <ul className="mt-6 list-none space-y-1 text-sm text-mid">
              {home.roles.map((line) => (
                <li key={line} className="flex items-center gap-2">
                  <IconDiamond className="mt-0.5 h-2 w-2 text-pink" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-7 max-w-[460px] text-base leading-[1.85] text-mid">{home.heroSub}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/speaking"
                className="rounded-full bg-pink-deep px-8 py-3.5 text-[13px] font-semibold text-white transition hover:bg-pink hover:shadow-lg hover:-translate-y-px"
              >
                Book Eno to Speak
              </Link>
              <Link
                href="/content"
                className="rounded-full border-2 border-pink-deep px-8 py-3.5 text-[13px] font-semibold text-pink-deep transition hover:bg-pink-light"
              >
                Watch My Latest Content
              </Link>
            </div>
            <Link
              href="/work-with-me"
              className="mt-4 inline-block text-[13px] font-semibold text-pink-deep underline decoration-pink-mid decoration-2 underline-offset-[3px]"
            >
              Learn From Me →
            </Link>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
              {home.proofStrip.map((m) => (
                <div key={m.l} className="bg-pink-light px-3 py-4 text-center">
                  <div className="font-display text-2xl font-bold text-pink-deep">{m.n}</div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-wide text-muted">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px] justify-self-center overflow-hidden rounded-3xl border border-border bg-pink-light lg:justify-self-end">
            <EnoPortrait priority className="object-cover object-[center_18%]" />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-pink-light/90 to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-5 left-1/2 max-w-[90%] -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-white px-5 py-2 text-[11px] font-semibold text-pink-deep shadow-md">
              Canada&apos;s Most Powerful Women Top 100
            </div>
          </div>
        </div>
      </section>

      <TickerStrip items={home.ticker} />

      {/* Press */}
      <div className="border-b border-border bg-cream px-6 py-8 lg:px-12">
        <div className="mx-auto max-w-content">
          <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[3px] text-muted">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {home.press.map((p) => (
              <span
                key={p}
                className="text-[13px] font-bold uppercase tracking-wide text-muted/50 transition hover:opacity-80"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* About preview */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-content gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[3/4] max-h-[480px] w-full overflow-hidden rounded-[20px] border border-border bg-pink-light">
            <EnoPortrait
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover object-[center_20%]"
            />
          </div>
          <div>
            <Eyebrow>My Story</Eyebrow>
            <SectionHeading>
              From Suitcase to <em className="text-pink-deep not-italic">Stage.</em>
            </SectionHeading>
            <PinkRule />
            <div className="space-y-4 text-[15px] leading-[1.9] text-mid">
            {home.aboutPreview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            </div>
            <Link
              href="/about"
              className="mt-8 inline-block rounded-full bg-pink-deep px-8 py-3.5 text-[13px] font-semibold text-white transition hover:bg-pink"
            >
              Read My Full Story →
            </Link>
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="bg-cream px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-content">
          <Eyebrow>Impact</Eyebrow>
          <SectionHeading>
            Numbers That <em className="text-pink-deep not-italic">Mean Something.</em>
          </SectionHeading>
          <PinkRule />
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {home.impactMetrics.map((m) => (
              <div
                key={m.l}
                className={`px-5 py-7 text-center ${m.gold ? "bg-gold-light" : "bg-pink-light"}`}
              >
                <div
                  className={`font-display text-4xl font-bold ${m.gold ? "text-gold-dark" : "text-pink-deep"}`}
                >
                  {m.n}
                </div>
                <div className="mt-1 text-[12px] text-mid">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content preview */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-content">
          <Eyebrow>Latest from Eno</Eyebrow>
          <SectionHeading>
            Videos. Podcasts.{" "}
            <em className="text-pink-deep not-italic">Articles. All in One Place.</em>
          </SectionHeading>
          <PinkRule />
          <p className="max-w-xl text-[16px] leading-[1.85] text-mid">
            Whether you prefer watching, listening, or reading — Eno creates content across every format to help you build the career and business you deserve.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {home.contentCards.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group overflow-hidden rounded-xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-pink/20"
              >
                <div
                  className={`relative flex h-[180px] items-center justify-center bg-gradient-to-br ${c.grad}`}
                >
                  <span className="absolute left-3 top-3 rounded-full bg-pink-deep px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white">
                    {c.pill}
                  </span>
                  <ContentTypeIcon pill={c.pill} className="h-10 w-10 text-pink-deep drop-shadow-sm" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-char">{c.title}</h3>
                  <p className="mt-2 text-[12px] text-muted">{c.meta}</p>
                  <p className="mt-3 text-[12px] font-semibold text-pink-deep">{c.cta}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/content"
              className="inline-block rounded-full border-2 border-pink-deep px-8 py-3.5 text-[13px] font-semibold text-pink-deep transition hover:bg-pink-light"
            >
              See All Content →
            </Link>
          </div>
        </div>
      </section>

      {/* Speaking CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2D1520] to-[#1A0D10] px-6 py-20 text-white lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_40%,rgba(242,167,195,0.08)_0%,transparent_70%)]" />
        <div className="relative z-[1] mx-auto grid max-w-content gap-12 lg:grid-cols-[1fr_340px] lg:items-center">
          <div>
            <Eyebrow light>Book Eno to Speak</Eyebrow>
            <SectionHeading light>
              The Stage Is <em className="text-pink not-italic">Waiting.</em>
            </SectionHeading>
            <PinkRule light />
            <p className="max-w-xl text-[16px] leading-[1.85] text-white/65">
              Eno Eka has spoken at conferences, summits, and corporate events across Canada, the USA, and Nigeria. Her keynotes have been described as transformative, practical, and unforgettable. If you are looking for a speaker who moves a room — and leaves your audience with tools they use the next morning — book Eno.
            </p>
            <ul className="mt-6 space-y-2.5 text-[14px] font-light text-white/65">
              {home.speakingBullets.map((t) => (
                <li key={t} className="flex gap-2">
                  <IconDiamond className="mt-1.5 h-2 w-2 shrink-0 text-pink" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/speaking"
                className="rounded-full bg-pink-deep px-8 py-3.5 text-[13px] font-semibold text-white transition hover:bg-pink"
              >
                Explore Speaking Topics →
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-white/50 px-8 py-3.5 text-[13px] font-semibold text-white transition hover:border-pink hover:text-pink"
              >
                Submit a Speaking Inquiry →
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-8 text-char shadow-xl">
            <p className="text-[10px] font-semibold uppercase tracking-[2px] text-pink-deep">
              Book Eno for Your Event
            </p>
            <h3 className="mt-2 font-display text-[22px] font-bold">
              Available for Keynotes &amp; Workshops
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-mid">
              Conferences, summits, corporate events, and panels. Canada · USA · Nigeria. International welcome.
            </p>
            <Link
              href="/contact"
              className="mt-6 block w-full rounded-full bg-pink-deep py-3.5 text-center text-[13px] font-semibold text-white transition hover:bg-pink"
            >
              Submit Speaking Inquiry →
            </Link>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-pink-light px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-content">
          <Eyebrow>Recognition &amp; Awards</Eyebrow>
          <SectionHeading>
            Recognized. Globally. <em className="text-pink-deep not-italic">Repeatedly.</em>
          </SectionHeading>
          <PinkRule />
          <div className="mt-10 flex flex-wrap gap-2.5">
            {home.awards.map((a) => (
              <span
                key={a}
                className="inline-flex items-center rounded-full border border-pink-mid bg-pink-light px-4 py-2 text-[11px] font-semibold text-pink-deep"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Book */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-content">
          <Eyebrow>The Book</Eyebrow>
          <SectionHeading>
            The Six-Figure <em className="text-pink-deep not-italic">Business Analyst.</em>
          </SectionHeading>
          <PinkRule />
          <div className="mt-10 grid gap-12 lg:grid-cols-[300px_1fr] lg:items-center">
            <div className="flex justify-center">
              <div className="w-[220px] -rotate-2 cursor-pointer rounded-lg bg-gradient-to-br from-pink-deep to-[#8B4F72] p-8 text-center text-white shadow-xl transition hover:rotate-0 hover:shadow-2xl">
                <img
                  src="https://businessanalysisschool.com/six-figure.webp"
                  alt="The Six-Figure Business Analyst book cover"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="text-[15px] leading-[1.85] text-mid">
              <p>{home.book.authorNote}</p>
              <p className="mt-4">{home.book.body}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gold px-6 py-2.5 text-[12px] font-semibold text-char transition hover:bg-gold-dark"
                >
                  Buy on Amazon →
                </a>
                <Link
                  href="/book"
                  className="rounded-full border-[1.5px] border-pink-deep px-6 py-2.5 text-[12px] font-semibold text-pink-deep transition hover:bg-pink-light"
                >
                  Read a Free Chapter →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="bg-cream px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-content">
          <Eyebrow>The ENY Ecosystem</Eyebrow>
          <SectionHeading>
            Four Brands. One Mission.{" "}
            <em className="text-pink-deep not-italic">
              Transforming Professionals Globally.
            </em>
          </SectionHeading>
          <PinkRule />
          <p className="max-w-2xl text-[16px] leading-[1.85] text-mid">{home.ecosystemIntro}</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((b) => (
              <a
                key={b.href}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-pink/10"
              >
                <p className={`text-[9px] font-semibold uppercase tracking-[2px] ${b.tagColor}`}>
                  {b.tag}
                </p>
                <h3 className="mt-2 font-display text-base font-bold text-char">{b.title}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-mid">{b.desc}</p>
                <p className="mt-4 text-[11px] font-semibold text-pink-deep">{b.cta} →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-content">
          <Eyebrow>Community Voices</Eyebrow>
          <SectionHeading>
            Their Words. <em className="text-pink-deep not-italic">Their Lives. Changed.</em>
          </SectionHeading>
          <PinkRule />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {home.testimonials.map((t) => (
              <blockquote
                key={t.who}
                className="rounded-xl border border-border bg-white p-7"
              >
                <span className="inline-block rounded-full border border-gold/30 bg-gold-light px-3.5 py-1 text-[10px] font-bold text-gold-dark">
                  {t.badge}
                </span>
                <p className="mt-4 font-display text-[14px] italic leading-relaxed text-char">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4">
                  <cite className="not-italic text-[12px] font-semibold text-navy">{t.who}</cite>
                  <p className="mt-1 text-[11px] text-muted">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-pink-deep px-6 py-20 text-white lg:px-12">
        <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <Eyebrow light>Newsletter</Eyebrow>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-bold leading-[1.05]">
              {home.newsletter.title}
            </h2>
            <p className="mt-4 text-[16px] leading-[1.8] text-white/65">{home.newsletter.sub}</p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </main>
  );
}
