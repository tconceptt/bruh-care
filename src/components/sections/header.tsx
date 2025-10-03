"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { navLinks } from "@/data";

const headerVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  hidden: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
  },
} as const;


export const Header = () => {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Check if we're on the homepage
  const isHomePage = pathname === '/';

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const delta = latest - previous;

    if (latest <= 0) {
      setHasScrolled(false);
      setHidden(false);
      return;
    }

    setHasScrolled(latest > 16);

    if (shouldReduceMotion) {
      setHidden(false);
      return;
    }

    if (delta > 4 && latest > 80) {
      setHidden(true);
    } else if (delta < -4) {
      setHidden(false);
    }
  });

  const transitionClass = shouldReduceMotion
    ? "transition-none"
    : "transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-out";

  const chromeClass = hasScrolled
    ? "bg-[rgba(253,251,246,0.92)] backdrop-blur-lg shadow-[0_8px_24px_rgba(26,67,56,0.08)] border-b border-white/30"
    : "bg-transparent backdrop-blur-none shadow-none border-transparent";

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Helper function to get the correct href for navigation links
  const getNavHref = (href: string) => {
    if (href.startsWith('#')) {
      // If we're on homepage, use hash link directly
      // If we're on another page, navigate to homepage with hash
      return isHomePage ? href : `/${href}`;
    }
    return href;
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile: Always visible full header */}
      <header className={`lg:hidden fixed inset-x-0 top-0 z-50 flex justify-center ${transitionClass} ${chromeClass}`}>
        <nav className="mx-auto flex w-full max-w-[min(1280px,94vw)] items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-4 sm:py-4">
          <Link href={getNavHref("#hero")} className="flex items-center">
            <Image src="/bruh-logo.svg" alt="BRUH Care logo" width={64} height={64} className="h-16 w-16 sm:h-20 sm:w-20" />
          </Link>
          <div ref={mobileMenuRef} className="relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[rgba(26,67,56,0.12)] bg-white shadow-[0_10px_24px_rgba(26,67,56,0.08)] sm:h-10 sm:w-10"
              aria-label="Toggle navigation"
            >
              <div className="space-y-[4px] sm:space-y-[6px]">
                <span className="block h-[2px] w-4 rounded-full bg-[var(--color-deep)] sm:w-5" />
                <span className="block h-[2px] w-4 rounded-full bg-[var(--color-deep)] sm:w-5" />
                <span className="block h-[2px] w-4 rounded-full bg-[var(--color-deep)] sm:w-5" />
              </div>
            </button>
            {isMobileMenuOpen && (
              <div className="absolute right-0 top-full mt-2 flex w-48 flex-col gap-2 rounded-2xl border border-[rgba(26,67,56,0.12)] bg-white/95 p-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-deep)] shadow-[0_18px_42px_rgba(26,67,56,0.12)] sm:mt-3 sm:w-56 sm:gap-3 sm:p-5">
                {navLinks.map((link) => (
                  <Link key={link.href} href={getNavHref(link.href)} className="py-1 transition hover:text-[var(--color-primary)]" onClick={handleMobileLinkClick}>
                    {link.label}
                  </Link>
                ))}
                <Link href="mailto:hello@bruhcenter.org" className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-white" onClick={handleMobileLinkClick}>
                  Connect
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Desktop: Full header with auto-hide */}
      <motion.header
        variants={headerVariants}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        className={`hidden lg:block fixed inset-x-0 top-0 z-50 flex justify-center ${transitionClass} ${chromeClass}`}
      >
        <nav
          className={`mx-auto flex w-full max-w-[min(1280px,94vw)] items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-4 sm:py-4 lg:rounded-full lg:px-6 lg:py-3 ${
            hasScrolled
              ? "lg:bg-white/80 lg:border lg:border-white/30 lg:shadow-[0_12px_32px_rgba(26,67,56,0.12)] lg:backdrop-blur-sm"
              : "lg:bg-white/30 lg:border lg:border-white/20 lg:shadow-[0_8px_24px_rgba(26,67,56,0.06)] lg:backdrop-blur-sm"
          }`}
        >
          <Link href={getNavHref("#hero")} className="flex items-center">
            <Image src="/bruh-logo.svg" alt="BRUH Care logo" width={80} height={80} className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
          </Link>
          <div className="hidden items-center gap-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)] md:gap-6 md:text-base lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={getNavHref(link.href)} className="transition hover:text-[var(--color-primary)]">
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="mailto:hello@bruhcenter.org"
            className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-[0_12px_28px_rgba(241,91,34,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(241,91,34,0.28)] md:px-5"
          >
            Connect
          </Link>
        </nav>
      </motion.header>
    </>
  );
};
