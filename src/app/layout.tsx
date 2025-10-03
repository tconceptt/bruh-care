import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui";
import { Analytics } from '@vercel/analytics/react';

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bruhcenter.org'),
  title: {
    default: "BRUH Care and Learning Center | Special Needs Support & Education",
    template: "%s | BRUH Care and Learning Center"
  },
  description:
    "BRUH Care provides holistic, individualized support for children with intellectual disabilities and their families. Specialized education, therapy, and community programs in a nurturing environment.",
  keywords: [
    "special needs education",
    "intellectual disabilities support",
    "children with disabilities",
    "special education center",
    "developmental disabilities",
    "autism support",
    "learning disabilities",
    "therapeutic programs",
    "family support services",
    "inclusive education"
  ],
  authors: [{ name: "BRUH Care and Learning Center" }],
  creator: "BRUH Care and Learning Center",
  publisher: "BRUH Care and Learning Center",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bruhcenter.org',
    siteName: 'BRUH Care and Learning Center',
    title: 'BRUH Care and Learning Center | Special Needs Support & Education',
    description: 'BRUH Care provides holistic, individualized support for children with intellectual disabilities and their families. Specialized education, therapy, and community programs in a nurturing environment.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BRUH Care and Learning Center - Supporting children with intellectual disabilities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BRUH Care and Learning Center | Special Needs Support & Education',
    description: 'Holistic, individualized support for children with intellectual disabilities and their families.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: "/bruh-logo.svg",
    shortcut: "/bruh-logo.svg",
    apple: "/bruh-logo.svg",
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://bruhcenter.org',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
