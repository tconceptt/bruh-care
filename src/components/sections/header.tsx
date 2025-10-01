import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(253,251,246,0.9)] backdrop-blur-md transition-shadow">
      <nav className="mx-auto flex max-w-[min(1280px,94vw)] items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-4 sm:py-4 lg:px-12">
        <Link href="#hero" className="flex items-center gap-2 sm:gap-3">
          <Image src="/bruh-logo.svg" alt="BRUH Care logo" width={32} height={32} className="h-8 w-8 sm:h-10 sm:w-10" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-deep)] sm:text-sm">
            BRUH Care
          </span>
        </Link>
        <div className="hidden items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)] md:gap-6 md:text-sm lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[var(--color-primary)]">
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="mailto:hello@bruhcenter.org"
          className="hidden rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-[0_12px_28px_rgba(241,91,34,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(241,91,34,0.28)] md:px-5 lg:inline-flex"
        >
          Connect
        </Link>
        <details className="relative lg:hidden">
          <summary className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[rgba(26,67,56,0.12)] bg-white shadow-[0_10px_24px_rgba(26,67,56,0.08)] sm:h-10 sm:w-10">
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-[4px] sm:space-y-[6px]">
              <span className="block h-[2px] w-4 rounded-full bg-[var(--color-deep)] sm:w-5" />
              <span className="block h-[2px] w-4 rounded-full bg-[var(--color-deep)] sm:w-5" />
              <span className="block h-[2px] w-4 rounded-full bg-[var(--color-deep)] sm:w-5" />
            </div>
          </summary>
          <div className="absolute right-0 mt-2 flex w-48 flex-col gap-2 rounded-2xl border border-[rgba(26,67,56,0.12)] bg-white/95 p-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-deep)] shadow-[0_18px_42px_rgba(26,67,56,0.12)] sm:mt-3 sm:w-56 sm:gap-3 sm:p-5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="py-1 transition hover:text-[var(--color-primary)]">
                {link.label}
              </Link>
            ))}
            <Link href="mailto:hello@bruhcenter.org" className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-white">
              Connect
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
};
