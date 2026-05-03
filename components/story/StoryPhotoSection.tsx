import Image from "next/image";
import { InlineText } from "@/lib/InlineText";

interface StoryPhotoSectionProps {
  id: number;
  photoIndex: number;
  textContent?: string;
  split?: boolean;
  reversed?: boolean;
  featuredQuote?: string;
  featuredName?: string;
}

function TextBlocks({ text }: { text: string }) {
  const blocks = text.split("\n\n").filter(Boolean);
  return (
    <>
      {blocks.map((block, i) => {
        const isQuote = block.startsWith('"') || block.startsWith("“");
        if (isQuote) {
          return (
            <blockquote
              key={i}
              className="border-l-4 border-olive-dark pl-12 text-2xl font-normal italic leading-none text-brown-dark"
            >
              <InlineText text={block} />
            </blockquote>
          );
        }
        return (
          <p key={i} className="text-2xl font-normal leading-none text-brown-dark">
            <InlineText text={block} />
          </p>
        );
      })}
    </>
  );
}

export function StoryPhotoSection({
  id,
  photoIndex,
  textContent,
  split = false,
  reversed = false,
  featuredQuote,
  featuredName,
}: StoryPhotoSectionProps) {
  const photo = (
    <div className="relative h-[765px] w-full">
      <Image
        src={`/images/stories/story${id}/story${id}_${photoIndex}.JPG`}
        alt=""
        fill
        className="object-cover"
      />
    </div>
  );

  const hasText = Boolean(textContent || featuredQuote);

  const textCol = hasText ? (
    <div className="flex flex-col gap-6">
      {textContent && <TextBlocks text={textContent} />}
      {featuredQuote && (
        <>
          <blockquote className="border-l-4 border-olive-dark pl-12 text-[32px] font-bold italic leading-none text-olive-dark">
            {featuredQuote}
          </blockquote>
          {featuredName && (
            <p className="text-2xl font-bold uppercase text-brown-dark">{featuredName}</p>
          )}
        </>
      )}
    </div>
  ) : null;

  if (!split) {
    return (
      <section className="flex w-full flex-col bg-cream px-12 py-16" style={{ gap: hasText ? 48 : 0 }}>
        {photo}
        {textCol}
      </section>
    );
  }

  const leftContent = reversed ? textCol : <div className="h-[765px] w-full">{photo}</div>;
  const rightContent = reversed ? <div className="h-[765px] w-full">{photo}</div> : textCol;

  return (
    <section className="flex w-full gap-12 bg-cream px-12 py-16">
      <div className="flex flex-1 flex-col justify-center gap-6">{leftContent}</div>
      <div className="flex flex-1 flex-col justify-center gap-6">{rightContent}</div>
    </section>
  );
}
