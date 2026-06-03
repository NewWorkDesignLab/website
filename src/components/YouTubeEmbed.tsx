/** Privacy-friendly YouTube embed (youtube-nocookie, lazy-loaded). */
export function YouTubeEmbed({ id, title }: { id: string; title?: string }) {
  return (
    <div className="embed">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title ?? "YouTube video"}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
