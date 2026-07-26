import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Phone, Mail, MapPin, Heart, Instagram, Facebook, MessageCircle, ShieldCheck, Truck, RefreshCw } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#120D0E] border-t border-[#F3E5DC] dark:border-[#382A2D] pt-16 pb-12 px-4 md:px-8 mt-16 relative overflow-hidden">
      {/* Top Trust Information Strip */}
      <div className="max-w-[1400px] mx-auto pb-12 border-b border-[#F3E5DC] dark:border-[#382A2D] grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FDF7F2] dark:bg-[#1D1518]">
          <div className="p-3 rounded-full bg-[#9E5A63]/10 text-[#9E5A63]">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h5 className="font-bold text-sm text-[#4A3337] dark:text-[#F7EFE9]">توصيل سريع وآمن</h5>
            <p className="text-xs text-[#8E7276] dark:text-[#BFA9AC]">تغليف آمن يصل لك بكل أنواقة</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FDF7F2] dark:bg-[#1D1518]">
          <div className="p-3 rounded-full bg-[#9E5A63]/10 text-[#9E5A63]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h5 className="font-bold text-sm text-[#4A3337] dark:text-[#F7EFE9]">ضمان الجودة 100%</h5>
            <p className="text-xs text-[#8E7276] dark:text-[#BFA9AC]">سلك قطيفة فاخر يدوم للأبد</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FDF7F2] dark:bg-[#1D1518]">
          <div className="p-3 rounded-full bg-[#9E5A63]/10 text-[#9E5A63]">
            <RefreshCw className="w-5 h-5" />
          </div>
          <div>
            <h5 className="font-bold text-sm text-[#4A3337] dark:text-[#F7EFE9]">تعديل وتغليف حسب طلبك</h5>
            <p className="text-xs text-[#8E7276] dark:text-[#BFA9AC]">كارت إهداء وتصميم مخصص</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 flex flex-col items-start">
          <Logo />
          <p className="mt-4 text-xs sm:text-sm text-[#8E7276] dark:text-[#BFA9AC] leading-relaxed max-w-sm">
            متجر سوفتي كرافتس لأفخم بوكيهات الورد الهاند ميد المصنوعة من سلك القطيفة والهدايا الفاخرة. نعتني بأدق التفاصيل لتصلك هديتك بكامل أنوقتها وحبها.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 mt-6">
            <a
              href="https://www.instagram.com/softy_crafts_store?igsh=MWMya2U2dHdzYjFnNQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#F9EFE7] dark:bg-[#251D20] text-[#9E5A63] hover:bg-[#9E5A63] hover:text-white transition-colors"
              title="انستجرام"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/share/1JDLWJEbda/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#F9EFE7] dark:bg-[#251D20] text-[#9E5A63] hover:bg-[#9E5A63] hover:text-white transition-colors"
              title="فيسبوك"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://chat.whatsapp.com/LkooYr7hWmXKMTjxsBsKmO?s=cl&p=a&mlu=0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
              title="جروب الواتساب"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links 1 */}
        <div>
          <h4 className="font-extrabold text-[#4A3337] dark:text-[#F7EFE9] text-sm mb-4">
            روابط سريعة
          </h4>
          <ul className="space-y-2.5 text-xs text-[#8E7276] dark:text-[#BFA9AC]">
            <li>
              <Link href="/" className="hover:text-[#9E5A63] transition-colors">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/#categories" className="hover:text-[#9E5A63] transition-colors">
                تشكيلة البوكيهات
              </Link>
            </li>
            <li>
              <Link href="/#best-sellers" className="hover:text-[#9E5A63] transition-colors">
                الأكثر مبيعاً
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-[#9E5A63] transition-colors">
                جميع المنتجات
              </Link>
            </li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h4 className="font-extrabold text-[#4A3337] dark:text-[#F7EFE9] text-sm mb-4">
            خدمة العملاء
          </h4>
          <ul className="space-y-2.5 text-xs text-[#8E7276] dark:text-[#BFA9AC]">
            <li>
              <Link href="/privacy" className="hover:text-[#9E5A63] transition-colors">
                سياسة الخصوصية
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[#9E5A63] transition-colors">
                الشروط والأحكام
              </Link>
            </li>
            <li>
              <Link href="/refund" className="hover:text-[#9E5A63] transition-colors">
                سياسة الاستبدال والاسترجاع
              </Link>
            </li>
            <li>
              <Link href="/track" className="hover:text-[#9E5A63] transition-colors">
                تتبع طلبك
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-extrabold text-[#4A3337] dark:text-[#F7EFE9] text-sm mb-4">
            تواصل معنا
          </h4>
          <ul className="space-y-3 text-xs text-[#8E7276] dark:text-[#BFA9AC]">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#9E5A63]" />
              <span>01065081331</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#9E5A63]" />
              <span>support@softycrafts.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#9E5A63]" />
              <span>القاهرة، جمهورية مصر العربية</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar & Payment Icons */}
      <div className="max-w-[1400px] mx-auto mt-12 pt-6 border-t border-[#F3E5DC]/60 dark:border-[#382A2D] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E7276] gap-4">
        <p className="flex items-center gap-1.5">
          <span>جميع الحقوق محفوظة © 2026</span>
          <span className="font-serif font-bold text-[#9E5A63]">Softy Crafts</span>
          <span>صُنِعَت بكل</span>
          <Heart className="w-3.5 h-3.5 text-[#9E5A63] fill-[#9E5A63] inline" />
        </p>

        <div className="flex items-center gap-2 text-[11px] font-bold text-[#8E7276]">
          <span className="px-3 py-1 bg-[#F9EFE7] dark:bg-[#251D20] rounded-lg">💵 الدفع عند الاستلام</span>
          <span className="px-3 py-1 bg-[#F9EFE7] dark:bg-[#251D20] rounded-lg">💳 بطاقة ائتمان</span>
          <span className="px-3 py-1 bg-[#F9EFE7] dark:bg-[#251D20] rounded-lg">📱 محفظة فودافون كاش</span>
        </div>
      </div>
    </footer>
  );
}
