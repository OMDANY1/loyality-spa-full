'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { GiftCardData, GiftCardTemplate } from '../GiftCardTemplate/GiftCardTemplate';
import styles from './GiftEnvelopeAnimation.module.css';

interface GiftEnvelopeAnimationProps {
  data: GiftCardData;
  cardRef: React.Ref<HTMLDivElement>;
  onAnimationComplete: () => void;
}

export const GiftEnvelopeAnimation: React.FC<GiftEnvelopeAnimationProps> = ({
  data,
  cardRef,
  onAnimationComplete,
}) => {
  const [animStep, setAnimStep] = useState<number>(0);

  useEffect(() => {
    // Sequence timing (total 2.7s):
    // 0.0s - Envelope appears
    // 0.6s - Wax seal cracks
    // 1.2s - Flap opens
    // 1.8s - Card slides up
    // 2.7s - Complete & reveal controls
    const timer1 = setTimeout(() => setAnimStep(1), 600);
    const timer2 = setTimeout(() => setAnimStep(2), 1200);
    const timer3 = setTimeout(() => setAnimStep(3), 1800);
    const timer4 = setTimeout(() => {
      setAnimStep(4);
      onAnimationComplete();
    }, 2700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onAnimationComplete]);

  return (
    <div className={styles.overlay}>
      {/* Background Soft Blur Overlay */}
      <motion.div
        className={styles.backdropBlur}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Floating Gold Dust Particles */}
      <div className={styles.particlesContainer}>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.goldParticle}
            initial={{
              x: Math.random() * 400 - 200,
              y: Math.random() * 200 + 100,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: Math.random() * -300 - 50,
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.15,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Main Animation Stage */}
      <div className={styles.stage}>
        {/* Envelope Container */}
        <motion.div
          className={styles.envelopeBox}
          initial={{ scale: 0.85, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Back Flap Pocket */}
          <div className={styles.envelopeBack} />

          {/* Sliding Gift Card */}
          <motion.div
            className={styles.cardSlidingWrapper}
            initial={{ y: 120, scale: 0.95 }}
            animate={
              animStep >= 3
                ? { y: animStep >= 4 ? 0 : -140, scale: 1, zIndex: 10 }
                : { y: 120, scale: 0.95 }
            }
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <GiftCardTemplate data={data} cardRef={cardRef} />
          </motion.div>

          {/* Front Envelope Pocket Cover */}
          <div className={styles.envelopeFrontCover} />

          {/* Envelope Top Flap */}
          <motion.div
            className={styles.envelopeTopFlap}
            animate={animStep >= 2 ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top center' }}
          />

          {/* Official Wax Seal */}
          <AnimatePresence>
            {animStep < 3 && (
              <motion.div
                className={styles.waxSealWrapper}
                initial={{ scale: 1, opacity: 1 }}
                animate={
                  animStep >= 1
                    ? { scale: [1, 1.15, 0.8], opacity: [1, 0.9, 0] }
                    : { scale: 1, opacity: 1 }
                }
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.waxSealCircle}>
                  <Image
                    src="/assets/gold.svg"
                    alt="Wax Seal Logo"
                    width={32}
                    height={32}
                    className={styles.waxLogo}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
