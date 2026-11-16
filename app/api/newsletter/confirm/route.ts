import { NextResponse } from "next/server";
import { ghlTags } from "@/lib/copy";
import { postToWebhook } from "@/lib/webhook";
import {
  getNewsletterConfirmationSecret,
  verifyNewsletterConfirmationToken,
} from "@/lib/newsletter-confirmation";

export async function POST(req: Request) {
  const webhookUrl = process.env.NEWSLETTER_CONFIRMATION_WEBHOOK_URL;
  let secret: string;
  try {
    secret = getNewsletterConfirmationSecret();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Newsletter confirmation is not configured" },
      { status: 503 }
    );
  }

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "NEWSLETTER_CONFIRMATION_WEBHOOK_URL is not configured" },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("token" in body) ||
    typeof body.token !== "string"
  ) {
    return NextResponse.json(
      { ok: false, error: "A confirmation token is required" },
      { status: 400 }
    );
  }

  const confirmation = verifyNewsletterConfirmationToken(body.token, secret);
  if (!confirmation) {
    return NextResponse.json(
      { ok: false, error: "The confirmation link is invalid or expired" },
      { status: 400 }
    );
  }

  try {
    await postToWebhook(
      {
        tag: ghlTags.newsletter,
        inquiryType: "Newsletter Signup",
        name: confirmation.name,
        email: confirmation.email,
        source: "newsletter_confirmation",
        consent: true,
        consentConfirmedAt: new Date().toISOString(),
      },
      webhookUrl
    );
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
