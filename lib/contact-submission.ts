import { ghlTags } from "@/lib/copy";
import {
  isJsonRecord,
  isValidEmail,
  readBoundedString,
  type JsonRecord,
} from "@/lib/input-validation";

const inquiryTypes = [
  "Speaking",
  "Media / Press",
  "Business",
  "Community / Fan",
  "Podcast Guest",
  "Other",
] as const;

function isInquiryType(value: string): value is (typeof inquiryTypes)[number] {
  return inquiryTypes.some((inquiryType) => inquiryType === value);
}

export function createContactSubmissionPayload(body: unknown): JsonRecord | null {
  if (!isJsonRecord(body) || body.consent !== true) return null;

  const source = body.source;
  const name = readBoundedString(body, "name", 100);
  const email = readBoundedString(body, "email", 254);
  const phone = readBoundedString(body, "phone", 64, true);
  const message = readBoundedString(body, "message", 5000, true);

  if (
    !name ||
    !email ||
    !isValidEmail(email) ||
    phone === null ||
    message === null
  ) {
    return null;
  }

  if (source === "newsletter_signup") {
    return {
      tag: ghlTags.newsletter,
      inquiryType: "Newsletter Signup",
      name,
      email,
      phone: "",
      message: "",
      source,
      consent: true,
      consentRecordedAt: new Date().toISOString(),
    };
  }

  const inquiryType = readBoundedString(body, "inquiryType", 64);
  if (source === "contact_inquiry") {
    if (!inquiryType || !isInquiryType(inquiryType) || !message) return null;

    const tag =
      inquiryType === "Media / Press"
        ? ghlTags.mediaInquiry
        : inquiryType === "Speaking"
          ? ghlTags.speakerInquiry
          : ghlTags.contact;
    return {
      tag,
      inquiryType,
      name,
      email,
      phone,
      message,
      source,
      consent: true,
      consentRecordedAt: new Date().toISOString(),
    };
  }

  if (source === "press_download" && inquiryType === "Press Download") {
    return {
      tag: ghlTags.mediaInquiry,
      inquiryType,
      name,
      email,
      phone,
      source,
      consent: true,
      consentRecordedAt: new Date().toISOString(),
    };
  }

  return null;
}
