import Image from "next/image";

interface StoryEditorialSpreadProps {
  id: number;
  recorded: string;
  date: string;
  title: string;
  name: string;
  location: string;
  lead: string;
  dateFirst?: boolean;
}

export function StoryEditorialSpread({
  id,
  recorded,
  date,
  title,
  name,
  location,
  lead,
  dateFirst = false,
}: StoryEditorialSpreadProps) {
  return (
    <section className="relative flex h-auto w-full flex-col border-y border-brown-dark md:min-h-[642px] md:flex-row">
      {/* Hero image — on mobile: in-flow block; on desktop: absolute left half */}
      <div className="relative h-[300px] w-full overflow-hidden bg-cream md:absolute md:bottom-0 md:left-0 md:top-0 md:h-auto md:w-1/2">
        <Image
          src={`/images/stories/story${id}/story${id}_hero.JPG`}
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Metadata — on desktop: right half, pushed right via margin */}
      <div className="flex w-full flex-col justify-center border-l border-brown-dark bg-cream px-6 py-10 sm:px-10 sm:py-14 md:ml-[50%] md:w-1/2 md:px-16 md:py-16 lg:px-20 lg:py-[100px]">
        <div className="flex flex-col gap-8">
          {/* Top block */}
          <div className="flex flex-col gap-4 border-b border-black pb-6">
            <p className="text-base font-normal uppercase text-olive-dark">
              {dateFirst ? `${date} ${recorded}` : `${recorded} ${date}`}
            </p>
            <h1
              className={`font-bold leading-tight text-brown-dark ${dateFirst ? "text-[28px] md:text-[48px] md:leading-[50px]" : "text-[32px] md:text-[60px] md:leading-[56px]"}`}
              style={{ letterSpacing: "-1.8px" }}
            >
              {title}
            </h1>
          </div>

          {/* Author info */}
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-normal uppercase text-olive-dark">{name}</p>
            <p className="text-base font-normal uppercase text-muted">{location}</p>
          </div>

          {/* Lead paragraph */}
          <p className="text-[20px] font-normal leading-none text-brown-dark">{lead}</p>
        </div>
      </div>
    </section>
  );
}
