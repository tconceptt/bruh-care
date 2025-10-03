"use client";

import { 
  Header, 
  Hero, 
  Mission, 
  Approach, 
  DailyLife, 
  FounderStory, 
  ImpactStories, 
  Support, 
  Footer, 
  CommunityGallery
} from "@/components";
import { Section, Container, Parallax } from "@/components/ui";
import Head from "next/head";

export default function Home() {
  const structuredData = {
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

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      {/* Background decorative elements with parallax */}
      <Parallax speed={0.4}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[-40%] top-[-480px] h-[840px] rounded-[60%] bg-[radial-gradient(circle_at_center,_rgba(254,190,41,0.2),_transparent_65%)]"
        />
      </Parallax>
      <Parallax speed={0.6}>
        <div
          aria-hidden
          className="pointer-events-none absolute -left-36 top-[380px] h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(77,190,158,0.15),_transparent_70%)]"
        />
      </Parallax>
      <Parallax speed={0.3}>
        <div
          aria-hidden
          className="pointer-events-none absolute -right-36 top-[1200px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(241,91,34,0.12),_transparent_70%)]"
        />
      </Parallax>
      
      <Header />
      
      {/* Header spacer to prevent content from sitting under fixed header */}
      <div className="h-16 lg:h-20" />
      
      <main className="relative">
        <Section>
          <Container>
            <Hero />
          </Container>
        </Section>
        
        <Section>
          <Container>
            <Mission />
          </Container>
        </Section>
        
        <CommunityGallery />
        
        <Section>
          <Container>
            <Approach />
          </Container>
        </Section>
        
        <Section>
          <Container>
            <DailyLife />
          </Container>
        </Section>
        
        <Section>
          <Container>
            <FounderStory />
          </Container>
        </Section>
        
        <Section>
          <Container>
            <ImpactStories />
          </Container>
        </Section>
        
        <Section>
          <Container>
            <Support />
          </Container>
        </Section>
        
        <Section>
          <Container>
            <Footer />
          </Container>
        </Section>
      </main>
      </div>
    </>
  );
}
