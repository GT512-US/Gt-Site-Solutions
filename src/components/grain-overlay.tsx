export function GrainOverlay({
  id,
  opacity = 0.08,
  seed = 2,
}: {
  id: string
  opacity?: number
  seed?: number
}) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <filter
        id={`grain-${id}`}
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        colorInterpolationFilters="linearRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.75"
          numOctaves={4}
          seed={seed}
          stitchTiles="stitch"
          result="noise"
        />
        <feColorMatrix
          type="saturate"
          values="0"
          in="noise"
          result="gray"
        />
        <feBlend
          in="SourceGraphic"
          in2="gray"
          mode="overlay"
          result="blend"
        />
        <feComposite in="blend" in2="SourceGraphic" operator="in" />
      </filter>
      <rect
        width="100%"
        height="100%"
        filter={`url(#grain-${id})`}
        opacity={opacity}
      />
    </svg>
  )
}
