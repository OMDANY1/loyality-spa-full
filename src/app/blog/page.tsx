'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { blogPosts } from '@/data/blog';
import { Clock, ArrowRight, ArrowLeft } from '@/components/ui/Icons';
import styles from './BlogPage.module.css';

export default function BlogPage() {
  const { lang, t } = useLanguage();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Container size="narrow">
          <SectionHeader
            tag={t.blog.tag}
            title={t.blog.title}
            light
          />
        </Container>
      </div>

      <Container className={styles.container}>
        <div className={styles.grid}>
          {blogPosts.map((post) => {
            const title = lang === 'ar' ? post.titleAr : post.titleEn;
            const excerpt = lang === 'ar' ? post.excerptAr : post.excerptEn;
            const category = lang === 'ar' ? post.categoryAr : post.categoryEn;

            return (
              <article key={post.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={post.image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.image}
                  />
                  <span className={styles.categoryBadge}>{category}</span>
                </div>

                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className={styles.readTime}>
                      <Clock size={13} /> {post.readTime} {t.blog.readTime}
                    </span>
                  </div>

                  <h3 className={styles.title}>{title}</h3>
                  <p className={styles.excerpt}>{excerpt}</p>

                  <Link href={`/blog/${post.slug}`} className={styles.readLink}>
                    <span>{t.blog.readArticle}</span>
                    <ArrowIcon size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
