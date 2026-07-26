"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/store/useStore";
import { Home, Search, Heart, ShoppingBag, User } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();
  const { cart, wishlist, setCartOpen, setSearchOpen } = useStore();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDFB]/95 dark:bg-[#181214]/95 backdrop-blur-md border-t border-[#F3E5DC] dark:border-[#382A2D] md:hidden px-2 py-2">
      <div className="flex items-center justify-around">
        {/* Home */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[48px] rounded-xl transition-all ${
            pathname === "/"
              ? "text-[#C57B85] dark:text-[#E8A0BF] font-bold"
              : "text-[#8E7276] dark:text-[#BFA9AC]"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-1">الرئيسية</span>
        </Link>

        {/* Search */}
        <button
          onClick={() => setSearchOpen(true)}
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[48px] rounded-xl text-[#8E7276] dark:text-[#BFA9AC] hover:text-[#C57B85]"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] mt-1">البحث</span>
        </button>

        {/* Wishlist */}
        <Link
          href="/wishlist"
          className={`relative flex flex-col items-center justify-center min-w-[56px] min-h-[48px] rounded-xl transition-all ${
            pathname === "/wishlist"
              ? "text-[#C57B85] dark:text-[#E8A0BF] font-bold"
              : "text-[#8E7276] dark:text-[#BFA9AC]"
          }`}
        >
          <Heart className="w-5 h-5" />
          <span className="text-[10px] mt-1">المفضلة</span>
          {wishlistCount > 0 && (
            <span className="absolute top-1 right-2 w-3.5 h-3.5 bg-[#C57B85] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </Link>

        {/* Cart */}
        <button
          onClick={() => setCartOpen(true)}
          className="relative flex flex-col items-center justify-center min-w-[56px] min-h-[48px] rounded-xl text-[#8E7276] dark:text-[#BFA9AC] hover:text-[#C57B85]"
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="text-[10px] mt-1">السلة</span>
          {cartCount > 0 && (
            <span className="absolute top-1 right-2 w-3.5 h-3.5 bg-[#C57B85] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

        {/* Profile */}
        <Link
          href="/account"
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[48px] rounded-xl transition-all ${
            pathname === "/account"
              ? "text-[#C57B85] dark:text-[#E8A0BF] font-bold"
              : "text-[#8E7276] dark:text-[#BFA9AC]"
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] mt-1">حسابي</span>
        </Link>
      </div>
    </div>
  );
}
