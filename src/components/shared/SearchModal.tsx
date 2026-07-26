"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import { PRODUCTS } from "@/data/storeData";
import { formatPrice } from "@/lib/utils";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchModal() {
  const { isSearchOpen, setSearchOpen } = useStore();
  const [query, setQuery] = useState("");

  const results = query.trim()
    ? PRODUCTS.filter((p) =>
        p.name.includes(query) || p.description.includes(query)
      )
    : [];

  const popularTags = ["توليب", "أقحوان", "ورد طبيعي", "بوكيه صغير", "بوكس هدايا"];

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="relative w-full max-w-2xl bg-[#FFFDFB] dark:bg-[#181214] rounded-3xl p-6 shadow-2xl border border-[#F3E5DC] dark:border-[#382A2D] z-10"
          >
            {/* Input Header */}
            <div className="relative flex items-center mb-6">
              <Search className="absolute right-4 w-5 h-5 text-[#8E7276]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحثي عن بوكيه، نوع ورد، أو مناسبة..."
                autoFocus
                className="w-full py-3.5 pr-12 pl-12 rounded-full bg-[#F9EFE7] dark:bg-[#302629] text-[#4A3337] dark:text-[#F7EFE9] placeholder-[#8E7276] outline-none border border-transparent focus:border-[#C57B85] transition-all text-sm font-semibold"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute left-4 p-1 rounded-full text-[#8E7276] hover:text-[#4A3337]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Popular Searches */}
            {!query && (
              <div>
                <span className="text-xs font-bold text-[#8E7276] block mb-3">
                  الأكثر بحثاً:
                </span>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3.5 py-1.5 rounded-full bg-[#F9EFE7] dark:bg-[#302629] text-[#C57B85] dark:text-[#E8A0BF] text-xs font-semibold hover:bg-[#E8A0BF]/30 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results List */}
            {query && (
              <div className="max-h-[360px] overflow-y-auto space-y-3">
                {results.length === 0 ? (
                  <p className="text-center py-8 text-sm text-[#8E7276]">
                    لم نجد نتائج تطابق "{query}"
                  </p>
                ) : (
                  results.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-4 p-2.5 rounded-2xl hover:bg-[#F9EFE7] dark:hover:bg-[#302629] transition-colors"
                    >
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-[#F9EFE7] shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm text-[#4A3337] dark:text-[#F7EFE9]">
                          {product.name}
                        </h4>
                        <span className="text-xs font-extrabold text-[#C57B85]">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
