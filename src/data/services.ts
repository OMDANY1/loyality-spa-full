export interface Service {
  id: string;
  slug: string;
  category: 'massage' | 'moroccan' | 'facial' | 'body' | 'hair' | 'nails' | 'skin';
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  duration: number; // in minutes
  price: number; // in SAR
  image: string;
  popular?: boolean;
}

export const servicesData: Service[] = [
  {
    id: 's1',
    slug: 'massage-1h',
    category: 'massage',
    titleEn: 'Signature Massage (60 Mins)',
    titleAr: 'مساج لمدة ساعة واحدة',
    descEn: 'A full body relaxation session using luxury natural botanical oils to ease stress and release muscle tension.',
    descAr: 'جلسة استرخاء كاملة للجسم مع زيوت طبيعية فاخرة لإزالة التوتر وتجديد النشاط.',
    duration: 60,
    price: 270,
    image: '/images/massage.jpg',
    popular: true,
  },
  {
    id: 's2',
    slug: 'massage-1.5h',
    category: 'massage',
    titleEn: 'Deep Renewal Massage (90 Mins)',
    titleAr: 'مساج لمدة ساعة ونصف',
    descEn: 'A deep restorative session combining targeted acupressure and soothing strokes for long-lasting relaxation.',
    descAr: 'تجربة عميقة لإزالة التوتر المزمن وإعادة توازن الطاقة والجسم.',
    duration: 90,
    price: 350,
    image: '/images/massage.jpg',
    popular: true,
  },
  {
    id: 's3',
    slug: 'massage-2h',
    category: 'massage',
    titleEn: 'Royal Full Body Massage (120 Mins)',
    titleAr: 'مساج لمدة ساعتين (الجلسة الملكية)',
    descEn: 'The ultimate luxury ritual covering head to toe, designed for complete bodily and mental sanctuary.',
    descAr: 'الجلسة الملكية الكاملة لأقصى درجات الراحة والاستجمام مع المعالجة الخاصة.',
    duration: 120,
    price: 430,
    image: '/images/massage.jpg',
  },
  {
    id: 's4',
    slug: 'scalp-massage',
    category: 'massage',
    titleEn: 'Botanical Scalp & Hair Oil Massage',
    titleAr: 'مساج فروة الرأس بالزيوت الطبيعية',
    descEn: 'A nourishing scalp treatment boosting circulation and fortifying hair roots with herbal elixirs.',
    descAr: 'علاج مغذٍّ يُحفّز الدورة الدموية ويُقوّي جذور الشعر بزيوت عشبية فاخرة.',
    duration: 30,
    price: 80,
    image: '/images/massage.jpg',
  },
  {
    id: 's5',
    slug: 'royal-moroccan-bath',
    category: 'moroccan',
    titleEn: 'Royal Moroccan Hammam Bath',
    titleAr: 'حمام مغربي ملكي',
    descEn: 'Traditional Moroccan black soap exfoliation, eucalyptus steam, clay body mask, scalp massage and soothing rinse.',
    descAr: 'حمام مغربي أصيل بالصابون البلدي والأعشاب الطبية مع 10 دقائق مساج وماسك مغذٍ للشعر.',
    duration: 75,
    price: 300,
    image: '/images/moroccan.jpg',
    popular: true,
  },
  {
    id: 's6',
    slug: 'deep-cleansing-facial',
    category: 'facial',
    titleEn: 'Radiance Deep Cleansing Facial',
    titleAr: 'خدمة تنظيف البشرة العميق',
    descEn: 'Pore detoxifying facial with organic botanical serums, gentle extraction, and hydrating cream finish.',
    descAr: 'جلسة تنظيف عميق للبشرة لاستعادة نضارتها وإشراقتها الشابة.',
    duration: 60,
    price: 300,
    image: '/images/facial.jpg',
  },
  {
    id: 's7',
    slug: 'facelift-massage',
    category: 'facial',
    titleEn: 'Deep Sculpting Face Lift Massage',
    titleAr: 'مساج شد الوجه العميق',
    descEn: 'Specialized facial contouring massage stimulating collagen production and lymphatic drainage.',
    descAr: 'جلسة مساج متخصصة لشد بشرة الوجه ونحت الملامح بشكل طبيعي ومريح.',
    duration: 45,
    price: 200,
    image: '/images/facial.jpg',
  },
  {
    id: 's8',
    slug: 'cavitation-body',
    category: 'body',
    titleEn: 'Cavitation Body Sculpting Treatment',
    titleAr: 'جهاز الكافيتيشن لتفتيت الدهون',
    descEn: 'Advanced ultrasonic targeted cavitation to smooth texture and tone body contours safely.',
    descAr: 'علاج آمن وفعّال لتفتيت الدهون الموضعية ونحت الجسم وتحسين مظهر الجلد.',
    duration: 60,
    price: 400,
    image: '/images/hero.jpg',
  },
  {
    id: 's9',
    slug: 'cupping-therapy',
    category: 'body',
    titleEn: 'Therapeutic Cupping Session',
    titleAr: 'كاسات الهواء العلاجية',
    descEn: 'Ancient therapeutic technique releasing deep muscular knots and enhancing blood circulation.',
    descAr: 'تقنية علاجية متقدمة لتخفيف شد العضلات وتحفيز الدورة الدموية.',
    duration: 30,
    price: 30,
    image: '/images/massage.jpg',
  },
];
