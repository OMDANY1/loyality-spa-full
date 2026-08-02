'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useBooking } from '@/context/BookingContext';
import { Modal } from '@/components/ui/Modal/Modal';
import { Button } from '@/components/ui/Button/Button';
import { servicesData } from '@/data/services';
import { addonsData } from '@/data/addons';
import {
  CheckCircle2,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Sparkles,
  Check,
  Plus,
  Gift,
  Send,
} from '@/components/ui/Icons';
import styles from './BookingModal.module.css';

export const BookingModal: React.FC = () => {
  const { lang, t } = useLanguage();
  const { isOpen, closeBooking, selectedServiceId } = useBooking();

  const [step, setStep] = useState(1);
  const [serviceId, setServiceId] = useState(selectedServiceId || servicesData[0].id);
  const [duration, setDuration] = useState<number>(60);
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [date, setDate] = useState('2026-08-05');
  const [time, setTime] = useState('16:00');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  // Sync selected service if opened with specific ID
  useEffect(() => {
    if (selectedServiceId) {
      // Check if it's an addon ID
      if (selectedServiceId.startsWith('addon-')) {
        if (!selectedAddonIds.includes(selectedServiceId)) {
          setSelectedAddonIds([selectedServiceId]);
        }
      } else {
        setServiceId(selectedServiceId);
      }
    }
  }, [selectedServiceId]);

  const selectedService = servicesData.find((s) => s.id === serviceId) || servicesData[0];

  // Duration multiplier for service pricing
  const basePrice = selectedService.price;
  const durationPrice = duration === 90 ? basePrice + 100 : duration === 120 ? basePrice + 180 : basePrice;

  // Addons Bundle Price Calculation: 1 = 30 SAR, 2 = 50 SAR, 3 = 80 SAR, 4 = 100 SAR...
  const addonCount = selectedAddonIds.length;
  const pairs = Math.floor(addonCount / 2);
  const remainder = addonCount % 2;
  const addonsTotal = pairs * 50 + remainder * 30;

  const grandTotal = durationPrice + addonsTotal;

  const toggleAddon = (id: string) => {
    if (selectedAddonIds.includes(id)) {
      setSelectedAddonIds(selectedAddonIds.filter((item) => item !== id));
    } else {
      setSelectedAddonIds([...selectedAddonIds, id]);
    }
  };

  const handleReset = () => {
    setStep(1);
    closeBooking();
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 5) setStep(step + 1);
  };

  // WhatsApp Instant Booking Link
  const serviceName = lang === 'ar' ? selectedService.titleAr : selectedService.titleEn;
  const addonsNames = selectedAddonIds
    .map((id) => {
      const item = addonsData.find((a) => a.id === id);
      return item ? (lang === 'ar' ? item.nameAr : item.nameEn) : '';
    })
    .filter(Boolean)
    .join(', ');

  const whatsappMessage = encodeURIComponent(
    `Hello Loyalty Spa! I would like to reserve a luxury home spa ritual:\n\n` +
      `- Treatment: ${serviceName} (${duration} mins)\n` +
      `- Add-ons: ${addonsNames || 'None'}\n` +
      `- Date & Time: ${date} at ${time}\n` +
      `- Guest: ${name} (${phone})\n` +
      `- Total: ${grandTotal} SAR\n\nThank you!`
  );

  const whatsappUrl = `https://wa.me/966506622900?text=${whatsappMessage}`;

  return (
    <Modal isOpen={isOpen} onClose={handleReset} title={t.bookingModal.title}>
      {/* 5-Step Wellness Progress Bar */}
      <div className={styles.stepsBar}>
        {[
          t.bookingModal.step1,
          t.bookingModal.step2,
          t.bookingModal.step3,
          t.bookingModal.step4,
          t.bookingModal.step5,
        ].map((stepLabel, idx) => (
          <span
            key={idx}
            className={`${styles.stepIndicator} ${step >= idx + 1 ? styles.activeStep : ''}`}
          >
            {stepLabel}
          </span>
        ))}
      </div>

      {/* Step 1: Select Experience */}
      {step === 1 && (
        <div className={styles.stepContent}>
          <h4 className={styles.sectionHeading}>{t.bookingModal.selectService}</h4>
          <div className={styles.optionsList}>
            {servicesData.map((service) => {
              const title = lang === 'ar' ? service.titleAr : service.titleEn;
              const isSelected = service.id === serviceId;
              return (
                <div
                  key={service.id}
                  className={`${styles.optionCard} ${isSelected ? styles.selectedCard : ''}`}
                  onClick={() => setServiceId(service.id)}
                >
                  <div className={styles.optionMain}>
                    <span className={styles.optionTitle}>{title}</span>
                    <span className={styles.optionMeta}>
                      {service.duration} {t.services.duration} • {service.price} {t.services.currency}
                    </span>
                  </div>
                  {isSelected && <Sparkles size={18} className={styles.goldSparkle} />}
                </div>
              );
            })}
          </div>

          <Button variant="gold" fullWidth onClick={() => setStep(2)}>
            {lang === 'ar' ? 'المتابعة لاختيار مدة الجلسة' : 'Continue to Duration'}
          </Button>
        </div>
      )}

      {/* Step 2: Select Duration */}
      {step === 2 && (
        <div className={styles.stepContent}>
          <h4 className={styles.sectionHeading}>{t.bookingModal.selectDuration}</h4>
          <div className={styles.durationGrid}>
            {[
              { mins: 60, price: basePrice, labelEn: '60 Minutes (Standard Relaxation)', labelAr: '٦٠ دقيقة (استرخاء قياسي)' },
              { mins: 90, price: basePrice + 100, labelEn: '90 Minutes (Deep Restoration)', labelAr: '٩٠ دقيقة (تجديد عميق)' },
              { mins: 120, price: basePrice + 180, labelEn: '120 Minutes (Royal Complete Home Ritual)', labelAr: '١٢٠ دقيقة (طقوس الاستجمام الملكية المنزلية)' },
            ].map((d) => (
              <div
                key={d.mins}
                className={`${styles.durationCard} ${duration === d.mins ? styles.selectedDuration : ''}`}
                onClick={() => setDuration(d.mins)}
              >
                <div className={styles.durHeader}>
                  <Clock size={20} className={styles.clockIcon} />
                  <span className={styles.durMins}>{d.mins} {t.services.duration}</span>
                </div>
                <span className={styles.durLabel}>{lang === 'ar' ? d.labelAr : d.labelEn}</span>
                <span className={styles.durPrice}>{d.price} {t.services.currency}</span>
              </div>
            ))}
          </div>

          <div className={styles.stepActions}>
            <Button variant="secondary" onClick={() => setStep(1)}>
              {lang === 'ar' ? 'السابق' : 'Back'}
            </Button>
            <Button variant="gold" onClick={() => setStep(3)}>
              {lang === 'ar' ? 'المتابعة للإضافات الفاخرة' : 'Continue to Add-ons'}
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Select Luxury Add-ons (Bundle Calculator) */}
      {step === 3 && (
        <div className={styles.stepContent}>
          <div className={styles.bundleCallout}>
            <Gift size={20} className={styles.giftIcon} />
            <div>
              <h5 className={styles.bundleTitle}>{t.bookingModal.selectAddons}</h5>
              <p className={styles.bundleSub}>{t.bookingModal.selectAddonsDesc}</p>
            </div>
          </div>

          <div className={styles.addonsList}>
            {addonsData.map((addon) => {
              const name = lang === 'ar' ? addon.nameAr : addon.nameEn;
              const isSelected = selectedAddonIds.includes(addon.id);

              return (
                <div
                  key={addon.id}
                  className={`${styles.addonOption} ${isSelected ? styles.selectedAddon : ''}`}
                  onClick={() => toggleAddon(addon.id)}
                >
                  <div className={styles.addonCheck}>
                    {isSelected ? <Check size={14} /> : <Plus size={14} />}
                  </div>
                  <div className={styles.addonDetails}>
                    <span className={styles.addonName}>{name}</span>
                    <span className={styles.addonPrice}>+30 {t.services.currency}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Addon Pricing Banner */}
          <div className={styles.summarySubtotal}>
            <span>{lang === 'ar' ? `الإضافات المختارة (${addonCount}):` : `Selected Add-ons (${addonCount}):`}</span>
            <strong>{addonsTotal} {t.services.currency}</strong>
          </div>

          <div className={styles.stepActions}>
            <Button variant="secondary" onClick={() => setStep(2)}>
              {lang === 'ar' ? 'السابق' : 'Back'}
            </Button>
            <Button variant="gold" onClick={() => setStep(4)}>
              {lang === 'ar' ? 'المتابعة للموعد' : 'Continue to Schedule'}
            </Button>
          </div>
        </div>
      )}

      {/* Step 4: Schedule & Guest Details */}
      {step === 4 && (
        <form onSubmit={handleNext} className={styles.stepContent}>
          <h4 className={styles.sectionHeading}>{t.bookingModal.selectDate}</h4>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <Calendar size={16} /> {t.bookingModal.selectDate}
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={styles.input}
            />
          </div>

          <h4 className={styles.sectionHeading}>{t.bookingModal.selectTime}</h4>
          <div className={styles.timeSlots}>
            {['11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM', '07:00 PM', '09:00 PM', '10:30 PM'].map((slot) => (
              <button
                key={slot}
                type="button"
                className={`${styles.timeSlot} ${time === slot ? styles.selectedTime : ''}`}
                onClick={() => setTime(slot)}
              >
                <Clock size={14} /> {slot}
              </button>
            ))}
          </div>

          <h4 className={styles.sectionHeading}>{t.bookingModal.yourDetails}</h4>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <User size={16} /> {t.bookingModal.name}
            </label>
            <input
              type="text"
              required
              value={name}
              placeholder="e.g. Sarah Ahmed"
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              <Phone size={16} /> {t.bookingModal.phone}
            </label>
            <input
              type="tel"
              required
              value={phone}
              placeholder="+966 50 XXX XXXX"
              onChange={(e) => setPhone(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.stepActions}>
            <Button variant="secondary" onClick={() => setStep(3)}>
              {lang === 'ar' ? 'السابق' : 'Back'}
            </Button>
            <Button variant="gold" type="submit">
              {t.bookingModal.confirmBooking}
            </Button>
          </div>
        </form>
      )}

      {/* Step 5: Confirmation & Ritual Summary */}
      {step === 5 && (
        <div className={styles.successStep}>
          <CheckCircle2 size={54} className={styles.successIcon} />
          <h3 className={styles.successTitle}>{t.bookingModal.successTitle}</h3>
          <p className={styles.successDesc}>{t.bookingModal.successDesc}</p>

          <div className={styles.bookingSummaryCard}>
            <p>
              <strong>Primary Treatment:</strong> {serviceName} ({duration} mins)
            </p>
            {selectedAddonIds.length > 0 && (
              <p>
                <strong>Luxury Add-ons:</strong> {addonsNames}
              </p>
            )}
            <p>
              <strong>Date & Time:</strong> {date} at {time}
            </p>
            <p>
              <strong>Guest:</strong> {name} ({phone})
            </p>
            <div className={styles.totalRow}>
              <span>Grand Total Ritual Price:</span>
              <strong>{grandTotal} {t.services.currency}</strong>
            </div>
          </div>

          <div className={styles.successActions}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              <Send size={18} />
              <span>{lang === 'ar' ? 'تأكيد وحفظ عبر الواتساب' : 'Confirm via WhatsApp Direct'}</span>
            </a>
            <Button variant="gold" onClick={handleReset} fullWidth>
              {t.bookingModal.close}
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
