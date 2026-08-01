export interface Service {
  id: string;
  slug: string;
  category: 'massage' | 'moroccan' | 'facial' | 'body' | 'hair' | 'nails' | 'skin';
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  benefitsEn: string[];
  benefitsAr: string[];
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
    benefitsEn: ['Relieves muscular tightness', 'Enhances blood flow', 'Soothes nervous system'],
    benefitsAr: ['إزالة التوتر العضلي', 'تحسين الدورة الدموية', 'تهدئة الجهاز العصبي'],
    duration: 60,
    price: 270,
    image: '/images/service_massage_1h_1785587520945.jpg',
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
    benefitsEn: ['Deep tissue release', 'Targeted knot relief', 'Restores bodily harmony'],
    benefitsAr: ['استرخاء الأنسجة العميق', 'فك عقد التصلب', 'إعادة توازن الجسم'],
    duration: 90,
    price: 350,
    image: '/images/service_massage_90m_1785587533507.jpg',
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
    benefitsEn: ['Head-to-toe sanctuary', 'Uninterrupted peaceful calm', 'Complete mind & body reset'],
    benefitsAr: ['تدليل كامل من الرأس للقدمين', 'هدوء استثنائي عالي الفخامة', 'تجديد شامل للذهن والجسم'],
    duration: 120,
    price: 430,
    image: '/images/service_massage_120m_1785587546948.jpg',
  },
  {
    id: 's4',
    slug: 'scalp-massage',
    category: 'massage',
    titleEn: 'Botanical Scalp & Hair Oil Massage',
    titleAr: 'مساج فروة الرأس بالزيوت الطبيعية',
    descEn: 'A nourishing scalp treatment boosting circulation and fortifying hair roots with herbal elixirs.',
    descAr: 'جلسة مغذية لفروة الرأس تنشط الدورة الدموية وتقوي جذور الشعر بزيوت عشبية.',
    benefitsEn: ['Relieves mental stress', 'Nourishes hair roots', 'Promotes scalp health'],
    benefitsAr: ['تخفيف إجهاد الرأس', 'تغذية بصيلات الشعر', 'تعزيز صحة فروة الرأس'],
    duration: 45,
    price: 190,
    image: '/images/service_scalp_massage_1785587558620.jpg',
  },
  {
    id: 's5',
    slug: 'moroccan-bath-royal',
    category: 'moroccan',
    titleEn: 'Royal Moroccan Hammam Experience',
    titleAr: 'الحمام المغربي الملكي الفاخر',
    descEn: 'Authentic eucalyptus black soap exfoliation, herbal steam bath, and nourishing clay body wrap.',
    descAr: 'تقشير مغربي بلدي بالصابون المغربي والكالبتوس مع بخار الأعشاب وقناع الطين المغذي.',
    benefitsEn: ['Deep skin exfoliation', 'Removes toxins & dead skin', 'Silky radiant complexion'],
    benefitsAr: ['تقشير عميق للبشرة', 'إزالة السموم والخلايا الميتة', 'نضارة ونعومة مخملية'],
    duration: 75,
    price: 320,
    image: '/images/service_moroccan_bath_1785587569813.jpg',
    popular: true,
  },
  {
    id: 's6',
    slug: 'glow-facial',
    category: 'facial',
    titleEn: 'Rose & Hyaluronic Glow Facial',
    titleAr: 'جلسة نضارة الوجه بالورد والهيالورونيك',
    descEn: 'Intensive hydrating facial treatment with organic rosewater and hyaluronic serum for visible luminescence.',
    descAr: 'علاج مكثف للوجه بماء الورد العضوي وسيروم الهيالورونيك لإشراقة ونضارة فورية.',
    benefitsEn: ['Multi-depth skin hydration', 'Immediate glowing complexion', 'Smoothes fine lines'],
    benefitsAr: ['ترطيب عميق لطبقات البشرة', 'إشراقة ونضارة فورية', 'تنعيم ملمس البشرة'],
    duration: 60,
    price: 290,
    image: '/images/service_rose_facial_1785587581157.jpg',
    popular: true,
  },
];
