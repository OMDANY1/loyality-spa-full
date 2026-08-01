'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Preloader.module.css';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Check if preloader already ran in current session
    const hasSeenPreloader = sessionStorage.getItem('loyalty_spa_preloaded');
    if (hasSeenPreloader) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setFadingOut(true);
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('loyalty_spa_preloaded', 'true');
      }, 400); // fade out duration
    }, 800); // 800ms display

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`${styles.preloaderOverlay} ${fadingOut ? styles.fadeOut : ''}`}>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Image
            src="/assets/gold.svg"
            alt="Loyalty Spa"
            width={160}
            height={60}
            priority
            className={styles.logo}
          />
        </div>
        <div className={styles.lineLoader}>
          <div className={styles.lineFill} />
        </div>
        <p className={styles.tagline}>Sanctuary of Tranquility</p>
      </div>
    </div>
  );
};
