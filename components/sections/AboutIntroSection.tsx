import Image from "next/image";
import { OrnamentSide } from "@/components/ui/OrnamentSide";
import { Placeholder } from "@/components/ui/Placeholder";

interface AboutIntroSectionProps {
  body: string;
}

export function AboutIntroSection({ body }: AboutIntroSectionProps) {
  return (
    <section className="flex h-[661px] w-full items-center gap-24 border-t border-brown-dark bg-cream px-12">
      {/* Images column */}
      <div className="flex h-full shrink-0 items-center gap-12 py-0">
        {/* Main photo */}
        <div className="flex h-full items-center py-[120px]">
          <Placeholder label="DSC07278.jpg" className="h-[420px] w-[420px]" />
        </div>

        {/* Side ornament strip */}
        <div className="flex h-full flex-col justify-between py-0">
          <OrnamentSide height={661} />
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col justify-between py-[120px]">
        <Image
          src="/svg/logo.svg"
          alt="Куржун"
          width={189}
          height={51}
          style={{ filter: "brightness(0) saturate(100%)" }}
        />
        <p className="text-[32px] font-normal leading-none text-brown-body" style={{ whiteSpace: "pre-line" }}>
          {body}
        </p>
      </div>
    </section>
  );
}
