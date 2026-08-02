'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { Button } from '@/components/ui/Button/Button';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from '@/components/ui/Icons';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const { lang, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Container size="narrow">
          <SectionHeader
            tag={lang === 'ar' ? 'خدمة العملاء' : 'Home Concierge'}
            title={t.nav.contact}
            subtitle={lang === 'ar' ? 'نحن هنا للإجابة على استفساراتكِ وترتيب موعد جلستكِ المنزلية الفاخرة.' : 'Our concierge team is at your service for home spa reservations and inquiries.'}
            light
          />
        </Container>
      </div>

      <Container className={styles.container}>
        <div className={styles.grid}>
          {/* Contact Details */}
          <div className={styles.infoCol}>
            <h3 className={styles.infoTitle}>
              {lang === 'ar' ? 'معلومات التنسيق والحجز المنزلي' : 'Home Spa Concierge'}
            </h3>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <MapPin size={22} className={styles.icon} />
                <div>
                  <h4>{lang === 'ar' ? 'نطاق الخدمة والتغطية' : 'Service Coverage Area'}</h4>
                  <p>{t.footer.address}</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Phone size={22} className={styles.icon} />
                <div>
                  <h4>{lang === 'ar' ? 'الهاتف والواتساب' : 'Phone & WhatsApp'}</h4>
                  <p dir="ltr">{t.footer.phone}</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Mail size={22} className={styles.icon} />
                <div>
                  <h4>{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h4>
                  <p>concierge@loyalty-spa.sa</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Clock size={22} className={styles.icon} />
                <div>
                  <h4>{t.footer.hours}</h4>
                  <p>{t.footer.hoursVal}</p>
                </div>
              </div>
            </div>

            <div className={styles.whatsappBox}>
              <MessageCircle size={28} className={styles.waIcon} />
              <div>
                <h4>{lang === 'ar' ? 'حجز سريع عبر الواتساب' : 'Quick WhatsApp Booking'}</h4>
                <p>{lang === 'ar' ? 'تواصل معنا مباشرة عبر الواتساب لتأكيد موعدكِ المنزلي.' : 'Chat directly with our home spa concierge team.'}</p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=966506622900"
                target="_blank"
                rel="noreferrer"
                className={styles.waBtn}
              >
                {lang === 'ar' ? 'تواصل الآن' : 'Chat Now'}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formCol}>
            {submitted ? (
              <div className={styles.successCard}>
                <h3>{lang === 'ar' ? 'تم إرسال رسالتكِ بنجاح' : 'Message Sent Successfully'}</h3>
                <p>{lang === 'ar' ? 'شكراً لتواصلكِ معنا. سيتواصل معكِ فريق الحجز المنزلي قريباً.' : 'Thank you for reaching out. Our concierge team will contact you shortly.'}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formTitle}>
                  {lang === 'ar' ? 'أرسلي لنا رسالة' : 'Send Us a Message'}
                </h3>

                <div className={styles.formGroup}>
                  <label>{t.bookingModal.name}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>{t.bookingModal.phone}</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>{t.bookingModal.email}</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>{lang === 'ar' ? 'الرسالة أو الاستفسار' : 'Your Message'}</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={styles.textarea}
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" fullWidth>
                  <Send size={16} />
                  {lang === 'ar' ? 'إرسال الرسالة' : 'Submit Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
