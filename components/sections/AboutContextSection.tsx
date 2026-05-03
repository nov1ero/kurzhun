import { OrnamentSmall } from "@/components/ui/OrnamentSmall";

interface AboutContextSectionProps {
  label: string;
  col1: string;
  col2: string;
}

export function AboutContextSection({ label, col1, col2 }: AboutContextSectionProps) {
  return (
    <section className="flex w-full border-t border-brown-dark bg-cream px-4 py-12 md:px-12 md:py-[120px]">
      <div className="flex w-full flex-col gap-10 md:gap-16">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <div className="border-b-[5px] border-rust pb-4">
            <h2 className="text-[40px] font-bold uppercase leading-none text-olive md:text-[64px] lg:text-[86px]">
              {label}
            </h2>
          </div>
          <OrnamentSmall size={102} />
        </div>

        {/* Two-column text */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[90px]">
          <p className="text-2xl font-bold leading-none text-brown-body" style={{ whiteSpace: "pre-line" }}>{col1}</p>
          <p className="text-2xl font-bold leading-none text-brown-body" style={{ whiteSpace: "pre-line" }}>{col2}</p>
        </div>
      </div>
    </section>
  );
}
