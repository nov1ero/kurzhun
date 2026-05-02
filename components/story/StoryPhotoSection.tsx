import { Placeholder } from "@/components/ui/Placeholder";

interface StoryPhotoSectionProps {
  id: number;
  photoIndex: number;
  caption?: string;
  split?: boolean;
  splitCaption?: string;
}

export function StoryPhotoSection({
  id,
  photoIndex,
  caption,
  split = false,
  splitCaption,
}: StoryPhotoSectionProps) {
  if (split) {
    return (
      <section className="flex w-full gap-12 bg-cream px-12 py-16">
        <div className="flex flex-1 flex-col gap-6">
          <Placeholder
            label={`story-${id}-photo-${photoIndex}.jpg`}
            className="h-[765px] w-full"
          />
        </div>
        <div className="flex flex-1 flex-col gap-6 justify-center">
          {splitCaption && (
            <p className="text-2xl font-normal leading-none text-brown-dark">
              {splitCaption}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="flex w-full flex-col gap-12 bg-cream px-12 py-16">
      <Placeholder
        label={`story-${id}-photo-${photoIndex}.jpg`}
        className="h-[765px] w-full"
      />
      {caption && (
        <p className="text-2xl font-normal leading-none text-brown-dark max-w-[1344px]">
          {caption}
        </p>
      )}
    </section>
  );
}
