import { IconDiamond } from "@/components/icons";

export function TickerStrip({ items }: { items: readonly string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-pink-mid bg-pink-light py-3">
      <div className="animate-ticker flex w-max gap-10 whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex flex-shrink-0 items-center gap-3 text-[11px] font-semibold uppercase tracking-[2px] text-pink-deep"
          >
            <IconDiamond className="h-2 w-2 text-pink" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
