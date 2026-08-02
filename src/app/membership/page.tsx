'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { Button } from '@/components/ui/Button/Button';
import { membershipTiers } from '@/data/membership';
import { Award, Check, ChevronDown, Sparkles } from '@/components/ui/Icons';
import styles from './MembershipPage.module.css';

export default function MembershipPage() {
  const { lang, t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      qEn: 'How do I accumulate loyalty points?',
      qAr: 'كيف يمكنني تجميع نقاط الولاء؟',
      aEn: 'Points are automatically credited to your membership profile every time you book a treatment or purchase from our boutique. You earn 1 point for every 10 SAR spent.',
      aAr: 'تُضاف النقاط تلقائياً لرصيد حسابكِ مع كل حجز خدمة أو شراء من المتجر، بواقع نقطة واحدة لكل ١٠ ريالات تُنفقينها.',
    },
    {
      qEn: 'Do points or tier statuses expire?',
      qAr: 'هل تنتهي صلاحية النقاط أو مستوى العضوية؟',
      aEn: 'Loyalty points remain valid for 12 full months from your last home session. Once you achieve Gold or Platinum status, you enjoy tier benefits for a full calendar year.',
      aAr: 'تبقى النقاط صالحة لمدة ١٢ شهراً كاملاً من تاريخ آخر جلسة منزلية. وعند الوصول للمستوى الذهبي أو البلاتيني تستمتعين بالمزايا لمدة عام كامل.',
    },
    {
      qEn: 'Can I gift my membership privileges to a friend?',
      qAr: 'هل يمكنني إهداء مزايا العضوية لصديقة؟',
      aEn: 'Gold and Platinum members enjoy companion privileges, including shared home gift vouchers and guest discount codes.',
      aAr: 'نعم، تتمتع عضوات الفئة الذهبية والبلاتينية بمزايا إضافية تشمل قسائم خصم وهدايا للضيوف.',
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Container size="narrow">
          <SectionHeader
            tag={t.membership.tag}
            title={t.membership.title}
            subtitle={t.membership.subtitle}
            light
          />
        </Container>
      </div>

      <Container className={styles.container}>
        {/* Tiers Grid */}
        <div className={styles.tiersGrid}>
          {membershipTiers.map((tier) => {
            const name = lang === 'ar' ? tier.nameAr : tier.nameEn;
            const discount = lang === 'ar' ? tier.discountAr : tier.discountEn;
            const badge = lang === 'ar' ? tier.badgeAr : tier.badgeEn;
            const features = lang === 'ar' ? tier.featuresAr : tier.featuresEn;

            return (
              <div key={tier.id} className={styles.tierCard}>
                <div className={styles.cardHeader}>
                  <Award size={28} style={{ color: tier.color }} />
                  <span className={styles.badge}>{badge}</span>
                </div>
                <h3 className={styles.tierName}>{name}</h3>
                <span className={styles.pointsRange}>{tier.pointsRange}</span>
                <p className={styles.discount}>{discount}</p>

                <ul className={styles.featureList}>
                  {features.map((feat, i) => (
                    <li key={i} className={styles.featureItem}>
                      <Check size={16} className={styles.checkIcon} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.id === 'platinum' || tier.id === 'gold' ? 'gold' : 'outline'}
                  fullWidth
                >
                  {t.membership.joinNow}
                </Button>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className={styles.faqSection}>
          <SectionHeader
            tag="Questions & Answers"
            title={lang === 'ar' ? 'الأسئلة الشائعة حول العضوية' : 'Membership FAQ'}
          />

          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const question = lang === 'ar' ? faq.qAr : faq.qEn;
              const answer = lang === 'ar' ? faq.aAr : faq.aEn;
              const isOpen = openFaq === index;

              return (
                <div key={index} className={styles.faqItem}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{question}</span>
                    <ChevronDown
                      size={18}
                      className={`${styles.faqIcon} ${isOpen ? styles.openIcon : ''}`}
                    />
                  </button>
                  {isOpen && <p className={styles.faqAnswer}>{answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
