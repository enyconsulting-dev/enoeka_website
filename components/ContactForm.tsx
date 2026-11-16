"use client";

import { useState } from "react";
import { ghlTags } from "@/lib/copy";

const types = [
  "Speaking",
  "Media / Press",
  "Business",
  "Community / Fan",
  "Podcast Guest",
  "Other",
] as const;

export function ContactForm() {
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
    const inquiryType = String(fd.get("inquiryType") ?? "");
    const tag =
      inquiryType === "Media / Press"
        ? ghlTags.mediaInquiry
        : inquiryType === "Speaking"
          ? ghlTags.speakerInquiry
          : ghlTags.contact;
    const payload = {
      tag,
      inquiryType,
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
      source: "contact_inquiry",
      consent: true,
    };
    try {
      const res = await fetch("/api/contact", {
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
      <p className="rounded-xl border border-border bg-pink-light/50 p-8 text-mid">
        Thank you — your message has been received. The team typically responds within 3 business days.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-lg space-y-4">
      <div>
        <label className="text-sm font-medium text-mid" htmlFor="inquiryType">
          Inquiry type
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm"
        >
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <input
        name="name"
        required
        placeholder="Full name"
        className="w-full rounded-lg border border-border px-4 py-3 text-sm"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className="w-full rounded-lg border border-border px-4 py-3 text-sm"
      />
      <input
        name="phone"
        placeholder="Phone (optional)"
        className="w-full rounded-lg border border-border px-4 py-3 text-sm"
      />
      <textarea
        name="message"
        required
        placeholder="How can we help?"
        rows={6}
        className="w-full rounded-lg border border-border px-4 py-3 text-sm"
      />
      <label className="flex cursor-pointer items-start gap-2 text-[13px] text-mid">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1"
        />
        <span>
          I agree to be contacted about this inquiry and accept the{" "}
          <a href="/privacy" className="font-semibold text-pink-deep underline">
            privacy policy
          </a>
          . (CASL)
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-pink-deep px-8 py-3 text-sm font-semibold text-white disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
      {status === "err" && (
        <p className="text-sm text-red-600">
          Please confirm consent, or try again after GHL_WEBHOOK_URL is configured.
        </p>
      )}
    </form>
  );
}
