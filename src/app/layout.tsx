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
  metadataBase: new URL('https://bruhcenter.com'),
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
    url: 'https://bruhcenter.com',
    siteName: 'BRUH Care and Learning Center',
    title: 'BRUH Care and Learning Center | Special Needs Support & Education',
    description: 'BRUH Care provides holistic, individualized support for children with intellectual disabilities and their families. Specialized education, therapy, and community programs in a nurturing environment.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BRUH Care and Learning Center - Supporting children with intellectual disabilities',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BRUH Care and Learning Center | Special Needs Support & Education',
    description: 'Holistic, individualized support for children with intellectual disabilities and their families.',
    images: ['/images/og-image.jpg'],
    site: '@bruhcare',
    creator: '@bruhcare',
  },
  // Additional meta tags for better social media sharing
  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/jpeg',
    'og:image:secure_url': 'https://bruhcenter.com/images/og-image.jpg',
    'twitter:image:alt': 'BRUH Care and Learning Center - Supporting children with intellectual disabilities',
    // WhatsApp specific optimizations
    'og:image:url': 'https://bruhcenter.com/images/og-image.jpg',
    'og:image': 'https://bruhcenter.com/images/og-image.jpg',
    // Telegram specific optimizations
    'telegram:channel': '@bruhcare',
    'telegram:site': '@bruhcare',
    'telegram:title': 'BRUH Care and Learning Center | Special Needs Support & Education',
    'telegram:description': 'BRUH Care provides holistic, individualized support for children with intellectual disabilities and their families. Specialized education, therapy, and community programs in a nurturing environment.',
    'telegram:image': 'https://bruhcenter.com/images/og-image.jpg',
    'telegram:url': 'https://bruhcenter.com',
    // Additional Telegram meta tags for better preview
    'telegram:domain': 'bruhcenter.com',
    'telegram:type': 'website',
  },
  icons: {
    icon: "/bruh-logo.svg",
    shortcut: "/bruh-logo.svg",
    apple: "/bruh-logo.svg",
  },
  manifest: '/manifest.json',
    alternates: {
    canonical: 'https://bruhcenter.com',
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
        {/* Additional Telegram-specific meta tags */}
        <meta name="telegram:channel" content="@bruhcare" />
        <meta name="telegram:site" content="@bruhcare" />
        <meta name="telegram:title" content="BRUH Care and Learning Center | Special Needs Support & Education" />
        <meta name="telegram:description" content="BRUH Care provides holistic, individualized support for children with intellectual disabilities and their families. Specialized education, therapy, and community programs in a nurturing environment." />
        <meta name="telegram:image" content="https://bruhcenter.com/images/og-image.jpg" />
        <meta name="telegram:url" content="https://bruhcenter.com" />
        <meta name="telegram:domain" content="bruhcenter.com" />
        <meta name="telegram:type" content="website" />
        {/* Additional WhatsApp optimizations */}
        <meta property="og:image" content="https://bruhcenter.com/images/og-image.jpg" />
        <meta property="og:image:url" content="https://bruhcenter.com/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:image:alt" content="BRUH Care and Learning Center - Supporting children with intellectual disabilities" />
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
