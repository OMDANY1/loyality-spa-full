'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import styles from './Intro.module.css';

export const IntroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="intro" className={styles.section}>
      <Container size="narrow">
        <div className={styles.card}>
          <span className={styles.tag}>{t.intro.tag}</span>
          <h2 className={styles.headline}>{t.intro.headline}</h2>
          <p className={styles.text}>{t.intro.text}</p>
          <div className={styles.signature}>Loyalty Spa Sanctuary</div>
        </div>
      </Container>
    </section>
  );
};
