'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { ServiceCard } from '@/components/ui/Card/ServiceCard';
import { Button } from '@/components/ui/Button/Button';
import { servicesData } from '@/data/services';
import styles from './ServicesGrid.module.css';

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader
          tag="Curated Experiences"
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className={styles.grid}>
          {servicesData.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/services">
            <Button variant="outline" size="lg">
              {t.services.viewAll}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
