import type { Metadata } from 'next';
import { Playfair_Display, Inter, Cormorant_Garamond, Cairo, Tajawal } from 'next/font/google';
import { LanguageProvider } from '@/context/LanguageContext';
import { CartProvider } from '@/context/CartContext';
import { BookingProvider } from '@/context/BookingContext';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer/Footer';
import { CartPanel } from '@/components/layout/CartPanel/CartPanel';
import { BookingModal } from '@/components/layout/BookingModal/BookingModal';
import '@/styles/globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-accent',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-ar-heading',
  display: 'swap',
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-ar-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Loyalty Spa — Exclusive Luxury Wellness Sanctuary',
  description: 'Experience premier luxury spa treatments, traditional royal Moroccan hammams, and organic botanical skincare formulations in Saudi Arabia.',
  keywords: ['luxury spa', 'Saudi Arabia spa', 'Moroccan bath', 'massage therapy', 'organic skincare', 'Loyalty Spa'],
  openGraph: {
    title: 'Loyalty Spa — Exclusive Luxury Wellness Sanctuary',
    description: 'Premier luxury spa treatments, royal Moroccan hammam rituals, and organic skincare.',
    images: ['/images/hero.jpg'],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable} ${cairo.variable} ${tajawal.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LanguageProvider>
          <CartProvider>
            <BookingProvider>
              <Navbar />
              <main id="main-content" style={{ flexGrow: 1 }}>
                {children}
              </main>
              <Footer />
              <CartPanel />
              <BookingModal />
            </BookingProvider>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
