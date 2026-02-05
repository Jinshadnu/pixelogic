import { Metadata } from 'next';
import AboutSection from '@/components/sections/AboutSection';

export const metadata: Metadata = {
  title: 'About Us | Pixelogik',
  description: 'Learn about Pixelogik\'s journey, values, and commitment to visual storytelling excellence in Abu Dhabi.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main>
        <AboutSection />
      </main>
    </div>
  );
}
