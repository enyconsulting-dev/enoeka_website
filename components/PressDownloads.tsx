"use client";

import { useState } from "react";
import { press, ghlTags } from "@/lib/copy";

const pdfs = {
  "Download headshots (hi-res)": "/EnoEka_Press_Kit.pdf",
  "Download speaker fact sheet": "/EnoEka_Speaker_One_Sheet.pdf",
};

export function PressDownloads() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedDownload, setSelectedDownload] = useState<string | null>(null);
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
      tag: ghlTags.mediaInquiry,
      inquiryType: "Press Download",
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      source: "press_download",
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
      // Download the PDF
      if (selectedDownload && pdfs[selectedDownload as keyof typeof pdfs]) {
        const link = document.createElement("a");
        link.href = pdfs[selectedDownload as keyof typeof pdfs];
        link.download = selectedDownload.replace("Download ", "") + ".pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      setDialogOpen(false);
      setStatus("idle");
    } catch {
      setStatus("err");
    }
  }

  return (
    <>
      <ul className="mt-8 space-y-4">
        {press.downloads.map((d) => (
          <li key={d.label}>
            <button
              type="button"
              onClick={() => {
                if (pdfs[d.label as keyof typeof pdfs]) {
                  setSelectedDownload(d.label);
                  setDialogOpen(true);
                }
              }}
              className="block w-full rounded-xl border border-border bg-white px-6 py-4 text-left transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="font-semibold text-char">{d.label}</span>
              <span className="mt-1 block text-sm text-muted">{d.note}</span>
              {pdfs[d.label as keyof typeof pdfs] ? (
                <span className="mt-2 text-[12px] font-semibold text-pink-deep">
                  Download PDF
                </span>
              ) : (
                <span className="mt-2 text-[12px] font-semibold text-pink-deep">
                  Assets pending — link when hosted
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>

      {dialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="mx-4 max-w-md rounded-xl bg-white p-6">
            <h2 className="font-display text-xl font-bold">Download {selectedDownload}</h2>
            <p className="mt-2 text-sm text-mid">
              Please provide your details to download the PDF.
            </p>
            <form onSubmit={onSubmit} className="mt-4 space-y-4">
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
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setDialogOpen(false)}
                  className="flex-1 rounded-full border border-border px-4 py-3 text-sm font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                    disabled={status === "loading"}
                  className="flex-1 rounded-full bg-pink-deep px-4 py-3 text-sm font-semibold text-white disabled:opacity-60"
                >
                  {status === "loading" ? "Submitting…" : "Download"}
                </button>
              </div>
              {status === "err" && (
                <p className="text-sm text-red-600">
                  Please confirm consent, or try again.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}