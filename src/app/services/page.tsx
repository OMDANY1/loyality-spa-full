'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { ServiceCard } from '@/components/ui/Card/ServiceCard';
import { servicesData } from '@/data/services';
import styles from './ServicesPage.module.css';

export default function ServicesPage() {
  const { lang, t } = useLanguage();
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
    <div className={styles.page}>
      <div className={styles.header}>
        <Container size="narrow">
          <SectionHeader
            tag="Sanctuary Menu"
            title={t.services.title}
            subtitle={t.services.subtitle}
            light
          />
        </Container>
      </div>

      <Container className={styles.container}>
        {/* Category Filter Pills */}
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

        {/* Services Grid */}
        <div className={styles.grid}>
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </div>
  );
}
