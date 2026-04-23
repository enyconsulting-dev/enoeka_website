import { NextResponse } from "next/server";
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