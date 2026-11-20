import Link from "next/link";
import { Eyebrow, PinkRule, SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/seo";
import { ecosystem } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Work with Eno Eka | Speaking and Consulting",
  pathname: "/work-with-me",
  description:
    "Book Eno to speak, enroll in an ENY school, hire ENY Consulting, or explore thought leadership advisory. All ways to work with Eno Eka in one place.",
});

export default function WorkWithMePage() {
  return (
    <main className="px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-content">
        <Eyebrow>Work With Me</Eyebrow>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-char">
          Ready to Work with Eno?
        </h1>
        <p className="mt-4 max-w-2xl text-mid">
          Speaking, schools, consulting, and advisory — choose the path that fits. All ENY
          ecosystem links open in a new tab.
        </p>

        <section className="mt-16">
          <SectionHeading>
            Ways to <em className="text-pink-deep not-italic">engage</em>
          </SectionHeading>
          <PinkRule />
          <div className="mt-10 grid gap-6">
            <Link
              href="/speaking"
              className="block rounded-2xl border border-border bg-pink-light p-8 transition hover:shadow-lg"
            >
              <h2 className="font-display text-2xl font-bold text-char">Book Eno to Speak</h2>
              <p className="mt-2 text-mid">
                Keynotes, workshops, panels, and corporate training across Canada, USA, and Nigeria.
              </p>
              <span className="mt-4 inline-block font-semibold text-pink-deep">
                Explore speaking →
              </span>
            </Link>
            {ecosystem.map((b) => (
              <a
                key={b.href}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-border bg-warm-white p-8 transition hover:shadow-lg"
              >
                <h2 className="font-display text-2xl font-bold text-char">{b.title}</h2>
                <p className="mt-2 text-mid">{b.desc}</p>
                <span className="mt-4 inline-block font-semibold text-pink-deep">
                  {b.cta} →
                </span>
              </a>
            ))}
          </div>
        </section>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-pink-deep px-8 py-3 text-sm font-semibold text-white"
          >
            Contact
          </Link>
          <Link
            href="/masterclasses"
            className="rounded-full border-2 border-pink-deep px-8 py-3 text-sm font-semibold text-pink-deep"
          >
            Masterclasses
          </Link>
        </div>
      </div>
    </main>
  );
}
