'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useBooking } from '@/context/BookingContext';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { Button } from '@/components/ui/Button/Button';
import { servicesData } from '@/data/services';
import { Sparkles, Clock, Check, Shield } from '@/components/ui/Icons';
import styles from './ServicesPage.module.css';

export default function ServicesPage() {
  const { lang, t } = useLanguage();
  const { openBooking } = useBooking();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelEn: 'All Treatments', labelAr: 'جميع الخدمات' },
    { id: 'massage', labelEn: 'Massage Therapy', labelAr: 'جلسات المساج' },
    { id: 'moroccan', labelEn: 'Royal Hammam', labelAr: 'الحمام المغربي' },
    { id: 'facial', labelEn: 'Facial & Skincare', labelAr: 'العناية بالبشرة والوجه' },
    { id: 'body', labelEn: 'Body Treatments', labelAr: 'علاجات الجسم' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  return (
    <div className={styles.servicesPage}>
      {/* Hero Header */}
      <section className={styles.heroBanner}>
        <Container size="narrow">
          <div className={styles.headerContent}>
            <div className={styles.badge}>
              <Sparkles size={14} className={styles.badgeIcon} />
              <span>{lang === 'ar' ? 'قائمة الاستجمام الحصرية' : 'Sanctuary Treatment Menu'}</span>
            </div>
            <h1 className={styles.heroTitle}>{t.services.title}</h1>
            <p className={styles.heroSubtitle}>{t.services.subtitle}</p>
          </div>
        </Container>
      </section>

      {/* Category Filter Pills */}
      <section className={styles.filterSection}>
        <Container>
          <div className={styles.filterBar}>
            {categories.map((cat) => {
              const label = lang === 'ar' ? cat.labelAr : cat.labelEn;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`${styles.filterBtn} ${isActive ? styles.activeFilter : ''}`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Storytelling Treatment Sections (Apple Product Page Layout) */}
      <section className={styles.storytellingSection}>
        <Container>
          <div className={styles.treatmentsList}>
            {filteredServices.map((service, index) => {
              const isEven = index % 2 === 0;
              const title = lang === 'ar' ? service.titleAr : service.titleEn;
              const desc = lang === 'ar' ? service.descAr : service.descEn;
              const benefits = lang === 'ar' ? service.benefitsAr : service.benefitsEn;

              return (
                <article
                  key={service.id}
                  className={`${styles.treatmentItem} ${isEven ? styles.evenItem : styles.oddItem}`}
                >
                  {/* Editorial Image Wrapper */}
                  <div className={styles.imageContainer}>
                    <Image
                      src={service.image}
                      alt={title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={styles.treatmentImage}
                    />
                    <div className={styles.imageBadge}>
                      <Clock size={14} />
                      <span>{service.duration} {t.services.duration}</span>
                    </div>
                  </div>

                  {/* Editorial Content */}
                  <div className={styles.contentContainer}>
                    <div className={styles.categoryTag}>
                      <Shield size={14} />
                      <span>{service.category.toUpperCase()}</span>
                    </div>

                    <h2 className={styles.treatmentTitle}>{title}</h2>
                    <p className={styles.treatmentDesc}>{desc}</p>

                    {/* Key Benefits List */}
                    <div className={styles.benefitsWrapper}>
                      <h3 className={styles.benefitsTitle}>
                        {lang === 'ar' ? 'مميزات الجلسة:' : 'Session Highlights:'}
                      </h3>
                      <ul className={styles.benefitsList}>
                        {benefits.map((b, bIdx) => (
                          <li key={bIdx}>
                            <Check size={16} className={styles.checkIcon} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & CTA Row */}
                    <div className={styles.actionRow}>
                      <div className={styles.pricing}>
                        <span className={styles.priceLabel}>{t.services.from}</span>
                        <span className={styles.priceValue}>{service.price}</span>
                        <span className={styles.currency}>{t.services.currency}</span>
                      </div>

                      <Button
                        variant="gold"
                        size="lg"
                        onClick={() => openBooking(service.id)}
                      >
                        {t.services.bookService}
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
