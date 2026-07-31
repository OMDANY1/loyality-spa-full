export interface BlogPost {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  excerptEn: string;
  excerptAr: string;
  contentEn: string;
  contentAr: string;
  categoryEn: string;
  categoryAr: string;
  authorEn: string;
  authorAr: string;
  date: string;
  readTime: number;
  image: string;
  popular?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    slug: 'benefits-of-regular-massage-therapy',
    titleEn: 'The Science of Restoration: Why Regular Massage is Essential Self-Care',
    titleAr: 'علم الاستجمام: لماذا يُعد التدليك المنتظم ضرورة للصحة والعافية',
    excerptEn: 'Explore how therapeutic massage lowers cortisol, improves lymphatic circulation, and rejuvenates overall vitality.',
    excerptAr: 'اكتشفي كيف يُساعد مساج الجسم المنتظم على تخفيض هرمون التوتر وتنشيط الدورة الدموية وتجديد طاقة الجسم.',
    contentEn: 'In our fast-paced modern world, muscle tension and chronic stress take a heavy toll on bodily harmony...',
    contentAr: 'في عالمنا المزدحم، يُشكل التوتر العضلي والضغوط اليومية عائقاً أمام راحة الجسم والتوازن النفسي...',
    categoryEn: 'Massage Therapy',
    categoryAr: 'العلاج بالتدليك',
    authorEn: 'Dr. Sarah Al-Hassan (Wellness Director)',
    authorAr: 'د. سارة الحسن (مديرة قسم العافية)',
    date: 'July 28, 2026',
    readTime: 5,
    image: '/images/massage.jpg',
    popular: true,
  },
  {
    id: 'b2',
    slug: 'the-art-of-moroccan-hammam',
    titleEn: 'The Ancient Ritual of Moroccan Hammam: Purification for Body & Soul',
    titleAr: 'فن الحمام المغربي الأصيل: طقوس التطهير والاسترخاء الفاخرة',
    excerptEn: 'Unveil the centuries-old secrets of eucalyptus black soap, kessa exfoliation, and pure botanical hydration.',
    excerptAr: 'تعرفي على أسرار طقوس الحمام المغربي بالصابون البلدي وأعشاب الكالبتوس التي تمنح البشرة نعومة الفانيلا.',
    contentEn: 'The Moroccan Hammam is far more than a bath—it is a sacred purification ceremony passed down through generations...',
    contentAr: 'الحمام المغربي الملكي ليس مجرد استحمام عادي، بل هو احتفال بتنقية الجسم وتخليصه من السموم والجلد الميت...',
    categoryEn: 'Moroccan Rituals',
    categoryAr: 'الطقوس المغربية',
    authorEn: 'Amina Mansoor (Master Hammam Specialist)',
    authorAr: 'أمنية منصور (أخصائية طقوس المغربي)',
    date: 'July 20, 2026',
    readTime: 6,
    image: '/images/moroccan.jpg',
    popular: true,
  },
  {
    id: 'b3',
    slug: 'building-a-luxury-skincare-routine',
    titleEn: 'How to Build a Restorative Skincare Routine with Organic Botanicals',
    titleAr: 'كيف تبنين روتيناً فاخراً للعناية بالبشرة باستخدام المستحضرات العضوية',
    excerptEn: 'Master the art of layering pure cold-pressed oils, rose serums, and gentle natural cleansers for glowing skin.',
    excerptAr: 'دليل كامل لكيفية استخدام الزيوت الطبيعية وسيرومات الهيالورونيك والورد للحفاظ على إشراقة بشرتكِ الشابة.',
    contentEn: 'True skin radiance does not come from heavy chemical compounds, but from deep cellular hydration...',
    contentAr: 'نضارة البشرة الحقيقية تكمن في الترطيب العميق واستخدام العناصر المكونة من الطبيعة النقية...',
    categoryEn: 'Skincare',
    categoryAr: 'العناية بالبشرة',
    authorEn: 'Noura Al-Otaibi (Senior Esthetician)',
    authorAr: 'نورة العتيبي (أخصائية البشرة)',
    date: 'July 15, 2026',
    readTime: 4,
    image: '/images/facial.jpg',
  },
];
