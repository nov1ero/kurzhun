// One zigzag period ≈ 83.636px. Paths use original Figma coordinates;
// the <pattern> element clips them to the tile and tiles seamlessly.
// The grain filter is applied once to the full <rect> — no seams between tiles.
const TILE_PATH =
  "M-41.9814 40 L-0.163589 0 L41.6543 40 L83.4721 0 L125.29 40 " +
  "M18.3291 40 L-0.228022 22.963 L-18.7851 40 " +
  "M101.836 40 L83.2788 22.963 L64.7217 40 " +
  "M60.0825 0 L41.5254 17.037 L22.9683 0 " +
  "M143.589 0 L125.032 17.037 L106.475 0";

export function TopBar() {
  return (
    <svg
      width="100%"
      height="40"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <defs>
        <pattern
          id="topbar-tile"
          x="0"
          y="0"
          width="83.636"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d={TILE_PATH}
            stroke="#412E27"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 4"
            fill="none"
          />
        </pattern>
        <filter
          id="topbar-grain"
          x="-50"
          y="-10"
          width="9999"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.769"
            numOctaves="3"
            seed="3060"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="7.4"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="40"
        fill="url(#topbar-tile)"
        filter="url(#topbar-grain)"
      />
    </svg>
  );
}
