'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { useBooking } from '@/context/BookingContext';
import { Button } from '@/components/ui/Button/Button';
import { ShoppingBag, Globe, Menu, X } from '@/components/ui/Icons';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const { lang, t, toggleLang } = useLanguage();
  const { totalQuantity, openCart } = useCart();
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoSrc = scrolled ? '/assets/green.svg' : '/assets/gold.svg';

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/shop', label: t.nav.shop },
    { href: '/offers', label: t.nav.offers },
    { href: '/membership', label: t.nav.membership },
    { href: '/blog', label: t.nav.blog },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logoLink}>
          <Image
            src={logoSrc}
            alt="Loyalty Spa"
            width={150}
            height={55}
            priority
            className={styles.logo}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className={styles.actions}>
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className={styles.langBtn}
            aria-label="Switch Language"
            title={lang === 'en' ? 'العربية' : 'English'}
          >
            <Globe size={18} />
            <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
          </button>

          {/* Cart Icon */}
          <button
            onClick={openCart}
            className={styles.iconBtn}
            aria-label="Open Shopping Bag"
          >
            <ShoppingBag size={20} />
            {totalQuantity > 0 && (
              <span className={styles.badge}>{totalQuantity}</span>
            )}
          </button>

          {/* Book Now Button */}
          <div className={styles.desktopBookBtn}>
            <Button
              variant={scrolled ? 'primary' : 'gold'}
              size="sm"
              onClick={() => openBooking()}
            >
              {t.nav.bookNow}
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.hamburgerBtn}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className={styles.mobileDrawerActions}>
            <Button
              variant="gold"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
            >
              {t.nav.bookNow}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
