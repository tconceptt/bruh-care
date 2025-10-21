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
                        href="mailto:Bruhmrc@gmail.com" 
                        className="block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        Bruhmrc@gmail.com
                      </Link>
                      <Link 
                        href="tel:+251911186118" 
                        className="group flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        <svg 
                          className="h-4 w-4 text-[var(--color-primary)] group-hover:scale-110 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                          />
                        </svg>
                        0911186118
                      </Link>
                      <p className="text-sm text-[var(--text-muted)] pl-6">
                        0911564212
                      </p>
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
                        href="mailto:Bruhmrc@gmail.com?subject=Partnership Inquiry" 
                        className="block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        Partnerships
                      </Link>
                      <Link 
                        href="mailto:Bruhmrc@gmail.com?subject=Visit Request" 
                        className="block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        Schedule a visit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Copyright */}
            <div className="mt-12 pt-8 border-t border-[rgba(26,67,56,0.06)]">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
                <p className="text-xs text-[var(--text-muted)]">
                  © {new Date().getFullYear()} BRUH Care and Learning Center. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[var(--text-muted)]">Follow us:</span>
                  <Link
                    href="https://instagram.com/bruhcenter21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--color-primary)]"
                    aria-label="Follow us on Instagram"
                  >
                    <svg 
                      className="h-5 w-5 text-[var(--color-primary)] group-hover:scale-110 transition-transform" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="hidden sm:inline">@bruhcenter21</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};
