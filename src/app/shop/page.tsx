"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, CATEGORIES } from "@/data/storeData";
import ProductCard from "@/components/shared/ProductCard";
import { Filter, SlidersHorizontal, Sparkles } from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<string>("default");
  const [maxPrice, setMaxPrice] = useState<number>(700);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesPrice = product.price <= maxPrice;
      return matchesCategory && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, maxPrice, sortBy]);

  return (
    <div className="py-10 px-4 md:px-8 max-w-[1400px] mx-auto">
      {/* Header Banner */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8A0BF]/20 text-[#C57B85] text-xs font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>المتجر والتصنيفات ✨</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-[#4A3337] dark:text-[#F7EFE9] mb-3">
          جميع بوكيهات سوفتي كرافتس
        </h1>
        <p className="text-xs sm:text-sm text-[#8E7276] dark:text-[#BFA9AC]">
          استكشفي التشكيلة الكاملة، واختاري الهدية التي تعبر عن مشاعرك بكل أنوقتها
        </p>
      </div>

      {/* Filter Tabs & Sorting */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white dark:bg-[#251D20] p-4 rounded-3xl border border-[#F3E5DC] dark:border-[#382A2D] shadow-sm">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "bg-[#C57B85] text-white shadow-sm"
                : "bg-[#F9EFE7] dark:bg-[#302629] text-[#8E7276] dark:text-[#BFA9AC] hover:text-[#C57B85]"
            }`}
          >
            الكل ({PRODUCTS.length})
          </button>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#C57B85] text-white shadow-sm"
                  : "bg-[#F9EFE7] dark:bg-[#302629] text-[#8E7276] dark:text-[#BFA9AC] hover:text-[#C57B85]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <span className="text-xs font-semibold text-[#8E7276] shrink-0">
            ترتيب حسب:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="py-2 px-4 rounded-full bg-[#F9EFE7] dark:bg-[#302629] text-[#4A3337] dark:text-[#F7EFE9] text-xs font-bold outline-none border border-transparent focus:border-[#C57B85]"
          >
            <option value="default">الافتراضي</option>
            <option value="price-low">السعر: من الأقل للأعلى</option>
            <option value="price-high">السعر: من الأعلى للأقل</option>
            <option value="rating">الأعلى تقييماً</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-base text-[#8E7276] mb-4">لا توجد منتجات تطابق الاختيارات الحالية</p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setMaxPrice(700);
            }}
            className="py-2 px-6 bg-[#C57B85] text-white font-bold text-xs rounded-full"
          >
            إعادة ضبط الفلاتر
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center font-bold text-[#C57B85]">جاري تحميل المتجر...</div>}>
      <ShopContent />
    </Suspense>
  );
}
