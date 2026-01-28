import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* ---------------- TYPES ---------------- */

export interface CartItem {
  cartItemId: string   // 👈 backend ke exact naam se
  productType: string
  productRefId: string
  configurationJson: string
  quantity: number
  unitPrice: number
  totalPrice: number
}


interface CartState {
  items: CartItem[];
  loading: boolean;
}

/* ---------------- INITIAL STATE ---------------- */

const initialState: CartState = {
  items: [],
  loading: false,
};

/* ---------------- SLICE ---------------- */

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ set cart from backend (GET /api/cart)
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },

    // ✅ optimistic add (UI instant update)
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },

    // ✅ update quantity
    updateItemQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find(i => i.cartItemId === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        item.totalPrice = item.unitPrice * action.payload.quantity;
      }
    },

    // ✅ remove item
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(i => i.cartItemId !== action.payload);
    },

    // ✅ clear cart (after order / logout)
    clearCart: (state) => {
      state.items = [];
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

/* ---------------- EXPORTS ---------------- */

export const {
  setCart,
  addItem,
  updateItemQuantity,
  removeItem,
  clearCart,
  setLoading,
} = cartSlice.actions;

export default cartSlice.reducer;
