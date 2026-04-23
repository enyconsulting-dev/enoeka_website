import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Eyebrow, PinkRule, SectionHeading } from "@/components/SectionHeading";
import { SpeakingInquiryForm } from "@/components/SpeakingInquiryForm";
import { speaking } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Book Eno Eka to Speak | International Keynote Speaker | Canada · USA · Nigeria",
  description:
    "Book Eno Eka for your next conference, summit, or corporate event. Award-winning speaker on business analysis, digital transformation, personal brand, AI, and entrepreneurship.",
};

export default function SpeakingPage() {
  return (
    <main className="px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-content">
        <Eyebrow>Speaking</Eyebrow>
        <h1 className="font-display text-[clamp(2rem,5vw,4rem)] font-black italic text-char">
          {speaking.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-mid">
          {speaking.heroSub}
        </p>

        <section className="mt-16 grid gap-8 md:grid-cols-3">
          {speaking.why.map((w) => (
            <div key={w.title} className="rounded-xl border border-border bg-pink-light/50 p-6">
              <h2 className="font-display text-lg font-bold text-char">{w.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-mid">{w.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-20">
          <SectionHeading>
            Keynote <em className="text-pink-deep not-italic">Topics</em>
          </SectionHeading>
          <PinkRule />
          <div className="mt-10 grid gap-6">
            {speaking.topics.map((t, i) => (
              <article
                key={t.title}
                className="rounded-xl border border-border bg-white p-8 transition hover:border-pink-mid hover:bg-pink-light/30"
              >
                <span className="font-display text-5xl font-light text-pink-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-char">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mid">{t.body}</p>
                <p className="mt-3 text-[12px] text-muted">
                  <strong className="text-char">Audience:</strong> {t.audience}
                </p>
                <p className="text-[12px] text-muted">
                  <strong className="text-char">Duration:</strong> {t.duration}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading>
            Event <em className="text-pink-deep not-italic">Formats</em>
          </SectionHeading>
          <PinkRule />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {speaking.formats.map((f) => (
              <div key={f.title} className="rounded-xl border border-border p-6">
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-mid">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading>
            Organizer <em className="text-pink-deep not-italic">Testimonials</em>
          </SectionHeading>
          <PinkRule />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {speaking.organizerQuotes.map((q) => (
              <blockquote
                key={q.who}
                className="rounded-xl border border-border bg-cream p-6"
              >
                <p className="font-display text-sm italic leading-relaxed text-char">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <footer className="mt-4 text-[12px] font-semibold text-navy">
                  {q.who}
                  <span className="block font-normal text-muted">{q.where}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading>
            Speaking <em className="text-pink-deep not-italic">Inquiry</em>
          </SectionHeading>
          <PinkRule />
          
          <div className="mt-8 max-w-2xl">
            <SpeakingInquiryForm />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold text-char">
            Speaker Booking Consultation
          </h2>
          <p className="mt-2 text-sm text-mid">
            30-minute discovery call
          </p>
          <div className="mt-4">
            <CalendlyEmbed variant="speaker" />
          </div>
        </section>

        <div className="mt-12">
          <Link href="/contact" className="font-semibold text-pink-deep underline">
            General contact →
          </Link>
        </div>
      </div>
    </main>
  );
}
