import Image from "next/image";
import type { Block } from "../content/types";
import type { Lang } from "../app/useLang";
import { Gallery } from "./Gallery";
import { YouTubeEmbed } from "./YouTubeEmbed";

export function BlockRenderer({ blocks, lang }: { blocks: Block[]; lang: Lang }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="block-heading">
                {block.text[lang]}
              </h2>
            );
          case "text":
            return (
              <p key={i} className="block-text">
                {block.text[lang]}
              </p>
            );
          case "image":
            return (
              <figure key={i} className="block-image">
                <Image
                  src={block.src}
                  alt={block.alt?.[lang] ?? ""}
                  width={1280}
                  height={800}
                />
                {block.caption ? <figcaption>{block.caption[lang]}</figcaption> : null}
              </figure>
            );
          case "list":
            return (
              <ul key={i} className="block-list">
                {block.items.map((item, j) => (
                  <li key={j}>{item[lang]}</li>
                ))}
              </ul>
            );
          case "gallery":
            return (
              <Gallery
                key={i}
                images={block.images.map((im) => ({
                  src: im.src,
                  alt: im.alt?.[lang] ?? "",
                  caption: im.caption?.[lang],
                }))}
              />
            );
          case "video":
            return <YouTubeEmbed key={i} id={block.youtube} title={block.title?.[lang]} />;
          case "quote":
            return (
              <blockquote key={i} className="block-quote">
                <p>{block.text[lang]}</p>
                {block.author ? <cite>{block.author}</cite> : null}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
