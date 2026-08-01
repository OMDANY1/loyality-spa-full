'use client';

import React from 'react';
import { GiftCardData } from '../GiftCardTemplate/GiftCardTemplate';
import { Button } from '@/components/ui/Button/Button';
import { Sparkles } from '@/components/ui/Icons';
import styles from './GiftForm.module.css';

interface GiftFormProps {
  data: GiftCardData;
  onChange: (field: keyof GiftCardData, value: string) => void;
  onGenerate: () => void;
  uiLang: 'ar' | 'en';
}

export const GiftForm: React.FC<GiftFormProps> = ({
  data,
  onChange,
  onGenerate,
  uiLang,
}) => {
  const isAr = uiLang === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate();
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <div className={styles.badge}>
          <Sparkles size={14} className={styles.badgeIcon} />
          <span>{isAr ? 'هدية راقية' : 'Bespoke Experience'}</span>
        </div>
        <h2 className={styles.title}>
          {isAr ? 'صممي بطاقة الإهداء' : 'Personalize Your Gift'}
        </h2>
        <p className={styles.subtitle}>
          {isAr
            ? 'أدخلي بيانات الإهداء واكتشفي البطاقة الرقمية الفاخرة المجهزة للتنزيل والطباعة.'
            : 'Enter gift details to craft a high-resolution, printable digital greeting card.'}
        </p>
      </div>

      {/* Form Inputs */}
      <div className={styles.fieldsStack}>
        {/* Sender Name */}
        <div className={styles.fieldGroup}>
          <label htmlFor="senderName" className={styles.label}>
            {isAr ? 'اسم المُهدي' : 'From (Sender)'}
          </label>
          <input
            id="senderName"
            type="text"
            className={styles.input}
            placeholder={isAr ? 'مثال: آلاء' : 'e.g. Meli'}
            value={data.senderName}
            onChange={(e) => onChange('senderName', e.target.value)}
            required
          />
        </div>

        {/* Recipient Name */}
        <div className={styles.fieldGroup}>
          <label htmlFor="recipientName" className={styles.label}>
            {isAr ? 'اسم المُهدى إليه' : 'To (Recipient)'}
          </label>
          <input
            id="recipientName"
            type="text"
            className={styles.input}
            placeholder={isAr ? 'مثال: أروى' : 'e.g. Branka'}
            value={data.recipientName}
            onChange={(e) => onChange('recipientName', e.target.value)}
            required
          />
        </div>

        {/* Personal Message */}
        <div className={styles.fieldGroup}>
          <label htmlFor="message" className={styles.label}>
            {isAr ? 'رسالة الإهداء' : 'Personal Message'}
          </label>
          <textarea
            id="message"
            className={styles.textarea}
            rows={3}
            placeholder={
              isAr
                ? 'مبروك الخطوبة يا قلبي والله يكتب لك كل السعادة...'
                : 'Wishing an amazing, beautiful friend a spectacular birthday!'
            }
            value={data.message}
            onChange={(e) => onChange('message', e.target.value)}
            required
          />
        </div>

        {/* Language Selection Toggle */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            {isAr ? 'لغة بطاقة الإهداء' : 'Card Language'}
          </label>
          <div className={styles.langToggleGroup}>
            <button
              type="button"
              className={`${styles.toggleBtn} ${data.cardLang === 'ar' ? styles.active : ''}`}
              onClick={() => onChange('cardLang', 'ar')}
            >
              العربية (Arabic)
            </button>
            <button
              type="button"
              className={`${styles.toggleBtn} ${data.cardLang === 'en' ? styles.active : ''}`}
              onClick={() => onChange('cardLang', 'en')}
            >
              English
            </button>
          </div>
        </div>
      </div>

      {/* Generate CTA Button */}
      <div className={styles.ctaWrapper}>
        <Button variant="gold" size="lg" fullWidth type="submit">
          {isAr ? 'إنشاء بطاقة الإهداء' : 'Generate Gift Card'}
        </Button>
      </div>
    </form>
  );
};
