'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useBooking } from '@/context/BookingContext';
import { Modal } from '@/components/ui/Modal/Modal';
import { Button } from '@/components/ui/Button/Button';
import { servicesData } from '@/data/services';
import { CheckCircle2, Calendar, Clock, User, Phone, Mail, Sparkles } from '@/components/ui/Icons';
import styles from './BookingModal.module.css';

export const BookingModal: React.FC = () => {
  const { lang, t } = useLanguage();
  const { isOpen, closeBooking, selectedServiceId } = useBooking();

  const [step, setStep] = useState(1);
  const [serviceId, setServiceId] = useState(selectedServiceId || servicesData[0].id);
  const [date, setDate] = useState('2026-08-05');
  const [time, setTime] = useState('14:00');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const selectedService = servicesData.find((s) => s.id === serviceId) || servicesData[0];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) setStep(step + 1);
  };

  const handleReset = () => {
    setStep(1);
    closeBooking();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleReset} title={t.bookingModal.title}>
      {/* Progress Steps */}
      <div className={styles.stepsBar}>
        <span className={`${styles.stepIndicator} ${step >= 1 ? styles.activeStep : ''}`}>
          {t.bookingModal.step1}
        </span>
        <span className={`${styles.stepIndicator} ${step >= 2 ? styles.activeStep : ''}`}>
          {t.bookingModal.step2}
        </span>
        <span className={`${styles.stepIndicator} ${step >= 3 ? styles.activeStep : ''}`}>
          {t.bookingModal.step3}
        </span>
      </div>

      {step === 1 && (
        <div className={styles.stepContent}>
          <h4 className={styles.sectionHeading}>{t.bookingModal.selectService}</h4>
          <div className={styles.serviceOptions}>
            {servicesData.map((service) => {
              const title = lang === 'ar' ? service.titleAr : service.titleEn;
              const isSelected = service.id === serviceId;
              return (
                <div
                  key={service.id}
                  className={`${styles.serviceOption} ${isSelected ? styles.selectedOption : ''}`}
                  onClick={() => setServiceId(service.id)}
                >
                  <div className={styles.optionInfo}>
                    <span className={styles.optionTitle}>{title}</span>
                    <span className={styles.optionMeta}>
                      {service.duration} {t.services.duration} • {service.price} {t.services.currency}
                    </span>
                  </div>
                  {isSelected && <Sparkles size={18} className={styles.sparkleIcon} />}
                </div>
              );
            })}
          </div>
          <Button variant="gold" fullWidth onClick={() => setStep(2)}>
            Continue to Date & Time
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className={styles.stepContent}>
          <h4 className={styles.sectionHeading}>{t.bookingModal.selectDate}</h4>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <Calendar size={16} /> Date
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
            {['11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM', '07:00 PM', '09:00 PM'].map((slot) => (
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

          <div className={styles.stepActions}>
            <Button variant="secondary" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button variant="gold" onClick={() => setStep(3)}>
              Continue to Details
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <form onSubmit={handleNext} className={styles.stepContent}>
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
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <Mail size={16} /> {t.bookingModal.email}
            </label>
            <input
              type="email"
              value={email}
              placeholder="sarah@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.stepActions}>
            <Button variant="secondary" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button variant="gold" type="submit">
              {t.bookingModal.confirmBooking}
            </Button>
          </div>
        </form>
      )}

      {step === 4 && (
        <div className={styles.successStep}>
          <CheckCircle2 size={54} className={styles.successIcon} />
          <h3 className={styles.successTitle}>{t.bookingModal.successTitle}</h3>
          <p className={styles.successDesc}>{t.bookingModal.successDesc}</p>
          <div className={styles.bookingSummaryCard}>
            <p>
              <strong>Treatment:</strong> {lang === 'ar' ? selectedService.titleAr : selectedService.titleEn}
            </p>
            <p>
              <strong>Date & Time:</strong> {date} at {time}
            </p>
            <p>
              <strong>Price:</strong> {selectedService.price} {t.services.currency}
            </p>
          </div>
          <Button variant="gold" onClick={handleReset} fullWidth>
            {t.bookingModal.close}
          </Button>
        </div>
      )}
    </Modal>
  );
};
