'use client';

import React from 'react';
import Image from 'next/image';
import { Service } from '@/data/services';
import { useLanguage } from '@/context/LanguageContext';
import { useBooking } from '@/context/BookingContext';
import { Button } from '../Button/Button';
import { Clock } from '@/components/ui/Icons';
import styles from './ServiceCard.module.css';

export const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const { lang, t } = useLanguage();
  const { openBooking } = useBooking();

  const title = lang === 'ar' ? service.titleAr : service.titleEn;
  const desc = lang === 'ar' ? service.descAr : service.descEn;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={service.image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
        {service.popular && (
          <span className={styles.popularBadge}>
            {lang === 'ar' ? 'مميز' : 'Featured'}
          </span>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.duration}>
            <Clock size={14} /> {service.duration} {t.services.duration}
          </span>
          <span className={styles.price}>
            {service.price} {t.services.currency}
          </span>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{desc}</p>

        <div className={styles.footer}>
          <Button variant="outline" size="sm" onClick={() => openBooking(service.id)}>
            {t.services.bookService}
          </Button>
        </div>
      </div>
    </div>
  );
};
