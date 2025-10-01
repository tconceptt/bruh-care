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
  Footer 
} from "@/components";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      {/* Background decorative elements */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[-40%] top-[-480px] h-[840px] rounded-[60%] bg-[radial-gradient(circle_at_center,_rgba(254,190,41,0.2),_transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-36 top-[380px] h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(77,190,158,0.15),_transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-36 top-[1200px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(241,91,34,0.12),_transparent_70%)]"
      />
      
      <Header />
      
      <main className="relative mx-auto flex max-w-[min(1280px,94vw)] flex-col gap-12 px-3 pb-16 pt-12 sm:gap-16 sm:px-4 sm:pb-20 sm:pt-16 md:gap-20 lg:gap-24 lg:px-8 xl:px-12">
        <Hero />
        <Mission />
        <Approach />
        <DailyLife />
        <FounderStory />
        <ImpactStories />
        <Support />
        <Footer />
      </main>
    </div>
  );
}
