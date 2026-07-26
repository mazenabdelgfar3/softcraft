export interface Category {
  id: string;
  name: string;
  subtitle: string;
  startingPrice: string;
  image: string;
  buttonText: string;
  count: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  images: string[];
  description: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  discountBadge?: string;
  sizes?: { name: string; price: number }[];
  ribbonColors?: { name: string; hex: string }[];
  inStock: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "small",
    name: "🌸 بوكيهات صغيرة",
    subtitle: "مناسبة للهدايا اللطيفة والمفاجآت",
    startingPrice: "بتبدأ من 150",
    image: "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251431.jpeg",
    buttonText: "تصفحي الكل",
    count: 12,
  },
  {
    id: "medium",
    name: "💐 بوكيهات متوسطة",
    subtitle: "التوازن المثالي بين الأناقة والفخامة",
    startingPrice: "بتبدأ من 250",
    image: "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251429.jpeg",
    buttonText: "تصفحي الكل",
    count: 18,
  },
  {
    id: "large",
    name: "👑 بوكيهات كبيرة",
    subtitle: "للمناسبات السعيدة واللحظات الخاصة جداً",
    startingPrice: "بتبدأ من 400",
    image: "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251434.jpeg",
    buttonText: "تصفحي الكل",
    count: 15,
  },
  {
    id: "custom",
    name: "✨ بوكيهات تخرج ومخصصة",
    subtitle: "صممي بوكيه أحلامك بالألوان والشكل المطلوب",
    startingPrice: "حسب اختيارك",
    image: "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251425.jpeg",
    buttonText: "اطبلي الآن",
    count: 8,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "بوكيه كرافتس الكبيرة الملكي بالدبدوب الوردية (Handmade)",
    category: "large",
    price: 400,
    oldPrice: 480,
    rating: 5.0,
    reviewsCount: 48,
    discountBadge: "بوكيه كبير 👑",
    isBestSeller: true,
    image: "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251434.jpeg",
    images: [
      "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251434.jpeg",
      "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251425.jpeg",
      "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251429.jpeg",
    ],
    description: "بوكيه كبير فاخر ومصنوع يدويًا 100% من سلك القطيفة الـ Pipe Cleaners العالي الجودة، يضم ورد التوليب والروز الوردية والزهور اللؤلؤية مع دبدوب تخرج قطيفة لطيف ورسالة إهداء مخصصة. ورد ما بيدبلش ومشاعر مش بتنتهي 💖",
    sizes: [
      { name: "بوكيهات صغيرة (بتبدأ من 150)", price: 150 },
      { name: "بوكيهات متوسطة (بتبدأ من 250)", price: 250 },
      { name: "بوكيهات كبيرة (بتبدأ من 400)", price: 400 },
    ],
    ribbonColors: [
      { name: "وردي ناعم", hex: "#E8A0BF" },
      { name: "أبيض لؤلؤي", hex: "#FFFFFF" },
    ],
    inStock: true,
  },
  {
    id: "p2",
    name: "بوكيه التخرج والدمية الوردية الكرافت",
    category: "custom",
    price: 350,
    oldPrice: 400,
    rating: 4.9,
    reviewsCount: 36,
    discountBadge: "هدية تخرج 🎓",
    isBestSeller: true,
    image: "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251425.jpeg",
    images: [
      "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251425.jpeg",
      "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251434.jpeg",
    ],
    description: "بوكيه تخرج هاند ميد خاص ومميز جداً يشمل وردة توليب قطيفة ودبدوب تخرج قطيفة لطيف مع كارت تخرج خاص ومغلف بتغليف كرافت أنيق.",
    sizes: [
      { name: "حجم قياسي", price: 350 },
      { name: "حجم جامبو", price: 480 },
    ],
    ribbonColors: [
      { name: "وردي ناعم", hex: "#E8A0BF" },
      { name: "أبيض لؤلؤي", hex: "#FFFFFF" },
    ],
    inStock: true,
  },
  {
    id: "p3",
    name: "بوكيه الورد العنابي الفاخر (Flowers Art)",
    category: "medium",
    price: 250,
    oldPrice: 290,
    rating: 4.9,
    reviewsCount: 39,
    discountBadge: "الأكثر طلباً 🔥",
    isBestSeller: true,
    image: "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251429.jpeg",
    images: [
      "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251429.jpeg",
      "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251423.jpeg",
    ],
    description: "بوكيه متوسط راقٍ جداً بتغليف عنابي لامع وشريط ستان، هديتك متميزة 100% مع كارت إهداء كرافت شيك.",
    sizes: [
      { name: "بوكيه صغير (150)", price: 150 },
      { name: "بوكيه متوسط (250)", price: 250 },
    ],
    ribbonColors: [
      { name: "عنابي شيك", hex: "#800020" },
      { name: "وردي سوفت", hex: "#E8A0BF" },
    ],
    inStock: true,
  },
  {
    id: "p4",
    name: "بوكيه التوليب الأزرق والسماوي الناعم (Bloom)",
    category: "medium",
    price: 250,
    oldPrice: 290,
    rating: 4.9,
    reviewsCount: 32,
    discountBadge: "تصميم حصري ✨",
    isBestSeller: true,
    image: "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251423.jpeg",
    images: [
      "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251423.jpeg",
    ],
    description: "تنسيق مبهج بلون السماء يجمع بين التوليب والزهور اللؤلؤية مع كارت كرافت بلوم Bloom where you are planted.",
    sizes: [
      { name: "بوكيه صغير", price: 150 },
      { name: "بوكيه متوسط", price: 250 },
    ],
    ribbonColors: [
      { name: "أبيض ناعم", hex: "#FFFFFF" },
      { name: "سماوي رقيق", hex: "#87CEEB" },
    ],
    inStock: true,
  },
  {
    id: "p5",
    name: "بوكيه التوليب الوردي المزدوج",
    category: "small",
    price: 150,
    oldPrice: 180,
    rating: 5.0,
    reviewsCount: 45,
    discountBadge: "بتبدأ من 150 💖",
    isNew: true,
    image: "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251431.jpeg",
    images: [
      "/WhatsApp_Image_2026-07-25_at_12.03.07_202607251431.jpeg",
    ],
    description: "بوكيه ورد التوليب الوردي الناعم، رقيق جداً ومصنوع بحب ليدوم للأبد دون أن يذبل.",
    sizes: [
      { name: "بوكيه صغير (150)", price: 150 },
      { name: "بوكيه متوسط (250)", price: 250 },
    ],
    inStock: true,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "❓ البوكيه ده طبيعي ولا هاند ميد؟",
    answer: "كل البوكيهات عندنا هاند ميد 100%، مصنوعة من سلك القطيفة Pipe Cleaners عالية الجودة بخامات ممتازة.",
  },
  {
    question: "❓ البوكيه بيفضل قد إيه؟",
    answer: "على عكس الورد الطبيعي، بوكيهات سلك القطيفة (Forever Bloom) بتفضل بنفس شكلها وألوانها لسنين جاية من غير ما تذبل أو تتأثر!",
  },
  {
    question: "❓ الأسعار بتبدأ من كام؟",
    answer: "الأسعار متفاوتة ومناسبة للجميع:\n• 🌸 بوكيهات صغيرة: بتبدأ من 150 جنيه\n• 💐 بوكيهات متوسطة: بتبدأ من 250 جنيه\n• 👑 بوكيهات كبيرة: بتبدأ من 400 جنيه\n• ✨ وفيه تصميمات مخصصة حسب طلبك.",
  },
  {
    question: "❓ أقدر أطلب بوكيه بتصميم خاص؟",
    answer: "أكيد، كل وردة وكل ورقة شجر مصنوعة بإيدين محترفة وباهتمام كامل بأدق التفاصيل، ونقدر ننفذ لك أي تصميم بالألوان والشكل المطلوب.",
  },
  {
    question: "❓ ينفع أضيف اسم أو رسالة؟",
    answer: "أيوه، تقدر تضيف اسم، رسالة، أو كارت إهداء مجاني مع الطلب لتكون هديتك متميزة 100%.",
  },
  {
    question: "❓ التوصيل متاح؟",
    answer: "أيوه، بنوفر التوصيل لجميع المحافظات والمناطق، وتكلفة الشحن بتظهر لك قبل تأكيد الطلب.",
  },
  {
    question: "❓ الطلب بياخد وقت قد إيه؟",
    answer: "مدة التنفيذ بتختلف حسب حجم البوكيه والتصميم، وبتظهر لك المدة المتوقعة قبل إتمام الطلب.",
  },
  {
    question: "❓ هل الصور هي نفس المنتج اللي هيوصل؟",
    answer: "أيوه، الصور بتعرض شغلنا الحقيقي 100%، وبما إن كل قطعة هاند ميد فكل قطعة بتكون متميزة ومصنوعة لك خصيصاً.",
  },
  {
    question: "❓ إزاي أطلب؟",
    answer: "اختار البوكيه، ضيفه للسلة، اكتب بياناتك، وكمل الطلب، وإحنا هنتواصل معاك لتأكيده فوراً.",
  },
  {
    question: "❓ ينفع أطلب هدية لمناسبة معينة؟",
    answer: "أكيد، عندنا بوكيهات مخصصة لـ: 🎓 التخرج | 🎂 عيد الميلاد | ❤️ الخطوبة | 💍 الزفاف | 🌷 عيد الأم | 🎁 أي مناسبة خاصة.",
  },
  {
    question: "❓ لو عندي استفسار؟",
    answer: "تقدر تتواصل معانا في أي وقت من خلال الواتساب (01065081331) أو صفحات السوشيال ميديا وهنرد عليك في أسرع وقت.",
  },
];

export const REVIEWS = [
  {
    id: "r1",
    name: "سارة أحمد",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    date: "منذ يومين",
    comment: "البوكيه طلع أجمل من الصور بمراحل! التغليف رائع والدقة في تفاصيل سلك القطيفة مبهرة جداً. شكراً سوفتي كرافتس ❤️",
  },
  {
    id: "r2",
    name: "مريم محمود",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    date: "منذ أسبوع",
    comment: "طلبت بوكيه التخرج لصديقتي وانبهرت بيه! خامة القطيفة ممتازة وسرعة التوصيل والرقي في التعامل 10/10.",
  },
  {
    id: "r3",
    name: "نورهان حاتم",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    date: "منذ 3 أيام",
    comment: "أجمل هدية ممكن تتقدم. الورد شكله رقيق وخامته تعيش للأبد من غير ما تذبل ✨",
  },
];
