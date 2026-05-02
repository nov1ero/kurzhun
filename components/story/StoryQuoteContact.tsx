interface StoryQuoteContactProps {
  contactText: string;
  contactInfo: string;
}

const CREAM_FILTER = "brightness(0) invert(1)";
const SVG_FULL_H = 416;
const SVG_FULL_W = 172;
const CONTAINER_W = 162;
const CONTAINER_H = 208;
const MARGIN_TOP = -((SVG_FULL_H - CONTAINER_H) / 2); // centre vertically: -104px

export function StoryQuoteContact({ contactText, contactInfo }: StoryQuoteContactProps) {
  return (
    <section
      className="flex w-full items-center overflow-hidden"
      style={{ height: CONTAINER_H, backgroundColor: "#6A704C", padding: "0 48px" }}
    >
      {/* Inner row — centred with 283px gap */}
      <div
        className="flex w-full items-center"
        style={{ justifyContent: "center", gap: 283 }}
      >
        {/* Ornament: 162×208 clip of vector-logo.svg */}
        <div
          style={{
            width: CONTAINER_W,
            height: CONTAINER_H,
            overflow: "hidden",
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/svg/vector-logo.svg"
            alt=""
            width={SVG_FULL_W}
            height={SVG_FULL_H}
            style={{
              display: "block",
              marginTop: MARGIN_TOP,
              filter: CREAM_FILTER,
            }}
          />
        </div>

        {/* Text block — 577×64px, 32px bold white */}
        <div style={{ width: 577, flexShrink: 0 }}>
          <p
            className="font-bold text-white"
            style={{ fontSize: 32, lineHeight: "100%", whiteSpace: "pre-line" }}
          >
            {contactText}{"\n"}{contactInfo}
          </p>
        </div>
      </div>
    </section>
  );
}
