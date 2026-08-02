'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { Shield, Sparkles, Heart, Award, Check } from '@/components/ui/Icons';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  const { lang, t } = useLanguage();

  return (
    <div className={styles.aboutPage}>
      {/* Hero Header */}
      <section className={styles.heroHeader}>
        <Container size="narrow">
          <div className={styles.headerContent}>
            <span className={styles.tag}>{t.aboutPreview.tag}</span>
            <h1 className={styles.heroTitle}>{t.aboutPreview.headline}</h1>
            <p className={styles.heroSubtitle}>{t.aboutPreview.description}</p>
          </div>
        </Container>
      </section>

      {/* Brand Story Section */}
      <section className={styles.storySection}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/about_sanctuary_bg_1785587592001.jpg"
                alt="Loyalty Spa Atmosphere"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.image}
              />
              <div className={styles.imageOverlay} />
            </div>

            <div className={styles.textContent}>
              <span className={styles.subTag}>
                {lang === 'ar' ? 'أصالة واستجمام' : 'Heritage & Renewal'}
              </span>
              <h2 className={styles.sectionTitle}>
                {lang === 'ar'
                  ? 'فن الاسترخاء الهادئ في راحة منزلكِ'
                  : 'The Art of Quiet Luxury Delivered to Your Home'}
              </h2>
              <p className={styles.paragraph}>
                {lang === 'ar'
                  ? 'تأسس Loyalty Spa لتقديم خدمة السبا والاستجمام المنزلي الفاخر، مدمجاً أصالة الضيافة السعودية مع أرقى طقوس العافية والجمال. نؤمن بأن الراحة الحقيقية تبدأ عندما تصلكِ العناية الملكية في منزلكِ دون عناء التنقل.'
                  : 'Loyalty Spa was established as an exclusive home wellness service fusing refined Saudi hospitality with master therapeutic techniques. We believe true luxury is enjoying complete restorative peace inside your home without the stress of urban travel.'}
              </p>
              <p className={styles.paragraph}>
                {lang === 'ar'
                  ? 'تصلكِ معالجاتنا الخبيرات بكامل التجهيزات والزيوت العضوية الفاخرة، لتتحول مساحتكِ الخاصة في المنزل إلى ملاذ هادئ يضمن لكِ أعلى درجات الخصوصية والاستجمام.'
                  : 'Our certified master therapists arrive at your doorstep fully equipped with luxury portable beds, linens, and organic botanicals, transforming your private space into a personal sanctuary of unhurried calm.'}
              </p>

              {/* Stats Highlights */}
              <div className={styles.statsRow}>
                <div className={styles.statBox}>
                  <span className={styles.statVal}>{t.aboutPreview.stat1Val}</span>
                  <span className={styles.statLabel}>{t.aboutPreview.stat1Label}</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statVal}>{t.aboutPreview.stat2Val}</span>
                  <span className={styles.statLabel}>{t.aboutPreview.stat2Label}</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statVal}>{t.aboutPreview.stat3Val}</span>
                  <span className={styles.statLabel}>{t.aboutPreview.stat3Label}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <Container>
          <SectionHeader
            tag={lang === 'ar' ? 'ركائز التميز' : 'Pillars of Excellence'}
            title={lang === 'ar' ? 'قيمنا الأساسية' : 'Our Core Philosophy'}
            subtitle={lang === 'ar' ? 'معايير ملكية تضمن لكِ أقصى درجات الراحة والجودة' : 'Uncompromising standards ensuring your complete physical and sensory renewal.'}
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
