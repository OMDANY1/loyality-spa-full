'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { Button } from '../Button/Button';
import { Star, ShoppingBag } from '@/components/ui/Icons';
import styles from './ProductCard.module.css';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { lang, t } = useLanguage();
  const { addToCart } = useCart();

  const name = lang === 'ar' ? product.nameAr : product.nameEn;
  const category = lang === 'ar' ? product.categoryAr : product.categoryEn;
  const desc = lang === 'ar' ? product.descAr : product.descEn;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className={styles.image}
        />
        <span className={styles.categoryBadge}>{category}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.rating}>
          <Star size={14} fill="#C5A47E" color="#C5A47E" />
          <span>{product.rating.toFixed(1)}</span>
        </div>

        <h3 className={styles.name}>{name}</h3>
        <p className={styles.desc}>{desc}</p>

        <div className={styles.footer}>
          <span className={styles.price}>
            {product.price} {t.shop.currency}
          </span>
          <Button variant="gold" size="sm" onClick={() => addToCart(product)}>
            <ShoppingBag size={16} />
            {t.shop.addToCart}
          </Button>
        </div>
      </div>
    </div>
  );
};
