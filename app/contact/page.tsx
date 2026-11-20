import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { ContactForm } from "@/components/ContactForm";
import { Eyebrow, PinkRule, SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/seo";
import { site, socialLinks } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact Eno Eka | Booking, Media, and Business Inquiries",
  pathname: "/contact",
  description:
    "Reach Eno Eka for speaking bookings, media collaborations, business partnerships, and community inquiries. Response within 3 business days.",
});

export default function ContactPage() {
  return (
    <main className="px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-content">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-char">
          Let&apos;s Connect.
        </h1>
        <p className="mt-4 max-w-2xl text-mid">
          Speaking, media, business, and community — select an inquiry type and the team will
          route your message. Response within 3 business days.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_420px]">
          <div>
            <SectionHeading>
              Send a <em className="text-pink-deep not-italic">message</em>
            </SectionHeading>
            <PinkRule />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold">Email</h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block font-semibold text-pink-deep underline"
            >
              {site.email}
            </a>
            <h2 className="mt-16 font-display text-xl font-bold">Schedule a call</h2>
            <p className="mt-2 text-sm text-mid">
              Discovery call for speaking and business inquiries.
            </p>
            <div className="mt-4">
              <CalendlyEmbed variant="discovery" />
            </div>
          </div>
        </div>

        <section className="mt-20">
          <SectionHeading>
            Social <em className="text-pink-deep not-italic">@misspragmatic</em>
          </SectionHeading>
          <PinkRule />
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-mid transition hover:border-pink-deep hover:text-pink-deep"
              >
                {s.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
