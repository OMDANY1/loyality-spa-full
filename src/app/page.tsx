import { HeroSection } from '@/components/sections/Hero/Hero';
import { IntroSection } from '@/components/sections/Intro/Intro';
import { ServicesSection } from '@/components/sections/ServicesGrid/ServicesGrid';
import { AboutPreviewSection } from '@/components/sections/AboutPreview/AboutPreview';
import { ShopSpotlightSection } from '@/components/sections/ShopSpotlight/ShopSpotlight';
import { MembershipTeaserSection } from '@/components/sections/MembershipTeaser/MembershipTeaser';
import { PackagesSection } from '@/components/sections/PackagesGrid/PackagesGrid';
import { TestimonialsSection } from '@/components/sections/Testimonials/Testimonials';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <AboutPreviewSection />
      <ShopSpotlightSection />
      <MembershipTeaserSection />
      <PackagesSection />
      <TestimonialsSection />
    </>
  );
}
