import { NextResponse } from "next/server";
import { isJsonRecord } from "@/lib/input-validation";
import { createContactSubmissionPayload } from "@/lib/contact-submission";
import { ghlWebhookUrl, postToWebhook } from "@/lib/webhook";

/**
 * Handles newsletter signups using the existing GoHighLevel workflow.
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!isJsonRecord(body) || body.source !== "newsletter_signup") {
    return NextResponse.json(
      { ok: false, error: "Invalid newsletter signup" },
      { status: 400 }
    );
  }

  const payload = createContactSubmissionPayload(body);
  if (!payload) {
    return NextResponse.json(
      { ok: false, error: "Invalid newsletter signup or consent" },
      { status: 400 }
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