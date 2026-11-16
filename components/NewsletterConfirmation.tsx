"use client";

import { useState } from "react";

export function NewsletterConfirmation() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onConfirm() {
    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) {
      setStatus("err");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      if (!response.ok) throw new Error("Confirmation failed");
      window.history.replaceState(null, "", window.location.pathname);
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  }

  return (
    <div className="mt-8">
      {status === "ok" ? (
        <p className="text-mid">Your subscription is confirmed. Thank you.</p>
      ) : (
        <>
          <button
            type="button"
            onClick={onConfirm}
            disabled={status === "loading"}
            className="rounded-full bg-pink-deep px-8 py-3 text-sm font-semibold text-white disabled:opacity-60"
          >
            {status === "loading" ? "Confirming…" : "Confirm subscription"}
          </button>
          {status === "err" && (
            <p className="mt-4 text-sm text-red-600">
              This confirmation link is invalid, expired, or could not be processed.
            </p>
          )}
        </>
      )}
    </div>
  );
}
