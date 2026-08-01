'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useBooking } from '@/context/BookingContext';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { Button } from '@/components/ui/Button/Button';
import { addonsData } from '@/data/addons';
import { Gift, Check } from '@/components/ui/Icons';
import styles from './ShopSpotlight.module.css';

export const ShopSpotlightSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const { openBooking } = useBooking();

  const featuredAddons = addonsData.slice(0, 4);

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader
          tag={t.addOns.tag}
          title={t.addOns.title}
          subtitle={t.addOns.subtitle}
        />

        {/* Bundle Banner */}
        <div className={styles.bundleBanner}>
          <Gift size={24} className={styles.bundleIcon} />
          <div className={styles.bundleText}>
            <h4>{t.addOns.bundleNotice}</h4>
            <p>{t.addOns.bundleDesc}</p>
          </div>
        </div>

        <div className={styles.grid}>
          {featuredAddons.map((addon) => {
            const name = lang === 'ar' ? addon.nameAr : addon.nameEn;
            const desc = lang === 'ar' ? addon.descAr : addon.descEn;
            const benefits = lang === 'ar' ? addon.benefitsAr : addon.benefitsEn;

            return (
              <div key={addon.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={addon.image}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay} />
                  <span className={styles.pricePill}>30 {t.addOns.currency}</span>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{name}</h3>
                  <p className={styles.cardDesc}>{desc}</p>

                  <ul className={styles.benefitsList}>
                    {benefits.slice(0, 2).map((b, idx) => (
                      <li key={idx}>
                        <Check size={14} className={styles.checkIcon} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => openBooking(addon.id)}
                  >
                    {t.addOns.addToExperience}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/add-ons">
            <Button variant="gold" size="lg">
              {lang === 'ar' ? 'استكشفي جميع الإضافات (١٠ خدمات)' : 'Explore All 10 Luxury Add-ons'}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
