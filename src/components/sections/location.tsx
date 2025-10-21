import Link from "next/link";
import { Reveal } from "@/components/ui";

export const Location = () => {
  return (
    <div className="relative">
      <Reveal>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)]">
                Visit Us
              </p>
              <h2 className="text-3xl font-semibold text-[var(--color-deep)] sm:text-4xl md:text-[3rem]">
                Find us in Addis Ababa
              </h2>
              <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                We welcome families, partners, and visitors to experience our nurturing environment. 
                Schedule a visit to see how we support children and families.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 rounded-2xl bg-gradient-to-br from-[rgba(77,190,158,0.08)] to-[rgba(254,190,41,0.06)] p-6 border border-[var(--color-primary)]/10">
              <div className="flex items-start gap-3">
                <svg 
                  className="h-6 w-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-deep)] mb-1">Location</h3>
                  <p className="text-sm text-[var(--text-muted)]">Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg 
                  className="h-6 w-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" 
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
                <div>
                  <h3 className="font-semibold text-[var(--color-deep)] mb-1">Phone</h3>
                  <div className="space-y-1">
                    <Link 
                      href="tel:+251911186118"
                      className="block text-sm text-[var(--text-muted)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      0911186118
                    </Link>
                    <p className="text-sm text-[var(--text-muted)]">0911564212</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg 
                  className="h-6 w-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-deep)] mb-1">Email</h3>
                  <Link 
                    href="mailto:Bruhmrc@gmail.com"
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Bruhmrc@gmail.com
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="mailto:Bruhmrc@gmail.com?subject=Visit Request"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_12px_28px_rgba(77,190,158,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(77,190,158,0.35)]"
              >
                Schedule a Visit
              </Link>
              <Link
                href="https://maps.app.goo.gl/k2zz3o64RQbZwsd59?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-deep)]/30 bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-deep)] transition hover:border-[var(--color-deep)]/60 hover:bg-white"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open in Maps
              </Link>
            </div>
          </div>

          {/* Right side - Map */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-[0_24px_48px_rgba(26,67,56,0.12)] ring-1 ring-[var(--color-deep)]/5">
              <div className="relative aspect-[4/3] lg:aspect-[3/4]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d394.24899831595565!2d38.787934169464355!3d9.039959898864983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b1d0d0d0d0d%3A0x0!2zOcKwMDInMjQuMCJOIDM4wrA0NycxNi42IkU!5e0!3m2!1sen!2set!4v1234567890123!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BRUH Care and Learning Center Location"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10" />
          </div>
        </div>
      </Reveal>
    </div>
  );
};

