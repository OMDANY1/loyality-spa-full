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
    // Total Duration ~2.8s:
    // 0.0s - Phase 0: Closed envelope appears with anticipation
    // 0.4s - Phase 1: Wax seal gently cracks & separates
    // 0.8s - Phase 2: Top flap slowly lifts open (0.8s - 1.5s)
    // 1.5s - Phase 3: Card slides upward from clipped pocket (1.5s - 2.5s)
    // 2.5s - Phase 4: Envelope fades into background & card settles (2.5s - 2.8s)
    const t1 = setTimeout(() => setAnimStep(1), 400);
    const t2 = setTimeout(() => setAnimStep(2), 800);
    const t3 = setTimeout(() => setAnimStep(3), 1500);
    const t4 = setTimeout(() => {
      setAnimStep(4);
      onAnimationComplete();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
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
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.goldParticle}
            initial={{
              x: Math.random() * 400 - 200,
              y: Math.random() * 200 + 100,
              opacity: 0,
              scale: 0.4,
            }}
            animate={{
              y: Math.random() * -350 - 50,
              opacity: [0, 0.85, 0],
              scale: [0.4, 1.2, 0.4],
            }}
            transition={{
              duration: 2.6,
              delay: i * 0.12,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Main Animation Stage */}
      <div className={styles.stage}>
        {/* Envelope Shell */}
        <motion.div
          className={styles.envelopeContainer}
          initial={{ scale: 0.88, opacity: 0, y: 30 }}
          animate={
            animStep === 0
              ? { scale: [0.88, 1.02, 1], opacity: 1, y: [30, -5, 0] }
              : animStep >= 4
              ? { opacity: 0.4, scale: 0.95 }
              : { scale: 1, opacity: 1, y: 0 }
          }
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Back Paper Pocket */}
          <div className={styles.envelopeBackPaper} />

          {/* Masked Card Slot (Strict Overflow Masking to 100% conceal card before reveal) */}
          <div className={styles.cardMaskPocket}>
            <motion.div
              className={styles.cardInnerContainer}
              initial={{ y: 220, opacity: 0 }}
              animate={
                animStep >= 3
                  ? { y: animStep >= 4 ? 0 : -160, opacity: 1 }
                  : { y: 220, opacity: 0 }
              }
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            >
              <GiftCardTemplate data={data} cardRef={cardRef} />
            </motion.div>
          </div>

          {/* Front Envelope Pocket Facade */}
          <div className={styles.envelopeFrontFacade} />

          {/* Envelope Top V-Flap */}
          <motion.div
            className={styles.envelopeTopFlap}
            animate={animStep >= 2 ? { rotateX: 180, zIndex: 1 } : { rotateX: 0, zIndex: 6 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
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
                    ? { scale: [1, 1.12, 0.7], opacity: [1, 0.8, 0], y: [0, -3, 6] }
                    : { scale: 1, opacity: 1 }
                }
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <div className={styles.waxSealBody}>
                  <div className={styles.waxSealRing}>
                    <Image
                      src="/assets/gold.svg"
                      alt="Official Seal"
                      width={30}
                      height={30}
                      className={styles.waxLogo}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
