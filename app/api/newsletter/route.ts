import { NextResponse } from "next/server";
import { ghlTags } from "@/lib/copy";
import { site } from "@/lib/site";
import { postToWebhook } from "@/lib/webhook";
import {
  createNewsletterConfirmationToken,
  getNewsletterConfirmationSecret,
} from "@/lib/newsletter-confirmation";
import {
  isJsonRecord,
  isValidEmail,
  readBoundedString,
} from "@/lib/input-validation";

/**
 * Sends new signups to a pending-confirmation workflow.
 */
export async function POST(req: Request) {
  const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;
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

  if (!isJsonRecord(body) || body.consent !== true) {
    return NextResponse.json(
      { ok: false, error: "Valid signup data and consent are required" },
      { status: 400 }
    );
  }

  const name = readBoundedString(body, "name", 100);
  const email = readBoundedString(body, "email", 254);
  if (!name || !email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid signup data" },
      { status: 400 }
    );
  }

  const token = createNewsletterConfirmationToken(name, email, secret);
  const confirmationUrl = new URL("/newsletter/confirm", site.url);
  confirmationUrl.searchParams.set("token", token);
  const payload = {
    tag: ghlTags.newsletterPending,
    inquiryType: "Newsletter Signup",
    name,
    email,
    phone: "",
    message: "",
    source: "newsletter_signup",
    consent: true,
    consentRecordedAt: new Date().toISOString(),
    confirmationUrl: confirmationUrl.toString(),
  };

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