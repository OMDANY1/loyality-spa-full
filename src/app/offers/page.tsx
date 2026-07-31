'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { PackageCard } from '@/components/ui/Card/PackageCard';
import { packagesData } from '@/data/packages';
import styles from './OffersPage.module.css';

export default function OffersPage() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Container size="narrow">
          <SectionHeader
            tag={t.offers.tag}
            title={t.offers.title}
            subtitle={t.offers.subtitle}
            light
          />
        </Container>
      </div>

      <Container className={styles.container}>
        <div className={styles.grid}>
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} packageItem={pkg} />
          ))}
        </div>
      </Container>
    </div>
  );
}
