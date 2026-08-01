'use client';

import React from 'react';
import Image from 'next/image';
import styles from './GiftCardTemplate.module.css';

export interface GiftCardData {
  senderName: string;
  recipientName: string;
  message: string;
  cardLang: 'ar' | 'en';
}

interface GiftCardTemplateProps {
  data: GiftCardData;
  cardRef?: React.Ref<HTMLDivElement>;
}

export const GiftCardTemplate: React.FC<GiftCardTemplateProps> = ({ data, cardRef }) => {
  const isAr = data.cardLang === 'ar';

  const defaultSender = isAr ? 'آلاء' : 'Meli';
  const defaultRecipient = isAr ? 'أروى' : 'Branka';
  const defaultMessage = isAr
    ? 'مبروك الخطوبة يا قلبي والله يكتب لك كل السعادة'
    : 'My dear Branka,\nWishing an amazing, beautiful, and charming friend a spectacular birthday!';

  const sender = data.senderName.trim() || defaultSender;
  const recipient = data.recipientName.trim() || defaultRecipient;
  const message = data.message.trim() || defaultMessage;

  return (
    <div
      ref={cardRef}
      className={`${styles.cardContainer} ${isAr ? styles.rtl : styles.ltr}`}
    >
      {/* Top Header Logo */}
      <div className={styles.headerLogoWrapper}>
        <Image
          src="/assets/gold.svg"
          alt="Loyalty Spa Logo"
          width={180}
          height={65}
          className={styles.headerLogo}
          priority
        />
      </div>

      {/* Decorative Gold Header Line with Gift Box Icon */}
      <div className={styles.decorativeLineRow}>
        <div className={styles.line} />
        <div className={styles.giftIconBadge}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-gold, #cca872)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </svg>
        </div>
      </div>

      {/* Main Content Body */}
      <div className={styles.cardContent}>
        {/* Sender Section */}
        <div className={styles.fieldBlock}>
          <span className={styles.label}>
            {isAr ? 'هذا الإهداء من' : 'THIS GIFT IS FROM'}
          </span>
          <div className={styles.valueRow}>
            <span className={`${styles.nameValue} ${isAr ? styles.arCalligraphy : styles.enCalligraphy}`}>
              {sender}
            </span>
            <div className={styles.underline} />
          </div>
        </div>

        {/* Recipient Section */}
        <div className={styles.fieldBlock}>
          <span className={styles.label}>
            {isAr ? 'إلى' : 'TO'}
          </span>
          <div className={styles.valueRow}>
            <span className={`${styles.nameValue} ${isAr ? styles.arCalligraphy : styles.enCalligraphy}`}>
              {recipient}
            </span>
            <div className={styles.underline} />
          </div>
        </div>

        {/* Personal Message Section */}
        <div className={styles.messageBlock}>
          <p className={styles.messageText}>{message}</p>
        </div>

        {/* Infinity Divider & Brand Name */}
        <div className={styles.dividerBlock}>
          <div className={styles.infinityLineRow}>
            <div className={styles.miniLine} />
            <div className={styles.infinitySymbol}>
              <svg width="28" height="14" viewBox="0 0 449.85 288.46" fill="var(--color-gold, #cca872)">
                <path d="M213.43,85.53c-26.23-25.1-53.2-55.82-88.79-66.7,2.3,1.25,4.78,2.76,7.32,4.6,5.51,4.02,9.61,8.34,12.54,12.03C92.17-5.01,24.89,39.73,51.62,98.96c13.43,25.44,43.14,28.45,48.36,28.97,16.7,1.69,29.09-3.7,49.38-12.85,13.72-6.18,33.57-16.76,54.95-34.77C42.65,232.22-19.88,6.35,112.08,14.31c10.23,1.84,22.19,4.83,32.77,8.3C69.87-36.94-22.47,53.48,44.2,124.34c10.91,10.38,22.79,16.64,35.15,19.73,13.5,3.36,27.6,2.95,41.69,0,33.66-7.06,67.37-28.66,93.13-48.06-21.07,20.43-50.14,39.2-80.15,48.06-22.15,6.55-44.81,7.66-65.11,0-13.73-5.16-26.4-14.34-37.08-28.57-9-12.79-14.81-31.51-13.4-47.6C21.74,14.4,79.28-15.89,126.5,8.62c14.75,7.64,30.69,17.2,59.78,43.75,13.85,12.65,46,46.84,53.98,55.44.11.09.18.17.2.21.34.33.61.64.82.88.15.15.27.27.36.38v.02c.06.05.09.09.12.12l.08.08s.05.06.06.08l.08.08.02.02s.06.06.08.08c5.15,5.48,16.04,17.09,32.24,34.33h-3.17c-19.91-20.09-43.03-43.57-57.71-58.53Z" />
                <path d="M371.67,144.07c-11.05,2.62-23.17,2.83-35.8,0-16.14-3.61-33.14-12.22-49.85-27.23-28.34-22.74-52.91-50.34-76.31-78.56l-.84-.79s-10.52-12.97-30.38-37.48h3.09c2.89,3.38,5.91,6.91,9.1,10.66t.03.03c22.09,25.86,51.83,59.08,54.31,61.54,22.56,28.89,73.13,66.4,116.71,53.69,4-1.22,32.06-9.8,40.16-36.18,7.69-27.42-6.79-51.35-28.12-63.54-26.14-13.99-55.79-1.77-74.59,5.98-12.36,5.08-32.67,15.45-52.47,36.61,44.57-51.45,103.59-63.92,134.89-41.65,19.29,13.72,32.71,43.93,23.4,68.35-8.31,21.74-34.14,37.57-65.56,37.57-10.78,0-22.22-1.87-33.82-6,32.88,22.62,83.89,22.3,107.01-13.56,23.75-35.67,9.61-83.88-28.88-101.99-52.24-24.46-106.47,13.87-148.75,43.43,41.16-36.21,101.72-73.28,155.47-43.4,65.23,47.08,36.47,119.51-18.78,132.53Z" />
              </svg>
            </div>
            <div className={styles.miniLine} />
          </div>
          <span className={styles.brandTitle}>L O Y A L T Y   S P A</span>
        </div>

        {/* Stone Stack Icon */}
        <div className={styles.stoneStackWrapper}>
          <svg width="40" height="30" viewBox="0 0 100 70" fill="var(--color-gold, #cca872)">
            <ellipse cx="50" cy="62" rx="35" ry="6" />
            <ellipse cx="50" cy="48" rx="28" ry="7" />
            <ellipse cx="50" cy="35" rx="20" ry="6" />
            <ellipse cx="50" cy="24" rx="13" ry="5" />
          </svg>
        </div>
      </div>

      {/* Dark Green Bottom Banner */}
      <div className={styles.bottomBanner}>
        <div className={styles.bannerIconWrapper}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-gold, #cca872)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </svg>
        </div>
        <div className={styles.bannerTextGroup}>
          <span className={styles.bannerTitle}>
            {isAr ? 'بطاقة إهداء خاصة' : 'LOYALTY SPA Gift Card'}
          </span>
          {isAr && <span className={styles.bannerSubTitle}>L O Y A L T Y   S P A</span>}
          <span className={styles.bannerTerms}>
            {isAr
              ? 'صالحة للاستخدام وفق شروط البطاقة'
              : 'Valid for use according to the card terms and conditions.'}
          </span>
        </div>
      </div>
    </div>
  );
};
