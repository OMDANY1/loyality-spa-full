'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { testimonialsData } from '@/data/testimonials';
import { Star, Quote } from '@/components/ui/Icons';
import styles from './Testimonials.module.css';

export const TestimonialsSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader
          tag={t.testimonials.tag}
          title={t.testimonials.title}
        />

        <div className={styles.grid}>
          {testimonialsData.map((item) => {
            const name = lang === 'ar' ? item.nameAr : item.nameEn;
            const role = lang === 'ar' ? item.roleAr : item.roleEn;
            const quote = lang === 'ar' ? item.quoteAr : item.quoteEn;
            const location = lang === 'ar' ? item.locationAr : item.locationEn;

            return (
              <div key={item.id} className={styles.card}>
                <Quote size={32} className={styles.quoteIcon} />
                <div className={styles.stars}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#C5A47E" color="#C5A47E" />
                  ))}
                </div>
                <p className={styles.quote}>"{quote}"</p>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{name}</h4>
                  <span className={styles.authorRole}>{role} • {location}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
