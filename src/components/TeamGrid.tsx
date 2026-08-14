"use client";

import { useCallback, useEffect, useRef } from "react";
import { TeamCard } from "./TeamCard";
import type { Member } from "../content/types";
import type { Lang } from "../app/useLang";

/**
 * Team grid whose cards all get the caption height of the tallest card, so a
 * row looks even while every bio is collapsed. The grid stays
 * `align-items: start`, which means opening a bio grows only that one card and
 * pushes the content below it down — the neighbours keep their height.
 */
export function TeamGrid({
  members,
  lang,
  className,
}: {
  members: Member[];
  lang: Lang;
  className?: string;
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  const lastWidth = useRef(0);

  const equalize = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Drop the previous value first, otherwise we would measure our own
    // min-height instead of the captions' natural height.
    grid.style.setProperty("--team-caption-h", "auto");
    let tallest = 0;
    grid.querySelectorAll<HTMLElement>(".team-caption").forEach((caption) => {
      tallest = Math.max(tallest, caption.getBoundingClientRect().height);
    });
    if (tallest > 0) {
      grid.style.setProperty("--team-caption-h", `${Math.ceil(tallest)}px`);
    }
  }, []);

  useEffect(() => {
    equalize();
  }, [equalize, members, lang]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    lastWidth.current = grid.clientWidth;
    const observer = new ResizeObserver(() => {
      // Only a width change can re-wrap the text. Ignoring height changes also
      // keeps the observer from re-triggering on the min-height we just set.
      if (grid.clientWidth === lastWidth.current) return;
      lastWidth.current = grid.clientWidth;
      equalize();
    });
    observer.observe(grid);

    // Web fonts land after first paint and change the line count.
    document.fonts?.ready.then(equalize).catch(() => {});

    return () => observer.disconnect();
  }, [equalize]);

  return (
    <div
      className={className ? `team-grid ${className}` : "team-grid"}
      ref={gridRef}
    >
      {members.map((m, i) => (
        <TeamCard key={i} member={m} lang={lang} />
      ))}
    </div>
  );
}
