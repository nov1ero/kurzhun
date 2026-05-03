"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "@/i18n/navigation";
import { StoriesCarousel } from "./StoriesCarousel";

interface StoryCardData {
  id: number;
  quote: string;
  title: string;
  subtitle: string;
}

interface StoriesSectionProps {
  eyebrow: string;
  readAll: string;
  stories: StoryCardData[];
}

export function StoriesSection({ eyebrow, readAll, stories }: StoriesSectionProps) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  function handleCardClick(id: number) {
    sessionStorage.setItem("kurzhun-scroll", String(window.scrollY));
    router.push(`/stories/${id}` as "/");
  }

  return (
    <section id="stories" className="w-full border-t border-brown-dark bg-cream">
      {/* Header bar */}
      <div className="flex h-[120px] items-center px-12">
        <div className="flex w-full items-center justify-between gap-[72px]">
          <span className="text-[32px] font-bold leading-none text-rust">
            {eyebrow}
          </span>
          <button
            onClick={() => setShowModal(true)}
            className="flex h-11 cursor-pointer items-center border-b-2 border-rust px-3 py-2.5 text-2xl font-bold text-brown-body transition-colors hover:text-rust"
          >
            {readAll}
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="border-t border-b border-brown-dark">
        <StoriesCarousel stories={stories} />
      </div>

      {/* Stories modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/90"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative mx-auto max-w-7xl px-8 py-20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-8 top-6 text-4xl leading-none text-white"
              aria-label="Close"
            >
              ×
            </button>
            <div className="grid grid-cols-3 gap-4">
              {stories.map((story) => (
                <article
                  key={story.id}
                  onClick={() => handleCardClick(story.id)}
                  className="flex cursor-pointer flex-col gap-5 bg-cream p-6 transition-colors hover:bg-tan"
                >
                  <div className="relative h-[176px] w-full overflow-hidden">
                    <Image
                      src={`/images/stories/story${story.id}/story${story.id}_card.JPG`}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
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
          </div>
        </div>
      )}
    </section>
  );
}
