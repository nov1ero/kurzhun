import Image from "next/image";
import { OrnamentSide } from "@/components/ui/OrnamentSide";

interface AboutIntroSectionProps {
  body: string;
}

export function AboutIntroSection({ body }: AboutIntroSectionProps) {
  return (
    <section className="flex h-auto w-full flex-col items-center gap-8 border-t border-brown-dark bg-cream px-4 py-8 md:h-[661px] md:flex-row md:gap-24 md:px-12 md:py-0">
      {/* Images column */}
      <div className="flex w-full shrink-0 items-center gap-6 md:h-full md:w-auto md:gap-12">
        {/* Main photo */}
        <div className="relative h-[280px] w-full overflow-hidden md:h-[420px] md:w-[420px] md:shrink-0">
          <Image
            src="/images/main_page/main_1.JPG"
            alt=""
            fill
            className="object-cover object-left"
          />
        </div>

        {/* Side ornament strip — desktop only */}
        <div className="hidden h-full flex-col justify-between md:flex">
          <OrnamentSide height={661} />
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col justify-between gap-6 py-0 md:gap-0 md:py-[120px]">
        <Image
          src="/svg/logo.svg"
          alt="Куржун"
          width={189}
          height={51}
          style={{ filter: "brightness(0) saturate(100%)" }}
        />
        <p className="text-[24px] font-normal leading-snug text-brown-body md:text-[32px] md:leading-none" style={{ whiteSpace: "pre-line" }}>
          {body}
        </p>
      </div>
    </section>
  );
}
