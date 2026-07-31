export interface Product {
  id: string;
  slug: string;
  nameEn: string;
  nameAr: string;
  categoryEn: string;
  categoryAr: string;
  price: number;
  rating: number;
  image: string;
  descEn: string;
  descAr: string;
  ingredientsEn: string;
  ingredientsAr: string;
  popular?: boolean;
}

export const productsData: Product[] = [
  {
    id: 'p1',
    slug: 'botanical-massage-oil',
    nameEn: 'Nourishing Botanical Body Oil',
    nameAr: 'زيت المغنيسيوم والورد الطبيعي للجسم',
    categoryEn: 'Body Care',
    categoryAr: 'العناية بالجسم',
    price: 180,
    rating: 4.9,
    image: '/images/products.jpg',
    descEn: 'A silky blend of sweet almond, lavender, and cold-pressed rosehip oil for deep skin hydration and calm.',
    descAr: 'مزيج حريري من زيت اللوز الحلو واللافندر وزيت الورد المرطب للبشرة والأعصاب.',
    ingredientsEn: 'Prunus Amygdalus Dulcis Oil, Rosa Canina Fruit Oil, Lavandula Angustifolia Oil, Tocopherol.',
    ingredientsAr: 'زيت اللوز الحلو، زيت الورد الطبيعي، زيت اللافندر، فيتامين هـ.',
    popular: true,
  },
  {
    id: 'p2',
    slug: 'moroccan-black-soap',
    nameEn: 'Authentic Eucalyptus Black Soap',
    nameAr: 'الصابون المغربي البلدي بالكالبتوس',
    categoryEn: 'Moroccan Care',
    categoryAr: 'العناية المغربية',
    price: 120,
    rating: 4.8,
    image: '/images/products.jpg',
    descEn: 'Traditional olive-oil paste infused with organic eucalyptus essential oil for gentle exfoliation.',
    descAr: 'معجون الصابون المغربي الأصيل بزيت الزيتون والكالبتوس لتقشير وتنظيف البشرة.',
    ingredientsEn: 'Olea Europaea Fruit Oil, Eucalyptus Globulus Leaf Oil, Aqua, Potassium Hydroxide.',
    ingredientsAr: 'زيت الزيتون العضوي، زيت الكالبتوس، ماء نقي.',
    popular: true,
  },
  {
    id: 'p3',
    slug: 'radiance-facial-serum',
    nameEn: 'Hyaluronic & Rose Serum Elixir',
    nameAr: 'سيروم الهيالورونيك والورد للنضارة',
    categoryEn: 'Facial Care',
    categoryAr: 'العناية بالوجه',
    price: 240,
    rating: 5.0,
    image: '/images/products.jpg',
    descEn: 'Intensive plumping facial serum delivering multi-depth moisture and visible luminescence.',
    descAr: 'سيروم فاخر للوجه يمنح البشرة امتلاءً ونضارة فورية وترطيباً عميقاً.',
    ingredientsEn: 'Sodium Hyaluronate, Rosa Damascena Flower Water, Niacinamide, Glycerin.',
    ingredientsAr: 'هيالورونيك أسيد، ماء ورد جوري، نياسيناميد، جليسرين نباتي.',
    popular: true,
  },
  {
    id: 'p4',
    slug: 'argan-scalp-treatment',
    nameEn: 'Pure Moroccan Argan Hair Elixir',
    nameAr: 'إكسير الأرجان الخالص للشعر والفروة',
    categoryEn: 'Hair Care',
    categoryAr: 'العناية بالشعر',
    price: 195,
    rating: 4.9,
    image: '/images/products.jpg',
    descEn: '100% cold-pressed organic argan oil fortifying hair shafts and soothing scalp dryness.',
    descAr: 'زيت الأرجان المغربي الخالص 100٪ لتغذية تقصف الشعر وترطيب فروة الرأس.',
    ingredientsEn: '100% Organic Argania Spinosa Kernel Oil.',
    ingredientsAr: 'زيت أرجان مغربي عضوي معصور على البارد 100٪.',
  },
];
