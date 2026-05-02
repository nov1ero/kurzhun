import Image from "next/image";

export function AboutLogoSection() {
  return (
    <section className="flex h-[416px] w-full items-center gap-[120px] border-t border-brown-dark bg-cream px-12">
      {/* Left ornament — exact Figma SVG 172×416 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/svg/vector-logo.svg" alt="" aria-hidden="true" width={172} height={416} style={{ display: "block", flexShrink: 0 }} />

      {/* Center: logo 609×165 centered */}
      <div className="flex min-w-[600px] flex-1 flex-col items-center justify-center">
        <Image
          src="/svg/logo.svg"
          alt="Куржун"
          width={609}
          height={165}
          style={{
            filter:
              "brightness(0) saturate(100%) invert(17%) sepia(20%) saturate(800%) hue-rotate(330deg) brightness(85%)",
          }}
        />
      </div>

      {/* Right ornament — mirrored horizontally */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/svg/vector-logo.svg" alt="" aria-hidden="true" width={172} height={416} style={{ display: "block", flexShrink: 0, transform: "scaleX(-1)" }} />
    </section>
  );
}
