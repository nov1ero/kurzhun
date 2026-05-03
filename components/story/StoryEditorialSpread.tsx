import Image from "next/image";

interface StoryEditorialSpreadProps {
  id: number;
  recorded: string;
  date: string;
  title: string;
  name: string;
  location: string;
  lead: string;
}

export function StoryEditorialSpread({
  id,
  recorded,
  date,
  title,
  name,
  location,
  lead,
}: StoryEditorialSpreadProps) {
  return (
    <section className="relative flex h-auto w-full flex-col border-y border-brown-dark md:h-[642px] md:flex-row">
      {/* Hero image */}
      <div className="relative h-[300px] w-full overflow-hidden bg-cream md:h-full md:w-1/2">
        <Image
          src={`/images/stories/story${id}/story${id}_hero.JPG`}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Metadata */}
      <div className="flex h-full w-full flex-col justify-center border-l border-brown-dark bg-cream px-6 py-10 md:w-1/2 md:px-20 md:py-[120px]">
        <div className="flex flex-col gap-8">
          {/* Top block */}
          <div className="flex flex-col gap-4 border-b border-black pb-6">
            <p className="text-base font-bold uppercase text-olive-dark">
              {recorded} {date}
            </p>
            <h1
              className="text-[32px] font-bold leading-tight text-brown-dark md:text-[60px] md:leading-[56px]"
              style={{ letterSpacing: "-1.8px" }}
            >
              {title}
            </h1>
          </div>

          {/* Author info */}
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-bold uppercase text-olive-dark">{name}</p>
            <p className="text-base font-bold uppercase text-muted">{location}</p>
          </div>

          {/* Lead paragraph */}
          <p className="text-[20px] font-bold leading-none text-brown-dark">{lead}</p>
        </div>
      </div>
    </section>
  );
}
