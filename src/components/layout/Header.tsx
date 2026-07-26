"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useStore } from "@/store/useStore";
import { Search, Heart, ShoppingBag, Sun, Moon, Menu, X, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { cart, wishlist, setCartOpen, setSearchOpen } = useStore();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "تشكيلة البوكيهات", href: "/#categories" },
    { name: "الأكثر مبيعاً", href: "/#best-sellers" },
    { name: "المتجر والمنتجات", href: "/shop" },
    { name: "تصميم مخصص", href: "/#custom-bouquet" },
    { name: "آراء العملاء", href: "/#testimonials" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFDFB]/85 dark:bg-[#181214]/85 backdrop-blur-xl shadow-md border-b border-[#F3E5DC]/80 dark:border-[#382A2D]"
          : "bg-transparent py-1"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        {/* Right side: Mobile Menu Toggle & Animated Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2.5 rounded-full hover:bg-[#F9EFE7] dark:hover:bg-[#302629] text-[#4A3337] dark:text-[#F7EFE9] transition-colors"
            aria-label="القائمة"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Logo />
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[#4A3337]/85 dark:text-[#F7EFE9]/85 hover:text-[#9E5A63] dark:hover:text-[#E8A0BF] transition-colors py-1.5 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2.5px] after:rounded-full after:bg-[#9E5A63] dark:after:bg-[#E8A0BF] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Left side: Action Controls with animated cart badge */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Search Button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2.5 rounded-full hover:bg-[#F9EFE7] dark:hover:bg-[#302629] text-[#4A3337] dark:text-[#F7EFE9] transition-colors"
            title="البحث عن بوكيه"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Dark Mode Theme Switcher */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-full hover:bg-[#F9EFE7] dark:hover:bg-[#302629] text-[#4A3337] dark:text-[#F7EFE9] transition-colors"
              title="تغيير المظهر"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-[#D4A853]" /> : <Moon className="w-5 h-5 text-[#4A3337]" />}
            </button>
          )}

          {/* Wishlist Icon */}
          <Link
            href="/wishlist"
            className="relative p-2.5 rounded-full hover:bg-[#F9EFE7] dark:hover:bg-[#302629] text-[#4A3337] dark:text-[#F7EFE9] transition-colors"
            title="المفضلة"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#9E5A63] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Glassmorphism Cart Button with Pulsing Badge */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-2 bg-[#9E5A63] hover:bg-[#854750] text-white px-4 py-2.5 rounded-full font-extrabold text-sm transition-all shadow-md shadow-[#9E5A63]/25"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">السلة</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={cartCount}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="bg-white text-[#9E5A63] text-xs font-black px-2 py-0.5 rounded-full shadow-xs"
              >
                {cartCount}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 md:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[290px] bg-[#FFFDFB] dark:bg-[#181214] z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#F3E5DC] dark:border-[#382A2D]">
                  <Logo />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-[#F9EFE7] dark:hover:bg-[#302629]"
                  >
                    <X className="w-5 h-5 text-[#4A3337] dark:text-[#F7EFE9]" />
                  </button>
                </div>

                <div className="flex flex-col gap-4 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base font-bold text-[#4A3337] dark:text-[#F7EFE9] hover:text-[#9E5A63] transition-colors py-2.5 border-b border-[#F9EFE7] dark:border-[#302629] flex items-center justify-between"
                    >
                      <span>{link.name}</span>
                      <Sparkles className="w-4 h-4 text-[#E8A0BF]" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#F3E5DC] dark:border-[#382A2D]">
                <p className="text-xs text-[#8E7276] text-center">
                  صُنِعَت بكل حب ❤️ | Softy Crafts © 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
