'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useBooking } from '@/context/BookingContext';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { Button } from '@/components/ui/Button/Button';
import { addonsData } from '@/data/addons';
import { Sparkles, Check, Gift } from '@/components/ui/Icons';
import styles from './AddOnsPage.module.css';

export default function AddOnsPage() {
  const { lang, t } = useLanguage();
  const { openBooking } = useBooking();

  return (
    <div className={styles.addOnsPage}>
      {/* Header Banner */}
      <section className={styles.heroBanner}>
        <Container>
          <div className={styles.bannerContent}>
            <div className={styles.badge}>
              <Sparkles size={14} className={styles.badgeIcon} />
              <span>{t.addOns.tag}</span>
            </div>
            <h1 className={styles.title}>{t.addOns.title}</h1>
            <p className={styles.subtitle}>{t.addOns.subtitle}</p>

            {/* Bundle Offer Callout Card */}
            <div className={styles.bundleCard}>
              <div className={styles.bundleHeader}>
                <Gift size={24} className={styles.bundleIcon} />
                <h3>{t.addOns.bundleNotice}</h3>
              </div>
              <p className={styles.bundleDesc}>{t.addOns.bundleDesc}</p>
              <div className={styles.pricePills}>
                <span className={styles.singlePill}>{t.addOns.singlePrice}</span>
                <span className={styles.doublePill}>{t.addOns.bundlePrice}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Luxury Add-ons Showcase Grid */}
      <section className={styles.showcaseSection}>
        <Container>
          <SectionHeader
            tag={t.addOns.tag}
            title={lang === 'ar' ? 'طقوس استرخائية تُكمل تجربتكِ' : 'Holistic Rituals That Complete Your Session'}
            subtitle={lang === 'ar' ? 'اختر الإضافات الفاخرة التي تناسب احتياجات جسدكِ أثناء حجز المساج' : 'Select bespoke enhancements tailored to your physical wellbeing during your treatment.'}
          />

          <div className={styles.addonsGrid}>
            {addonsData.map((addon) => {
              const name = lang === 'ar' ? addon.nameAr : addon.nameEn;
              const desc = lang === 'ar' ? addon.descAr : addon.descEn;
              const benefits = lang === 'ar' ? addon.benefitsAr : addon.benefitsEn;

              return (
                <div key={addon.id} className={styles.addonCard}>
                  {addon.popular && (
                    <span className={styles.popularBadge}>
                      {lang === 'ar' ? 'الأكثر طلباً' : 'Guest Favorite'}
                    </span>
                  )}
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={addon.image}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.cardImage}
                    />
                    <div className={styles.cardOverlay} />
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.cardTitle}>{name}</h3>
                      <div className={styles.priceTag}>
                        <span className={styles.amount}>30</span>
                        <span className={styles.currency}>{t.addOns.currency}</span>
                      </div>
                    </div>

                    <p className={styles.cardDesc}>{desc}</p>

                    <div className={styles.benefitsBox}>
                      <h4 className={styles.benefitsHeading}>{t.addOns.benefitsTitle}</h4>
                      <ul className={styles.benefitsList}>
                        {benefits.map((benefit, idx) => (
                          <li key={idx}>
                            <Check size={14} className={styles.checkIcon} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.cardFooter}>
                      <Button
                        variant="gold"
                        fullWidth
                        onClick={() => openBooking(addon.id)}
                      >
                        {t.addOns.addToExperience}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Bottom CTA Banner */}
      <section className={styles.ctaBannerSection}>
        <Container>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>
              {lang === 'ar' ? 'جاهزة لابتكار طقوس الاستجمام الخاصة بكِ؟' : 'Ready to Create Your Bespoke Wellness Ritual?'}
            </h2>
            <p className={styles.ctaDesc}>
              {lang === 'ar' ? 'اختر الخدمة الرئيسية ثم أضيفي الإضافات الفاخرة أثناء خطوات الحجز السهلة.' : 'Select your primary massage treatment and add your preferred luxury enhancements.'}
            </p>
            <Button variant="gold" size="lg" onClick={() => openBooking()}>
              {t.nav.bookNow}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
