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
    titleEn: 'Signature Home Massage (60 Mins)',
    titleAr: 'مساج منزلي لمدة ساعة واحدة',
    descEn: 'A full body home relaxation session where our certified therapist arrives equipped with a portable luxury bed and organic botanical oils.',
    descAr: 'جلسة استرخاء منزلية كاملة للجسم تصلكِ فيها المعالجة المحترفة مع التجهيزات والزيوت العضوية لإزالة التوتر في راحة منزلكِ.',
    benefitsEn: ['Certified therapist home arrival', 'Full body muscle tension release', 'Complete privacy in your home'],
    benefitsAr: ['وصول معالجة محترفة لمنزلكِ', 'إزالة التوتر والشد العضلي', 'خصوصية تامة في منزلكِ'],
    duration: 60,
    price: 270,
    image: '/images/service_massage_1h_1785587520945.jpg',
    popular: true,
  },
  {
    id: 's2',
    slug: 'massage-1.5h',
    category: 'massage',
    titleEn: 'Deep Renewal Home Massage (90 Mins)',
    titleAr: 'مساج منزلي لمدة ساعة ونصف',
    descEn: 'A deep restorative home session combining targeted acupressure and soothing strokes, prepared professionally inside your home.',
    descAr: 'تجربة منزلية عميقة لإعادة توازن الطاقة وفك العقد العضلية بتجهيز احترافي متكامل داخل مساحتكِ الخاصة.',
    benefitsEn: ['Deep tissue release at home', 'Targeted knot & stiffness relief', 'Personalized home spa setup'],
    benefitsAr: ['فك التصلب العضلي العميق', 'تجهيز احترافي داخل منزلكِ', 'إعادة توازن الجسم والروح'],
    duration: 90,
    price: 350,
    image: '/images/service_massage_90m_1785587533507.jpg',
    popular: true,
  },
  {
    id: 's3',
    slug: 'massage-2h',
    category: 'massage',
    titleEn: 'Royal Full Body Home Massage (120 Mins)',
    titleAr: 'مساج منزلي ملكي لمدة ساعتين',
    descEn: 'The ultimate luxury home ritual covering head to toe, delivered by a master therapist in the complete comfort of your home.',
    descAr: 'الجلسة الملكية المنزلية الكاملة لأقصى درجات التدليل والاستجمام بأيدي معالجة خبيرة تصل مباشرة إلى منزلكِ.',
    benefitsEn: ['Unhurried 120-min home ritual', 'Head-to-toe complete renewal', 'Zero travel effort required'],
    benefitsAr: ['طقوس استجمام منزلية لمدة ساعتين', 'تدليل ملكي من الرأس للقدمين', 'راحة كاملة دون الحاجة للتنقل'],
    duration: 120,
    price: 430,
    image: '/images/service_massage_120m_1785587546948.jpg',
  },
  {
    id: 's4',
    slug: 'scalp-massage',
    category: 'massage',
    titleEn: 'Botanical Scalp & Hair Oil Home Massage',
    titleAr: 'مساج منزلي لفروة الرأس بالزيوت الطبيعية',
    descEn: 'A nourishing scalp treatment performed in your home, boosting microcirculation and soothing head tension with herbal elixirs.',
    descAr: 'جلسة منزلية مريحة لتغذية فروة الرأس بزيوت عشبية وتخفيف ضغط الرأس والرقبة في خصوصية منزلكِ.',
    benefitsEn: ['Relieves mental stress at home', 'Nourishes scalp & hair roots', 'Soothing sensory experience'],
    benefitsAr: ['تخفيف إجهاد الرأس والرقبة', 'تغذية جذور الشعر بالزيوت', 'تجربة استرخائية مريحة في المنظر'],
    duration: 45,
    price: 190,
    image: '/images/service_scalp_massage_1785587558620.jpg',
  },
  {
    id: 's5',
    slug: 'moroccan-bath-royal',
    category: 'moroccan',
    titleEn: 'Royal Moroccan Home Hammam Experience',
    titleAr: 'الحمام المغربي الملكي المنزلي الفاخر',
    descEn: 'Authentic eucalyptus black soap exfoliation, portable steam preparation, and organic clay body wrap in your home.',
    descAr: 'طقوس الحمام المغربي الفاخرة بالصابون البلدي وقناع الطين المغذي، مُجهزة باحترافية داخل منزلكِ.',
    benefitsEn: ['Portable luxury steam setup', 'Deep skin exfoliation & glow', 'Pure home privacy & comfort'],
    benefitsAr: ['تجهيز بخار احترافي في المنظر', 'تقشير عميق ونضارة مخملية', 'أعلى درجات الخصوصية والراحة'],
    duration: 75,
    price: 320,
    image: '/images/service_moroccan_bath_1785587569813.jpg',
    popular: true,
  },
  {
    id: 's6',
    slug: 'glow-facial',
    category: 'facial',
    titleEn: 'Rose & Hyaluronic Glow Home Facial',
    titleAr: 'جلسة نضارة الوجه المنزلية بالورد والهيالورونيك',
    descEn: 'Intensive hydrating facial treatment with organic rosewater and hyaluronic serum, performed at home for visible radiance.',
    descAr: 'علاج مكثف للوجه بالورد العضوي وسيروم الهيالورونيك ينفذ في منزلكِ لإشراقة ونضارة فورية.',
    benefitsEn: ['Multi-depth skin hydration at home', 'Immediate luminous facial glow', 'Smoothes skin texture'],
    benefitsAr: ['ترطيب عميق لطبقات البشرة', 'إشراقة ونضارة فورية للوجه', 'تنعيم ملمس البشرة في المنزل'],
    duration: 60,
    price: 290,
    image: '/images/service_rose_facial_1785587581157.jpg',
    popular: true,
  },
];
