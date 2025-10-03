import { galleryImages } from '@/data';

export const OrganizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "BRUH Care and Learning Center",
  "description": "Holistic, individualized support for children with intellectual disabilities and their families. Specialized education, therapy, and community programs in a nurturing environment.",
  "url": "https://bruhcenter.org",
  "logo": "https://bruhcenter.org/bruh-logo.svg",
  "image": "https://bruhcenter.org/images/og-image.jpg",
  "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone number
  "email": "hello@bruhcenter.org",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address", // Replace with actual address
    "addressLocality": "Your City",
    "addressRegion": "Your State", 
    "postalCode": "Your ZIP Code",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.facebook.com/bruhcare",
    "https://www.instagram.com/bruhcare",
    "https://www.linkedin.com/company/bruhcare"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Educational and Support Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "EducationalOccupationalProgram",
          "name": "Special Education Programs",
          "description": "Individualized educational programs for children with intellectual disabilities"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Therapeutic Services",
          "description": "Speech therapy, occupational therapy, and behavioral support services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Family Support Services",
          "description": "Counseling, support groups, and resources for families"
        }
      }
    ]
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 0, // Replace with actual coordinates
      "longitude": 0
    },
    "geoRadius": "50000" // 50km radius
  }
};

export const GalleryStructuredData = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "BRUH Care Gallery",
  "description": "Gallery showcasing moments of belonging, growth, and joy for children with intellectual disabilities and their families at BRUH Care and Learning Center",
  "url": "https://bruhcenter.org/gallery",
  "publisher": {
    "@type": "EducationalOrganization",
    "name": "BRUH Care and Learning Center",
    "url": "https://bruhcenter.org"
  },
  "about": {
    "@type": "Thing",
    "name": "Special needs education and support",
    "description": "Educational and therapeutic services for children with intellectual disabilities"
  },
  "image": galleryImages.slice(0, 5).map(img => ({
    "@type": "ImageObject",
    "url": `https://bruhcenter.org${img.image}`,
    "name": img.title || img.alt,
    "description": img.description || img.alt,
    "caption": img.alt
  }))
};

export const BreadcrumbStructuredData = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const FAQStructuredData = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
