export interface MembershipTier {
  id: string;
  nameEn: string;
  nameAr: string;
  pointsRange: string;
  discountEn: string;
  discountAr: string;
  badgeEn: string;
  badgeAr: string;
  featuresEn: string[];
  featuresAr: string[];
  color: string;
}

export const membershipTiers: MembershipTier[] = [
  {
    id: 'bronze',
    nameEn: 'Bronze Tier',
    nameAr: 'العضوية البرونزية',
    pointsRange: '0 – 500 Pts',
    discountEn: '5% Off Services',
    discountAr: 'خصم ٥٪ على الخدمات',
    badgeEn: 'Welcome Member',
    badgeAr: 'ترحيبية',
    color: '#B87333',
    featuresEn: [
      '5% Discount on all spa treatments',
      'Special Birthday Gift Voucher',
      'Welcome Gift Coupon upon joining',
      'Earn 1 Point for every 10 SAR spent',
    ],
    featuresAr: [
      'خصم ٥٪ على جميع خدمات السبا',
      'هدية وقسيمة خاصة في عيد ميلادكِ',
      'قسيمة خصم ترحيبية فور الانضمام',
      'كسب نقطة واحدة لكل ١٠ ريالات',
    ],
  },
  {
    id: 'silver',
    nameEn: 'Silver Tier',
    nameAr: 'العضوية الفضية',
    pointsRange: '501 – 1,500 Pts',
    discountEn: '10% Off Services',
    discountAr: 'خصم ١٠٪ على الخدمات',
    badgeEn: 'Preferred Guest',
    badgeAr: 'مميزة',
    color: '#A8A9AD',
    featuresEn: [
      '10% Discount on all spa treatments',
      '10% Discount on Boutique skincare products',
      'Exclusive Birthday Spa Package Upgrade',
      'Priority weekend booking slots',
    ],
    featuresAr: [
      'خصم ١٠٪ على جميع خدمات السبا',
      'خصم ١٠٪ على منتجات المتجر الفاخر',
      'ترقية باقة عيد الميلاد المجانية',
      'أولوية حجز المواعيد في نهايات الأسبوع',
    ],
  },
  {
    id: 'gold',
    nameEn: 'Gold Tier',
    nameAr: 'العضوية الذهبية',
    pointsRange: '1,501 – 5,000 Pts',
    discountEn: '15% Off Services',
    discountAr: 'خصم ١٥٪ على الخدمات',
    badgeEn: 'VIP Guest',
    badgeAr: 'ذهبية VIP',
    color: '#C5A47E',
    featuresEn: [
      '15% Discount on all spa services',
      '15% Discount on Boutique skincare products',
      'Complimentary Scalp Massage with any treatment',
      'Personal Therapist preference selection',
      'Exclusive invitations to seasonal launches',
    ],
    featuresAr: [
      'خصم ١٥٪ على جميع خدمات السبا',
      'خصم ١٥٪ على منتجات المتجر الفاخر',
      'جلسة مساج فروة رأس مجانية مع أي خدمة',
      'تثبيت معالجتكِ المفضلة بانتظام',
      'دعوات خاصة لفعاليات السبا الموسمية',
    ],
  },
  {
    id: 'platinum',
    nameEn: 'Platinum Royal Tier',
    nameAr: 'العضوية البلاتينية الملكية',
    pointsRange: '5,001+ Pts',
    discountEn: '20% Off Services',
    discountAr: 'خصم ٢٠٪ على الخدمات',
    badgeEn: 'Royal Elite',
    badgeAr: 'ملكية بلاتينية',
    color: '#3D5A3E',
    featuresEn: [
      '20% Discount on all spa & boutique offerings',
      'Dedicated Personal Spa Concierge',
      'Free VIP Room upgrade on every booking',
      'Complimentary welcome gift box every quarter',
      'Unlimited tea lounge access with private companion',
    ],
    featuresAr: [
      'خصم ٢٠٪ شامل لجميع خدمات السبا والمتجر',
      'مستشارة خاصة لإدارة حروجزاتكِ ومواعيدكِ',
      'ترقية مجانية لغرفة VIP الملكية في كل زيارة',
      'صندوق هدايا فاخر مجاني كل ثلاثة أشهر',
      'دخول مفتوح لصالة الضيافة الملكية برفقة صديقة',
    ],
  },
];
