import { NextResponse } from "next/server";
import { createContactSubmissionPayload } from "@/lib/contact-submission";
import { verifyTurnstileRequest } from "@/lib/turnstile";
import { ghlWebhookUrl, postToWebhook } from "@/lib/webhook";

/**
 * Handles contact form submissions.
 */
export async function POST(req: Request) {
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

  try {
    await postToWebhook(payload, ghlWebhookUrl);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Webhook request failed",
      },
      { status: 502 }
    );
  }
}
