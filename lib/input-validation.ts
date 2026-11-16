export type JsonRecord = Record<string, unknown>;

export function isJsonRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function readBoundedString(
  body: JsonRecord,
  key: string,
  maxLength: number,
  optional = false
): string | null {
  const value = body[key];
  if (optional && value === undefined) return "";
  if (typeof value !== "string") return null;

  const normalized = value.trim();
  if ((!optional && normalized.length === 0) || normalized.length > maxLength) {
    return null;
  }
  return normalized;
}

export function isValidEmail(email: string): boolean {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
