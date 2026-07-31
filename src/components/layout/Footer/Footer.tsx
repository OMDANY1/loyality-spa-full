'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
import { MapPin, Phone, Clock, Instagram, Facebook, Send } from '@/components/ui/Icons';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer}>
      <Container>
        {/* Newsletter Section */}
        <div className={styles.newsletterCard}>
          <div className={styles.newsletterInfo}>
            <h3 className={styles.newsletterTitle}>{t.newsletter.title}</h3>
            <p className={styles.newsletterSubtitle}>{t.newsletter.subtitle}</p>
          </div>
          {subscribed ? (
            <p className={styles.newsletterSuccess}>{t.newsletter.success}</p>
          ) : (
            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder={t.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.newsletterInput}
              />
              <Button type="submit" variant="gold" size="md">
                <Send size={16} />
                {t.newsletter.subscribe}
              </Button>
            </form>
          )}
        </div>

        {/* 4-Column Footer Main */}
        <div className={styles.grid}>
          {/* Col 1: Brand */}
          <div className={styles.col}>
            <Image
              src="/assets/gold.svg"
              alt="Loyalty Spa Logo"
              width={160}
              height={60}
              className={styles.brandLogo}
            />
            <p className={styles.brandText}>{t.footer.aboutText}</p>
            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/loyalty.spa.sa"
                target="_blank"
                rel="noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=966506622900"
                target="_blank"
                rel="noreferrer"
                className={styles.socialIcon}
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className={styles.socialIcon}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t.footer.quickLinks}</h4>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.link}>{t.nav.home}</Link></li>
              <li><Link href="/about" className={styles.link}>{t.nav.about}</Link></li>
              <li><Link href="/services" className={styles.link}>{t.nav.services}</Link></li>
              <li><Link href="/shop" className={styles.link}>{t.nav.shop}</Link></li>
              <li><Link href="/membership" className={styles.link}>{t.nav.membership}</Link></li>
              <li><Link href="/blog" className={styles.link}>{t.nav.blog}</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t.footer.services}</h4>
            <ul className={styles.linkList}>
              <li><Link href="/services#massage" className={styles.link}>{t.services.title}</Link></li>
              <li><Link href="/services#moroccan" className={styles.link}>Royal Moroccan Bath</Link></li>
              <li><Link href="/services#facial" className={styles.link}>Facial & Skincare</Link></li>
              <li><Link href="/offers" className={styles.link}>{t.nav.offers}</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t.footer.contactUs}</h4>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <MapPin size={18} className={styles.infoIcon} />
                <span>{t.footer.address}</span>
              </li>
              <li className={styles.infoItem}>
                <Phone size={18} className={styles.infoIcon} />
                <span dir="ltr">{t.footer.phone}</span>
              </li>
              <li className={styles.infoItem}>
                <Clock size={18} className={styles.infoIcon} />
                <span>{t.footer.hoursVal}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className={styles.legalLink}>Terms & Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
