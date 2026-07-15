// Fixed, non-interactive film-grain overlay applied over the whole page.
// SVG fractal-noise rendered to a data URI so it ships with zero requests.
const NOISE = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
    <filter id="n">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#n)"/>
  </svg>`
)}`;

export function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.055] mix-blend-overlay animate-grain-shift"
      style={{
        backgroundImage: `url("${NOISE}")`,
        backgroundSize: "160px 160px",
      }}
    />
  );
}
