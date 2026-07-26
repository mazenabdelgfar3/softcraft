"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3 transition-all duration-300">
      <div className="relative w-13 h-13 rounded-full overflow-hidden border-2 border-[#E4B1B8] p-0.5 shadow-md group-hover:scale-105 transition-transform bg-white">
        <img src="/logo.jpg" alt="Softy Crafts Logo" class="w-full h-full object-cover rounded-full" />
      </div>

      <div class="flex flex-col justify-center select-none">
        <span className="font-bold text-2xl tracking-tight text-[#8A3F49] dark:text-[#E8A0BF] font-sans">
          Softy Crafts
        </span>
        <span className="text-[10px] tracking-widest text-[#9E5A63] dark:text-[#D4A0A7] uppercase font-semibold">
          HANDMADE WITH LOVE
        </span>
      </div>
    </Link>
  );
}
