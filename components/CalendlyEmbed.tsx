/**
 * Placeholder for Calendly inline embed.
 * Set NEXT_PUBLIC_CALENDLY_DISCOVERY or NEXT_PUBLIC_CALENDLY_SPEAKER in .env.local
 */
export function CalendlyEmbed({ variant }: { variant: "discovery" | "speaker" }) {
  const url =
    variant === "speaker"
      ? process.env.NEXT_PUBLIC_CALENDLY_SPEAKER
      : process.env.NEXT_PUBLIC_CALENDLY_DISCOVERY;

  if (!url) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-cream p-10 text-center text-sm text-mid">
        Calendly embed: add{" "}
        <code className="rounded bg-pink-light px-1">
          {variant === "speaker" ? "NEXT_PUBLIC_CALENDLY_SPEAKER" : "NEXT_PUBLIC_CALENDLY_DISCOVERY"}
        </code>{" "}
        to your environment, then replace this block with the Calendly inline widget.
      </div>
    );
  }

  return (
    <div className="min-h-[650px] overflow-hidden rounded-xl border border-border bg-white">
      <iframe
        title="Schedule a call"
        src={`${url}?hide_gdpr_banner=1`}
        className="h-[650px] w-full"
      />
    </div>
  );
}
