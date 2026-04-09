"use client";

import { useMemo, useState } from "react";
import { contentHub } from "@/lib/copy";

export function ContentHubClient() {
  const [type, setType] = useState("All");
  const [topic, setTopic] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return contentHub.items.filter((item) => {
      if (type !== "All" && item.type !== type) return false;
      if (topic !== "All" && item.topic !== topic) return false;
      if (q.trim()) {
        const s = `${item.title} ${item.type}`.toLowerCase();
        if (!s.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [type, topic, q]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-end lg:gap-6">
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-wide text-muted">
            Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 block w-full min-w-[160px] rounded-lg border border-border bg-white px-3 py-2 text-sm"
          >
            {contentHub.filters.types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-wide text-muted">
            Topic
          </label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mt-1 block w-full min-w-[180px] rounded-lg border border-border bg-white px-3 py-2 text-sm"
          >
            {contentHub.filters.topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="text-[11px] font-semibold uppercase tracking-wide text-muted">
            Search
          </label>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search titles…"
            className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-border bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink/10"
          >
            <span className="inline-block rounded-full bg-pink-deep px-2.5 py-1 text-[9px] font-bold uppercase text-white">
              {item.type}
            </span>
            <h3 className="mt-3 font-display text-base font-bold text-char">{item.title}</h3>
            <p className="mt-2 text-[12px] text-muted">
              {item.topic} · {item.date}
            </p>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="py-12 text-center text-mid">No items match your filters.</p>
      )}
    </div>
  );
}
