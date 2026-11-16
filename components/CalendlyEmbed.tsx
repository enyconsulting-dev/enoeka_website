import Script from "next/script";

/**
 * Booking widget embed.
 * Uses custom booking widget for both discovery and speaker variants.
 */
export function CalendlyEmbed({ variant }: { variant: "discovery" | "speaker" }) {
  return (
    <div className="rounded-xl border border-border bg-white p-4">
      <iframe
        src="https://link.enyconsulting.ca/widget/booking/hc4DtRcp7YsHJV3Mrln7"
        style={{ width: "100%", border: "none", minHeight: "70vh" }}
        scrolling="yes"
        id="hc4DtRcp7YsHJV3Mrln7_1776943313164"
      />
      <br />
      <Script
        src="https://link.enyconsulting.ca/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
