import { NextResponse } from "next/server";
import { ghlTags } from "@/lib/copy";
import {
  isJsonRecord,
  isValidEmail,
  readBoundedString,
} from "@/lib/input-validation";
import { verifyTurnstileRequest } from "@/lib/turnstile";
import { ghlWebhookUrl, postToWebhook } from "@/lib/webhook";

const eventTypes = ["Conference", "Summit", "Corporate", "Panel", "Virtual", "Workshop"];

/**
 * Handles speaking inquiry form submissions.
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!isJsonRecord(body) || body.consent !== true) {
    return NextResponse.json(
      { ok: false, error: "Valid form data and consent are required" },
      { status: 400 }
    );
  }

  const eventName = readBoundedString(body, "eventName", 120);
  const eventDate = readBoundedString(body, "eventDate", 120);
  const eventType = readBoundedString(body, "eventType", 32);
  const audienceSize = readBoundedString(body, "audienceSize", 64, true);
  const topic = readBoundedString(body, "topic", 200, true);
  const budget = readBoundedString(body, "budget", 100, true);
  const name = readBoundedString(body, "name", 100);
  const email = readBoundedString(body, "email", 254);
  const phone = readBoundedString(body, "phone", 64, true);
  const notes = readBoundedString(body, "notes", 3000, true);

  if (
    !eventName ||
    !eventDate ||
    !eventType ||
    !eventTypes.includes(eventType) ||
    audienceSize === null ||
    topic === null ||
    budget === null ||
    !name ||
    !email ||
    !isValidEmail(email) ||
    phone === null ||
    notes === null
  ) {
    return NextResponse.json(
      { ok: false, error: "Invalid speaking inquiry" },
      { status: 400 }
    );
  }

  const payload = {
    tag: ghlTags.speakerInquiry,
    eventName,
    eventDate,
    eventType,
    audienceSize,
    topic,
    budget,
    name,
    email,
    phone,
    notes,
    source: "Eno website",
    consent: true,
    consentRecordedAt: new Date().toISOString(),
  };

  const turnstile = await verifyTurnstileRequest(body, "speaking", req);
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