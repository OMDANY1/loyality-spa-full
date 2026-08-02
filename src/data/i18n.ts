export type Language = 'en' | 'ar';

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    addOns: string;
    offers: string;
    membership: string;
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
      about: 'About Us',
      services: 'Services',
      addOns: 'Luxury Add-ons',
      offers: 'Packages & Offers',
      membership: 'Membership',
      contact: 'Contact',
      gift: 'Gift',
      bookNow: 'Book Home Session',
      cart: 'Bag',
      search: 'Search',
    },
    hero: {
      badge: 'Exclusive Luxury Home Spa Service',
      title: 'Renew, Experience & Restore Your Harmony',
      subtitle: 'Immerse yourself in an unparalleled home spa experience delivered directly to your doorstep, turning your private space into a personal sanctuary of quiet luxury.',
      exploreServices: 'Explore Home Services',
      bookNow: 'Book Home Session',
    },
    intro: {
      tag: 'Luxury Home Wellness',
      headline: 'Beauty Begins From Within',
      text: 'Loyalty Spa brings an elevated luxury spa experience directly to the comfort of your home. Certified master therapists arrive equipped with premium portable beds, luxury linens, and cold-pressed organic oils for complete privacy.',
    },
    services: {
      title: 'Signature Home Treatments',
      subtitle: 'Curated home spa sessions designed to restore balance, soothe muscles, and revive radiant skin in private comfort.',
      viewAll: 'View All Home Treatments',
      duration: 'mins',
      from: 'starting from',
      currency: 'SAR',
      bookService: 'Book Home Session',
    },
    aboutPreview: {
      tag: 'Our Philosophy',
      headline: 'The Craft of Quiet Luxury',
      title: 'Crafted for Private Home Renewal',
      description: 'We believe true luxury is experiencing complete serenity without leaving your home. Our master therapists transform your personal space into an opulent wellness haven with meticulous care.',
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
      title: 'Luxury Home Add-ons',
      subtitle: 'Elevate your home massage session with specialized holistic rituals designed to amplify relaxation and deep restoration.',
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
      subtitle: 'Earn points with every home session and unlock priority VIP scheduling, preferred therapist requests, and seasonal privileges.',
      points: 'Points',
      benefits: 'Member Privileges',
      joinNow: 'Join Loyalty Circle',
    },
    offers: {
      tag: 'Curated Packages',
      title: 'Special Offers & Home Bundles',
      subtitle: 'Immerse yourself in complete multi-session relaxation packages delivered directly to your home for maximum renewal.',
      save: 'Save',
      viewDetails: 'Reserve Package',
    },
    testimonials: {
      tag: 'Guest Reflections',
      title: 'Words of Renewal',
    },
    newsletter: {
      title: 'Join Loyalty Spa Circle',
      subtitle: 'Receive private invitations, home wellness insights, and seasonal beauty rituals.',
      placeholder: 'Enter your email address',
      subscribe: 'Subscribe',
      success: 'Thank you for joining our private circle.',
    },
    footer: {
      aboutText: 'Loyalty Spa is Saudi Arabia’s premier luxury home spa service, delivering bespoke therapeutic rituals directly to your home.',
      quickLinks: 'Navigation',
      services: 'Home Treatments',
      contactUs: 'Home Spa Concierge',
      hours: 'Service Hours',
      hoursVal: '10:00 AM – 12:00 AM (Daily)',
      address: 'Loyalty Spa Home Service, Riyadh, Saudi Arabia',
      phone: '+966 50 662 2900',
      rights: 'All rights reserved. Loyalty Spa 2026.',
    },
    bookingModal: {
      title: 'Schedule Your Luxury Home Session',
      subtitle: 'Select your treatment, duration, and add-ons. Our certified therapist will arrive at your home fully equipped.',
      step1: '1. Treatment',
      step2: '2. Duration',
      step3: '3. Add-ons',
      step4: '4. Schedule & Confirm',
      step5: '5. Summary',
      selectService: 'Select Your Primary Home Treatment',
      selectDuration: 'Choose Session Duration',
      selectAddons: 'Select Luxury Add-ons (Optional)',
      selectAddonsDesc: 'Special pricing: 1 Add-on for 30 SAR / 2 Add-ons for 50 SAR',
      selectDate: 'Preferred Home Visit Date',
      selectTime: 'Therapist Arrival Time Slot',
      yourDetails: 'Guest & Address Information',
      name: 'Full Name',
      phone: 'Phone / WhatsApp Number',
      email: 'Email Address',
      notes: 'Home Address Details or Special Requests',
      confirmBooking: 'Reserve Home Spa Ritual',
      successTitle: 'Your Home Session is Reserved',
      successDesc: 'We look forward to delivering your luxury spa ritual. Our concierge team will confirm your home address details shortly.',
      close: 'Return to Home',
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
      about: 'عن Loyalty Spa',
      services: 'الخدمات',
      addOns: 'الإضافات الفاخرة',
      offers: 'الباقات والعروض',
      membership: 'برنامج الولاء',
      contact: 'تواصل معنا',
      gift: 'الإهداء',
      bookNow: 'احجزي جلستكِ المنزلية',
      cart: 'السلة',
      search: 'بحث',
    },
    hero: {
      badge: 'خدمة السبا المنزلي الفاخرة المعتمدة',
      title: 'جددي حياتكِ واكتشفي قمة الرفاهية في منزلكِ',
      subtitle: 'انغمسي في تجربة عافية استثنائية تصل مباشرة إلى باب منزلكِ، حيث تحول معالجاتنا الخبيرات مساحتكِ الخاصة إلى ملاذ ملكي للاسترخاء.',
      exploreServices: 'استكشفي الخدمات المنزلية',
      bookNow: 'احجزي جلستكِ المنزلية',
    },
    intro: {
      tag: 'خدمة السبا المنزلي الفاخرة',
      headline: 'جمال يبدأ من الداخل في راحة منزلكِ',
      text: 'سبا الولاء هو وجهتكِ الفاخرة للاسترخاء والعناية الشاملة في راحة منزلكِ. تصلكِ معالجاتنا المحترفات مع كامل التجهيزات الفاخرة والزيوت العضوية لتقديم جلسات تدليك وعناية ملكية تضمن لكِ الخصوصية التامة.',
    },
    services: {
      title: 'علاجاتنا المنزلية المميزة',
      subtitle: 'جلسات استرخائية منزلية مُختارة بعناية لاستعادة توازن الجسم والروح وتجديد نضارة البشرة في خصوصية تامة.',
      viewAll: 'عرض جميع الخدمات المنزلية',
      duration: 'دقيقة',
      from: 'يبدأ من',
      currency: 'ر.س',
      bookService: 'احجزي الجلسة المنزلية',
    },
    aboutPreview: {
      tag: 'فلسفتنا',
      headline: 'فخامة تنبع من الهدوء والراحة',
      title: 'عناية ملكية في راحة منزلكِ',
      description: 'نؤمن بأن أقصى درجات الفخامة هي الاستمتاع بالهدوء التام دون الحاجة لمغادرة منزلكِ. تقوم معالجاتنا الخبيرات بتجهيز موقع الجلسة داخل منزلكِ بكامل التفاصيل الفاخرة.',
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
      title: 'الإضافات الفاخرة للجلسات المنزلية',
      subtitle: 'ارتقي بمستوى جلسة المساج المنزلية الخاصة بكِ مع خدمات استرخائية متخصصة صُممت لزيادة التوازن والراحة.',
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
      subtitle: 'اجمعي النقاط مع كل جلسة منزلية واحصلي على مزايا حصرية، أولوية المواعيد، وطلب معالجة مفضلة.',
      points: 'نقطة',
      benefits: 'مزايا العضوية',
      joinNow: 'انضمي لبرنامج الولاء',
    },
    offers: {
      tag: 'باقات متكاملة',
      title: 'العروض والباقات المنزلية الخاصة',
      subtitle: 'دليل كامل لباقات التدليل الشاملة المنفذة في منزلكِ والتي تمنحكِ أقصى درجات الراحة والتوفير.',
      save: 'توفير',
      viewDetails: 'حجز الباقة',
    },
    testimonials: {
      tag: 'آراء العميلات',
      title: 'قصص الاستجمام والراحة المنزلية',
    },
    newsletter: {
      title: 'اشتركي في مجتمع Loyalty Spa',
      subtitle: 'احصلي على دعوات خاصة ونصائح العناية المنزلية وأحدث العروض الحصرية.',
      placeholder: 'أدخلي بريدك الإلكتروني',
      subscribe: 'اشتراك',
      success: 'شكراً لانضمامكِ لنشرتنا الفاخرة.',
    },
    footer: {
      aboutText: 'سبا الولاء هو الرمز الأول لخدمات السبا والاستجمام المنزلي الفاخر في المملكة العربية السعودية، بنقل تجربة العافية والجمال مباشرة إلى منزلكِ.',
      quickLinks: 'الروابط السريعة',
      services: 'الخدمات المنزلية',
      contactUs: 'خدمة العملاء والحجز المنزلي',
      hours: 'أوقات التقديم والخدمة',
      hoursVal: '١٠:٠٠ صباحاً – ١٢:٠٠ منتصف الليل (يومياً)',
      address: 'خدمة السبا المنزلي - الرياض، المملكة العربية السعودية',
      phone: '+966 50 662 2900',
      rights: 'جميع الحقوق محفوظة. سبا الولاء 2026.',
    },
    bookingModal: {
      title: 'احجزي جلستكِ المنزلية الفاخرة',
      subtitle: 'اختر الخدمة، مدة الجلسة، والإضافات الفاخرة ليصِلكِ فريقنا المحترف في الوقت المناسب.',
      step1: '١. الجلسة الرئيسية',
      step2: '٢. المدة الزمنية',
      step3: '٣. الإضافات الفاخرة',
      step4: '٤. الموعد والتأكيد',
      step5: '٥. ملخص الحجز',
      selectService: 'اختاري الجلسة العلاجية الرئيسية المنزلية',
      selectDuration: 'اختاري مدة الجلسة',
      selectAddons: 'اختاري الإضافات الفاخرة (اختياري)',
      selectAddonsDesc: 'عرض خاص: إضافة واحدة بـ ٣٠ ر.س / إضافتان بـ ٥٠ ر.س',
      selectDate: 'تاريخ الجلسة المنزلية',
      selectTime: 'وقت وصول المعالجة',
      yourDetails: 'بيانات العميلة وعنوان المنزل',
      name: 'الاسم الكامل',
      phone: 'رقم الجوال / الواتساب',
      email: 'البريد الإلكتروني',
      notes: 'تفاصيل العنوان أو ملاحظات خاصة للمعالجة',
      confirmBooking: 'تأكيد الحجز المنزلي',
      successTitle: 'تم تأكيد موعد جلستكِ المنزلية',
      successDesc: 'نتطلع لخدمتكِ في منزلكِ. تم إعداد ملخص الحجز وسيتواصل معكِ فريق خدمة العملاء لتأكيد تفاصيل العنوان.',
      close: 'العودة للرئيسية',
    },
    cart: {
      title: 'الجلسات المنزلية المختارة',
      empty: 'اختياركِ فارغ حالياً.',
      subtotal: 'المجموع الفرعي',
      checkout: 'متابعة تأكيد الحجز',
      remove: 'حذف',
    },
  },
};
