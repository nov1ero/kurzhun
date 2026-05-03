import { InlineText } from "@/lib/InlineText";

interface StoryTextSectionProps {
  text: string;
  name?: string;
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
              className="border-l-4 border-olive-dark pl-6 text-2xl font-normal italic leading-none text-brown-dark md:pl-12"
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

export function StoryTextSection({ text, name }: StoryTextSectionProps) {
  return (
    <section className="flex w-full flex-col bg-cream px-4 py-10 md:px-12 md:py-16">
      <div className="flex w-full flex-col gap-12">
        <TextBlocks text={text} />
        {name && (
          <p className="text-2xl font-bold uppercase text-brown-dark">{name}</p>
        )}
      </div>
    </section>
  );
}
