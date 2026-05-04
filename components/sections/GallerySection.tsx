"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const GALLERY_IMAGES = Array.from({ length: 22 }, (_, i) => `gallery_${i + 1}.JPG`);

interface GallerySectionProps {
  eyebrow: string;
  viewAll: string;
}

export function GallerySection({ eyebrow, viewAll }: GallerySectionProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const preloaded = useRef(new Set<string>());

  function handleMouseEnter(img: string) {
    if (preloaded.current.has(img)) return;
    preloaded.current.add(img);
    const el = new window.Image();
    el.src = `/images/gallery/${img}`;
  }

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
      <div className="px-4 py-10 md:px-12 md:py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-[32px] font-bold text-rust">{eyebrow}</h2>
          <button
            onClick={() => setShowModal(true)}
            className="cursor-pointer border-b-2 border-rust px-3 py-2.5 text-base font-bold text-brown-body transition-colors hover:text-rust md:text-2xl"
          >
            {viewAll}
          </button>
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
              onMouseEnter={() => handleMouseEnter(img)}
              className="shrink-0 focus-visible:outline-none"
            >
              <div className="relative h-[240px] w-[240px] overflow-hidden md:h-[380px] md:w-[380px]">
                <Image
                  src={`/images/gallery/${img}`}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 380px, 240px"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  draggable={false}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Gallery modal */}
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
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  onMouseEnter={() => handleMouseEnter(img)}
                  className="overflow-hidden focus-visible:outline-none"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={`/images/gallery/${img}`}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox — above modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/_next/image?url=${encodeURIComponent(`/images/gallery/${GALLERY_IMAGES[selected]}`)}&w=1920&q=85`}
              alt=""
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
