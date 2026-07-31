'use client';

import React from 'react';
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

  return (
    <section className={styles.hero}>
      {/* Background Image with Overlay */}
      <div className={styles.bgImageWrapper}>
        <Image
          src="/images/hero.jpg"
          alt="Loyalty Spa Sanctuary"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
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
