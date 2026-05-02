import { Link } from "@/i18n/navigation";
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
  return (
    <section id="stories" className="w-full border-t border-brown-dark bg-cream">
      {/* Header bar */}
      <div className="flex h-[120px] items-center px-12">
        <div className="flex w-full items-center justify-between gap-[72px]">
          <div className="flex items-center gap-[10px]">
            <span className="text-[32px] font-bold leading-none text-rust">
              {eyebrow}
            </span>
          </div>
          <Link
            href="/stories"
            className="flex h-11 items-center border-b-2 border-rust px-3 py-2.5 text-2xl font-bold text-brown-body"
          >
            {readAll}
          </Link>
        </div>
      </div>

      {/* Carousel */}
      <div className="border-t border-b border-brown-dark">
        <StoriesCarousel stories={stories} />
      </div>
    </section>
  );
}
