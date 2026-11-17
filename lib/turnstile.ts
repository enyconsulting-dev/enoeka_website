import { isJsonRecord } from "@/lib/input-validation";

type VerificationResult =
  | { ok: true }
  | { ok: false; status: 400 | 403 | 502 | 503; error: string };

type TurnstileResponse = {
  success: boolean;
  action: string;
  hostname: string;
};

function isTurnstileResponse(value: unknown): value is TurnstileResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "success" in value &&
    typeof value.success === "boolean" &&
    "action" in value &&
    typeof value.action === "string" &&
    "hostname" in value &&
    typeof value.hostname === "string"
  );
}

export async function verifyTurnstileRequest(
  body: unknown,
  expectedAction: string,
  request: Request
): Promise<VerificationResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return {
      ok: false,
      status: 503,
      error: "Turnstile is not configured on the server",
    };
  }

  if (!isJsonRecord(body) || typeof body.turnstileToken !== "string") {
    return {
      ok: false,
      status: 400,
      error: "Complete the security check and try again",
    };
  }

  const token = body.turnstileToken;
  if (token.length === 0 || token.length > 2048) {
    return {
      ok: false,
      status: 400,
      error: "Complete the security check and try again",
    };
  }

  let response: Response;
  try {
    response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token }),
        signal: AbortSignal.timeout(5000),
      }
    );
  } catch {
    return {
      ok: false,
      status: 502,
      error: "Could not verify the security check. Please try again.",
    };
  }

  if (!response.ok) {
    return {
      ok: false,
      status: 502,
      error: "Could not verify the security check. Please try again.",
    };
  }

  let result: unknown;
  try {
    result = await response.json();
  } catch {
    return {
      ok: false,
      status: 502,
      error: "Could not verify the security check. Please try again.",
    };
  }

  if (
    !isTurnstileResponse(result) ||
    !result.success ||
    result.action !== expectedAction ||
    result.hostname.toLowerCase() !== new URL(request.url).hostname.toLowerCase()
  ) {
    return {
      ok: false,
      status: 403,
      error: "Security check failed. Please try again.",
    };
  }

  return { ok: true };
}
