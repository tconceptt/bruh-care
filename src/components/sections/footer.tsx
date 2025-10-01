import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui";
import { navLinks } from "@/data";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 border-t border-[rgba(26,67,56,0.08)] pt-6 text-base text-[var(--text-muted)] sm:pt-8">
      <Reveal>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="max-w-sm space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image src="/bruh-logo.svg" alt="BRUH Care logo" width={28} height={28} className="h-7 w-7 sm:h-9 sm:w-9" />
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-deep)] sm:text-base">
              BRUH Care
            </span>
          </div>
          <p className="text-sm leading-relaxed sm:text-base">
            BRUH Care and Learning Center provides holistic education, therapy, and advocacy so children with intellectual disabilities—and their families—can flourish with dignity.
          </p>
        </div>
          <div className="grid gap-6 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-deep)] sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3 sm:space-y-4">
            <p className="text-[var(--color-primary)]">Explore</p>
            {navLinks.map((link) => (
              <Link key={`footer-${link.href}`} href={link.href} className="block text-[var(--text-muted)] transition hover:text-[var(--color-primary)]">
                {link.label}
              </Link>
            ))}
          </div>
            <div className="space-y-3 sm:space-y-4">
            <p className="text-[var(--color-primary)]">Connect</p>
            <Link href="mailto:hello@bruhcenter.org" className="block text-[var(--text-muted)] transition hover:text-[var(--color-primary)]">
              hello@bruhcenter.org
            </Link>
            <Link href="tel:+251911000000" className="block text-[var(--text-muted)] transition hover:text-[var(--color-primary)]">
              +251 911 000 000
            </Link>
            <p className="text-[var(--text-muted)]">Addis Ababa, Ethiopia</p>
          </div>
            <div className="space-y-3 sm:space-y-4">
            <p className="text-[var(--color-primary)]">Support</p>
            <Link href="mailto:partner@bruhcenter.org" className="block text-[var(--text-muted)] transition hover:text-[var(--color-primary)]">
              Partnerships
            </Link>
            <Link href="mailto:visit@bruhcenter.org" className="block text-[var(--text-muted)] transition hover:text-[var(--color-primary)]">
              Schedule a visit
            </Link>
          </div>
        </div>
        </div>
        <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-muted)]">
          © {new Date().getFullYear()} BRUH Care and Learning Center. All rights reserved.
        </p>
      </Reveal>
    </footer>
  );
};
