"use client";

import { useState } from "react";
import { ghlTags } from "@/lib/copy";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [consent, setConsent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      setStatus("err");
      return;
    }
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    const payload = {
      tag: ghlTags.newsletter,
      firstName: String(fd.get("firstName") ?? ""),
      email: String(fd.get("email") ?? ""),
      source: "newsletter_signup",
    };
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed");
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  }

  if (status === "ok") {
    return (
      <p className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center text-white">
        You&apos;re in. Watch your inbox for Eno&apos;s next insights.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/20 bg-white/10 p-8"
    >
      <label className="sr-only" htmlFor="nl-first">
        First name
      </label>
      <input
        id="nl-first"
        name="firstName"
        type="text"
        required
        placeholder="First Name"
        className="mb-3 w-full rounded-full border-[1.5px] border-white/20 bg-white/10 px-4 py-3 text-[14px] text-white placeholder:text-white/45 outline-none focus:border-white/50"
      />
      <label className="sr-only" htmlFor="nl-email">
        Email
      </label>
      <input
        id="nl-email"
        name="email"
        type="email"
        required
        placeholder="Email Address"
        className="mb-3 w-full rounded-full border-[1.5px] border-white/20 bg-white/10 px-4 py-3 text-[14px] text-white placeholder:text-white/45 outline-none focus:border-white/50"
      />
      <label className="mb-4 flex cursor-pointer items-start gap-2 text-[12px] text-white/70">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1"
        />
        <span>
          I agree to receive email updates and accept the{" "}
          <a href="/privacy" className="underline">
            privacy policy
          </a>
          . (CASL)
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-white py-3.5 text-[13px] font-bold text-pink-deep transition hover:bg-pink-light disabled:opacity-60"
      >
        {status === "loading"
          ? "Sending…"
          : "Yes, I’m In — Send Me Eno’s Weekly Insights →"}
      </button>
      <p className="mt-3 text-center text-[12px] text-white/40">
        No spam. Unsubscribe any time.
      </p>
      {status === "err" && (
        <p className="mt-3 text-center text-[12px] text-red-200">
          Could not submit — check consent or try again. Ensure GHL_WEBHOOK_URL is set on the server.
        </p>
      )}
    </form>
  );
}
