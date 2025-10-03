"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryImage } from "@/data/gallery-images";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox = ({ images, currentIndex, isOpen, onClose, onNavigate }: LightboxProps) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imageFit, setImageFit] = useState<'contain' | 'cover'>('contain');
  const [showControls, setShowControls] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Minimum distance for swipe detection
  const minSwipeDistance = 50;

  // Mount check for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll lock and restoration
  useEffect(() => {
    if (!mounted) return;

    if (isOpen) {
      // Store current scroll position
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Lock scroll
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.position = 'fixed';
      document.documentElement.style.top = `-${currentScrollY}px`;
      document.documentElement.style.width = '100%';
    } else {
      // Restore scroll
      document.documentElement.style.overflow = '';
      document.documentElement.style.position = '';
      document.documentElement.style.top = '';
      document.documentElement.style.width = '';
      window.scrollTo(0, scrollY);
    }

    return () => {
      if (isOpen) {
        document.documentElement.style.overflow = '';
        document.documentElement.style.position = '';
        document.documentElement.style.top = '';
        document.documentElement.style.width = '';
        window.scrollTo(0, scrollY);
      }
    };
  }, [isOpen, mounted, scrollY]);

  // Auto-hide controls
  useEffect(() => {
    if (!isOpen) {
      setShowControls(true);
      return;
    }

    const timer = setTimeout(() => {
      setShowControls(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen, currentIndex]);

  const handleShowControls = () => {
    setShowControls(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    handleShowControls();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };


  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        if (currentIndex > 0) {
          onNavigate(currentIndex - 1);
        }
        break;
      case 'ArrowRight':
        if (currentIndex < images.length - 1) {
          onNavigate(currentIndex + 1);
        }
        break;
      case 'f':
      case 'F':
        setImageFit(prev => prev === 'contain' ? 'cover' : 'contain');
        break;
    }
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  useEffect(() => {
    if (isOpen && mounted) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, mounted, handleKeyDown]);

  if (!mounted || !isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  const lightboxContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          onClick={onClose}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100dvh',
            overscrollBehavior: 'contain'
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
        >
          {/* Controls overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showControls ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 pointer-events-none"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white transition hover:bg-black/70 sm:top-6 sm:right-6 sm:h-14 sm:w-14 pointer-events-auto"
              aria-label="Close lightbox"
              style={{ top: 'max(1rem, env(safe-area-inset-top))' }}
            >
              <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Fit/Fill toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setImageFit(prev => prev === 'contain' ? 'cover' : 'contain');
              }}
              className="absolute top-4 left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white transition hover:bg-black/70 sm:top-6 sm:left-6 sm:h-14 sm:w-14 pointer-events-auto"
              aria-label={`Switch to ${imageFit === 'contain' ? 'fill' : 'fit'} mode`}
              style={{ top: 'max(1rem, env(safe-area-inset-top))' }}
            >
              <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </motion.div>

          {/* Navigation arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showControls ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 pointer-events-none"
          >
            {currentIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(currentIndex - 1);
                }}
                className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white transition hover:bg-black/70 sm:left-6 sm:h-14 sm:w-14 pointer-events-auto"
                aria-label="Previous image"
              >
                <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {currentIndex < images.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(currentIndex + 1);
                }}
                className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white transition hover:bg-black/70 sm:right-6 sm:h-14 sm:w-14 pointer-events-auto"
                aria-label="Next image"
              >
                <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </motion.div>

          {/* Image container */}
          <div
            className="relative flex flex-1 items-center justify-center"
            onClick={handleShowControls}
            onMouseMove={handleShowControls}
            style={{
              paddingTop: 'max(4rem, env(safe-area-inset-top))',
              paddingBottom: 'max(4rem, env(safe-area-inset-bottom))',
              paddingLeft: 'max(1rem, env(safe-area-inset-left))',
              paddingRight: 'max(1rem, env(safe-area-inset-right))'
            }}
          >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image
                src={currentImage.image}
                alt={currentImage.alt}
                width={1200}
                height={800}
                sizes="100vw"
                className={`max-w-full max-h-full object-${imageFit}`}
                priority
                unoptimized={true}
              />
              
            </motion.div>
          </div>

          {/* Image info overlay and counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showControls ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
          >
            {/* Image counter */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-16 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              {currentIndex + 1} / {images.length}
            </div>
            
            {/* Image info */}
            <div className="bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6">
              <div className="space-y-2">
                <div className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-white backdrop-blur-sm">
                  {currentImage.toneLabel}
                </div>
                {currentImage.title && (
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {currentImage.title}
                  </h3>
                )}
                {currentImage.description && (
                  <p className="max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                    {currentImage.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(lightboxContent, document.body);
};
