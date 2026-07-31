'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { Shield, Sparkles, Heart, Award } from '@/components/ui/Icons';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  const { lang, t } = useLanguage();

  return (
    <div className={styles.page}>
      {/* Hero Header */}
      <div className={styles.heroHeader}>
        <Container size="narrow">
          <span className={styles.tag}>{t.aboutPreview.tag}</span>
          <h1 className={styles.heroTitle}>{t.aboutPreview.title}</h1>
          <p className={styles.heroSubtitle}>{t.aboutPreview.description}</p>
        </Container>
      </div>

      {/* Story Section */}
      <section className={styles.storySection}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/moroccan.jpg"
                alt="Loyalty Spa Interior Atmosphere"
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>
                {lang === 'ar' ? 'رسالتنا ورؤيتنا' : 'Our Mission & Vision'}
              </h2>
              <p className={styles.paragraph}>
                {lang === 'ar'
                  ? 'تأسس سبا الولاء ليكون ملاذاً يجمع بين الأصالة والعناية الحديثة في المملكة العربية السعودية. نؤمن بأن العافية الحقيقية تنبع من العناية بالتفاصيل الدقيقة والهدوء التام.'
                  : 'Loyalty Spa was created as a sanctuary fusing timeless Arabic hospitality with modern luxury wellness in Saudi Arabia. We believe true renewal begins when the mind settles and the body is tended to with organic botanicals.'}
              </p>
              <p className={styles.paragraph}>
                {lang === 'ar'
                  ? 'كل معالجة في فريقنا تمتلك خبرة واسعة في طقوس الاستجمام والعناية بالبشرة، مما يضمن لكل زائرة تجربة فاخرة وآمنة تماماً.'
                  : 'Every therapist on our team possesses deep mastery in therapeutic massage, hammam rituals, and esthetic care, ensuring an immaculate, restorative experience for every guest.'}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <Container>
          <SectionHeader
            tag="Our Core Values"
            title={lang === 'ar' ? 'قيمنا الأساسية' : 'Pillars of Excellence'}
          />

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <Sparkles size={32} className={styles.valueIcon} />
              <h3>{lang === 'ar' ? 'الفخامة الهادئة' : 'Quiet Luxury'}</h3>
              <p>
                {lang === 'ar'
                  ? 'تصاميم وأجواء تُريح الحواس دون مبالغة، تمنحكِ شعوراً بالرقي التام.'
                  : 'Restrained, understated opulence designed to quiet the mind and elevate the senses.'}
              </p>
            </div>

            <div className={styles.valueCard}>
              <Heart size={32} className={styles.valueIcon} />
              <h3>{lang === 'ar' ? 'الاهتمام الأصيل' : 'Genuine Care'}</h3>
              <p>
                {lang === 'ar'
                  ? 'نستقبل كل ضيفة كأميرة ونُصمم كل جلسة لتناسب احتياجاتها الخاصة.'
                  : 'Every guest is welcomed with warmth and every treatment is tailored to individual needs.'}
              </p>
            </div>

            <div className={styles.valueCard}>
              <Shield size={32} className={styles.valueIcon} />
              <h3>{lang === 'ar' ? 'النقاء العضوي' : 'Organic Purity'}</h3>
              <p>
                {lang === 'ar'
                  ? 'نستخدم زيوت ومستحضرات طبيعية 100٪ خالية من المواد الكيميائية الضارة.'
                  : '100% pure cold-pressed oils, organic eucalyptus, and clean cosmetic formulations.'}
              </p>
            </div>

            <div className={styles.valueCard}>
              <Award size={32} className={styles.valueIcon} />
              <h3>{lang === 'ar' ? 'الاحترافية والتخصص' : 'Master Craft'}</h3>
              <p>
                {lang === 'ar'
                  ? 'معالجات خبيرات حاصلات على أعلى شهادات العناية والعافية.'
                  : 'Certified master therapists trained in traditional rituals and modern esthetics.'}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
