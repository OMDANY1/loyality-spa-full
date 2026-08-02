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
    roleEn: 'Regular Home Client',
    roleAr: 'عميلة خدمة منزلية دائمة',
    quoteEn: 'It was an exceptional home spa experience by all standards. The certified therapist arrived with luxury equipment and transformed my room into a serene haven.',
    quoteAr: 'لقد كانت تجربة سبا منزلي استثنائية بكل المقاييس. وصلت المعالجة المحترفة مع كامل التجهيزات الفاخرة وحوّلت غرفتي إلى ملاذ ملكي من الراحة والجمال.',
    rating: 5,
    locationEn: 'Riyadh',
    locationAr: 'الرياض',
  },
  {
    id: 't2',
    nameEn: 'Noura Al-Mohammed',
    nameAr: 'نورة محمد',
    roleEn: 'Home Spa Client',
    roleAr: 'عميلة الخدمة المنزلية',
    quoteEn: 'The finest home spa experience in Saudi Arabia. The master therapist arrived on time with complete privacy. The Royal Home Package was truly unforgettable!',
    quoteAr: 'أفضل تجربة سبا منزلي جربتها في المملكة. المعالجة وصلت في موعدها مع كامل التجهيزات الفاخرة والخصوصية التامة. أنصح الجميع بتجربة الجلسة الملكية المنزلية!',
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
    quoteEn: 'The treatment quality and organic oils are magnificent. Having certified therapists arrive at my home makes every session deeply rewarding and effortless.',
    quoteAr: 'جودة الجلسات المنزلية والزيوت العضوية فائقة الروعة. وصول المعالجة لمنزلي بكامل الراحة والاحترافية جعل تجربة الاستجمام سهلة وممتعة جداً.',
    rating: 5,
    locationEn: 'Dammam',
    locationAr: 'الدمام',
  },
];
