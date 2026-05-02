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
    <nav className="flex h-[127px] w-full">
      {/* Left — prev story or home */}
      <div className="flex h-full w-1/2">
        {prevId !== null ? (
          <Link
            href={`/stories/${prevId}` as "/"}
            className="flex h-full w-full flex-col justify-center border border-brown-dark bg-cream px-16 transition-colors hover:bg-tan"
          >
            <div className="flex items-center gap-6">
              <ArrowLeft />
              <span className="text-base font-bold uppercase leading-none text-brown-dark">{prevLabel}</span>
            </div>
            <p className="text-2xl font-bold leading-8 text-brown-dark">{prevTitle}</p>
          </Link>
        ) : (
          <Link
            href="/"
            className="flex h-full w-full flex-col justify-center border border-brown-dark bg-cream px-16 transition-colors hover:bg-tan"
          >
            <div className="flex items-center gap-6">
              <ArrowLeft />
              <span className="text-base font-bold uppercase leading-none text-brown-dark">{homeLabel}</span>
            </div>
            <p className="text-2xl font-bold leading-8 text-brown-dark">{mainPage}</p>
          </Link>
        )}
      </div>

      {/* Right — next story or home */}
      <div className="flex h-full w-1/2">
        {nextId !== null ? (
          <Link
            href={`/stories/${nextId}` as "/"}
            className="flex h-full w-full flex-col items-end justify-center border border-brown-dark bg-cream px-16 transition-colors hover:bg-tan"
          >
            <div className="flex items-center gap-6">
              <span className="text-base font-bold uppercase leading-none text-brown-dark">{nextLabel}</span>
              <ArrowRight />
            </div>
            <p className="text-2xl font-bold leading-8 text-brown-dark">{nextTitle}</p>
          </Link>
        ) : (
          <Link
            href="/"
            className="flex h-full w-full flex-col items-end justify-center border border-brown-dark bg-cream px-16 transition-colors hover:bg-tan"
          >
            <div className="flex items-center gap-6">
              <span className="text-base font-bold uppercase leading-none text-brown-dark">{homeLabel}</span>
              <ArrowRight />
            </div>
            <p className="text-2xl font-bold leading-8 text-brown-dark">{mainPage}</p>
          </Link>
        )}
      </div>
    </nav>
  );
}
