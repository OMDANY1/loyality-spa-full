export type Language = 'en' | 'ar';

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    addOns: string;
    offers: string;
    membership: string;
    blog: string;
    contact: string;
    gift: string;
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
  addOns: {
    tag: string;
    title: string;
    subtitle: string;
    bundleNotice: string;
    bundleDesc: string;
    singlePrice: string;
    bundlePrice: string;
    addToExperience: string;
    benefitsTitle: string;
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
    step5: string;
    selectService: string;
    selectDuration: string;
    selectAddons: string;
    selectAddonsDesc: string;
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
      addOns: 'Luxury Add-ons',
      offers: 'Packages & Offers',
      membership: 'Membership',
      blog: 'Journal',
      contact: 'Contact',
      gift: 'Gift',
      bookNow: 'Book Experience',
      cart: 'Bag',
      search: 'Search',
    },
    hero: {
      badge: 'Exclusive Sanctuary & Wellness Destination',
      title: 'Renew, Experience & Restore Your Harmony',
      subtitle: 'Immerse yourself in an unparalleled wellness journey where expert care meets genuine warmth and quiet luxury.',
      exploreServices: 'Explore Services',
      bookNow: 'Book Ritual',
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
    addOns: {
      tag: 'Ritual Enhancements',
      title: 'Luxury Spa Add-ons',
      subtitle: 'Elevate your massage session with specialized holistic rituals designed to amplify relaxation and deep restoration.',
      bundleNotice: 'Exclusive Bundle Offer',
      bundleDesc: 'Select 1 Add-on for 30 SAR, or bundle 2 Add-ons for only 50 SAR during your session.',
      singlePrice: '30 SAR (Single Add-on)',
      bundlePrice: '50 SAR (Double Bundle - Save 10 SAR)',
      addToExperience: 'Add to My Experience',
      benefitsTitle: 'Key Benefits',
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
      hoursVal: '10:00 AM – 12:00 AM (Daily)',
      address: 'Loyalty Spa, Northern Ring Road, Riyadh, Saudi Arabia',
      phone: '+966 50 662 2900',
      rights: 'All rights reserved. Loyalty Spa 2026.',
    },
    bookingModal: {
      title: 'Design Your Wellness Ritual',
      subtitle: 'Customize your session duration, luxury add-ons, and preferred sanctuary timing.',
      step1: '1. Experience',
      step2: '2. Duration',
      step3: '3. Add-ons',
      step4: '4. Schedule',
      step5: '5. Ritual Summary',
      selectService: 'Select Your Primary Treatment',
      selectDuration: 'Choose Treatment Duration',
      selectAddons: 'Select Luxury Add-ons (Optional)',
      selectAddonsDesc: 'Special pricing: 1 Add-on for 30 SAR / 2 Add-ons for 50 SAR',
      selectDate: 'Preferred Date',
      selectTime: 'Preferred Time Slot',
      yourDetails: 'Guest Information',
      name: 'Full Name',
      phone: 'Phone / WhatsApp Number',
      email: 'Email Address',
      notes: 'Special Requests or Health Notes',
      confirmBooking: 'Reserve Spa Ritual',
      successTitle: 'Your Sanctuary Ritual is Reserved',
      successDesc: 'We look forward to welcoming you to Loyalty Spa. A reservation summary has been generated for your visit.',
      close: 'Return to Sanctuary',
    },
    cart: {
      title: 'Your Selected Rituals',
      empty: 'Your selection is currently empty.',
      subtotal: 'Subtotal',
      checkout: 'Proceed to Reservation',
      remove: 'Remove',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن السبا',
      services: 'الخدمات',
      addOns: 'الإضافات الفاخرة',
      offers: 'الباقات والعروض',
      membership: 'برنامج الولاء',
      blog: 'المدونة',
      contact: 'تواصل معنا',
      gift: 'الإهداء',
      bookNow: 'احجزي التجربة',
      cart: 'السلة',
      search: 'بحث',
    },
    hero: {
      badge: 'ملاذ الفخامة والاستجمام الحصري',
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
    addOns: {
      tag: 'تعزيز الجلسة العلاجية',
      title: 'الإضافات الفاخرة للجلسات',
      subtitle: 'ارتقي بمستوى جلسة المساج الخاصة بكِ مع خدمات استرخائية متخصصة صُممت لزيادة التوازن والراحة.',
      bundleNotice: 'عرض الإضافات المميز',
      bundleDesc: 'اختاري إضافة واحدة بـ ٣٠ ر.س، أو أضيفي إضافتين بـ ٥٠ ر.س فقط أثناء الجلسة.',
      singlePrice: '٣٠ ر.س (إضافة واحدة)',
      bundlePrice: '٥٠ ر.س (إضافتان - توفير ١٠ ر.س)',
      addToExperience: 'أضيفيها لتجربتك',
      benefitsTitle: 'أبرز الفوائد',
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
      readArticle: 'اقرئي المقال',
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
      quickLinks: 'الروابط السريعة',
      services: 'الخدمات',
      contactUs: 'موقع السبا',
      hours: 'أوقات العمل',
      hoursVal: '١٠:٠٠ صباحاً – ١٢:٠٠ منتصف الليل (يومياً)',
      address: 'سبا الولاء، الطريق الدائري الشمالي، الرياض، المملكة العربية السعودية',
      phone: '+966 50 662 2900',
      rights: 'جميع الحقوق محفوظة. سبا الولاء 2026.',
    },
    bookingModal: {
      title: 'صممي طقوس الاستجمام الخاصة بكِ',
      subtitle: 'حددي مدة الجلسة، الإضافات الفاخرة، والوقت المناسب لزيارتكِ.',
      step1: '١. الجلسة الرئيسية',
      step2: '٢. المدة الزمنية',
      step3: '٣. الإضافات الفاخرة',
      step4: '٤. الموعد',
      step5: '٥. ملخص الحجز',
      selectService: 'اختاري الجلسة العلاجية الرئيسية',
      selectDuration: 'اختاري مدة الجلسة',
      selectAddons: 'اختاري الإضافات الفاخرة (اختياري)',
      selectAddonsDesc: 'أسعار خاصة: إضافة واحدة بـ ٣٠ ر.س / إضافتان بـ ٥٠ ر.س',
      selectDate: 'التاريخ المفضّل',
      selectTime: 'الوقت المتاح',
      yourDetails: 'بياناتكِ الشخصية',
      name: 'الاسم الكامل',
      phone: 'رقم الجوال / الواتساب',
      email: 'البريد الإلكتروني',
      notes: 'ملاحظات خاصة',
      confirmBooking: 'تأكيد حجز الطقوس',
      successTitle: 'تم تأكيد موعدكِ بنجاح',
      successDesc: 'نتطلع لاستقبالكِ في سبا الولاء. تم إعداد ملخص الحجز الخاص بكِ.',
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
