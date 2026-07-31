export interface Testimonial {
  id: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  quoteEn: string;
  quoteAr: string;
  rating: number;
  locationEn: string;
  locationAr: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    nameEn: 'Sarah Ahmed',
    nameAr: 'سارة أحمد',
    roleEn: 'Regular Guest',
    roleAr: 'عميلة دائمة',
    quoteEn: 'It was an exceptional experience by all standards. The tranquil ambiance and professionalism at Loyalty Spa are unparalleled. I felt transported to another realm of serene renewal.',
    quoteAr: 'لقد كانت تجربة استثنائية بكل المقاييس. الهدوء والاحترافية في Loyalty Spa لا يعلى عليهما. شعرت وكأنني في عالم آخر من الراحة والجمال.',
    rating: 5,
    locationEn: 'Riyadh',
    locationAr: 'الرياض',
  },
  {
    id: 't2',
    nameEn: 'Noura Al-Mohammed',
    nameAr: 'نورة محمد',
    roleEn: 'First-time Visitor',
    roleAr: 'زائرة جديدة',
    quoteEn: 'The finest spa experience in Saudi Arabia. The master therapists are incredibly gentle and skilled. I highly recommend the VIP Royal Package—it was unforgettable.',
    quoteAr: 'أفضل سبا زرتُه في المملكة. الطاقم محترف جداً والأجواء رائعة. أنصح الجميع بتجربة باقة الولاء الملكية، كانت تجربة لا تُنسى!',
    rating: 5,
    locationEn: 'Jeddah',
    locationAr: 'جدة',
  },
  {
    id: 't3',
    nameEn: 'Fatima Al-Zahrani',
    nameAr: 'فاطمة الزهراني',
    roleEn: 'Platinum Member',
    roleAr: 'عضوة بلاتينية',
    quoteEn: 'The treatment quality and organic oils are magnificent. The Loyalty Membership program makes every visit feel deeply rewarding and personally tailored.',
    quoteAr: 'الخدمات رائعة والأسعار معقولة جداً مقارنة بالجودة العالية. برنامج الولاء مميز جداً وأنصح الجميع بالاشتراك فيه.',
    rating: 5,
    locationEn: 'Dammam',
    locationAr: 'الدمام',
  },
];
