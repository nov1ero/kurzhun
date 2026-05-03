interface StoryDescriptionProps {
  body: string;
}

export function StoryDescription({ body }: StoryDescriptionProps) {
  const blocks = body.split("\n\n").map((b) => b.trim()).filter(Boolean);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-[53px] bg-cream px-12 py-[120px]">
      <div className="flex w-full max-w-[784px] flex-col gap-[53px]">
        {blocks.map((block, i) => {
          const isQuote = block.startsWith('"') || block.startsWith("“");
          if (isQuote) {
            return (
              <blockquote
                key={i}
                className="border-l-4 border-olive-dark pl-12 text-2xl font-normal italic leading-[1.3] text-brown-dark"
              >
                {block}
              </blockquote>
            );
          }
          return (
            <p
              key={i}
              className="text-2xl font-normal leading-[1.3] text-brown-dark"
              style={{ whiteSpace: "pre-line" }}
            >
              {block}
            </p>
          );
        })}
      </div>
    </section>
  );
}
