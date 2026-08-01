'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { Download, RefreshCw, Sparkles } from '@/components/ui/Icons';
import styles from './GiftActions.module.css';

interface GiftActionsProps {
  cardRef: React.RefObject<HTMLDivElement>;
  onReset: () => void;
  uiLang: 'ar' | 'en';
}

export const GiftActions: React.FC<GiftActionsProps> = ({ cardRef, onReset, uiLang }) => {
  const isAr = uiLang === 'ar';
  const [downloading, setDownloading] = useState(false);

  const handleDownloadPNG = async () => {
    if (!cardRef.current) return;
    try {
      setDownloading(true);
      const { toPng } = await import('html-to-image');
      const dataUrl = await toPng(cardRef.current, {
        quality: 0.98,
        pixelRatio: 3, // 300 DPI high resolution
      });
      const link = document.createElement('a');
      link.download = `Loyalty-Spa-Gift-Card-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error generating PNG:', err);
    } finally {
      setDownloading(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!cardRef.current) return;
    try {
      setDownloading(true);
      const { toPng } = await import('html-to-image');
      const { jsPDF } = await import('jspdf');

      const dataUrl = await toPng(cardRef.current, {
        quality: 0.98,
        pixelRatio: 3,
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      // A4 dimensions: 210mm x 297mm
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = 140; // centered 140mm width card
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      const x = (210 - pdfWidth) / 2;
      const y = (297 - pdfHeight) / 2;

      pdf.addImage(dataUrl, 'PNG', x, y, pdfWidth, pdfHeight);
      pdf.save(`Loyalty-Spa-Gift-Card-${Date.now()}.pdf`);
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonsRow}>
        <Button
          variant="gold"
          size="lg"
          onClick={handleDownloadPNG}
          disabled={downloading}
          className={styles.btn}
        >
          <Download size={18} />
          <span>{isAr ? 'تحميل الصورة (PNG)' : 'Download PNG'}</span>
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={handleDownloadPDF}
          disabled={downloading}
          className={styles.btn}
        >
          <Sparkles size={18} />
          <span>{isAr ? 'تحميل ملف (PDF)' : 'Download PDF'}</span>
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={onReset}
          className={styles.btn}
        >
          <RefreshCw size={18} />
          <span>{isAr ? 'إنشاء إهداء جديد' : 'Create Another Gift'}</span>
        </Button>
      </div>
    </div>
  );
};
