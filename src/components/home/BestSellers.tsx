"use client";

import React from "react";
import ProductCard from "../shared/ProductCard";
import { PRODUCTS } from "@/data/storeData";
import { Sparkles, Heart } from "lucide-react";

export default function BestSellers() {
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);

  return (
    <section id="best-sellers" className="py-16 px-4 md:px-8 max-w-[1400px] mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center gap-2 mb-2">
          <span className="text-[#E8A0BF] animate-sparkle">✨</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#4A3337] dark:text-[#F7EFE9]">
            الأكثر مبيعاً ورواجاً
          </h2>
          <span className="text-[#E8A0BF] animate-sparkle">✨</span>
        </div>

        <div className="flex items-center justify-center gap-2 max-w-xs mx-auto mb-3">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#E8A0BF]/50" />
          <Heart className="w-3.5 h-3.5 text-[#C57B85] fill-[#C57B85]" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#E8A0BF]/50" />
        </div>
        <p className="text-xs sm:text-sm text-[#8E7276] dark:text-[#BFA9AC]">
          الباقات الأكثر إعجاباً من قبل عميلاتنا العزيزات
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
