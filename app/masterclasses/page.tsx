import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PinkRule, SectionHeading } from "@/components/SectionHeading";
import { masterclasses } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Masterclasses & Training | Eno Eka",
  description:
    "Masterclasses and workshops across ENY schools — enrollment links open in new tabs to BAS, BCS, and TLBS.",
};

export default function MasterclassesPage() {
  return (
    <main className="px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-content">
        <Eyebrow>Training</Eyebrow>
        <SectionHeading>
          Masterclasses &amp; <em className="text-pink-deep not-italic">Programs</em>
        </SectionHeading>
        <PinkRule />
        <p className="mt-4 max-w-2xl text-mid">
          Every program links to the relevant ENY school enrollment page. Opens in a new tab.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {masterclasses.map((m) => (
            <a
              key={m.href}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-gradient-to-br from-pink-light to-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-pink-deep">
                {m.school}
              </p>
              <h2 className="mt-2 font-display text-xl font-bold text-char">{m.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-mid">{m.desc}</p>
              <span className="mt-6 inline-block text-[13px] font-semibold text-pink-deep">
                Visit school →
              </span>
            </a>
          ))}
        </div>
        <Link
          href="/content"
          className="mt-12 inline-block font-semibold text-pink-deep underline"
        >
          ← Content Hub
        </Link>
      </div>
    </main>
  );
}
