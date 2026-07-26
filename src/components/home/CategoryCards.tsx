"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/data/storeData";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export default function CategoryCards() {
  return (
    <section id="categories" className="py-16 px-4 md:px-8 max-w-[1400px] mx-auto">
      {/* Section Title with Sparkles & Heart matching Screenshot 1 */}
      <div className="text-center mb-12 relative">
        <div className="inline-flex items-center justify-center gap-3 mb-2">
          <span className="text-[#E8A0BF] animate-sparkle">✨</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#4A3337] dark:text-[#F7EFE9] tracking-tight">
            تشكيلة البوكيهات
          </h2>
          <span className="text-[#E8A0BF] animate-sparkle">✨</span>
        </div>
        
        {/* Heart Divider line */}
        <div className="flex items-center justify-center gap-2 max-w-xs mx-auto">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#E8A0BF]/50" />
          <Heart className="w-3.5 h-3.5 text-[#C57B85] fill-[#C57B85]" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#E8A0BF]/50" />
        </div>
      </div>

      {/* 4 Cards Grid - Matches Screenshot 1 exact design & layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white dark:bg-[#251D20] rounded-[2rem] p-4 border border-[#F3E5DC]/80 dark:border-[#382A2D] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            {/* Image Container with Soft Rounded Corners */}
            <div className="relative w-full h-[260px] rounded-[1.5rem] overflow-hidden mb-4 bg-[#F9EFE7] dark:bg-[#302629]">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-[#4A3337] dark:text-[#F7EFE9] mb-1">
              {cat.name}
            </h3>
            
            <p className="text-xs font-semibold text-[#8E7276] dark:text-[#BFA9AC] mb-5">
              {cat.startingPrice}
            </p>

            {/* Pill Action Button */}
            <Link
              href={`/shop?category=${cat.id}`}
              className="w-full py-2.5 px-6 rounded-full border border-[#E8A0BF] text-[#C57B85] dark:text-[#E8A0BF] hover:bg-[#C57B85] hover:text-white dark:hover:bg-[#E8A0BF] dark:hover:text-[#181214] font-bold text-sm transition-all duration-300 shadow-sm group-hover:shadow"
            >
              {cat.buttonText}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
