export type Language = 'en' | 'ar';

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    shop: string;
    offers: string;
    membership: string;
    blog: string;
    contact: string;
    bookNow: string;
    cart: string;
    search: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    exploreServices: string;
    bookNow: string;
  };
  intro: {
    tag: string;
    headline: string;
    text: string;
  };
  services: {
    title: string;
    subtitle: string;
    viewAll: string;
    duration: string;
    from: string;
    currency: string;
    bookService: string;
  };
  aboutPreview: {
    tag: string;
    headline: string;
    title: string;
    description: string;
    cta: string;
    stat1Label: string;
    stat1Val: string;
    stat2Label: string;
    stat2Val: string;
    stat3Label: string;
    stat3Val: string;
  };
  shop: {
    title: string;
    subtitle: string;
    addToCart: string;
    viewProduct: string;
    currency: string;
  };
  membership: {
    tag: string;
    title: string;
    subtitle: string;
    points: string;
    benefits: string;
    joinNow: string;
  };
  offers: {
    tag: string;
    title: string;
    subtitle: string;
    save: string;
    viewDetails: string;
  };
  testimonials: {
    tag: string;
    title: string;
  };
  blog: {
    tag: string;
    title: string;
    readTime: string;
    readArticle: string;
  };
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    subscribe: string;
    success: string;
  };
  footer: {
    aboutText: string;
    quickLinks: string;
    services: string;
    contactUs: string;
    hours: string;
    hoursVal: string;
    address: string;
    phone: string;
    rights: string;
  };
  bookingModal: {
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    selectService: string;
    selectDate: string;
    selectTime: string;
    yourDetails: string;
    name: string;
    phone: string;
    email: string;
    notes: string;
    confirmBooking: string;
    successTitle: string;
    successDesc: string;
    close: string;
  };
  cart: {
    title: string;
    empty: string;
    subtotal: string;
    checkout: string;
    remove: string;
  };
}

