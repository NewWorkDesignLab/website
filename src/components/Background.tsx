/** Decorative morphing blobs + rotating ring. Purely presentational. */
export function Background() {
  return (
    <>
      <div className="bg-visual" aria-hidden="true">
        <span className="ring" />
        <span className="blob purple" />
        <span className="blob blue" />
        <span className="blob orange" />
        <span className="blob green" />
      </div>

      {/* Small cluster of colourful spheres tucked into the top-right corner.
          Shown on mobile everywhere, and on desktop sub-pages (where it gently
          floats and replaces the large hero blobs — see globals.css). */}
      <div className="mobile-orbs" aria-hidden="true">
        <span className="mobile-orb purple" />
        <span className="mobile-orb orange" />
        <span className="mobile-orb blue" />
      </div>
    </>
  );
}
