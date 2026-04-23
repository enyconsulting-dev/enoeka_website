import { NextResponse } from "next/server";
import { postToWebhook } from "@/lib/webhook";

/**
 * Handles newsletter signup form submissions.
 * Set NEWSLETTER_WEBHOOK_URL in .env.local (server-only).
 */
export async function POST(req: Request) {
  const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "NEWSLETTER_WEBHOOK_URL is not configured" },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  try {
    await postToWebhook(body, webhookUrl);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: (error as Error).message },
      { status: 502 }
    );
  }
}