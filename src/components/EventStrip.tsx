"use client";

import Image from "next/image";
import { events } from "../content/events";
import { useLang } from "../app/useLang";

export function EventStrip() {
  const { lang } = useLang();

  return (
    <ul className="event-strip">
      {events.map((ev, i) => (
        <li key={i} className="event-card">
          <Image
            className="event-card-img"
            src={ev.image}
            alt=""
            fill
            sizes="(max-width: 768px) 80vw, 24rem"
          />
          <div className="event-card-caption">
            <span className="event-card-title">{ev.title[lang]}</span>
            <span className="event-card-blurb">{ev.blurb[lang]}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
