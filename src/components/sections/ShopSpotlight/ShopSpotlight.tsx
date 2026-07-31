'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { ProductCard } from '@/components/ui/Card/ProductCard';
import { Button } from '@/components/ui/Button/Button';
import { productsData } from '@/data/products';
import styles from './ShopSpotlight.module.css';

export const ShopSpotlightSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader
          tag="Boutique Formulations"
          title={t.shop.title}
          subtitle={t.shop.subtitle}
        />

        <div className={styles.grid}>
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/shop">
            <Button variant="gold" size="lg">
              Explore Full Boutique
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
