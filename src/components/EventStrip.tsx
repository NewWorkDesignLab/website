"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import texts from "../content/texts.json";
import { events } from "../content/events";
import { useLang } from "../app/useLang";

/** Takt des Auto-Scrolls: lang genug, dass der Blurb lesbar bleibt. */
const STEP_INTERVAL_MS = 5000;

export function EventStrip() {
  const { lang } = useLang();
  const t = texts[lang].events;

  const wrapRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLUListElement>(null);
  const timerRef = useRef<number | undefined>(undefined);
  const reduceMotionRef = useRef(false);
  /* Solange der Zeiger auf dem Streifen liegt, wird kein neuer Takt geplant —
     sonst würde der Auto-Scroll dem Nutzer unter der Maus wegspringen. */
  const hoverRef = useRef(false);

  /** Eine Karte weiter (1) oder zurück (-1); an den Enden wird gecyclet. */
  const advance = useCallback((dir: 1 | -1) => {
    const el = stripRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    if (max <= 1) return;

    // Schrittweite live messen — die Kartenbreite ist responsiv (clamp bzw.
    // 80vw), eine Konstante würde bei Resize/Zoom auseinanderlaufen.
    const cards = el.children;
    const step =
      cards.length > 1
        ? cards[1].getBoundingClientRect().left -
          cards[0].getBoundingClientRect().left
        : 0;
    if (step <= 0) return;

    const next =
      dir === 1
        ? el.scrollLeft >= max - 4
          ? 0
          : Math.min(el.scrollLeft + step, max)
        : el.scrollLeft <= 4
          ? max
          : Math.max(el.scrollLeft - step, 0);

    el.scrollTo({
      left: next,
      behavior: reduceMotionRef.current ? "auto" : "smooth",
    });
  }, []);

  const stop = useCallback(() => {
    window.clearTimeout(timerRef.current);
  }, []);

  /** Startet den Takt neu — immer mit vollem Intervall, nie mit einem Rest. */
  const schedule = useCallback(() => {
    window.clearTimeout(timerRef.current);
    if (reduceMotionRef.current || hoverRef.current) return;

    const tick = () => {
      if (!document.hidden) advance(1);
      timerRef.current = window.setTimeout(tick, STEP_INTERVAL_MS);
    };
    timerRef.current = window.setTimeout(tick, STEP_INTERVAL_MS);
  }, [advance]);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const wrap = wrapRef.current;
    if (!wrap) return;

    const onEnter = () => {
      hoverRef.current = true;
      stop();
    };
    const onLeave = () => {
      hoverRef.current = false;
      schedule();
    };
    // Touch/Pen kennen kein echtes Hover: dort gilt das Ende der Geste als
    // Ende der Interaktion, statt auf ein (nicht garantiertes) Leave zu warten.
    const onUp = (e: PointerEvent) => {
      if (e.pointerType === "mouse") return;
      hoverRef.current = false;
      schedule();
    };

    schedule();

    wrap.addEventListener("pointerenter", onEnter);
    wrap.addEventListener("pointerleave", onLeave);
    wrap.addEventListener("pointerdown", stop);
    wrap.addEventListener("pointerup", onUp);
    wrap.addEventListener("pointercancel", onUp);
    wrap.addEventListener("focusin", stop);
    wrap.addEventListener("focusout", schedule);

    return () => {
      stop();
      wrap.removeEventListener("pointerenter", onEnter);
      wrap.removeEventListener("pointerleave", onLeave);
      wrap.removeEventListener("pointerdown", stop);
      wrap.removeEventListener("pointerup", onUp);
      wrap.removeEventListener("pointercancel", onUp);
      wrap.removeEventListener("focusin", stop);
      wrap.removeEventListener("focusout", schedule);
    };
  }, [advance, schedule, stop]);

  return (
    /* Die Pfeile sind Geschwister des Streifens, nicht Kinder — dessen
       overflow-x und die rechte Fade-Maske würden sie sonst abschneiden. */
    <div className="event-strip-wrap" ref={wrapRef}>
      <button
        type="button"
        className="event-nav event-nav--prev"
        onClick={() => advance(-1)}
        aria-label={t.prev}
        title={t.prev}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <ul className="event-strip" ref={stripRef}>
        {events.map((ev, i) => (
          <li key={i} className="event-card">
            <Image
              className="event-card-img"
              src={ev.image}
              alt=""
              fill
              sizes="(max-width: 768px) 80vw, 24rem"
            />
            <span className="event-card-date">{ev.date}</span>
            <div className="event-card-caption">
              <span className="event-card-title">{ev.title[lang]}</span>
              <span className="event-card-blurb">{ev.blurb[lang]}</span>
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="event-nav event-nav--next"
        onClick={() => advance(1)}
        aria-label={t.next}
        title={t.next}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
