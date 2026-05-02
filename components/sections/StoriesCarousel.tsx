"use client";

import { useRef } from "react";
import { useRouter } from "@/i18n/navigation";
import { Placeholder } from "@/components/ui/Placeholder";

interface StoryCardData {
  id: number;
  quote: string;
  title: string;
  subtitle: string;
}

interface StoriesCarouselProps {
  stories: StoryCardData[];
}

export function StoriesCarousel({ stories }: StoriesCarouselProps) {
  const router = useRouter();
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  function handleMouseDown(e: React.MouseEvent) {
    if (!trackRef.current) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX;
    scrollStart.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!isDragging.current || !trackRef.current) return;
    const dx = e.pageX - startX.current;
    if (Math.abs(dx) > 5) hasDragged.current = true;
    trackRef.current.scrollLeft = scrollStart.current - dx;
  }

  function handleMouseUp() {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }

  function handleCardClick(id: number) {
    if (!hasDragged.current) {
      sessionStorage.setItem("kurzhun-scroll", String(window.scrollY));
      router.push(`/stories/${id}` as "/");
    }
  }

  return (
    <div
      ref={trackRef}
      className="flex cursor-grab overflow-x-auto"
      style={{ scrollbarWidth: "none" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {stories.map((story) => (
        <article
          key={story.id}
          onClick={() => handleCardClick(story.id)}
          className="flex h-[344px] w-[336px] shrink-0 cursor-pointer flex-col gap-5 border border-b-0 border-brown-dark bg-cream p-6 transition-colors hover:bg-tan"
        >
          {/* Image placeholder */}
          <Placeholder
            label={`story-${story.id}.jpg`}
            className="h-[176px] w-[288px] shrink-0"
          />

          {/* Content */}
          <div className="flex flex-col gap-4">
            <p className="text-base font-bold leading-none text-brown-dark">
              {story.quote}
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-bold leading-8 text-brown-dark">
                {story.title}
              </p>
              <p className="text-base font-bold uppercase leading-none text-olive-dark">
                {story.subtitle}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
