import Link from "next/link";
import { ecosystem, site, socialLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-char px-6 pb-9 pt-[72px] text-white lg:px-12">
      <div className="mx-auto grid max-w-content gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div>
          <div className="font-display text-[22px] font-bold italic text-white">
            {site.name}
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-white/35">
            Building Empires.
            <br />
            Teaching Others How.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-pink/20 px-3 py-1.5 text-[11px] font-semibold text-pink/50 transition hover:border-pink hover:text-pink"
              >
                {s.label}
              </a>
            ))}
          </div>
          <p className="mt-3 text-[12px] text-pink/40">{site.handle}</p>
        </div>

        <div>
          <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-pink/40">
            About
          </h4>
          <ul className="space-y-2 text-[13px] text-white/55">
            <li>
              <Link href="/about" className="hover:text-pink">
                My Story
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink">
                Awards &amp; Recognition
              </Link>
            </li>
            <li>
              <Link href="/speaking" className="hover:text-pink">
                Speaking
              </Link>
            </li>
            <li>
              <Link href="/book" className="hover:text-pink">
                The Book
              </Link>
            </li>
            <li>
              <Link href="/press" className="hover:text-pink">
                Press &amp; Media
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-pink/40">
            Content
          </h4>
          <ul className="space-y-2 text-[13px] text-white/55">
            <li>
              <Link href="/youtube" className="hover:text-pink">
                YouTube
              </Link>
            </li>
            <li>
              <Link href="/podcast" className="hover:text-pink">
                Podcast
              </Link>
            </li>
            <li>
              <Link href="/content" className="hover:text-pink">
                Blog &amp; Articles
              </Link>
            </li>
            <li>
              <Link href="/book" className="hover:text-pink">
                The Book
              </Link>
            </li>
            <li>
              <Link href="/content" className="hover:text-pink">
                Free Resources
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-pink/40">
            Work With Me
          </h4>
          <ul className="space-y-2 text-[13px] text-white/55">
            <li>
              <Link href="/speaking" className="hover:text-pink">
                Book to Speak
              </Link>
            </li>
            {ecosystem.slice(0, 3).map((b) => (
              <li key={b.href}>
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink"
                >
                  {b.title.replace(" Inc.", "")}
                </a>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-pink">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-content border-t border-white/10 pt-8 text-center text-[12px] text-white/35">
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span>© {new Date().getFullYear()} Eno Eka. All rights reserved.</span>
          <Link href="/privacy" className="hover:text-pink">
            Privacy
          </Link>
          <span aria-hidden>·</span>
          <Link href="/terms" className="hover:text-pink">
            Terms
          </Link>
          <span aria-hidden>·</span>
          <span>{site.email}</span>
        </p>
        <p className="mt-1">
          {site.handle} · enoeka.com
        </p>
      </div>
    </footer>
  );
}
