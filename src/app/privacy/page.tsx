'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';

export default function PrivacyPage() {
  const { lang } = useLanguage();

  return (
    <div style={{ paddingTop: '140px', paddingBottom: '100px', backgroundColor: 'var(--color-cream)' }}>
      <Container size="narrow">
        <h1 style={{ fontSize: '36px', marginBottom: '24px' }}>
          {lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
        </h1>
        <div style={{ lineHeight: '1.8', color: 'var(--color-gray)', fontSize: '16px' }}>
          <p style={{ marginBottom: '16px' }}>
            {lang === 'ar'
              ? 'تلتزم سبا الولاء بحماية خصوصيتكِ ومعلوماتكِ الشخصية. نجمع فقط المعلومات الضرورية لمعالجة الحجوزات وتقديم أفضل خدمة ممكنة.'
              : 'Loyalty Spa is committed to protecting your privacy and personal data. We collect only the information necessary to fulfill your sanctuary reservations and deliver exceptional service.'}
          </p>
          <p style={{ marginBottom: '16px' }}>
            {lang === 'ar'
              ? 'لا نقوم بمشاركة بياناتكِ الشخصية أو بيعها لأي أطراف ثالثة.'
              : 'We strictly do not sell, lease, or distribute your private information to third parties.'}
          </p>
        </div>
      </Container>
    </div>
  );
}
