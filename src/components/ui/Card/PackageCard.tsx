'use client';

import React from 'react';
import { PackageItem } from '@/data/packages';
import { useLanguage } from '@/context/LanguageContext';
import { useBooking } from '@/context/BookingContext';
import { Button } from '../Button/Button';
import { Check, Sparkles } from '@/components/ui/Icons';
import styles from './PackageCard.module.css';

export const PackageCard: React.FC<{ packageItem: PackageItem }> = ({ packageItem }) => {
  const { lang, t } = useLanguage();
  const { openBooking } = useBooking();

  const title = lang === 'ar' ? packageItem.titleAr : packageItem.titleEn;
  const desc = lang === 'ar' ? packageItem.descAr : packageItem.descEn;
  const badge = lang === 'ar' ? packageItem.badgeAr : packageItem.badgeEn;
  const features = lang === 'ar' ? packageItem.featuresAr : packageItem.featuresEn;

  return (
    <div className={`${styles.card} ${packageItem.popular ? styles.popular : ''}`}>
      {packageItem.popular && (
        <div className={styles.popularRibbon}>
          <Sparkles size={14} /> {badge}
        </div>
      )}

      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.priceBox}>
          <span className={styles.currentPrice}>
            {packageItem.currentPrice} {t.services.currency}
          </span>
          <span className={styles.originalPrice}>
            {packageItem.originalPrice} {t.services.currency}
          </span>
          <span className={styles.savingsBadge}>
            {t.offers.save} {packageItem.savings} {t.services.currency}
          </span>
        </div>
      </div>

      <ul className={styles.features}>
        {features.map((feat, i) => (
          <li key={i} className={styles.featureItem}>
            <Check size={16} className={styles.checkIcon} />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <div className={styles.action}>
        <Button
          variant={packageItem.popular ? 'gold' : 'primary'}
          fullWidth
          onClick={() => openBooking(packageItem.id)}
        >
          {t.offers.viewDetails}
        </Button>
      </div>
    </div>
  );
};