export const dictionaries: Record<Language, Dictionary> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      shop: 'Boutique',
      offers: 'Packages & Offers',
      membership: 'Membership',
      blog: 'Journal',
      contact: 'Contact',
      bookNow: 'Book Treatment',
      cart: 'Cart',
      search: 'Search',
    },
    hero: {
      badge: 'Exclusive Luxury Sanctuary',
      title: 'Renew, Experience & Restore Your Harmony',
      subtitle: 'Immerse yourself in an unparalleled wellness journey where expert care meets genuine warmth and quiet luxury.',
      exploreServices: 'Explore Services',
      bookNow: 'Book Treatment',
    },
    intro: {
      tag: 'Sanctuary of Tranquility',
      headline: 'Beauty Begins From Within',
      text: 'Loyalty Spa is a serene wellness destination created to separate you from the noise of the world and reconnect you with your true self through holistic care, natural oils, and master therapists.',
    },
    services: {
      title: 'Signature Treatments',
      subtitle: 'Curated experiences designed to restore balance, soothe muscles, and revive radiant skin.',
      viewAll: 'View All Treatments',
      duration: 'mins',
      from: 'starting from',
      currency: 'SAR',
      bookService: 'Book Session',
    },
    aboutPreview: {
      tag: 'Our Philosophy',
      headline: 'The Craft of Quiet Luxury',
      title: 'Crafted for Restorative Wellness',
      description: 'We believe in the transformative power of touch, organic botanicals, and unhurried calm. Every treatment room is a private sanctuary tailored to your personal wellbeing.',
      cta: 'Discover Our Story',
      stat1Label: 'Years of Excellence',
      stat1Val: '10+',
      stat2Label: 'Master Therapists',
      stat2Val: '15+',
      stat3Label: 'Organic Botanicals',
      stat3Val: '100%',
    },
    shop: {
      title: 'The Beauty Boutique',
      subtitle: 'Pure, organic skin and body care formulations handcrafted to extend your spa experience home.',
      addToCart: 'Add to Cart',
      viewProduct: 'View Details',
      currency: 'SAR',
    },
    membership: {
      tag: 'Exclusive Circle',
      title: 'Loyalty Membership Program',
      subtitle: 'Earn rewards with every sanctuary visit and unlock bespoke privileges, birthday gifts, and priority bookings.',
      points: 'Points',
      benefits: 'Member Privileges',
      joinNow: 'Join Loyalty Circle',
    },
    offers: {
      tag: 'Curated Packages',
      title: 'Special Offers & Spa Bundles',
      subtitle: 'Immerse yourself in complete multi-session relaxation packages designed for maximum renewal.',
      save: 'Save',
      viewDetails: 'Reserve Package',
    },
    testimonials: {
      tag: 'Guest Reflections',
      title: 'Words of Renewal',
    },
    blog: {
      tag: 'Wellness Journal',
      title: 'Insights on Skincare & Self-Care',
      readTime: 'min read',
      readArticle: 'Read Journal Entry',
    },
    newsletter: {
      title: 'Join Our Sanctuary Journal',
      subtitle: 'Receive private invitations, wellness insights, and seasonal beauty rituals.',
      placeholder: 'Enter your email address',
      subscribe: 'Subscribe',
      success: 'Thank you for joining our private circle.',
    },
    footer: {
      aboutText: 'Loyalty Spa is Saudi Arabia’s premier luxury wellness destination, delivering serene treatments and organic beauty care.',
      quickLinks: 'Navigation',
      services: 'Treatments',
      contactUs: 'Sanctuary Location',
      hours: 'Working Hours',
      hoursVal: '10:00 AM – 10:00 PM (Daily)',
      address: 'Loyalty Spa, Premium District, Saudi Arabia',
      phone: '+966 50 662 2900',
      rights: 'All rights reserved. Loyalty Spa.',
    },
    bookingModal: {
      title: 'Book Your Spa Session',
      subtitle: 'Select your desired treatment, therapist preference, and time.',
      step1: '1. Treatment',
      step2: '2. Date & Time',
      step3: '3. Guest Details',
      step4: '4. Confirmation',
      selectService: 'Select Treatment',
      selectDate: 'Preferred Date',
      selectTime: 'Preferred Time Slot',
      yourDetails: 'Guest Details',
      name: 'Full Name',
      phone: 'Phone / WhatsApp Number',
      email: 'Email Address',
      notes: 'Special Requests or Health Notes',
      confirmBooking: 'Confirm Appointment',
      successTitle: 'Appointment Confirmed',
      successDesc: 'We look forward to welcoming you to Loyalty Spa. A confirmation has been sent to your phone.',
      close: 'Return to Sanctuary',
    },
    cart: {
      title: 'Your Shopping Bag',
      empty: 'Your shopping bag is currently empty.',
      subtotal: 'Subtotal',
      checkout: 'Proceed to Checkout',
      remove: 'Remove',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن السبا',
      services: 'الخدمات',
      shop: 'المتجر الفاخر',
      offers: 'الباقات والعروض',
      membership: 'برنامج الولاء',
      blog: 'المدونة',
      contact: 'تواصل معنا',
      bookNow: 'احجزي موعدك',
      cart: 'السلة',
      search: 'بحث',
    },
    hero: {
      badge: 'ملاذ الفخامة والاستجمام',
      title: 'جددي حياتكِ واكتشفي قمة الرفاهية',
      subtitle: 'انغمسي في تجربة عافية استثنائية يندمج فيها الاهتمام المحترف مع الهدوء العميق والأجواء المريحة.',
      exploreServices: 'استكشفي الخدمات',
      bookNow: 'احجزي الآن',
    },
    intro: {
      tag: 'واحة السلام والهدوء',
      headline: 'جمال يبدأ من الداخل',
      text: 'سبا الولاء هو وجهتكِ الفاخرة للاسترخاء والعناية الشاملة في المملكة. صُمم ملاذنا ليفصلكِ عن ضجيج العالم ويُعيد اتصالكِ بذاتكِ من خلال علاجات طبيعية وأيدٍ خبيرة.',
    },
    services: {
      title: 'علاجاتنا المميزة',
      subtitle: 'جلسات مُختارة بعناية لاستعادة توازن الجسم والروح وتجديد نضارة البشرة.',
      viewAll: 'عرض جميع الخدمات',
      duration: 'دقيقة',
      from: 'يبدأ من',
      currency: 'ر.س',
      bookService: 'احجزي الجلسة',
    },
    aboutPreview: {
      tag: 'فلسفتنا',
      headline: 'فخامة تنبع من الهدوء',
      title: 'مُصمم خصيصاً لراحة لا تُنسى',
      description: 'نؤمن بالقوة التحويلية للمس الطبيعي والزيوت العضوية والأجواء الهادئة. كل غرفة علاج هي ملاذ خاص يضمن لكِ أقصى درجات الاستجمام.',
      cta: 'تعرفي على قصتنا',
      stat1Label: 'سنوات من الخبرة',
      stat1Val: '+١٠',
      stat2Label: 'معالجات خبيرات',
      stat2Val: '+١٥',
      stat3Label: 'منتجات عضوية',
      stat3Val: '١٠٠٪',
    },
    shop: {
      title: 'متجر العناية الفاخر',
      subtitle: 'مستحضرات طبيعية وعضوية مُصنعة بعناية لتستكملي تجربتكِ الفاخرة في المنزل.',
      addToCart: 'إضافة للسلة',
      viewProduct: 'تفاصيل المنتج',
      currency: 'ر.س',
    },
    membership: {
      tag: 'مجتمعنا الخاص',
      title: 'برنامج الولاء الملكي',
      subtitle: 'اجمعي النقاط مع كل زيارة واحصلي على مزايا حصرية، خصومات مميزة، وهدايا عيد الميلاد.',
      points: 'نقطة',
      benefits: 'مزايا العضوية',
      joinNow: 'انضمي لبرنامج الولاء',
    },
    offers: {
      tag: 'باقات متكاملة',
      title: 'العروض والباقات الخاصة',
      subtitle: 'دليل كامل لباقات التدليل الشاملة التي تمنحكِ أقصى درجات الراحة والتوفير.',
      save: 'توفير',
      viewDetails: 'حجز الباقة',
    },
    testimonials: {
      tag: 'آراء العميلات',
      title: 'قصص الاستجمام والراحة',
    },
    blog: {
      tag: 'مدونة العافية',
      title: 'مقالات ونصائح العناية والبشرة',
      readTime: 'دقائق قراءة',
      readArticle: 'اقرأي المقال',
    },
    newsletter: {
      title: 'اشتركي في النشرة الخاصة',
      subtitle: 'احصلي على دعوات خاصة ونصائح العناية وأحدث العروض الحصرية.',
      placeholder: 'أدخلي بريدك الإلكتروني',
      subscribe: 'اشتراك',
      success: 'شكراً لانضمامكِ لنشرتنا الفاخرة.',
    },
    footer: {
      aboutText: 'سبا الولاء هو الملاذ الأول للرفاهية والعافية الشاملة في المملكة العربية السعودية.',
      quickLinks: 'روابط السريعة',
      services: 'الخدمات',
      contactUs: 'موقع السبا',
      hours: 'أوقات العمل',
      hoursVal: '١٠:٠٠ صباحاً – ١٠:٠٠ مساءً (يومياً)',
      address: 'سبا الولاء، الحي الراقي، المملكة العربية السعودية',
      phone: '9600 662 50 966+',
      rights: 'جميع الحقوق محفوظة. سبا الولاء 2026.',
    },
    bookingModal: {
      title: 'احجزي موعدكِ في السبا',
      subtitle: 'اختاري الخدمة المناسبة والوقت المفضّل لديكِ.',
      step1: '١. الخدمة',
      step2: '٢. التاريخ والوقت',
      step3: '٣. تفاصيل الحجز',
      step4: '٤. التأكيد',
      selectService: 'اختاري الخدمة',
      selectDate: 'التاريخ المفضّل',
      selectTime: 'الوقت المتاح',
      yourDetails: 'بياناتكِ الشخصية',
      name: 'الاسم الكامل',
      phone: 'رقم الجوال / الواتساب',
      email: 'البريد الإلكتروني',
      notes: 'ملاحظات خاصة',
      confirmBooking: 'تأكيد الحجز',
      successTitle: 'تم تأكيد موعدكِ بنجاح',
      successDesc: 'نتطلع لاستقبالكِ في سبا الولاء. تم إرسال تفاصيل الحجز إلى هاتفكِ.',
      close: 'العودة للرئيسية',
    },
    cart: {
      title: 'سلة المشتريات',
      empty: 'سلة المشتريات فارغة حالياً.',
      subtotal: 'المجموع الكلي',
      checkout: 'متابعة الدفع',
      remove: 'حذف',
    },
  },
};
