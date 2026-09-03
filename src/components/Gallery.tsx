import Image from "next/image";

type GalleryItem = { src: string; alt: string; caption?: string };

export function Gallery({ images }: { images: GalleryItem[] }) {
  return (
    <div className="gallery">
      {images.map((im, i) => (
        <figure key={i} className="gallery-item">
          <Image src={im.src} alt={im.alt} width={640} height={480} />
          {im.caption ? <figcaption>{im.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}
