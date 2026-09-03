/**
 * Renders a JSON-LD block into the document. Kept as a plain component (no
 * next/script) so the markup is part of the prerendered HTML that crawlers
 * read on first fetch, without waiting for hydration.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // The payload is built from our own content files, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
