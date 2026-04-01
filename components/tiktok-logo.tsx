/** Small TikTok mark for social links (inline SVG, no extra deps). */
export function TikTokLogo({ className }: { className?: string }) {
  const d =
    "M9 0h1.98c.144.715.54 1.977 1.492 2.771 1.002.823 2.365 1.162 3.63 1.162v2.5c-1.02-.04-2.05-.23-2.99-.7v2.4c0 2.51-2.03 4.55-4.54 4.55-2.51 0-4.55-2.04-4.55-4.55s2.04-4.55 4.55-4.55c.25 0 .5.03.74.08v1.5c-.24-.02-.48-.03-.74-.03-1.1 0-1.99.9-1.99 1.99s.9 1.99 1.99 1.99 1.99-.9 1.99-1.99V0z"

  return (
    <svg
      viewBox="-0.8 -0.8 17.6 17.6"
      aria-hidden="true"
      className={className}
      overflow="visible"
    >
      <g fillRule="evenodd">
        <path d={d} fill="#0a0a0a" opacity={0.12} transform="translate(0.45 0.5)" />
        <path d={d} fill="#25F4EE" transform="translate(-0.32 -0.28)" />
        <path d={d} fill="#FE2C55" transform="translate(0.32 0.28)" />
      </g>
    </svg>
  )
}
