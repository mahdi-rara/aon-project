'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HorizontalScroll from '@/components/HorizontalScroll';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh ScrollTrigger when component mounts
    ScrollTrigger.refresh();

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <HorizontalScroll />
      <ServicesSection />
      <StatsSection />
      <ContactSection />
    </div>
  );
}
