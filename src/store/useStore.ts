import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/data/storeData";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedRibbon?: string;
  customMessage?: string;
  deliveryDate?: string;
  totalPrice: number;
}

interface StoreState {
  cart: CartItem[];
  wishlist: Product[];
  isCartOpen: boolean;
  isSearchOpen: boolean;

  // Actions
  addToCart: (
    product: Product,
    quantity?: number,
    selectedSize?: string,
    selectedRibbon?: string,
    customMessage?: string,
    deliveryDate?: string
  ) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;

  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;

  setCartOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;

  getCartTotal: () => number;
  getCartCount: () => number;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      isCartOpen: false,
      isSearchOpen: false,

      addToCart: (
        product,
        quantity = 1,
        selectedSize,
        selectedRibbon,
        customMessage,
        deliveryDate
      ) => {
        set((state) => {
          const existingIndex = state.cart.findIndex(
            (item) => item.product.id === product.id
          );

          const sizeObj = product.sizes?.find((s) => s.name === selectedSize);
          const basePrice = sizeObj ? sizeObj.price : product.price;

          if (existingIndex > -1) {
            const updatedCart = [...state.cart];
            const newQty = updatedCart[existingIndex].quantity + quantity;
            updatedCart[existingIndex] = {
              ...updatedCart[existingIndex],
              quantity: newQty,
              totalPrice: newQty * basePrice,
            };
            return { cart: updatedCart, isCartOpen: true };
          } else {
            return {
              cart: [
                ...state.cart,
                {
                  product,
                  quantity,
                  selectedSize,
                  selectedRibbon,
                  customMessage,
                  deliveryDate,
                  totalPrice: basePrice * quantity,
                },
              ],
              isCartOpen: true,
            };
          }
        });
      },

      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.product.id !== productId),
        }));
      },

      updateQuantity: (productId, quantity) => {
        set((state) => {
          if (quantity <= 0) {
            return {
              cart: state.cart.filter((item) => item.product.id !== productId),
            };
          }
          return {
            cart: state.cart.map((item) => {
              if (item.product.id === productId) {
                const sizeObj = item.product.sizes?.find(
                  (s) => s.name === item.selectedSize
                );
                const price = sizeObj ? sizeObj.price : item.product.price;
                return {
                  ...item,
                  quantity,
                  totalPrice: price * quantity,
                };
              }
              return item;
            }),
          };
        });
      },

      clearCart: () => set({ cart: [] }),

      toggleWishlist: (product) => {
        set((state) => {
          const exists = state.wishlist.some((p) => p.id === product.id);
          if (exists) {
            return {
              wishlist: state.wishlist.filter((p) => p.id !== product.id),
            };
          } else {
            return { wishlist: [...state.wishlist, product] };
          }
        });
      },

      isInWishlist: (productId) => {
        return get().wishlist.some((p) => p.id === productId);
      },

      setCartOpen: (open) => set({ isCartOpen: open }),
      setSearchOpen: (open) => set({ isSearchOpen: open }),

      getCartTotal: () => {
        return get().cart.reduce((sum, item) => sum + item.totalPrice, 0);
      },

      getCartCount: () => {
        return get().cart.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: "softy-crafts-store",
      partialize: (state) => ({ cart: state.cart, wishlist: state.wishlist }),
    }
  )
);
