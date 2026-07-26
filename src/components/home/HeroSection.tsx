"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Heart, ShieldCheck, Truck, Star, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-4 pb-12 md:py-16 px-4 md:px-8 max-w-[1400px] mx-auto">

      {/* Decorative Soft Glow Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#E8A0BF]/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D4A853]/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Text Section */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-right">

          {/* Main Headline with exact handwritten calligraphy font */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#4A2D32] dark:text-[#F7EFE9] font-normal leading-[1.2] tracking-tight flex items-center justify-center lg:justify-start gap-3" style={{ fontFamily: 'var(--font-marhey), cursive' }}>
              <span>صنعت بكل حب</span>
              <span className="text-[#9E5A63] text-4xl sm:text-5xl animate-pulse">♡</span>
            </h1>
          </motion.div>

          {/* Subtitle / Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-[#6B4B50] dark:text-[#D4A0A7] font-bold leading-relaxed max-w-2xl mb-4"
          >
            فاجئي اللي بتحبيه بهدية تفضل معاهم على طول... ورد هاند ميد مصنوع بالواحدة وبكل حب 💖
          </motion.p>

          {/* Customer Rating Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center gap-3 mb-8 bg-white/90 dark:bg-[#251D20]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#F3E5DC] dark:border-[#382A2D] shadow-xs"
          >
            <div className="flex items-center gap-1 text-[#D4A853]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4A853]" />
              ))}
            </div>
            <span className="text-xs font-extrabold text-[#4A3337] dark:text-[#F7EFE9]">4.9/5</span>
            <span className="text-xs text-[#8E7276] dark:text-[#BFA9AC]">من أكتر من 1,500 عميلة مبسوطة بشغلنا 💕</span>
          </motion.div>

          {/* Two CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/shop"
              className="w-full sm:w-auto py-4 px-9 bg-[#9E5A63] hover:bg-[#854750] text-white font-extrabold text-lg rounded-full shadow-lg shadow-[#9E5A63]/25 flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>اطلبي الآن</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <Link
              href="#categories"
              className="w-full sm:w-auto py-4 px-8 border-2 border-[#E8A0BF] text-[#9E5A63] dark:text-[#E8A0BF] hover:bg-[#E8A0BF]/10 font-bold text-base rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-xs"
            >
              تصفحي التشكيلة
            </Link>
          </motion.div>

          {/* Small Feature List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 pt-6 border-t border-[#F3E5DC] dark:border-[#382A2D] text-xs text-[#8E7276] dark:text-[#BFA9AC] font-medium"
          >
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#9E5A63]" />
              <span>توصيل سريع لجميع المحافظات</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#9E5A63]" />
              <span>سلك قطيفة فاخر يدوم للأبد</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#9E5A63]" />
              <span>تغليف إهداء راقٍ ومميز</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side Brand Image Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#251D20] p-3 shadow-2xl border border-[#F3E5DC] dark:border-[#382A2D]">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
              <Image
                src="/WhatsApp Image 2026-07-25 at 12.03.07 PM (2).jpeg"
                alt="Softy Crafts Handmade Large Graduation Bouquet"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Badge 1 */}
            <div className="absolute bottom-6 right-6 left-6 glass-effect p-4 rounded-2xl border border-white/40 shadow-lg flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#9E5A63] block">البوكيه الكبير المميز 👑</span>
                <h4 className="text-sm font-extrabold text-[#4A3337] dark:text-white">بوكيه التخرج والدمية الكبيرة</h4>
              </div>
              <span className="text-sm font-black text-[#9E5A63] bg-[#E8A0BF]/30 px-3 py-1 rounded-full">
                400 ج.م
              </span>
            </div>

            {/* Floating Trust Pill */}
            <div className="absolute top-6 right-6 bg-white/95 dark:bg-[#251D20]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-[#F3E5DC] flex items-center gap-2">
              <span className="text-xs">✨</span>
              <span className="text-xs font-bold text-[#4A3337] dark:text-[#F7EFE9]">تصوير حقيقي 100%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
