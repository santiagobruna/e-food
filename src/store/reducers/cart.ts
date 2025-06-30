import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProdutoAPI } from "../../components/Modal";

type CartState = {
  items: ProdutoAPI[];
  isCartOpen: boolean;
  isCheckoutOpen: boolean;
  isPaymentOpen: boolean;
  isConfirmOpen: boolean;
  orderId: string | null
};

const initialState: CartState = {
  items: [],
  isCartOpen: false,
  isCheckoutOpen: false,
  isPaymentOpen: false,
  isConfirmOpen: false,
  orderId: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProdutoAPI>) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      } else {
        alert("O item já está no carrinho.");
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    openCart: (state) => {
      state.isCartOpen = true;
      state.isCheckoutOpen = false;
      state.isPaymentOpen = false;
      state.isConfirmOpen = false;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    showCheckout: (state) => {
      state.isCheckoutOpen = true;
      state.isCartOpen = false;
      state.isPaymentOpen = false;
      state.isConfirmOpen = false;
    },
    closeCheckout: (state) => {
      state.isCheckoutOpen = false;
    },
    backToCartFromCheckout: (state) => {
      state.isCartOpen = true;
      state.isCheckoutOpen = false;
      state.isPaymentOpen = false;
      state.isConfirmOpen = false;
    },
    proceedToPayment: (state) => {
      state.isPaymentOpen = true;
      state.isCheckoutOpen = false;
      state.isCartOpen = false;
      state.isConfirmOpen = false;
    },
    backToCheckoutFromPayment: (state) => {
      state.isCheckoutOpen = true;
      state.isPaymentOpen = false;
    },

    confirmPaymentSuccess: (state) => {
      state.isConfirmOpen = true;
      state.isPaymentOpen = false;
    },
    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload
    },
    closeConfirmAndClearCart: (state) => {
      state.isConfirmOpen = false;
      state.items = [];
      state.isCartOpen = false;
      state.isCheckoutOpen = false;
      state.isPaymentOpen = false;
      state.orderId = null
    },
    
  },
});

export const {
  addItem,
  removeItem,
  openCart,
  closeCart,
  showCheckout,
  closeCheckout,
  backToCartFromCheckout,
  proceedToPayment,
  backToCheckoutFromPayment,
  confirmPaymentSuccess,
  setOrderId,
  closeConfirmAndClearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
