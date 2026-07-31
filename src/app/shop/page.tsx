'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { ProductCard } from '@/components/ui/Card/ProductCard';
import { productsData } from '@/data/products';
import styles from './ShopPage.module.css';

export default function ShopPage() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Container size="narrow">
          <SectionHeader
            tag="Organic Formulations"
            title={t.shop.title}
            subtitle={t.shop.subtitle}
            light
          />
        </Container>
      </div>

      <Container className={styles.container}>
        <div className={styles.grid}>
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}
