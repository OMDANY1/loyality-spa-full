'use client';

import React, { useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { GiftCardData, GiftCardTemplate } from '@/components/gift/GiftCardTemplate/GiftCardTemplate';
import { GiftForm } from '@/components/gift/GiftForm/GiftForm';
import { GiftEnvelopeAnimation } from '@/components/gift/GiftEnvelopeAnimation/GiftEnvelopeAnimation';
import { GiftActions } from '@/components/gift/GiftActions/GiftActions';
import styles from './GiftPage.module.css';

export default function GiftPage() {
  const { lang, t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null!);

  const [formData, setFormData] = useState<GiftCardData>({
    senderName: '',
    recipientName: '',
    message: '',
    cardLang: lang,
  });

  const [flowState, setFlowState] = useState<'form' | 'animating' | 'revealed'>('form');

  const handleFieldChange = (field: keyof GiftCardData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGenerate = () => {
    setFlowState('animating');
  };

  const handleAnimationComplete = () => {
    setFlowState('revealed');
  };

  const handleReset = () => {
    setFlowState('form');
  };

  return (
    <div className={styles.giftPage}>
      {/* Header Banner */}
      <section className={styles.heroBanner}>
        <Container size="narrow">
          <div className={styles.bannerContent}>
            <span className={styles.bannerTag}>
              {lang === 'ar' ? 'بطاقة إهداء فاخرة' : 'Personalized Sanctuary Gift'}
            </span>
            <h1 className={styles.bannerTitle}>
              {lang === 'ar' ? 'بطاقات إهداء سبا الولاء' : 'Loyalty Spa Gift Experience'}
            </h1>
            <p className={styles.bannerSubtitle}>
              {lang === 'ar'
                ? 'شاركي من تحبين لحظات الاستجمام والراحة ببطاقة إهداء رقمية فاخرة تُصمم خصيصاً باسمكِ ورسالتكِ الخاصة.'
                : 'Share moments of pure sanctuary renewal with a bespoke digital gift card, personalized with your private message.'}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Experience Section */}
      <section className={styles.contentSection}>
        <Container>
          {flowState === 'form' && (
            <div className={styles.gridContainer}>
              {/* Mobile Preview Top / Desktop Form Left */}
              <div className={styles.formCol}>
                <GiftForm
                  data={formData}
                  onChange={handleFieldChange}
                  onGenerate={handleGenerate}
                  uiLang={lang}
                />
              </div>

              {/* Live Card Preview Column */}
              <div className={styles.previewCol}>
                <div className={styles.previewHeader}>
                  <span className={styles.previewTag}>
                    {lang === 'ar' ? 'معاينة فورية' : 'Live Preview'}
                  </span>
                </div>
                <div className={styles.previewCardFrame}>
                  <GiftCardTemplate data={formData} />
                </div>
              </div>
            </div>
          )}

          {/* Envelope Reveal Animation Overlay */}
          {(flowState === 'animating' || flowState === 'revealed') && (
            <div className={styles.revealedSection}>
              {flowState === 'animating' && (
                <GiftEnvelopeAnimation
                  data={formData}
                  cardRef={cardRef}
                  onAnimationComplete={handleAnimationComplete}
                />
              )}

              {flowState === 'revealed' && (
                <div className={styles.finalCardWrapper}>
                  <div className={styles.cardFrame}>
                    <GiftCardTemplate data={formData} cardRef={cardRef} />
                  </div>
                  <GiftActions
                    cardRef={cardRef}
                    onReset={handleReset}
                    uiLang={lang}
                  />
                </div>
              )}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
