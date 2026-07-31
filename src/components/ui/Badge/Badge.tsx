import React from 'react';
import styles from './Badge.module.css';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'sage' | 'sand' | 'dark';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'gold' }) => {
  return <span className={`${styles.badge} ${styles[variant]}`}>{children}</span>;
};
