import Hero from '@/components/sections/Hero';
import HomeIntro from '@/components/sections/HomeIntro';
import ServicesList from '@/components/sections/ServicesList';
import PixelsInFocus from '@/components/sections/PixelsInFocus';
import FAQ from '@/components/sections/FAQ';
import TeamSection from '@/components/sections/TeamSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2EFE9]">
      <main>
        <Hero />
        <HomeIntro />
        <ServicesList />
        <PixelsInFocus />
        <TeamSection />
        <FAQ />
      </main>
    </div>
  );
}
