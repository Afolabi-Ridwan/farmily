import {create} from 'zustand';

interface CartItem {
  id: number ; 
  name: string ;
}

interface CartState {
  cartItems: CartItem[];
  counter: number;
  addItem: (item: CartItem) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  counter: 0,
  addItem: (item) =>
    set((state) => {
      const itemExists = state.cartItems.some((cartItem) => cartItem.id === item.id);

      if (!itemExists) {
        return {
          cartItems: [...state.cartItems, item],
          counter: state.counter + 1,
        };
      }
      return state;
    }),
}));
