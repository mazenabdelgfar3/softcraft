"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/storeData";
import { useStore } from "@/store/useStore";
import { formatPrice } from "@/lib/utils";
import { Heart, ShoppingBag, Star, Check } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const isFav = isInWishlist(product.id);
  const [selectedSize, setSelectedSize] = useState<string>("وسط");
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, 1, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const sizes = ["صغير", "وسط", "كبير"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-[#251D20] rounded-[1.75rem] p-4 border border-[#F3E5DC]/90 dark:border-[#382A2D] shadow-sm hover:shadow-2xl hover:shadow-[#C57B85]/10 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Image Container with Zoom */}
        <div className="relative w-full h-[250px] rounded-[1.25rem] overflow-hidden bg-[#F9EFE7] dark:bg-[#302629] mb-3.5">
          <Link href={`/product/${product.id}`} className="block w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </Link>

          {/* Discount/Tag Badge */}
          {product.discountBadge && (
            <span className="absolute top-3 right-3 bg-[#9E5A63] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
              {product.discountBadge}
            </span>
          )}

          {/* Wishlist Button */}
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => toggleWishlist(product)}
            className={`absolute top-3 left-3 p-2.5 rounded-full backdrop-blur-md transition-all shadow-md ${
              isFav
                ? "bg-[#9E5A63] text-white"
                : "bg-white/80 dark:bg-black/50 text-[#4A3337] dark:text-white hover:bg-white dark:hover:bg-black/70"
            }`}
            title={isFav ? "إزالة من المفضلة" : "إضافة للمفضلة"}
          >
            <Heart className={`w-4 h-4 transition-colors ${isFav ? "fill-white" : ""}`} />
          </motion.button>
        </div>

        {/* Rating and Reviews */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 bg-[#FFFDFB] dark:bg-[#302629] px-2.5 py-0.5 rounded-full border border-[#F3E5DC] dark:border-[#382A2D]">
            <Star className="w-3.5 h-3.5 fill-[#D4A853] text-[#D4A853]" />
            <span className="font-bold text-xs text-[#4A3337] dark:text-[#F7EFE9]">{product.rating}</span>
            <span className="text-[#8E7276] text-[10px]">({product.reviewsCount})</span>
          </div>
          <span className="text-[11px] text-[#A66E76] dark:text-[#E8A0BF] font-medium">هاند ميد ✨</span>
        </div>

        {/* Product Title */}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-bold text-[#4A3337] dark:text-[#F7EFE9] text-base leading-snug line-clamp-2 hover:text-[#9E5A63] dark:hover:text-[#E8A0BF] transition-colors mb-3">
            {product.name}
          </h3>
        </Link>
      </div>

      {/* Footer controls: Size selection, price & modern button */}
      <div>
        {/* Interactive Size Selector */}
        <div className="flex items-center justify-between mb-3.5 pt-2 border-t border-[#F9EFE7] dark:border-[#302629]">
          <span className="text-[11px] font-bold text-[#8E7276] dark:text-[#BFA9AC]">الحجم:</span>
          <div className="flex gap-1">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`text-[10px] px-2 py-0.5 rounded-md font-bold transition-all ${
                  selectedSize === s
                    ? "bg-[#9E5A63] text-white shadow-xs"
                    : "bg-[#F9EFE7] dark:bg-[#302629] text-[#8E7276] dark:text-[#BFA9AC] hover:bg-[#E8A0BF]/30"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Price Tag */}
        <div className="flex items-baseline justify-between mb-3.5">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-[#9E5A63] dark:text-[#E8A0BF]">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-[#8E7276] line-through font-normal">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Modern Add to Cart Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleAddToCart}
          className={`w-full py-3 px-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-sm ${
            added
              ? "bg-emerald-600 text-white shadow-emerald-200"
              : "bg-[#9E5A63] hover:bg-[#854750] text-white shadow-[#9E5A63]/20 hover:shadow-md"
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              <span>تمت الإضافة بنجاح!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>إضافة للسلة</span>
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
