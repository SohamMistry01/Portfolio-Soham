"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";

export interface GalleryImage {
  src: string;
  title?: string;
  alt?: string;
}

interface ProjectGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
  images: GalleryImage[];
  initialIndex?: number;
}

export function ProjectGalleryModal({
  isOpen,
  onClose,
  projectName,
  images,
  initialIndex = 0,
}: ProjectGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const [scale, setScale] = useState(1);
  const [hasError, setHasError] = useState<Record<number, boolean>>({});

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setDirection(0);
      setScale(1);
    }
  }, [isOpen, initialIndex]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const handleNext = useCallback(() => {
    setScale(1);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setScale(1);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleZoomIn = useCallback(() => {
    setScale((s) => Math.min(3, +(s + 0.5).toFixed(1)));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale((s) => Math.max(1, +(s - 0.5).toFixed(1)));
  }, []);

  const handleResetZoom = useCallback(() => {
    setScale(1);
  }, []);

  const handleToggleZoom = useCallback(() => {
    setScale((s) => (s > 1 ? 1 : 2));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn();
      } else if (e.key === "-" || e.key === "_") {
        handleZoomOut();
      } else if (e.key === "0") {
        handleResetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleNext, handlePrev, handleZoomIn, handleZoomOut, handleResetZoom, onClose]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const isImageMissing = hasError[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 350, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: "spring" as const, stiffness: 350, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
          className="relative z-10 w-full max-w-6xl max-h-[96vh] flex flex-col items-center justify-between pointer-events-auto"
        >
          {/* Header */}
          <div className="w-full flex items-center justify-between px-2 sm:px-4 py-2 text-white/90">
            <div className="flex items-center gap-2.5">
              <span className="font-semibold text-base sm:text-lg tracking-tight text-white flex items-center gap-2">
                {projectName}
              </span>
              <span className="text-xs text-white/50 bg-white/10 px-2 py-0.5 rounded-full border border-white/10 hidden sm:inline-block">
                Screenshots &amp; Glimpse
              </span>
            </div>

            {/* Header Right Actions: Zoom Controls + Close Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Zoom Controls */}
              <div className="flex items-center bg-white/10 border border-white/15 rounded-full p-1 backdrop-blur-md shadow-lg">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  disabled={scale <= 1}
                  className="p-1.5 rounded-full hover:bg-white/15 text-white/80 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                  title="Zoom Out (-)"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleToggleZoom}
                  className="px-2.5 py-0.5 text-xs font-mono font-medium text-white/90 hover:text-primary transition-colors cursor-pointer"
                  title="Click to toggle 100% / 200%"
                >
                  {Math.round(scale * 100)}%
                </button>

                <button
                  type="button"
                  onClick={handleZoomIn}
                  disabled={scale >= 3}
                  className="p-1.5 rounded-full hover:bg-white/15 text-white/80 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                  title="Zoom In (+)"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                {scale > 1 && (
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    className="p-1.5 rounded-full hover:bg-white/15 text-white/70 hover:text-white transition-all cursor-pointer border-l border-white/15 ml-0.5 pl-1.5"
                    title="Reset Zoom to 100% (0)"
                    aria-label="Reset zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="group p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/15 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                title="Close (Esc)"
                aria-label="Close gallery modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Stage (Image & Nav Buttons) */}
          <div className="relative w-full flex items-center justify-center min-h-[50vh] h-[65vh] sm:h-[72vh] md:h-[75vh] my-2 select-none overflow-hidden rounded-2xl">
            {/* Left Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white/80 hover:text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-2xl"
              title="Previous Screenshot (←)"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white/80 hover:text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-2xl"
              title="Next Screenshot (→)"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Slide Viewport */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-6 sm:px-14">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag={scale === 1 ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.3}
                  onDragEnd={(_e, { offset, velocity }) => {
                    if (scale === 1) {
                      const swipe = Math.abs(offset.x) * velocity.x;
                      if (swipe < -10000 || offset.x < -100) {
                        handleNext();
                      } else if (swipe > 10000 || offset.x > 100) {
                        handlePrev();
                      }
                    }
                  }}
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  {isImageMissing ? (
                    // Helpful placeholder if image hasn't been placed in folder yet
                    <div className="flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-card/40 border border-white/10 max-w-md space-y-3">
                      <div className="p-3 bg-primary/20 rounded-xl text-primary border border-primary/30">
                        <ImageIcon className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">
                        Screenshot #{currentIndex + 1}
                      </h4>
                      <p className="text-sm text-white/70 font-mono bg-black/40 px-3 py-1.5 rounded-md border border-white/10">
                        {currentImage.src}
                      </p>
                      <p className="text-xs text-white/60">
                        Place your screenshot as{" "}
                        <strong className="text-primary font-medium">
                          {currentImage.src.split("/").pop()}
                        </strong>{" "}
                        in{" "}
                        <span className="font-mono text-white/80">
                          public{currentImage.src.substring(0, currentImage.src.lastIndexOf("/") + 1)}
                        </span>
                      </p>
                    </div>
                  ) : (
                    // Real Screenshot Display - with interactive zoom and drag-pan
                    <motion.div
                      animate={{ scale }}
                      transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
                      drag={scale > 1}
                      dragConstraints={{
                        left: -(scale - 1) * 450,
                        right: (scale - 1) * 450,
                        top: -(scale - 1) * 280,
                        bottom: (scale - 1) * 280,
                      }}
                      dragElastic={0.15}
                      onDoubleClick={handleToggleZoom}
                      className={`relative flex items-center justify-center max-h-[62vh] sm:max-h-[68vh] md:max-h-[72vh] max-w-full ${
                        scale > 1
                          ? "cursor-grab active:cursor-grabbing"
                          : "cursor-zoom-in"
                      }`}
                      title={
                        scale > 1
                          ? "Drag to pan | Double-click to reset"
                          : "Double-click to zoom in"
                      }
                    >
                      <img
                        src={currentImage.src}
                        alt={currentImage.alt || `${projectName} screenshot ${currentIndex + 1}`}
                        onError={() => {
                          setHasError((prev) => ({ ...prev, [currentIndex]: true }));
                        }}
                        className="max-h-[62vh] sm:max-h-[68vh] md:max-h-[72vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/15 select-none transition-shadow duration-200 pointer-events-none"
                        draggable={false}
                      />
                    </motion.div>
                  )}

                  {/* Optional Image Title/Caption */}
                  {currentImage.title && !isImageMissing && (
                    <p className="mt-3 text-xs sm:text-sm text-white/80 font-medium bg-black/60 backdrop-blur-md px-4 py-1 rounded-full border border-white/10 text-center max-w-xl truncate">
                      {currentImage.title}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Footer Controls & Dot Indicators */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 px-4 pt-1 text-xs text-white/60">
            {/* Keyboard & Zoom shortcut hints */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-mono px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-[11px] text-white/80">
                ← / →
              </span>
              <span>Navigate</span>
              <span className="font-mono px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-[11px] text-white/80 ml-2">
                + / -
              </span>
              <span>Zoom</span>
              <span className="font-mono px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-[11px] text-white/80 ml-2">
                Double-click
              </span>
              <span>Toggle</span>
              <span className="font-mono px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-[11px] text-white/80 ml-2">
                Esc
              </span>
              <span>Close</span>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setScale(1);
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`transition-all duration-200 rounded-full cursor-pointer ${
                    i === currentIndex
                      ? "w-7 h-2 bg-primary ring-2 ring-primary/40"
                      : "w-2 h-2 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  title={`Screenshot ${i + 1}`}
                />
              ))}
            </div>

            {/* Counter pill */}
            <div className="flex items-center gap-2">
              {scale > 1 && (
                <span className="text-[11px] font-mono text-primary bg-primary/15 border border-primary/25 px-2 py-0.5 rounded-full">
                  Pan Enabled
                </span>
              )}
              <div className="bg-white/10 border border-white/15 px-3 py-1 rounded-full text-white/90 font-medium tracking-wider">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
