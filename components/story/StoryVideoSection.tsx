interface StoryVideoSectionProps {
  videoUrl?: string;
  caption: string;
  videoLabel: string;
}

export function StoryVideoSection({ videoUrl, caption, videoLabel }: StoryVideoSectionProps) {
  return (
    <section className="w-full bg-cream px-12 py-16">
      <div className="flex flex-col items-center gap-6">
        {/* Video: 1020×580 */}
        <div
          className="relative flex items-center justify-center overflow-hidden"
          style={{ width: 1020, maxWidth: "100%", height: 580, backgroundColor: "#442A22" }}
        >
          {videoUrl ? (
            <iframe
              src={videoUrl}
              title={caption}
              width="100%"
              height="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none", position: "absolute", inset: 0 }}
            />
          ) : (
            <div className="flex flex-col items-center gap-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <circle cx="32" cy="32" r="30" stroke="#EDE1D1" strokeWidth="2" opacity="0.6" />
                <path d="M26 20L46 32L26 44V20Z" fill="#EDE1D1" opacity="0.6" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-[3px]" style={{ color: "#EDE1D1", opacity: 0.4 }}>
                {videoLabel}
              </span>
            </div>
          )}
        </div>

        {/* Caption */}
        <p className="text-center text-sm font-bold uppercase tracking-[1.5px] text-brown-dark/60">
          {caption}
        </p>
      </div>
    </section>
  );
}
