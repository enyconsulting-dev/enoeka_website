import { NextResponse } from "next/server";
import { createContactSubmissionPayload } from "@/lib/contact-submission";
import { postToWebhook } from "@/lib/webhook";

/**
 * Handles contact form submissions.
 */
export async function POST(req: Request) {
  const webhookUrl = "https://services.leadconnectorhq.com/hooks/Qum6zwDsfvHsbXiehFQR/webhook-trigger/017b860c-fa70-4444-b8e9-a789126274b8";

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

  try {
    await postToWebhook(payload, webhookUrl);
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
