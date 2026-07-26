import type { Metadata } from "next";
import { Cairo, Marhey, Aref_Ruqaa } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import CartDrawer from "@/components/cart/CartDrawer";
import SearchModal from "@/components/shared/SearchModal";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
});

const marhey = Marhey({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-marhey",
});

const aref = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-aref",
});

export const metadata: Metadata = {
  title: "Softy Crafts — متجر بوكيهات الورد والهدايا المصنوعة بحب ❤️",
  description:
    "متجر سوفتي كرافتس لأجمل بوكيهات الورد الهاند ميد والهدايا الفاخرة. ورد يدوم للأبد مع تغليف أنيق وتوصيل سريع لباب بيتك.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} ${marhey.variable} ${aref.variable} antialiased min-h-screen flex flex-col bg-[#FDF7F2] dark:bg-[#181214] text-[#4A3337] dark:text-[#F7EFE9]`}>
        <ThemeProvider>
          {/* Top Announcement Bar */}
          <div className="bg-[#E8A0BF]/20 dark:bg-[#302629] text-[#C57B85] dark:text-[#E8A0BF] text-xs font-semibold py-2 px-4 text-center border-b border-[#F3E5DC]/50 dark:border-[#382A2D] flex items-center justify-center gap-2">
            <span>✨ توصيل سريع لجميع المحافظات | شحن مجاني للطلبات فوق 600 جنيه ❤️</span>
          </div>

          <Header />
          <main className="flex-1 pb-20 md:pb-10">{children}</main>
          <Footer />
          <MobileNav />
          <CartDrawer />
          <SearchModal />
        </ThemeProvider>
      </body>
    </html>
  );
}
