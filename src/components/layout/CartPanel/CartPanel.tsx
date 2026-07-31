'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button/Button';
import { X, Trash2, Plus, Minus, ShoppingBag } from '@/components/ui/Icons';
import styles from './CartPanel.module.css';

export const CartPanel: React.FC = () => {
  const { lang, t } = useLanguage();
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={closeCart}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <ShoppingBag size={20} className={styles.titleIcon} />
            <h3>{t.cart.title}</h3>
          </div>
          <button className={styles.closeBtn} onClick={closeCart} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Items List */}
        <div className={styles.body}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <ShoppingBag size={48} className={styles.emptyIcon} />
              <p>{t.cart.empty}</p>
            </div>
          ) : (
            <div className={styles.itemList}>
              {items.map(({ product, quantity }) => {
                const name = lang === 'ar' ? product.nameAr : product.nameEn;
                return (
                  <div key={product.id} className={styles.cartItem}>
                    <div className={styles.itemImageWrapper}>
                      <Image
                        src={product.image}
                        alt={name}
                        fill
                        className={styles.itemImage}
                      />
                    </div>
                    <div className={styles.itemDetails}>
                      <h4 className={styles.itemName}>{name}</h4>
                      <span className={styles.itemPrice}>
                        {product.price} {t.shop.currency}
                      </span>

                      <div className={styles.quantityControls}>
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className={styles.qtyBtn}
                        >
                          <Minus size={14} />
                        </button>
                        <span className={styles.qtyVal}>{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className={styles.qtyBtn}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className={styles.removeBtn}
                      aria-label={t.cart.remove}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.subtotalRow}>
              <span>{t.cart.subtotal}</span>
              <span className={styles.subtotalVal}>
                {subtotal} {t.shop.currency}
              </span>
            </div>
            <Button
              variant="gold"
              fullWidth
              size="lg"
              onClick={() => {
                alert(lang === 'ar' ? 'شكراً لاهتمامكِ! سيتم تفعيل البوابة الالكترونية قريباً.' : 'Thank you! Checkout integration ready.');
                closeCart();
              }}
            >
              {t.cart.checkout}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
