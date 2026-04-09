/** Inline SVGs — no emoji */

export function IconDiamond({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 8 8"
      aria-hidden
      className={`shrink-0 ${className ?? ""}`}
      fill="currentColor"
    >
      <path d="M4 0 8 4 4 8 0 4z" />
    </svg>
  );
}

export function IconPlay({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

export function IconMic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-6 5.1s-6-2.1-6-5.1H5c0 3.41 2.72 6.23 6 6.72V22h2v-4.28c3.28-.49 6-3.31 6-6.72h-1.7z" />
    </svg>
  );
}

export function IconPen({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  );
}

export function ContentTypeIcon({
  pill,
  className,
}: {
  pill: string;
  className?: string;
}) {
  const c = className ?? "h-10 w-10 text-pink-deep";
  if (pill === "YouTube") return <IconPlay className={c} />;
  if (pill === "Podcast") return <IconMic className={c} />;
  return <IconPen className={c} />;
}
