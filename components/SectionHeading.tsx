export function Eyebrow({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-4 flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[3.5px] before:h-px before:w-5 ${
        light
          ? "text-pink/80 before:bg-pink/50"
          : "text-pink-deep before:bg-pink-deep"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`font-display text-[clamp(1.75rem,3vw,3rem)] font-bold leading-[1.05] ${light ? "text-white" : "text-char"}`}
    >
      {children}
    </h2>
  );
}

export function PinkRule({ light }: { light?: boolean }) {
  return (
    <div
      className={`my-4 h-0.5 w-10 rounded-full ${light ? "bg-pink/80" : "bg-pink"}`}
    />
  );
}
