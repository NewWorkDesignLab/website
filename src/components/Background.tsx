/** Decorative morphing blobs + rotating ring. Purely presentational. */
export function Background() {
  return (
    <div className="bg-visual" aria-hidden="true">
      <span className="ring" />
      <span className="blob purple" />
      <span className="blob blue" />
      <span className="blob orange" />
      <span className="blob green" />
    </div>
  );
}
