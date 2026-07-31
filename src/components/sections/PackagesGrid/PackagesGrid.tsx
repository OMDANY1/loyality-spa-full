'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { PackageCard } from '@/components/ui/Card/PackageCard';
import { packagesData } from '@/data/packages';
import styles from './PackagesGrid.module.css';

export const PackagesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader
          tag={t.offers.tag}
          title={t.offers.title}
          subtitle={t.offers.subtitle}
        />

        <div className={styles.grid}>
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} packageItem={pkg} />
          ))}
        </div>
      </Container>
    </section>
  );
};
