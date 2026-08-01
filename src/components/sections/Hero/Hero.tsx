'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useBooking } from '@/context/BookingContext';
import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
import { Sparkles, ChevronDown } from '@/components/ui/Icons';
import styles from './Hero.module.css';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const { openBooking } = useBooking();
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReduced);

    if (prefersReduced) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = reducedMotion ? 0 : scrollY * 0.35;

  return (
    <section className={styles.hero}>
      {/* Background Image with Living Ken Burns & Parallax */}
      <div
        className={styles.bgImageWrapper}
        style={{ transform: `translate3d(0, ${parallaxOffset}px, 0)` }}
      >
        <Image
          src="/images/hero_sanctuary_bg_1785587382099.jpg"
          alt="Loyalty Spa Sanctuary"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
        {/* Living Ambient Floating Dust & Particles Overlay */}
        <div className={styles.ambientParticles} />
      </div>

      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <Sparkles size={14} className={styles.badgeIcon} />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className={styles.title}>{t.hero.title}</h1>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>

          <div className={styles.ctaGroup}>
            <Button variant="gold" size="lg" onClick={() => openBooking()}>
              {t.hero.bookNow}
            </Button>
            <Link href="/services">
              <Button variant="outline" size="lg" className={styles.outlineBtn}>
                {t.hero.exploreServices}
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#intro" className={styles.scrollIndicator} aria-label="Scroll Down">
          <ChevronDown size={24} />
        </a>
      </Container>
    </section>
  );
};
