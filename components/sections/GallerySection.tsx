import { Link } from "@/i18n/navigation";
import { Placeholder } from "@/components/ui/Placeholder";

const GALLERY_IMAGES = [
  "DSC08327.jpg",
  "DSC07858.jpg",
  "IMG_9873.jpg",
  "DSC08314.jpg",
  "photo_2026-03-24_20-11-40.jpg",
  "photo_2026-03-24_20-11-37.jpg",
  "photo_2026-03-24_20-11-32.jpg",
  "photo_2026-03-24_20-11-43.jpg",
];

interface GallerySectionProps {
  eyebrow: string;
  viewAll: string;
}

export function GallerySection({ eyebrow, viewAll }: GallerySectionProps) {
  return (
    <section id="gallery" className="w-full border-t border-brown-dark bg-tan">
      <div className="px-12 py-16">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-[32px] font-bold text-rust">{eyebrow}</h2>
          <Link
            href="/#gallery"
            className="border-b-2 border-rust px-3 py-2.5 text-2xl font-bold text-brown-body"
          >
            {viewAll}
          </Link>
        </div>

        {/* Horizontal scroll */}
        <div
          className="flex gap-9 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <Placeholder
              key={i}
              label={img}
              className="h-[380px] w-[380px] shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
