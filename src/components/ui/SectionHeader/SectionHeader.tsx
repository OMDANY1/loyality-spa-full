import React from 'react';
import styles from './SectionHeader.module.css';

export interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  subtitle,
  align = 'center',
  light = false,
}) => {
  return (
    <div className={`${styles.header} ${styles[align]} ${light ? styles.light : ''}`}>
      {tag && <span className={styles.tag}>{tag}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.divider}>
        <span className={styles.flourish}>❖</span>
      </div>
    </div>
  );
};
