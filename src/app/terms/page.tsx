'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';

export default function TermsPage() {
  const { lang } = useLanguage();

  return (
    <div style={{ paddingTop: '140px', paddingBottom: '100px', backgroundColor: 'var(--color-cream)' }}>
      <Container size="narrow">
        <h1 style={{ fontSize: '36px', marginBottom: '24px' }}>
          {lang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
        </h1>
        <div style={{ lineHeight: '1.8', color: 'var(--color-gray)', fontSize: '16px' }}>
          <p style={{ marginBottom: '16px' }}>
            {lang === 'ar'
              ? 'مرحباً بكِ في سبا الولاء. باستخدامكِ لموقعنا وحجز خدماتنا، فإنكِ توافقين على الالتزام بالشروط والأحكام المحددة.'
              : 'Welcome to Loyalty Spa. By accessing our website and booking treatments, you agree to comply with our terms and conditions.'}
          </p>
          <p style={{ marginBottom: '16px' }}>
            {lang === 'ar'
              ? 'يُرجى الحضور قبل الموعد بـ 15 دقيقة للاستمتاع بأجواء الاستقبال والاستعداد للجلسة.'
              : 'Guests are kindly requested to arrive 15 minutes prior to appointment time to enjoy our welcome ritual.'}
          </p>
        </div>
      </Container>
    </div>
  );
}
