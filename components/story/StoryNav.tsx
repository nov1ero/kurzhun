import { Link } from "@/i18n/navigation";

interface StoryNavProps {
  prevId: number | null;
  nextId: number | null;
  prevTitle: string;
  nextTitle: string;
  prevLabel: string;
  nextLabel: string;
  homeLabel: string;
  mainPage: string;
}

function ArrowLeft() {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
      <path d="M11 6H1M1 6L6 1M1 6L6 11" stroke="#412E27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
      <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="#412E27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function StoryNav({
  prevId,
  nextId,
  prevTitle,
  nextTitle,
  prevLabel,
  nextLabel,
  homeLabel,
  mainPage,
}: StoryNavProps) {
  return (
    <nav className="flex w-full md:h-[127px]">
      {/* Left — prev story or home */}
      <div className="flex w-1/2">
        {prevId !== null ? (
          <Link
            href={`/stories/${prevId}` as "/"}
            className="flex w-full flex-col justify-center border border-brown-dark bg-cream px-4 py-5 transition-colors hover:bg-tan md:px-16 md:py-0"
          >
            <div className="flex items-center gap-3 md:gap-6">
              <ArrowLeft />
              <span className="text-xs font-bold uppercase leading-none text-brown-dark">{prevLabel}</span>
            </div>
            <p className="text-sm font-bold leading-snug text-brown-dark md:text-base md:leading-6">{prevTitle}</p>
          </Link>
        ) : (
          <Link
            href="/"
            className="flex w-full flex-col justify-center border border-brown-dark bg-cream px-4 py-5 transition-colors hover:bg-tan md:px-16 md:py-0"
          >
            <div className="flex items-center gap-3 md:gap-6">
              <ArrowLeft />
              <span className="text-xs font-bold uppercase leading-none text-brown-dark">{homeLabel}</span>
            </div>
            <p className="text-sm font-bold leading-snug text-brown-dark md:text-base md:leading-6">{mainPage}</p>
          </Link>
        )}
      </div>

      {/* Right — next story or home */}
      <div className="flex w-1/2">
        {nextId !== null ? (
          <Link
            href={`/stories/${nextId}` as "/"}
            className="flex w-full flex-col items-end justify-center border border-brown-dark bg-cream px-4 py-5 transition-colors hover:bg-tan md:px-16 md:py-0"
          >
            <div className="flex items-center gap-3 md:gap-6">
              <span className="text-xs font-bold uppercase leading-none text-brown-dark">{nextLabel}</span>
              <ArrowRight />
            </div>
            <p className="text-sm font-bold leading-snug text-brown-dark md:text-base md:leading-6">{nextTitle}</p>
          </Link>
        ) : (
          <Link
            href="/"
            className="flex w-full flex-col items-end justify-center border border-brown-dark bg-cream px-4 py-5 transition-colors hover:bg-tan md:px-16 md:py-0"
          >
            <div className="flex items-center gap-3 md:gap-6">
              <span className="text-xs font-bold uppercase leading-none text-brown-dark">{homeLabel}</span>
              <ArrowRight />
            </div>
            <p className="text-sm font-bold leading-snug text-brown-dark md:text-base md:leading-6">{mainPage}</p>
          </Link>
        )}
      </div>
    </nav>
  );
}
