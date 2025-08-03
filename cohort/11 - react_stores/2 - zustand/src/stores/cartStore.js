import { create } from 'zustand';

export const useCartStore = create(set => ({
  cart: [],

  addToCart: item => set(state => ({ cart: [...state.cart, item] })),
  removeFromCart: () => set(state => ({ cart: state.cart.slice(0, -1) })),
  clearCart: () => set({ cart: [] }),
}));
