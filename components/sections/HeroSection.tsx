import Image from "next/image";

interface HeroSectionProps {
  eyebrow: string;
  title: string;
  desc: string;
}

export function HeroSection({ eyebrow, title, desc }: HeroSectionProps) {
  return (
    <section
      className="relative flex min-h-[400px] w-full items-center border-t border-brown-dark px-4 md:h-[660px] md:px-12"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/main_page/hero.JPG"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover scale-110 translate-x-[5%]"
        />
      </div>


      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(95.22deg, rgba(16,14,13,0.74) 9.9%, rgba(65,46,39,0) 61.87%)",
          zIndex: 0,
        }}
      />

      {/* Heading column */}
      <div className="relative z-10 flex h-full flex-1 flex-col items-start justify-between py-12 md:py-[120px]">
        <p className="text-base font-bold uppercase leading-none text-white">
          {eyebrow}
        </p>

        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <filter id="grain-hero-text">
              <feTurbulence type="fractalNoise" baseFrequency="0.769" numOctaves="3" seed="3060" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="7.4" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>
        <h1
          className="font-mono text-[40px] font-bold uppercase leading-none text-white md:text-[64px] lg:text-[86px]"
          style={{ maxWidth: 675, filter: "url(#grain-hero-text)" }}
        >
          {title}
        </h1>

        <p className="text-base font-bold uppercase leading-none text-white" style={{ whiteSpace: "pre-line" }}>
          {desc}
        </p>
      </div>
    </section>
  );
}
