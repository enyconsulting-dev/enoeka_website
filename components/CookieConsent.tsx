"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "enoeka_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[1000] border-t border-border bg-warm-white p-4 shadow-[0_-8px_32px_rgba(0,0,0,0.08)] md:p-6"
    >
      <div className="mx-auto flex max-w-content flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-[13px] leading-relaxed text-mid">
          We use cookies and similar technologies for analytics and marketing (e.g. GA4, Meta, LinkedIn) per our{" "}
          <Link href="/privacy" className="font-semibold text-pink-deep underline">
            Privacy Policy
          </Link>
          . You can change preferences anytime.
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-pink-deep px-8 py-3 text-[13px] font-semibold text-white transition hover:bg-pink"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
