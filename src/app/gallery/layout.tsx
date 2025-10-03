export const metadata = {
  title: "Gallery | BRUH Care and Learning Center",
  description:
    "Explore the full gallery of BRUH Care—moments of belonging, growth, and joy for children with intellectual disabilities and their families. See our community in action through photos of daily life, learning activities, and special moments.",
  keywords: [
    "special needs gallery",
    "intellectual disabilities photos",
    "BRUH Care community",
    "special education photos",
    "children with disabilities gallery",
    "therapeutic activities photos",
    "inclusive education images",
    "family support photos",
    "special needs center gallery"
  ],
  openGraph: {
    title: "Gallery | BRUH Care and Learning Center",
    description: "Explore the full gallery of BRUH Care—moments of belonging, growth, and joy for children with intellectual disabilities and their families.",
    url: "https://bruhcenter.org/gallery",
    images: [
      {
        url: "/images/gallery-og.jpg",
        width: 1200,
        height: 630,
        alt: "BRUH Care Gallery - Moments of belonging and growth",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gallery | BRUH Care and Learning Center",
    description: "Explore moments of belonging, growth, and joy for children with intellectual disabilities and their families.",
    images: ['/images/gallery-og.jpg'],
  },
  alternates: {
    canonical: 'https://bruhcenter.org/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

