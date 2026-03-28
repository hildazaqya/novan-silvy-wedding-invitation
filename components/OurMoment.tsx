"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaX } from "react-icons/fa6";

const gallery = [
      "/image/photo/WIL00053_gm_optimized.webp",
      "/image/photo/WIL00416_gm_optimized.webp",
      "/image/photo/WIL00435_gm_optimized.webp",
      "/image/photo/WIL00117_gm_optimized.webp",
      "/image/photo/WIL00520_gm_optimized.webp",
      "/image/photo/WIL00553_gm_optimized.webp",
      "/image/photo/WIL00739_gm_optimized.webp",
      "/image/photo/WIL00257_gm_optimized.webp",


];

const leftPhotos = gallery.filter((_, i) => i % 2 === 0);
const rightPhotos = gallery.filter((_, i) => i % 2 !== 0);

export function OurMoment() {
      const [lightboxOpen, setLightboxOpen] = useState(false);
      const [currentIndex, setCurrentIndex] = useState(0);
      const touchStartX = useRef(0);

      const openLightbox = (index: number) => {
            setCurrentIndex(index);
            setLightboxOpen(true);
      };

      useEffect(() => {
            if (!lightboxOpen) return;
            document.body.style.overflow = "hidden";
            const handleKey = (e: KeyboardEvent) => {
                  if (e.key === "ArrowLeft")
                        setCurrentIndex((i) => (i - 1 + gallery.length) % gallery.length);
                  else if (e.key === "ArrowRight")
                        setCurrentIndex((i) => (i + 1) % gallery.length);
                  else if (e.key === "Escape") setLightboxOpen(false);
            };
            window.addEventListener("keydown", handleKey);
            return () => {
                  document.body.style.overflow = "";
                  window.removeEventListener("keydown", handleKey);
            };
      }, [lightboxOpen]);

      const handleTouchStart = (e: React.TouchEvent) => {
            touchStartX.current = e.touches[0].clientX;
      };

      const handleTouchEnd = (e: React.TouchEvent) => {
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                  if (diff > 0)
                        setCurrentIndex((i) => (i + 1) % gallery.length);
                  else
                        setCurrentIndex((i) => (i - 1 + gallery.length) % gallery.length);
            }
      };

      return (
            <main className="relative bg-[url('/image/asset/cover-depan.webp')] p-5 bg-cover flex flex-col">
                  <div className="absolute w-full h-full inset-0 bg-white/10 backdrop-blur-sm z-0" />
                  <div className="bg-primary-light rounded-4xl z-10 w-full shadow-lg flex flex-col items-center gap-2 p-10 px-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark">Our Moment</h2>
                        <p className="text-center text-xs md:text-sm text-neutral-800 italic px-2">
                              &ldquo;In all the world, there is no heart for me like yours. In all
                              the world, there is no love for you like mine.&rdquo;
                              <br />
                              <span className="not-italic font-medium">&ndash;&nbsp;Maya Angelou</span>
                        </p>

                        {/* Masonry-style 2-column photo grid */}
                        <div className="flex gap-2 w-full mt-5">
                              {/* Left column */}
                              <div className="flex flex-col gap-2 flex-1">
                                    {leftPhotos.map((photo, colIdx) => {
                                          const galleryIdx = colIdx * 2;
                                          return (
                                                <div
                                                      key={galleryIdx}
                                                      className={`${colIdx % 2 === 0 ? "h-30 md:h-35.5 object-center" : "h-54 md:h-60"
                                                            } relative cursor-pointer overflow-hidden rounded-lg md:rounded-xl`}
                                                      onClick={() => openLightbox(galleryIdx)}
                                                >
                                                      <Image
                                                            src={photo}
                                                            alt={`Our moment ${galleryIdx + 1}`}
                                                            fill
                                                            className={`object-cover object-center transition-transform duration-300 ${colIdx % 2 === 0
                                                                        ? "scale-125 hover:scale-130"
                                                                        : "hover:scale-105"
                                                                  }`}
                                                      />
                                                </div>
                                          );
                                    })}
                              </div>
                              {/* Right column */}
                              <div className="flex flex-col gap-2 flex-1">
                                    {rightPhotos.map((photo, colIdx) => {
                                          const galleryIdx = colIdx * 2 + 1;
                                          return (
                                                <div
                                                      key={galleryIdx}
                                                      className={`${colIdx % 2 === 0 ? "h-54 md:h-60" : "h-30 md:h-35.5 object-center"
                                                            } relative cursor-pointer overflow-hidden rounded-lg md:rounded-xl`}
                                                      onClick={() => openLightbox(galleryIdx)}
                                                >
                                                      <Image
                                                            src={photo}
                                                            alt={`Our moment ${galleryIdx + 1}`}
                                                            fill
                                                            className={`object-cover object-center transition-transform duration-300 ${colIdx % 2 !== 0
                                                                        ? "scale-125 hover:scale-130"
                                                                        : "hover:scale-105"
                                                                  }`}
                                                      />
                                                </div>
                                          );
                                    })}
                              </div>
                        </div>
                  </div>

                  {/* Lightbox */}
                  {lightboxOpen && (
                        <div
                              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center select-none"
                              onTouchStart={handleTouchStart}
                              onTouchEnd={handleTouchEnd}
                        >
                              {/* Close button */}
                              <button
                                    className="absolute top-5 right-5 text-white/80 hover:text-white text-2xl z-10 p-2"
                                    onClick={() => setLightboxOpen(false)}
                                    aria-label="Close lightbox"
                              >
                                    <FaX size={16} />
                              </button>

                              {/* Counter */}
                              <span className="absolute top-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                                    {currentIndex + 1} / {gallery.length}
                              </span>

                              {/* Prev */}
                              <button
                                    className="absolute left-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-5xl px-3 py-4 z-10"
                                    onClick={() =>
                                          setCurrentIndex((i) => (i - 1 + gallery.length) % gallery.length)
                                    }
                                    aria-label="Previous photo"
                              >
                                    &#8249;
                              </button>

                              {/* Image */}
                              <div
                                    key={currentIndex}
                                    className="relative w-[76vw] md:w-[85vw] h-[80vh]"
                                    style={{ animation: "lightboxFadeIn 0.2s ease" }}
                              >
                                    <Image
                                          src={gallery[currentIndex]}
                                          alt={`Moment ${currentIndex + 1}`}
                                          fill
                                          className="object-contain"
                                          priority
                                    />
                              </div>

                              {/* Next */}
                              <button
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-5xl px-3 py-4 z-10"
                                    onClick={() =>
                                          setCurrentIndex((i) => (i + 1) % gallery.length)
                                    }
                                    aria-label="Next photo"
                              >
                                    &#8250;
                              </button>

                              {/* Dot indicators */}
                              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
                                    {gallery.map((_, i) => (
                                          <button
                                                key={i}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-white scale-125" : "bg-white/40"
                                                      }`}
                                                onClick={() => setCurrentIndex(i)}
                                                aria-label={`Photo ${i + 1}`}
                                          />
                                    ))}
                              </div>
                        </div>
                  )}
            </main>
      );
}