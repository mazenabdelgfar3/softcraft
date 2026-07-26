"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PRODUCTS } from "@/data/storeData";
import ProductCard from "@/components/shared/ProductCard";
import { useStore } from "@/store/useStore";
import { formatPrice } from "@/lib/utils";
import { Heart, ShoppingBag, Star, Share2, ShieldCheck, Truck, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductDetailsPage() {
  const params = useParams();
  const productId = params?.id as string;
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const isFav = isInWishlist(product.id);

  const [selectedImage, setSelectedImage] = useState(product.images[0] || product.image);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes ? product.sizes[0].name : "قياسي"
  );
  const [selectedRibbon, setSelectedRibbon] = useState(
    product.ribbonColors ? product.ribbonColors[0].name : "وردي"
  );
  const [quantity, setQuantity] = useState(1);
  const [customMessage, setCustomMessage] = useState("");
  const [copied, setCopied] = useState(false);

  // Computed price based on size
  const activeSizeObj = product.sizes?.find((s) => s.name === selectedSize);
  const unitPrice = activeSizeObj ? activeSizeObj.price : product.price;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="py-10 px-4 md:px-8 max-w-[1400px] mx-auto space-y-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#8E7276] font-medium">
        <Link href="/" className="hover:text-[#C57B85]">
          الرئيسية
        </Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-[#C57B85]">
          المتجر
        </Link>
        <span>/</span>
        <span className="text-[#4A3337] dark:text-[#F7EFE9] font-bold">
          {product.name}
        </span>
      </div>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left (Image Gallery) */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Large Image */}
          <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden bg-[#F9EFE7] dark:bg-[#302629] border border-[#F3E5DC] dark:border-[#382A2D] shadow-sm">
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              priority
              className="object-cover transition-all duration-300"
            />
            {product.discountBadge && (
              <span className="absolute top-4 right-4 bg-[#C57B85] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {product.discountBadge}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                    selectedImage === img
                      ? "border-[#C57B85] scale-95 shadow-md"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right (Product Specifications & Order Options) */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            {/* Rating */}
            <div className="flex items-center gap-2 mb-3 text-xs text-[#D4A853]">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4A853]" />
                ))}
              </div>
              <span className="font-extrabold text-sm">{product.rating}</span>
              <span className="text-[#8E7276]">({product.reviewsCount} تقييم عُملائنا)</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-black text-[#4A3337] dark:text-[#F7EFE9] leading-tight mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-[#F3E5DC] dark:border-[#382A2D]">
              <span className="text-3xl font-black text-[#C57B85]">
                {formatPrice(unitPrice * quantity)}
              </span>
              {product.oldPrice && (
                <span className="text-base text-[#8E7276] line-through">
                  {formatPrice(product.oldPrice * quantity)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-[#8E7276] dark:text-[#BFA9AC] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Size Selector */}
            {product.sizes && (
              <div className="mb-6">
                <label className="text-xs font-bold text-[#4A3337] dark:text-[#F7EFE9] block mb-2">
                  اختاري الحجم:
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((s) => (
                    <button
                      key={s.name}
                      onClick={() => setSelectedSize(s.name)}
                      className={`py-2 px-4 rounded-2xl text-xs font-bold transition-all border ${
                        selectedSize === s.name
                          ? "bg-[#C57B85] text-white border-[#C57B85] shadow-sm"
                          : "bg-white dark:bg-[#251D20] text-[#8E7276] border-[#F3E5DC] hover:border-[#C57B85]"
                      }`}
                    >
                      {s.name} ({formatPrice(s.price)})
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Ribbon Color Selector */}
            {product.ribbonColors && (
              <div className="mb-6">
                <label className="text-xs font-bold text-[#4A3337] dark:text-[#F7EFE9] block mb-2">
                  لون الشريط (الربطة):
                </label>
                <div className="flex items-center gap-3">
                  {product.ribbonColors.map((r) => (
                    <button
                      key={r.name}
                      onClick={() => setSelectedRibbon(r.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                        selectedRibbon === r.name
                          ? "border-[#C57B85] bg-[#E8A0BF]/20 text-[#C57B85]"
                          : "border-[#F3E5DC] text-[#8E7276]"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/10"
                        style={{ backgroundColor: r.hex }}
                      />
                      <span>{r.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message Card Textarea */}
            <div className="mb-6">
              <label className="text-xs font-bold text-[#4A3337] dark:text-[#F7EFE9] block mb-2">
                كتابة رسالة إهداء بخط اليد (مجاناً 💌):
              </label>
              <textarea
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="اكتبي نص الرسالة التي ترغبين في إرفاقها مع البوكيه..."
                rows={3}
                className="w-full p-3 rounded-2xl bg-white dark:bg-[#251D20] border border-[#F3E5DC] dark:border-[#382A2D] text-xs text-[#4A3337] dark:text-[#F7EFE9] placeholder-[#8E7276] outline-none focus:border-[#C57B85]"
              />
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[#F3E5DC] dark:border-[#382A2D] space-y-4">
            <div className="flex items-center gap-3">
              {/* Quantity */}
              <div className="flex items-center gap-3 bg-[#F9EFE7] dark:bg-[#302629] px-4 py-2.5 rounded-full border border-[#F3E5DC]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="font-extrabold text-base text-[#4A3337] dark:text-[#F7EFE9]"
                >
                  -
                </button>
                <span className="font-extrabold text-sm w-4 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="font-extrabold text-base text-[#4A3337] dark:text-[#F7EFE9]"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() =>
                  addToCart(
                    product,
                    quantity,
                    selectedSize,
                    selectedRibbon,
                    customMessage
                  )
                }
                className="flex-1 py-3.5 px-6 bg-[#C57B85] hover:bg-[#b06771] text-white font-black text-sm rounded-full shadow-lg shadow-[#C57B85]/20 flex items-center justify-center gap-2 transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>إضافة إلى السلة</span>
              </button>

              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3.5 rounded-full border transition-all ${
                  isFav
                    ? "bg-[#C57B85] text-white border-[#C57B85]"
                    : "border-[#F3E5DC] text-[#4A3337] dark:text-[#F7EFE9] hover:border-[#C57B85]"
                }`}
              >
                <Heart className={`w-5 h-5 ${isFav ? "fill-white" : ""}`} />
              </button>

              {/* Share */}
              <button
                onClick={handleShare}
                className="p-3.5 rounded-full border border-[#F3E5DC] text-[#4A3337] dark:text-[#F7EFE9] hover:border-[#C57B85]"
                title="مشاركة الرابط"
              >
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Share2 className="w-5 h-5" />}
              </button>
            </div>

            {/* Delivery Assurance */}
            <div className="flex items-center justify-around py-3 bg-[#F9EFE7]/50 dark:bg-[#302629]/50 rounded-2xl text-[11px] font-semibold text-[#8E7276]">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#C57B85]" /> شحن آمن لباب البيت
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C57B85]" /> خامات متينة تدوم
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="pt-12 border-t border-[#F3E5DC] dark:border-[#382A2D]">
          <h3 className="text-2xl font-bold text-[#4A3337] dark:text-[#F7EFE9] mb-8">
            قد ينال إعجابكِ أيضاً 🌸
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
