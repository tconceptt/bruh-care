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

export default function Home() {
  return (
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
  );
}
