interface StoryQuoteContactProps {
  contactText?: string;
  contactInfo?: string;
  showContact?: boolean;
}

const CREAM_FILTER = "brightness(0) invert(1)";
const SVG_FULL_H = 416;
const SVG_FULL_W = 172;
const CONTAINER_W = 162;
const CONTAINER_H = 208;
const MARGIN_TOP = -((SVG_FULL_H - CONTAINER_H) / 2);

export function StoryQuoteContact({ contactText, contactInfo, showContact = false }: StoryQuoteContactProps) {
  const ornament = (
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
  );

  return (
    <section
      className="flex w-full items-center justify-center overflow-hidden"
      style={{
        minHeight: CONTAINER_H,
        backgroundColor: "#6A704C",
        padding: "16px clamp(16px, 4vw, 48px)",
      }}
    >
      {showContact ? (
        <div className="flex w-full flex-col items-center gap-6 md:flex-row md:justify-center md:gap-[120px] lg:gap-[283px]">
          {ornament}
          <div style={{ maxWidth: 577, width: "100%" }}>
            <p
              className="font-bold text-white"
              style={{ fontSize: "clamp(15px, 2.2vw, 22px)", lineHeight: "165%", whiteSpace: "pre-line" }}
            >
              {contactText}{"\n"}{contactInfo}
            </p>
          </div>
        </div>
      ) : (
        ornament
      )}
    </section>
  );
}
