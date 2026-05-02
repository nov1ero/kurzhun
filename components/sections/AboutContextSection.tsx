import { OrnamentSmall } from "@/components/ui/OrnamentSmall";

interface AboutContextSectionProps {
  label: string;
  col1: string;
  col2: string;
}

export function AboutContextSection({ label, col1, col2 }: AboutContextSectionProps) {
  return (
    <section className="flex w-full border-t border-brown-dark bg-cream px-12 py-[120px]">
      <div className="flex w-full flex-col gap-16">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <div className="border-b-[5px] border-rust pb-4">
            <h2 className="text-[86px] font-bold uppercase leading-none text-olive">
              {label}
            </h2>
          </div>
          <OrnamentSmall size={102} />
        </div>

        {/* Two-column text */}
        <div className="grid grid-cols-2 gap-[90px]">
          <p className="text-2xl font-bold leading-none text-brown-body">{col1}</p>
          <p className="text-2xl font-bold leading-none text-brown-body">{col2}</p>
        </div>
      </div>
    </section>
  );
}
