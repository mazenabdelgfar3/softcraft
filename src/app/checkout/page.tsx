"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import { formatPrice } from "@/lib/utils";
import { Check, ArrowLeft, ShoppingBag, ShieldCheck, MapPin, Calendar, CreditCard, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const { cart, getCartTotal, clearCart } = useStore();
  const [step, setStep] = useState(1);
  const [coupon, setCoupon] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "القاهرة",
    address: "",
    building: "",
    deliveryDate: "",
    deliveryTime: "الفترة المسائية (6-9 مساءً)",
    paymentMethod: "cod",
  });

  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState("");

  const subtotal = getCartTotal();
  const shipping = subtotal > 600 ? 0 : 40;
  const discountAmount = (subtotal * discountPercent) / 100;
  const total = subtotal + shipping - discountAmount;

  const handleApplyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SOFTY10") {
      setDiscountPercent(10);
    } else {
      alert("كود الخصم غير صحيح. جربي: SOFTY10");
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = "SC-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(newOrderId);
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className="py-20 px-4 max-w-xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white dark:bg-[#251D20] p-8 md:p-12 rounded-[2.5rem] border border-[#F3E5DC] dark:border-[#382A2D] shadow-xl"
        >
          <div className="w-20 h-20 rounded-full bg-[#E8A0BF]/30 text-[#C57B85] flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10" />
          </div>

          <span className="text-xs font-bold text-[#C57B85] uppercase tracking-widest block mb-2">
            تم استلام طلبك بنجاح 🎉
          </span>

          <h1 className="text-2xl md:text-3xl font-black text-[#4A3337] dark:text-[#F7EFE9] mb-3">
            شكراً لكِ! بوكيهك في الطريق ❤️
          </h1>

          <p className="text-xs text-[#8E7276] mb-6">
            رقم الطلب الخاص بك هو: <span className="font-extrabold text-[#C57B85]">{orderId}</span>
          </p>

          <div className="p-4 bg-[#F9EFE7] dark:bg-[#302629] rounded-2xl text-xs text-[#8E7276] mb-8 text-right space-y-1">
            <p><strong>اسم العميل:</strong> {formData.name || "عميلة سوفتي كرافتس"}</p>
            <p><strong>رقم الهاتف:</strong> {formData.phone || "01000000000"}</p>
            <p><strong>العنوان:</strong> {formData.city} - {formData.address}</p>
            <p><strong>طريقة الدفع:</strong> {formData.paymentMethod === "cod" ? "الدفع عند الاستلام" : "بطاقة ائتمان"}</p>
          </div>

          <div className="space-y-3">
            <a
              href={`https://wa.me/201000000000?text=مرحباً،%20أرغب%20في%20متابعة%20طلبي%20رقم%20${orderId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#25D366] text-white font-extrabold rounded-full flex items-center justify-center gap-2 text-sm shadow-md"
            >
              💬 متابعة حالة الطلب على الواتساب
            </a>

            <Link
              href="/"
              className="w-full py-3 bg-[#F9EFE7] text-[#4A3337] font-bold rounded-full text-xs block text-center"
            >
              العودة للصفحة الرئيسية
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="py-20 px-4 text-center max-w-md mx-auto">
        <ShoppingBag className="w-16 h-16 text-[#C57B85] mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-[#4A3337] dark:text-[#F7EFE9] mb-2">
          سلة الشراء فارغة
        </h2>
        <p className="text-xs text-[#8E7276] mb-6">
          قومي بإضافة بوكيهات ورد إلى السلة أولاً لتتمكني من إتمام الطلب.
        </p>
        <Link
          href="/shop"
          className="py-3 px-8 bg-[#C57B85] text-white font-bold rounded-full text-xs inline-block"
        >
          تصفح المتجر الآن
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10 px-4 md:px-8 max-w-[1400px] mx-auto space-y-8">
      <h1 className="text-3xl font-black text-[#4A3337] dark:text-[#F7EFE9] text-center">
        إتمام الطلب
      </h1>

      {/* Progress Steps Header */}
      <div className="flex items-center justify-center gap-4 max-w-xl mx-auto">
        {[
          { num: 1, label: "البيانات" },
          { num: 2, label: "العنوان" },
          { num: 3, label: "الدفع والتأكيد" },
        ].map((s) => (
          <div key={s.num} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                step >= s.num
                  ? "bg-[#C57B85] text-white shadow-sm"
                  : "bg-[#F9EFE7] dark:bg-[#302629] text-[#8E7276]"
              }`}
            >
              {step > s.num ? <Check className="w-4 h-4" /> : s.num}
            </div>
            <span className="text-xs font-bold text-[#4A3337] dark:text-[#F7EFE9]">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Form Form Left Side */}
        <div className="lg:col-span-7 bg-white dark:bg-[#251D20] p-6 md:p-8 rounded-[2.5rem] border border-[#F3E5DC] dark:border-[#382A2D] shadow-sm">
          <form onSubmit={handlePlaceOrder} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="font-extrabold text-lg text-[#4A3337] dark:text-[#F7EFE9] mb-4">
                  1. البيانات الشخصية
                </h3>

                <div>
                  <label className="text-xs font-bold text-[#8E7276] block mb-1">
                    الاسم بالكامل *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="مثال: سارة محمد"
                    className="w-full p-3 rounded-2xl bg-[#F9EFE7] dark:bg-[#302629] border border-transparent focus:border-[#C57B85] text-xs font-semibold outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#8E7276] block mb-1">
                    رقم الهاتف (للتواصل والتوصيل) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="01000000000"
                    className="w-full p-3 rounded-2xl bg-[#F9EFE7] dark:bg-[#302629] border border-transparent focus:border-[#C57B85] text-xs font-semibold outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#8E7276] block mb-1">
                    البريد الإلكتروني (اختياري)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@mail.com"
                    className="w-full p-3 rounded-2xl bg-[#F9EFE7] dark:bg-[#302629] border border-transparent focus:border-[#C57B85] text-xs font-semibold outline-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3.5 bg-[#C57B85] text-white font-extrabold rounded-full text-xs mt-6"
                >
                  الانتقال للخطوة التالية (العنوان)
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="font-extrabold text-lg text-[#4A3337] dark:text-[#F7EFE9] mb-4">
                  2. عنوان التوصيل
                </h3>

                <div>
                  <label className="text-xs font-bold text-[#8E7276] block mb-1">
                    المحافظة *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-3 rounded-2xl bg-[#F9EFE7] dark:bg-[#302629] border border-transparent focus:border-[#C57B85] text-xs font-semibold outline-none"
                  >
                    <option value="القاهرة">القاهرة</option>
                    <option value="الجيزة">الجيزة</option>
                    <option value="الإسكندرية">الإسكندرية</option>
                    <option value="القليوبية">القليوبية</option>
                    <option value="المنوفية">المنوفية</option>
                    <option value="الشرقية">الشرقية</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#8E7276] block mb-1">
                    العنوان التفصيلي (الشارع والمنطقة) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="مثال: المعادي - شارع 9"
                    className="w-full p-3 rounded-2xl bg-[#F9EFE7] dark:bg-[#302629] border border-transparent focus:border-[#C57B85] text-xs font-semibold outline-none"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="py-3 px-6 bg-[#F9EFE7] text-[#8E7276] font-bold rounded-full text-xs"
                  >
                    رجوع
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 py-3.5 bg-[#C57B85] text-white font-extrabold rounded-full text-xs"
                  >
                    الانتقال للدفع والتأكيد
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="font-extrabold text-lg text-[#4A3337] dark:text-[#F7EFE9]">
                  3. طريقة الدفع وتأكيد الطلب
                </h3>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-[#8E7276] block">
                    اختر طريقة الدفع المناسبة:
                  </label>

                  <div
                    onClick={() => setFormData({ ...formData, paymentMethod: "cod" })}
                    className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                      formData.paymentMethod === "cod"
                        ? "border-[#C57B85] bg-[#E8A0BF]/10"
                        : "border-[#F3E5DC]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">💵</span>
                      <div>
                        <h4 className="font-bold text-xs text-[#4A3337] dark:text-[#F7EFE9]">
                          الدفع عند الاستلام (COD)
                        </h4>
                        <p className="text-[11px] text-[#8E7276]">
                          ادفع نقداً لمندوب التوصيل فور استلام البوكيه
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        formData.paymentMethod === "cod"
                          ? "border-[#C57B85] bg-[#C57B85]"
                          : "border-[#8E7276]"
                      }`}
                    />
                  </div>

                  <div
                    onClick={() => setFormData({ ...formData, paymentMethod: "card" })}
                    className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                      formData.paymentMethod === "card"
                        ? "border-[#C57B85] bg-[#E8A0BF]/10"
                        : "border-[#F3E5DC]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-[#C57B85]" />
                      <div>
                        <h4 className="font-bold text-xs text-[#4A3337] dark:text-[#F7EFE9]">
                          بطاقة ائتمان / محفظة إلكترونية (Paymob)
                        </h4>
                        <p className="text-[11px] text-[#8E7276]">
                          دفع آمن بالفيزا والماستركارد أو فودافون كاش
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        formData.paymentMethod === "card"
                          ? "border-[#C57B85] bg-[#C57B85]"
                          : "border-[#8E7276]"
                      }`}
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="py-3 px-6 bg-[#F9EFE7] text-[#8E7276] font-bold rounded-full text-xs"
                  >
                    رجوع
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-[#C57B85] hover:bg-[#b06771] text-white font-extrabold rounded-full text-sm shadow-lg shadow-[#C57B85]/20 flex items-center justify-center gap-2"
                  >
                    <span>تأكيد وإرسال الطلب</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Order Summary Right Side */}
        <div className="lg:col-span-5 bg-white dark:bg-[#251D20] p-6 rounded-[2.5rem] border border-[#F3E5DC] dark:border-[#382A2D] shadow-sm h-fit">
          <h3 className="font-extrabold text-base text-[#4A3337] dark:text-[#F7EFE9] mb-4 pb-3 border-b border-[#F3E5DC]">
            ملخص الطلب ({cart.length} منتجات)
          </h3>

          <div className="space-y-3 max-h-[240px] overflow-y-auto mb-4">
            {cart.map((item) => (
              <div key={item.product.id} className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#F9EFE7] shrink-0">
                  <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                </div>
                <div className="flex-1 text-xs">
                  <h4 className="font-bold text-[#4A3337] dark:text-[#F7EFE9] line-clamp-1">
                    {item.product.name}
                  </h4>
                  <span className="text-[#8E7276]">الكمية: {item.quantity}</span>
                </div>
                <span className="font-extrabold text-xs text-[#C57B85]">
                  {formatPrice(item.totalPrice)}
                </span>
              </div>
            ))}
          </div>

          {/* Coupon */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="كود الخصم (جربي SOFTY10)"
              className="flex-1 p-2.5 rounded-full bg-[#F9EFE7] text-xs font-semibold text-[#4A3337] outline-none"
            />
            <button
              type="button"
              onClick={handleApplyCoupon}
              className="px-4 py-2 bg-[#C57B85] text-white rounded-full text-xs font-bold"
            >
              تطبيق
            </button>
          </div>

          {/* Breakdown */}
          <div className="space-y-2 text-xs text-[#8E7276] pt-4 border-t border-[#F3E5DC]">
            <div className="flex justify-between">
              <span>المجموع الفرعي:</span>
              <span className="font-bold text-[#4A3337] dark:text-[#F7EFE9]">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>الشحن:</span>
              <span>{shipping === 0 ? "مجاني 🎉" : formatPrice(shipping)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-green-600 font-bold">
                <span>خصم الكوبون ({discountPercent}%):</span>
                <span>-{formatPrice(discountAmount)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm font-black text-[#C57B85] pt-3 border-t border-[#F3E5DC]">
              <span>الإجمالي النهائي:</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
