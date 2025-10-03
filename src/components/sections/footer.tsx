import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui";
import { navLinks } from "@/data";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[rgba(26,67,56,0.08)] bg-white/60 sm:backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(254,190,41,0.03)] to-[rgba(77,190,158,0.04)]" />
      <div className="relative">
        <Reveal>
          <div className="mx-auto max-w-[min(1280px,94vw)] px-6 py-12 sm:px-8 sm:py-16 lg:px-10">
            {/* Main footer content */}
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Brand section */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-6">
                  <Image 
                    src="/bruh-logo.svg" 
                    alt="BRUH Care logo" 
                    width={32} 
                    height={32} 
                    className="h-8 w-8" 
                  />
                  <span className="text-base font-semibold uppercase tracking-[0.3em] text-[var(--color-deep)]">
                    BRUH Care
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--text-muted)] max-w-sm">
                  BRUH Care and Learning Center provides holistic education, therapy, and advocacy so children with intellectual disabilities—and their families—can flourish with dignity.
                </p>
              </div>

              {/* Navigation links */}
              <div className="lg:col-span-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Explore */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)]">
                      Explore
                    </h3>
                    <nav className="space-y-3">
                      {navLinks.map((link) => (
                        <Link 
                          key={`footer-${link.href}`} 
                          href={link.href} 
                          className="block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--color-primary)]"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>

                  {/* Connect */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)]">
                      Connect
                    </h3>
                    <div className="space-y-3">
                      <Link 
                        href="mailto:hello@bruhcenter.org" 
                        className="block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        hello@bruhcenter.org
                      </Link>
                      <Link 
                        href="tel:+251911000000" 
                        className="block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        +251 911 000 000
                      </Link>
                      <p className="text-sm text-[var(--text-muted)]">
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>

                  {/* Support */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)]">
                      Support
                    </h3>
                    <div className="space-y-3">
                      <Link 
                        href="mailto:partner@bruhcenter.org" 
                        className="block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        Partnerships
                      </Link>
                      <Link 
                        href="mailto:visit@bruhcenter.org" 
                        className="block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        Schedule a visit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright section */}
            <div className="mt-12 pt-8 border-t border-[rgba(26,67,56,0.06)]">
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
                <p className="text-xs text-[var(--text-muted)]">
                  © {new Date().getFullYear()} BRUH Care and Learning Center
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  All rights reserved
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};
