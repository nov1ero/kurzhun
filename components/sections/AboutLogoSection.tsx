import Image from "next/image";

export function AboutLogoSection() {
  return (
    <section className="flex h-auto w-full items-center gap-8 border-t border-brown-dark bg-cream px-4 py-12 md:h-[416px] md:gap-[120px] md:px-12 md:py-0">
      {/* Left ornament */}
      <div className="hidden md:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/svg/vector-logo.svg" alt="" aria-hidden="true" width={172} height={416} style={{ display: "block", flexShrink: 0 }} />
      </div>

      {/* Center: logo */}
      <div className="flex flex-1 flex-col items-center justify-center">
        <Image
          src="/svg/logo.svg"
          alt="Куржун"
          width={609}
          height={165}
          style={{
            filter:
              "brightness(0) saturate(100%) invert(17%) sepia(20%) saturate(800%) hue-rotate(330deg) brightness(85%)",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>

      {/* Right ornament */}
      <div className="hidden md:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/svg/vector-logo.svg" alt="" aria-hidden="true" width={172} height={416} style={{ display: "block", flexShrink: 0, transform: "scaleX(-1)" }} />
      </div>
    </section>
  );
}
