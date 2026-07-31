'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
import styles from './AboutPreview.module.css';

export const AboutPreviewSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {/* Left Column: Image */}
          <div className={styles.imageCol}>
            <div className={styles.imageCard}>
              <Image
                src="/images/massage.jpg"
                alt="Therapist providing treatment at Loyalty Spa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
          </div>

          {/* Right Column: Text & Stats */}
          <div className={styles.textCol}>
            <span className={styles.tag}>{t.aboutPreview.tag}</span>
            <h2 className={styles.title}>{t.aboutPreview.title}</h2>
            <p className={styles.description}>{t.aboutPreview.description}</p>

            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statVal}>{t.aboutPreview.stat1Val}</span>
                <span className={styles.statLabel}>{t.aboutPreview.stat1Label}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>{t.aboutPreview.stat2Val}</span>
                <span className={styles.statLabel}>{t.aboutPreview.stat2Label}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>{t.aboutPreview.stat3Val}</span>
                <span className={styles.statLabel}>{t.aboutPreview.stat3Label}</span>
              </div>
            </div>

            <Link href="/about">
              <Button variant="gold" size="lg">
                {t.aboutPreview.cta}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
