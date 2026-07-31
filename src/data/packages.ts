export interface PackageItem {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  badgeEn: string;
  badgeAr: string;
  descEn: string;
  descAr: string;
  originalPrice: number;
  currentPrice: number;
  savings: number;
  featuresEn: string[];
  featuresAr: string[];
  popular?: boolean;
}

export const packagesData: PackageItem[] = [
  {
    id: 'pkg1',
    slug: 'loyalty-renewal-1',
    titleEn: 'Loyalty Renewal Package 1',
    titleAr: 'باقة "الولاء" ١',
    badgeEn: 'Most Popular',
    badgeAr: 'الأكثر طلباً',
    descEn: 'Four 60-minute signature massage sessions tailored for consistent monthly muscle recovery and calm.',
    descAr: '٤ جلسات مساج لمدة ساعة كاملة مع اختيار الزيوت المعطرة المفضلة لديكِ.',
    originalPrice: 1080,
    currentPrice: 1000,
    savings: 80,
    featuresEn: [
      '4 × 60-Minute Signature Massage Sessions',
      'Choice of Premium Organic Essential Oils',
      'Complimentary Herbal Tea & Refreshments',
      'Valid for 90 Days',
    ],
    featuresAr: [
      '٤ جلسات مساج لمدة ساعة كاملة',
      'اختيار الزيوت العطرية العضوية الفاخرة',
      'مشروبات وأعشاب مهدئة مجانية',
      'صلاحية الاستخدام لمدة ٩٠ يوماً',
    ],
    popular: true,
  },
  {
    id: 'pkg2',
    slug: 'loyalty-renewal-2',
    titleEn: 'Loyalty Deluxe Package 2',
    titleAr: 'باقة "الولاء" ٢',
    badgeEn: 'Deluxe Value',
    badgeAr: 'توفير فاخر',
    descEn: 'Four 90-minute deep renewal massage sessions plus a complimentary luxury scalp or face massage treatment.',
    descAr: '٤ جلسات مساج لمدة ساعة ونصف + إضافة فاخرة مجانية (مساج رأس أو وجه).',
    originalPrice: 1520,
    currentPrice: 1360,
    savings: 160,
    featuresEn: [
      '4 × 90-Minute Deep Renewal Massage Sessions',
      '1 × Complimentary Deluxe Scalp or Face Massage Add-on',
      'Priority Weekend Appointment Booking',
      'Valid for 120 Days',
    ],
    featuresAr: [
      '٤ جلسات مساج لمدة ساعة ونصف',
      'جلسة إضافة فاخرة مجانية (فروة رأس أو وجه)',
      'أولوية حجز المواعيد في عطلة نهاية الأسبوع',
      'صلاحية الاستخدام لمدة ١٢٠ يوماً',
    ],
    popular: false,
  },
  {
    id: 'pkg3',
    slug: 'loyalty-renewal-3',
    titleEn: 'Loyalty VIP Royal Package 3',
    titleAr: 'باقة "الولاء" ٣ (الباقة الملكية)',
    badgeEn: 'Ultimate Royalty',
    badgeAr: 'التجربة الملكية',
    descEn: 'Four 120-minute Royal Full Body sessions with dedicated master therapist and luxury add-on treatments.',
    descAr: '٤ جلسات مساج ملكية ساعتين + إضافة فاخرة مع معالجة خاصة وأجواء ملكية.',
    originalPrice: 1840,
    currentPrice: 1600,
    savings: 240,
    featuresEn: [
      '4 × 120-Minute Royal Full Body Massage Sessions',
      'Dedicated Master Therapist Selection',
      '1 × Complimentary Royal Scalp Treatment',
      'Exclusive VIP Room Guarantee',
      'Valid for 180 Days',
    ],
    featuresAr: [
      '٤ جلسات مساج ملكية كاملة لمدة ساعتين',
      'اختيار معالجة خاصة دائمة لكِ',
      'علاج ملكي مجاني لفروة الرأس والشعر',
      'ضمان الغرفة الملكية الخاصة VIP',
      'صلاحية الاستخدام لمدة ١٨٠ يوماً',
    ],
    popular: true,
  },
];
