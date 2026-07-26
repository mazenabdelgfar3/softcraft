"use client";

import HeroSection from "@/components/home/HeroSection";
import CategoryCards from "@/components/home/CategoryCards";
import BestSellers from "@/components/home/BestSellers";
import { REVIEWS, FAQS } from "@/data/storeData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { 
  Star, Truck, Award, Sparkles, HeartHandshake, Gift, Heart, 
  Instagram, ArrowLeft, Send, CheckCircle2, ShieldCheck, Palette, HelpCircle, ChevronDown 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whyUs = [
    {
      icon: <Award className="w-6 h-6 text-[#9E5A63]" />,
      title: "Forever Bloom (ورد ما بيدبلش)",
      desc: "نسيت تسقي الورد؟ ولا يهمك! بوكيهاتنا مصممة من خامات الـ Pipe Cleaners العالية الجودة عشان تفضل بنفس جمالها وألوانها لسنين جاية 💖",
    },
    {
      icon: <Heart className="w-6 h-6 text-[#9E5A63]" />,
      title: "Handmade with Heart (صُنِع بحب)",
      desc: "كل وردة، وكل ورقة شجر، مصنوعة بإيدين محترفة وباهتمام كامل بأدق التفاصيل. مفيش قطعتين زي بعض تماماً هديتك متميزة 100% ✨",
    },
    {
      icon: <Gift className="w-6 h-6 text-[#9E5A63]" />,
      title: "تصميم حصري وهدية لا تُنسى",
      desc: "خامات عالية الجودة وتغليف فاخر مع كارت إهداء كرافت، ورد مبيدبلش ومشاعر مش بتنتهي 🎁",
    },
    {
      icon: <Truck className="w-6 h-6 text-[#9E5A63]" />,
      title: "أسعار متفاوته تناسب الجميع",
      desc: "بوكيهات صغيرة بتبدأ من 150ج | بوكيهات متوسطة بتبدأ من 250ج | بوكيهات كبيرة بتبدأ من 400ج 🌸",
    },
  ];

  const instagramPosts = [
    "/WhatsApp Image 2026-07-25 at 12.03.07 PM (1).jpeg",
    "/WhatsApp Image 2026-07-25 at 12.03.08 PM (2).jpeg",
    "/WhatsApp Image 2026-07-25 at 12.03.09 PM (1).jpeg",
    "/WhatsApp Image 2026-07-25 at 12.03.07 PM (2).jpeg",
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="space-y-10 md:space-y-16">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 1.5 Animated Bouquet Carousel Banner */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto overflow-hidden">
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE7F0] text-[#BE185D] text-xs font-extrabold border border-[#FBCFE8] shadow-xs">
            🎀 تشكيلة بوكيهات Softy Crafts الجديدة
          </span>
        </div>

        <div className="relative rounded-[2.5rem] bg-white border-2 border-[#FBCFE8] p-4 shadow-xl overflow-hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
            {[
              { img: "/banner/banner1.jpg", title: "بوكيه تخرج وردي 💖" },
              { img: "/banner/banner2.jpg", title: "بوكيه تخرج أسود وعنابي 🎓" },
              { img: "/banner/banner3.jpg", title: "بوكيه الورد العنابي باللؤلؤ 👑" },
              { img: "/banner/banner4.jpg", title: "بوكيه وردي رقيق هاند ميد 🌸" },
              { img: "/banner/banner5.jpg", title: "بوكيه دانتيل بالدبدوب 🎀" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="w-72 shrink-0 snap-center relative rounded-2xl overflow-hidden shadow-md group"
              >
                <div className="relative h-80 w-full">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-all duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 left-4 text-white text-right">
                  <span className="text-xs font-black bg-[#EC4899]/80 backdrop-blur-md px-3 py-1 rounded-full text-white inline-block">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CategoryCards />

      {/* 3. Promotional Banner Section */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-r from-[#9E5A63] to-[#C57B85] text-white p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl z-10 text-center md:text-right">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full mb-3">
              عرض لفترة محدودة 🎁
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-snug">
              خصم 15% على جميع البوكيهات الكبيرة!
            </h3>
            <p className="text-sm md:text-base text-white/90 mb-6 font-medium">
              استخدمي الكود <span className="font-mono bg-white/20 px-2 py-0.5 rounded font-bold">SOFTY15</span> عند إتمام الطلب واحصلي على تغليف هدايا مجاني.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 py-3.5 px-8 bg-white text-[#9E5A63] hover:bg-[#FDF7F2] font-extrabold text-sm rounded-full shadow-lg transition-all transform hover:scale-105"
            >
              <span>تسوقي العروض الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shrink-0 shadow-lg border-2 border-white/30">
            <Image
              src="/WhatsApp Image 2026-07-25 at 12.03.08 PM (2).jpeg"
              alt="Promo Bouquet"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. Best Sellers Section */}
      <BestSellers />

      {/* 5. Customize Bouquet Section */}
      <section id="custom-bouquet" className="px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="rounded-[2.5rem] bg-[#F9EFE7] dark:bg-[#251D20] p-8 md:p-14 border border-[#E4B1B8]/40 dark:border-[#382A2D] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-sm">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-square rounded-[2rem] overflow-hidden bg-white dark:bg-[#181214] p-3 shadow-lg">
              <Image
                src="/WhatsApp Image 2026-07-25 at 12.03.07 PM (2).jpeg"
                alt="Custom Bouquet Design"
                fill
                className="object-cover rounded-[1.5rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 left-4 bg-white/95 dark:bg-[#251D20]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#F3E5DC] text-center">
                <span className="text-xs font-bold text-[#9E5A63]">اختيار الألوان، الأعداد، والتغليف 💕</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col text-center lg:text-right">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9E5A63]/15 text-[#9E5A63] dark:text-[#E8A0BF] text-xs font-bold mb-4 w-fit mx-auto lg:mx-0">
              <Palette className="w-4 h-4" />
              <span>خدمة التصميم الخاص 🎨</span>
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-[#4A3337] dark:text-[#F7EFE9] mb-4 leading-snug">
              صممي بوكيهك الخاص بلمستك الفريدة!
            </h2>

            <p className="text-sm md:text-base text-[#8E7276] dark:text-[#BFA9AC] mb-6 leading-relaxed">
              عندك فكرة معينة أو درجات ألوان محددة للمناسبة؟ اختاري ورد القطيفة بالفكرة والألوان التي تحبينها ونحن ننفذها لك بكل إتقان ومحبة.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs font-bold text-[#4A3337] dark:text-[#F7EFE9]">
              <div className="flex items-center gap-2 bg-white/80 dark:bg-[#181214]/80 p-3 rounded-xl border border-[#F3E5DC]">
                <CheckCircle2 className="w-4 h-4 text-[#9E5A63]" />
                <span>حرية اختيار ألوان الورد والربطات</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-[#181214]/80 p-3 rounded-xl border border-[#F3E5DC]">
                <CheckCircle2 className="w-4 h-4 text-[#9E5A63]" />
                <span>تحديد عدد الورود والتنسيق بالضبط</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-[#181214]/80 p-3 rounded-xl border border-[#F3E5DC]">
                <CheckCircle2 className="w-4 h-4 text-[#9E5A63]" />
                <span>إضافة اكسسوارات أو لؤلؤ مخصص</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-[#181214]/80 p-3 rounded-xl border border-[#F3E5DC]">
                <CheckCircle2 className="w-4 h-4 text-[#9E5A63]" />
                <span>معاينة صورة البوكيه قبل الشحن</span>
              </div>
            </div>

            <Link
              href="https://wa.me/201000000000?text=مرحباً،%20أرغب%20في%20طلب%20بوكيه%20مخصص%20من%20Softy%20Crafts"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 py-4 px-9 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-base rounded-full shadow-lg shadow-[#25D366]/20 transition-all w-full sm:w-auto"
            >
              <span>اطلبي بوكيهك المخصص عبر الواتساب</span>
              <Sparkles className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Egyptian Market FAQ Section (أسئلة وأجوبة تهم العميل المصري) */}
      <section id="faq" className="px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9E5A63]/10 text-[#9E5A63] text-xs font-bold mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>أسئلة تهمك قبل الشراء 🤔</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#4A3337] dark:text-[#F7EFE9] mb-2">
            الأسئلة الشائعة والإجابات (FAQ)
          </h2>
          <p className="text-xs sm:text-sm text-[#8E7276] dark:text-[#BFA9AC]">
            كل ما يدور في ذهنك عن بوكيهات سلك القطيفة وطريقة الطلب والتوصيل
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-[#251D20] rounded-2xl border border-[#F3E5DC] dark:border-[#382A2D] overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 text-right font-extrabold text-base sm:text-lg md:text-xl text-[#4A3337] dark:text-[#F7EFE9] flex items-center justify-between gap-4 hover:text-[#9E5A63] transition-colors leading-snug"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#9E5A63] transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-sm sm:text-base md:text-lg text-[#6B4B50] dark:text-[#D4A0A7] font-medium leading-relaxed whitespace-pre-line border-t border-[#F9EFE7] dark:border-[#302629] pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Why Choose Us Section */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#4A3337] dark:text-[#F7EFE9] mb-2">
            لماذا تختارين Softy Crafts؟
          </h2>
          <p className="text-xs sm:text-sm text-[#8E7276] dark:text-[#BFA9AC]">
            نقدم لك تجربة شراء فريدة تفوق توقعاتك في كل طلب
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white dark:bg-[#251D20] p-6 rounded-[1.75rem] border border-[#F3E5DC]/80 dark:border-[#382A2D] flex flex-col items-center text-center shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F9EFE7] dark:bg-[#302629] flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-base text-[#4A3337] dark:text-[#F7EFE9] mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-[#8E7276] dark:text-[#BFA9AC] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. Customer Testimonials Section */}
      <section id="testimonials" className="px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="text-[#E8A0BF]">✨</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#4A3337] dark:text-[#F7EFE9]">
              ريفيوهات وآراء بنوتاتنا 💖
            </h2>
            <span className="text-[#E8A0BF]">✨</span>
          </div>
          <p className="text-xs sm:text-sm text-[#8E7276] dark:text-[#BFA9AC]">
            رسائل ورأي عميلاتنا الحقيقيات وفرحتهم بالبوكيهات 🌸
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: "/reviews/review1.jpg", text: "شغلك كله بيخطف قلبي والله مش بوكيهات التخرج بس ❤️", tag: "رسالة وتساب حقيقية 💬" },
            { img: "/reviews/review2.jpg", text: "مبسوطه جدا تحفه بجددد ❤️", tag: "رسالة انستجرام حقيقية 📸" },
            { img: "/reviews/review3.jpg", text: "بصراحه عمر شغلك ما فشل أنه يبهرنى تبارك الرحمن ❤️", tag: "رسالة وتساب حقيقية 💬" },
            { img: "/reviews/review4.jpg", text: "وصل أهو تحفه يا رورو تسلم ايدك والبارفيوم تحفه تحفه 😚 ريحتها شقلبت البيت وبجد شكله كيوت بجد 🥺💖", tag: "تطبيق وصورة حقيقية 💐" },
            { img: "/reviews/review5.jpg", text: "شغلك وااااو ماشاء الله 😍❤️", tag: "ستاتس وتساب حقيقي 💬" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-[#251D20] p-4 rounded-[2rem] border border-[#F3E5DC] dark:border-[#382A2D] shadow-sm flex flex-col justify-between overflow-hidden"
            >
              <div className="relative w-full h-52 rounded-xl overflow-hidden mb-4 bg-black/90">
                <Image src={item.img} alt="Customer Review" fill className="object-contain" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-[#D4A853]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4A853]" />
                  ))}
                </div>
                <p className="text-xs font-bold text-[#4A3337] dark:text-[#F7EFE9] leading-relaxed">
                  "{item.text}"
                </p>
                <span class="text-[10px] text-[#9E5A63] font-semibold block">{item.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9. Real WhatsApp Photos Gallery Showcase Section */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-[#9E5A63] text-sm font-bold mb-2">
            <Instagram className="w-4 h-4" />
            <span>@softycrafts.eg</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#4A3337] dark:text-[#F7EFE9]">
            من تصوير منتجاتنا الحقيقية 📸
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {instagramPosts.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#F3E5DC]"
            >
              <Image
                src={img}
                alt={`Real Photo ${i}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#9E5A63]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs">
                <span>مشاهدة التصاميم الحقيقية 🌸</span>
              </div>
            </a>
          ))}
        </div>
    </div>
  );
}
