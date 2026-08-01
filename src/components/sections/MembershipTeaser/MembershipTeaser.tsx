'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
import { membershipTiers } from '@/data/membership';
import { Award, ShieldCheck, Gift } from '@/components/ui/Icons';
import styles from './MembershipTeaser.module.css';

export const MembershipTeaserSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.bgWrapper}>
        <Image
          src="/images/membership_lounge_bg_1785587604798.jpg"
          alt="Loyalty Spa Membership Lounge"
          fill
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <Container className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>{t.membership.tag}</span>
          <h2 className={styles.title}>{t.membership.title}</h2>
          <p className={styles.subtitle}>{t.membership.subtitle}</p>
        </div>

        <div className={styles.tiersGrid}>
          {membershipTiers.map((tier) => {
            const name = lang === 'ar' ? tier.nameAr : tier.nameEn;
            const discount = lang === 'ar' ? tier.discountAr : tier.discountEn;
            const badge = lang === 'ar' ? tier.badgeAr : tier.badgeEn;
            return (
              <div key={tier.id} className={styles.tierCard}>
                <div className={styles.tierHeader}>
                  <Award size={24} style={{ color: tier.color }} />
                  <span className={styles.tierBadge}>{badge}</span>
                </div>
                <h3 className={styles.tierName}>{name}</h3>
                <span className={styles.pointsRange}>{tier.pointsRange}</span>
                <p className={styles.tierDiscount}>{discount}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/membership">
            <Button variant="gold" size="lg">
              {t.membership.joinNow}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
