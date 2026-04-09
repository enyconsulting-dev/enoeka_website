import type { Metadata } from "next";
import Link from "next/link";
import { IconDiamond } from "@/components/icons";
import { Eyebrow, PinkRule, SectionHeading } from "@/components/SectionHeading";
import { about } from "@/lib/copy";
import { ecosystem } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Eno Eka | Nigeria to Canada — Speaker, Author, CEO | ENY Consulting",
  description:
    "From Nigerian immigrant to Canada's Most Powerful Women Top 100. Eno Eka's full story — career, awards, mission, and the journey that built a multi-continental brand.",
};

export default function AboutPage() {
  return (
    <main className="px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-content">
        <Eyebrow>About</Eyebrow>
        <h1 className="font-display text-[clamp(2rem,5vw,4rem)] font-black italic leading-tight text-char">
          {about.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-mid">
          {about.heroSub}
        </p>

        <section className="mt-20">
          <SectionHeading>{about.originTitle}</SectionHeading>
          <PinkRule />
          <div className="mt-8 max-w-2xl space-y-6 text-mid">
            {about.origin.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-2xl bg-pink-light p-10">
          <h2 className="font-display text-2xl font-bold italic text-char">Mission</h2>
          <p className="mt-4 max-w-2xl font-display text-xl italic leading-relaxed text-char">
            {about.mission}
          </p>
        </section>

        <section className="mt-20">
          <SectionHeading>
            Core <em className="text-pink-deep not-italic">Values</em>
          </SectionHeading>
          <PinkRule />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {about.values.map((v) => (
              <li key={v.label} className="rounded-xl border border-border bg-white p-6">
                <span className="font-semibold text-pink-deep">{v.label}</span> — {v.text}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20">
          <SectionHeading>
            Milestones <em className="text-pink-deep not-italic">Timeline</em>
          </SectionHeading>
          <PinkRule />
          <ul className="mt-8 space-y-4 border-l-2 border-pink-mid pl-6">
            {about.timeline.map((m) => (
              <li key={m} className="relative text-mid before:absolute before:-left-[29px] before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-pink-deep">
                {m}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20">
          <SectionHeading>{about.communityTitle}</SectionHeading>
          <PinkRule />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {about.community.map((c) => (
              <li key={c} className="flex gap-2 text-[15px] text-mid">
                <IconDiamond className="mt-1 h-2 w-2 shrink-0 text-pink" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20">
          <SectionHeading>
            Founder of <em className="text-pink-deep not-italic">the ENY Ecosystem</em>
          </SectionHeading>
          <PinkRule />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((b) => (
              <a
                key={b.href}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border bg-cream p-6 transition hover:shadow-md"
              >
                <h3 className="font-display text-base font-bold">{b.title}</h3>
                <p className="mt-2 text-xs text-mid">{b.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            href="/speaking"
            className="rounded-full bg-pink-deep px-8 py-3 text-sm font-semibold text-white"
          >
            Book Eno to Speak
          </Link>
          <Link
            href="/work-with-me"
            className="rounded-full border-2 border-pink-deep px-8 py-3 text-sm font-semibold text-pink-deep"
          >
            Work With Me
          </Link>
        </div>
      </div>
    </main>
  );
}
