# Standalone index.html Design Document - SOFTY FLOWERS

## Overview
Create a standalone `index.html` file in the root of `SOFTY FLOWERS` project (`c:\Users\E C\Desktop\SOFTY FLOWERS\index.html`) that works directly in any web browser without needing a Node.js server or build step. It will feature the full branding, interactive product showcase, cart management, category filtering, FAQ accordion, quick view modal, and direct WhatsApp ordering integration.

## Design & Visual Aesthetics
- **Typography**: Google Fonts (`Cairo` & `Tajawal`) for premium Arabic text rendering.
- **Color Palette**:
  - Primary: `#9E5A63` (Dusty Rose / Mauve)
  - Secondary / Accent: `#C57B85` & `#800020` (Burgundy)
  - Backgrounds: `#FDF7F2` (Warm Soft Cream) & `#FFFFFF`
  - Text: `#2D2325` (Charcoal / Dark Warm Gray)
- **Framework & Libraries**:
  - Tailwind CSS via CDN (`https://cdn.tailwindcss.com`) with custom color tokens.
  - Lucide Icons (`unpkg.com/lucide@latest` or SVG icons).
  - Vanilla JS for state management (Cart, Wishlist, Filter, Modal, Toast Notifications, FAQ Accordion).

## Layout & Sections
1. **Announcement Bar**: Promo message with promo code `SOFTY15`.
2. **Header & Navigation**: Logo, Nav links, Search bar, Wishlist counter, Cart counter drawer trigger, WhatsApp direct contact button.
3. **Hero Section**: Highlighting "Forever Bloom (ورد ما بيدبلش)" with CTA buttons and floating product showcase badge.
4. **Category Grid**: Interactive filtering for Small (150 EGP+), Medium (250 EGP+), Large (400 EGP+), and Custom/Graduation.
5. **Promotional Banner**: Gradient card with discount code copy functionality.
6. **Product Showcase Grid**: Product cards with badges (Best Seller, Discount), prices, size selectors, ratings, "Add to Cart", and "Quick View".
7. **Why Choose Us Section**: 4 feature cards (Handmade 100%, Forever Bloom, Exclusive Gift Box, Flexible Pricing).
8. **Interactive FAQ Accordion**: 11 expandable questions with detailed answers.
9. **Customer Reviews**: Rating breakdown & client testimonials.
10. **Instagram Feed**: Responsive image gallery.
11. **Cart & Quick View Modals**: Sliding side drawer for cart with item management and "طلب عبر الواتساب" button formatted with order summary.
12. **Footer**: Quick links, payment/delivery info, WhatsApp contact (01065081331), and social links.

## Image References
Images will use relative paths pointing to the `public/` directory (e.g. `public/WhatsApp_Image_2026-07-25_at_12.03.07_202607251434.jpeg`), ensuring full compatibility when opening `index.html` directly as a local file (`file:///...`).
