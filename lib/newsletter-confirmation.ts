import { createHmac, timingSafeEqual } from "node:crypto";

const TOKEN_LIFETIME_MS = 24 * 60 * 60 * 1000;

type NewsletterConfirmation = {
  name: string;
  email: string;
  issuedAt: number;
  expiresAt: number;
};

function isNewsletterConfirmation(value: unknown): value is NewsletterConfirmation {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    typeof value.name === "string" &&
    "email" in value &&
    typeof value.email === "string" &&
    "issuedAt" in value &&
    typeof value.issuedAt === "number" &&
    "expiresAt" in value &&
    typeof value.expiresAt === "number"
  );
}

export function getNewsletterConfirmationSecret(): string {
  const secret = process.env.NEWSLETTER_CONFIRMATION_SECRET;
  if (!secret || Buffer.byteLength(secret) < 32) {
    throw new Error("NEWSLETTER_CONFIRMATION_SECRET must be at least 32 bytes");
  }
  return secret;
}

export function createNewsletterConfirmationToken(
  name: string,
  email: string,
  secret: string
): string {
  const issuedAt = Date.now();
  const confirmation: NewsletterConfirmation = {
    name,
    email,
    issuedAt,
    expiresAt: issuedAt + TOKEN_LIFETIME_MS,
  };
  const payload = Buffer.from(JSON.stringify(confirmation)).toString("base64url");
  const signature = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function verifyNewsletterConfirmationToken(
  token: string,
  secret: string
): NewsletterConfirmation | null {
  if (token.length > 2048) return null;

  const [payload, signature, ...extra] = token.split(".");
  if (
    extra.length > 0 ||
    !payload ||
    !signature ||
    !/^[A-Za-z0-9_-]+$/.test(payload) ||
    !/^[A-Za-z0-9_-]+$/.test(signature)
  ) {
    return null;
  }

  const expected = createHmac("sha256", secret).update(payload).digest();
  const received = Buffer.from(signature, "base64url");
  if (received.length !== expected.length || !timingSafeEqual(received, expected)) {
    return null;
  }

  let confirmation: unknown;
  try {
    confirmation = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
  } catch {
    return null;
  }

  if (
    !isNewsletterConfirmation(confirmation) ||
    confirmation.name.length === 0 ||
    confirmation.name.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(confirmation.email) ||
    confirmation.email.length > 254 ||
    confirmation.issuedAt > Date.now() + 60_000 ||
    confirmation.expiresAt <= Date.now() ||
    confirmation.expiresAt <= confirmation.issuedAt ||
    confirmation.expiresAt - confirmation.issuedAt > TOKEN_LIFETIME_MS
  ) {
    return null;
  }

  return {
    name: confirmation.name,
    email: confirmation.email,
    issuedAt: confirmation.issuedAt,
    expiresAt: confirmation.expiresAt,
  };
}
