"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import texts from "../content/texts.json";
import { events } from "../content/events";
import { useLang } from "../app/useLang";

const STEP_INTERVAL_MS = 5000;
const SETTLE_MS = 140;
const LOOPS = 3;

export function EventStrip() {
  const { lang } = useLang();
  const t = texts[lang].events;

  const wrapRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLUListElement>(null);
  const timerRef = useRef<number | undefined>(undefined);
  const settleRef = useRef<number | undefined>(undefined);
  const reduceMotionRef = useRef(false);
  const hoverRef = useRef(false);

  const loop = events.length > 1;
  const items = loop
    ? Array.from({ length: LOOPS }, () => events).flat()
    : events;

  /** Width of one full copy of the event list, gaps included. */
  const setWidth = useCallback((el: HTMLUListElement) => {
    const cards = el.children;
    if (!loop || cards.length < events.length + 1) return 0;
    const first = cards[0] as HTMLElement;
    const nextSet = cards[events.length] as HTMLElement;
    return nextSet.offsetLeft - first.offsetLeft;
  }, [loop]);

  /** Keeps the scroll position inside the middle copy so the strip never ends. */
  const normalize = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    const width = setWidth(el);
    if (width <= 0) return;
    if (el.scrollLeft < width * 0.5) el.scrollLeft += width;
    else if (el.scrollLeft > width * 1.5) el.scrollLeft -= width;
  }, [setWidth]);

  const advance = useCallback(
    (dir: 1 | -1) => {
      const el = stripRef.current;
      if (!el) return;

      const cards = el.children;
      const step =
        cards.length > 1
          ? cards[1].getBoundingClientRect().left -
            cards[0].getBoundingClientRect().left
          : 0;
      if (step <= 0) return;

      if (loop) {
        normalize();
        el.scrollBy({
          left: dir * step,
          behavior: reduceMotionRef.current ? "auto" : "smooth",
        });
        return;
      }

      const max = el.scrollWidth - el.clientWidth;
      if (max <= 1) return;
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
    },
    [loop, normalize],
  );

  const stop = useCallback(() => {
    window.clearTimeout(timerRef.current);
  }, []);

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
    const strip = stripRef.current;
    if (!wrap || !strip) return;

    if (loop) {
      const start = () => {
        const width = setWidth(strip);
        if (width > 0) strip.scrollLeft = width;
      };
      start();
      requestAnimationFrame(start);
    }

    const onScroll = () => {
      if (!loop) return;
      window.clearTimeout(settleRef.current);
      settleRef.current = window.setTimeout(normalize, SETTLE_MS);
    };

    const onEnter = () => {
      hoverRef.current = true;
      stop();
    };
    const onLeave = () => {
      hoverRef.current = false;
      schedule();
    };
    const onUp = (e: PointerEvent) => {
      if (e.pointerType === "mouse") return;
      hoverRef.current = false;
      schedule();
    };

    schedule();

    strip.addEventListener("scroll", onScroll, { passive: true });
    wrap.addEventListener("pointerenter", onEnter);
    wrap.addEventListener("pointerleave", onLeave);
    wrap.addEventListener("pointerdown", stop);
    wrap.addEventListener("pointerup", onUp);
    wrap.addEventListener("pointercancel", onUp);
    wrap.addEventListener("focusin", stop);
    wrap.addEventListener("focusout", schedule);

    return () => {
      stop();
      window.clearTimeout(settleRef.current);
      strip.removeEventListener("scroll", onScroll);
      wrap.removeEventListener("pointerenter", onEnter);
      wrap.removeEventListener("pointerleave", onLeave);
      wrap.removeEventListener("pointerdown", stop);
      wrap.removeEventListener("pointerup", onUp);
      wrap.removeEventListener("pointercancel", onUp);
      wrap.removeEventListener("focusin", stop);
      wrap.removeEventListener("focusout", schedule);
    };
  }, [advance, loop, normalize, schedule, setWidth, stop]);

  return (
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
        {items.map((ev, i) => (
          <li key={i} className="event-card" aria-hidden={loop && i >= events.length}>
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
