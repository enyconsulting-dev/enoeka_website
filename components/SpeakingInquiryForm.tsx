"use client";

import { useState } from "react";
import { ghlTags } from "@/lib/copy";

export function SpeakingInquiryForm() {
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
      tag: ghlTags.speakerInquiry,
      eventName: String(fd.get("eventName") ?? ""),
      eventDate: String(fd.get("eventDate") ?? ""),
      eventType: String(fd.get("eventType") ?? ""),
      audienceSize: String(fd.get("audienceSize") ?? ""),
      topic: String(fd.get("topic") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      notes: String(fd.get("notes") ?? ""),
      source: "Eno website",
    };
    try {
      const res = await fetch("/api/speaking", {
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
        Thank you — your speaking inquiry was submitted. The team will follow up; you can also book a discovery call via Calendly below.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="eventName"
          required
          placeholder="Event name"
          className="rounded-lg border border-border px-4 py-3 text-sm"
        />
        <input
          name="eventDate"
          required
          placeholder="Event date(s)"
          className="rounded-lg border border-border px-4 py-3 text-sm"
        />
      </div>
      <select
        name="eventType"
        required
        className="w-full rounded-lg border border-border px-4 py-3 text-sm"
      >
        <option value="">Event type</option>
        <option>Conference</option>
        <option>Summit</option>
        <option>Corporate</option>
        <option>Panel</option>
        <option>Virtual</option>
        <option>Workshop</option>
      </select>
      <input
        name="audienceSize"
        placeholder="Expected audience size"
        className="w-full rounded-lg border border-border px-4 py-3 text-sm"
      />
      <input
        name="topic"
        placeholder="Preferred keynote topic"
        className="w-full rounded-lg border border-border px-4 py-3 text-sm"
      />
      <input
        name="budget"
        placeholder="Budget range (optional)"
        className="w-full rounded-lg border border-border px-4 py-3 text-sm"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Your name"
          className="rounded-lg border border-border px-4 py-3 text-sm"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="rounded-lg border border-border px-4 py-3 text-sm"
        />
      </div>
      <input
        name="phone"
        placeholder="Phone"
        className="w-full rounded-lg border border-border px-4 py-3 text-sm"
      />
      <textarea
        name="notes"
        placeholder="Additional notes"
        rows={4}
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
        {status === "loading" ? "Sending…" : "Submit Speaking Inquiry →"}
      </button>
      {status === "err" && (
        <p className="text-sm text-red-600">
          Confirm consent or configure GHL_WEBHOOK_URL on the server.
        </p>
      )}
    </form>
  );
}
