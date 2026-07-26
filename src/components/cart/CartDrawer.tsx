"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import { formatPrice } from "@/lib/utils";
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const { cart, isCartOpen, setCartOpen, removeFromCart, updateQuantity, getCartTotal } = useStore();

  const total = getCartTotal();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          />

          {/* Slide Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 left-0 bottom-0 w-full max-w-md bg-[#FFFDFB] dark:bg-[#181214] z-50 flex flex-col justify-between shadow-2xl border-r border-[#F3E5DC] dark:border-[#382A2D]"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#F3E5DC] dark:border-[#382A2D] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#C57B85]" />
                <h2 className="text-xl font-bold text-[#4A3337] dark:text-[#F7EFE9]">
                  سلة الشراء ({cart.reduce((s, i) => s + i.quantity, 0)})
                </h2>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 rounded-full hover:bg-[#F9EFE7] dark:hover:bg-[#302629] text-[#4A3337] dark:text-[#F7EFE9]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-[#F9EFE7] dark:bg-[#302629] flex items-center justify-center mb-4 text-[#C57B85]">
                    <ShoppingBag className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-bold text-[#4A3337] dark:text-[#F7EFE9] mb-1">
                    سلة الشراء فارغة
                  </h3>
                  <p className="text-xs text-[#8E7276] mb-6">
                    استكشفي تشكيلة البوكيهات وأضيفي لمستك المفضلة!
                  </p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="py-2.5 px-6 bg-[#C57B85] text-white rounded-full font-bold text-xs"
                  >
                    تصفح الباقات
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3 bg-white dark:bg-[#251D20] rounded-2xl border border-[#F3E5DC]/80 dark:border-[#382A2D]"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#F9EFE7] shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-sm text-[#4A3337] dark:text-[#F7EFE9] line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-[#8E7276] hover:text-red-500 transition-colors p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        {item.selectedSize && (
                          <span className="text-[11px] text-[#8E7276]">
                            الحجم: {item.selectedSize}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <span className="font-extrabold text-sm text-[#C57B85]">
                          {formatPrice(item.totalPrice)}
                        </span>

                        <div className="flex items-center gap-2 bg-[#F9EFE7] dark:bg-[#302629] px-2 py-1 rounded-full">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="p-1 text-[#4A3337] dark:text-[#F7EFE9]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="p-1 text-[#4A3337] dark:text-[#F7EFE9]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer Summary */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#F3E5DC] dark:border-[#382A2D] bg-[#FFFDFB] dark:bg-[#181214]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold text-[#8E7276]">الإجمالي الكلي:</span>
                  <span className="text-xl font-black text-[#C57B85]">{formatPrice(total)}</span>
                </div>

                <Link
                  href="/checkout"
                  onClick={() => setCartOpen(false)}
                  className="w-full py-3.5 bg-[#C57B85] hover:bg-[#b06771] text-white font-extrabold rounded-full flex items-center justify-center gap-2 text-sm shadow-md transition-all"
                >
                  <span>إتمام الطلب الآن</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
