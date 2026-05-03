"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

const GALLERY_IMAGES = Array.from({ length: 22 }, (_, i) => `gallery_${i + 1}.JPG`);

interface GallerySectionProps {
  eyebrow: string;
  viewAll: string;
}

export function GallerySection({ eyebrow, viewAll }: GallerySectionProps) {
  const [selected, setSelected] = useState<number | null>(null);

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

  function handleImageClick(index: number) {
    if (!hasDragged.current) setSelected(index);
  }

  return (
    <section id="gallery" className="w-full border-t border-brown-dark bg-tan">
      <div className="px-12 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-[32px] font-bold text-rust">{eyebrow}</h2>
          <Link
            href="/#gallery"
            className="border-b-2 border-rust px-3 py-2.5 text-2xl font-bold text-brown-body"
          >
            {viewAll}
          </Link>
        </div>

        <div
          ref={trackRef}
          className="flex cursor-grab gap-9 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => handleImageClick(i)}
              className="shrink-0 focus-visible:outline-none"
            >
              <div className="relative h-[380px] w-[380px] overflow-hidden">
                <Image
                  src={`/images/gallery/${img}`}
                  alt=""
                  fill
                  className="object-cover"
                  draggable={false}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/gallery/${GALLERY_IMAGES[selected]}`}
              alt=""
              width={1200}
              height={900}
              className="max-h-[85vh] max-w-[85vw] object-contain"
              style={{ width: "auto", height: "auto" }}
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-10 right-0 text-4xl leading-none text-white"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
