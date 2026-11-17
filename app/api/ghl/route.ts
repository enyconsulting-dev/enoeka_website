import { NextResponse } from "next/server";
import { createContactSubmissionPayload } from "@/lib/contact-submission";
import { verifyTurnstileRequest } from "@/lib/turnstile";

/**
 * Forwards JSON payloads to GoHighLevel inbound webhook.
 * Set GHL_WEBHOOK_URL in .env.local (server-only).
 */
export async function POST(req: Request) {
  const webhook = process.env.GHL_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json(
      { ok: false, error: "GHL_WEBHOOK_URL is not configured" },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const payload = createContactSubmissionPayload(body);
  if (!payload) {
    return NextResponse.json(
      { ok: false, error: "Invalid form data or consent" },
      { status: 400 }
    );
  }

  const turnstile = await verifyTurnstileRequest(body, "contact", req);
  if (!turnstile.ok) {
    return NextResponse.json(
      { ok: false, error: turnstile.error },
      { status: turnstile.status }
    );
  }

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { ok: false, error: "Upstream error", detail: text.slice(0, 200) },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
