"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLink =
  "text-[13px] font-medium text-mid hover:text-pink-deep transition-colors cursor-pointer";

function NavDropdown({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className={`${navLink} flex items-center gap-1 py-2`}
        aria-expanded="false"
        aria-haspopup="true"
      >
        {label}
        <span className="text-[10px] opacity-60 group-hover:rotate-180 transition-transform">
          ▾
        </span>
      </button>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full z-50 min-w-[220px] rounded-xl border border-border bg-warm-white py-2 shadow-lg transition-all">
        {children}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path ? "text-pink-deep" : "";

  return (
    <header className="sticky top-0 z-[999] h-[76px] border-b border-border bg-[rgba(254,252,251,0.97)] backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-content items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          className="font-display text-[22px] font-bold text-char"
          onClick={() => setOpen(false)}
        >
          Eno <span className="text-pink-deep">Eka</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          <Link href="/about" className={`${navLink} ${isActive("/about")}`}>
            About
          </Link>
          <Link
            href="/speaking"
            className={`${navLink} ${isActive("/speaking")}`}
          >
            Speaking
          </Link>

          <NavDropdown label="Content Hub">
            <Link href="/youtube" className="block px-4 py-2 text-[13px] text-mid hover:bg-pink-light hover:text-pink-deep">
              YouTube
            </Link>
            <Link href="/podcast" className="block px-4 py-2 text-[13px] text-mid hover:bg-pink-light hover:text-pink-deep">
              Podcast (Fireside Chat)
            </Link>
            <Link
              href="/masterclasses"
              className="block px-4 py-2 text-[13px] text-mid hover:bg-pink-light hover:text-pink-deep"
            >
              Masterclasses
            </Link>
            <Link href="/content" className="block px-4 py-2 text-[13px] text-mid hover:bg-pink-light hover:text-pink-deep">
              Blog &amp; Articles
            </Link>
            <div className="my-1 border-t border-border" />
            <Link
              href="/content"
              className="block px-4 py-2 text-[13px] font-semibold text-pink-deep hover:bg-pink-light"
            >
              See All Content →
            </Link>
          </NavDropdown>

          <Link href="/book" className={`${navLink} ${isActive("/book")}`}>
            Book
          </Link>

          <NavDropdown label="Work With Me">
            <Link href="/speaking" className="block px-4 py-2 text-[13px] text-mid hover:bg-pink-light hover:text-pink-deep">
              Book Eno to Speak
            </Link>
            <a
              href="https://enyconsulting.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-[13px] text-mid hover:bg-pink-light hover:text-pink-deep"
            >
              Hire Eno (Consulting)
            </a>
            <Link href="/work-with-me" className="block px-4 py-2 text-[13px] text-mid hover:bg-pink-light hover:text-pink-deep">
              ENY Schools
            </Link>
          </NavDropdown>

          <Link href="/press" className={`${navLink} ${isActive("/press")}`}>
            Press
          </Link>

          <Link
            href="/speaking"
            className="rounded-full bg-pink-deep px-6 py-2.5 text-[13px] font-semibold text-white transition hover:bg-pink hover:shadow-md"
          >
            Book Eno to Speak
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden rounded-md p-2 text-char"
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block h-0.5 w-6 bg-char" />
          <span className="mt-1.5 block h-0.5 w-6 bg-char" />
          <span className="mt-1.5 block h-0.5 w-6 bg-char" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[76px] z-[998] flex flex-col bg-warm-white px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-4 text-[15px]">
            <Link href="/about" onClick={() => setOpen(false)} className="text-mid">
              About
            </Link>
            <Link href="/speaking" onClick={() => setOpen(false)} className="text-mid">
              Speaking
            </Link>
            <Link href="/content" onClick={() => setOpen(false)} className="text-mid">
              Content Hub
            </Link>
            <Link href="/youtube" onClick={() => setOpen(false)} className="text-mid pl-4 text-sm">
              — YouTube
            </Link>
            <Link href="/podcast" onClick={() => setOpen(false)} className="text-mid pl-4 text-sm">
              — Podcast
            </Link>
            <Link href="/masterclasses" onClick={() => setOpen(false)} className="text-mid pl-4 text-sm">
              — Masterclasses
            </Link>
            <Link href="/book" onClick={() => setOpen(false)} className="text-mid">
              Book
            </Link>
            <Link href="/work-with-me" onClick={() => setOpen(false)} className="text-mid">
              Work With Me
            </Link>
            <Link href="/press" onClick={() => setOpen(false)} className="text-mid">
              Press
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 w-full rounded-full bg-pink-deep py-3 text-center font-semibold text-white"
            >
              Book Eno to Speak
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
