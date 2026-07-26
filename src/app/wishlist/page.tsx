"use client";

import React from "react";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import ProductCard from "@/components/shared/ProductCard";
import { Heart } from "lucide-react";

export default function WishlistPage() {
  const { wishlist } = useStore();

  return (
    <div className="py-12 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-black text-[#4A3337] dark:text-[#F7EFE9] mb-2 flex items-center justify-center gap-2">
          <span>المفضلة</span>
          <Heart className="w-6 h-6 text-[#C57B85] fill-[#C57B85]" />
        </h1>
        <p className="text-xs sm:text-sm text-[#8E7276] dark:text-[#BFA9AC]">
          الباقات والمنتجات التي قمتِ بحفظها لشرائها لاحقاً
        </p>
      </div>

      {wishlist.length === 0 ? (
        <div className="py-20 text-center max-w-md mx-auto">
          <div className="w-20 h-20 rounded-full bg-[#F9EFE7] dark:bg-[#302629] flex items-center justify-center mx-auto mb-4 text-[#C57B85]">
            <Heart className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-[#4A3337] dark:text-[#F7EFE9] mb-2">
            قائمة المفضلة فارغة
          </h3>
          <p className="text-xs text-[#8E7276] mb-6">
            اضغطي على زري القلب على أي بوكيه لإضافته هنا ومتابعته دائماً!
          </p>
          <Link
            href="/shop"
            className="py-3 px-8 bg-[#C57B85] text-white font-bold rounded-full text-xs inline-block shadow-md"
          >
            استكشاف المتجر
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
