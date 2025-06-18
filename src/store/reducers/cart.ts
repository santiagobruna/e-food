import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProdutoAPI } from "../../components/Modal";

type CartState = {
    items: ProdutoAPI[];
    isCartOpen: boolean;
    isCheckoutOpen: boolean;
    isPaymentOpen: boolean;
    isConfirmOpen: boolean;
    isSuccess: boolean;
    };

    const initialState: CartState = {
    items: [],
    isCartOpen: false,
    isCheckoutOpen: false,
    isPaymentOpen: false,
    isConfirmOpen: false,
    isSuccess: false,
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
            alert("O Item já está no carrinho.");
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
        state.isSuccess = false;
        },
        closeCheckout: (state) => {
            state.isCheckoutOpen = false;
            // mantém os outros estados como estão, só fecha o checkout
        },
        closeCart: (state) => {
        state.isCartOpen = false;
        state.isCheckoutOpen = false;
        state.isPaymentOpen = false;
        state.isConfirmOpen = false;
        state.isSuccess = false;
        },
        showCheckout: (state) => {
        state.isCheckoutOpen = true;
        state.isCartOpen = false;
        state.isPaymentOpen = false;
        state.isConfirmOpen = false;
        state.isSuccess = false;
        },
        backToCartFromCheckout: (state) => {
        state.isCartOpen = true;
        state.isCheckoutOpen = false;
        state.isPaymentOpen = false;
        state.isConfirmOpen = false;
        state.isSuccess = false;
        },
        proceedToPayment: (state) => {
        state.isPaymentOpen = true;
        state.isCheckoutOpen = false;
        state.isCartOpen = false;
        state.isConfirmOpen = false;
        state.isSuccess = false;
        },
        backToCheckoutFromPayment: (state) => {
        state.isCheckoutOpen = true;
        state.isPaymentOpen = false;
        state.isCartOpen = false;
        state.isConfirmOpen = false;
        state.isSuccess = false;
        },
        confirmPaymentSuccess: (state) => {
            state.isConfirmOpen = true;
            state.isSuccess = true;
            state.isPaymentOpen = false; 
        },
        closeConfirmation: (state) => {
        state.isConfirmOpen = false;
        state.isSuccess = false;
        },
        closeConfirmAndClearCart: (state) => {
            state.isConfirmOpen = false;
            state.isSuccess = false;
            state.items = [];
            state.isCartOpen = false;
            state.isCheckoutOpen = false;
            state.isPaymentOpen = false;
        },
    },
    });

    export const {
    addItem,
    removeItem,
    openCart,
    closeCart,
    showCheckout,
    backToCartFromCheckout,
    proceedToPayment,
    backToCheckoutFromPayment,
    confirmPaymentSuccess,
    closeConfirmation,
    closeCheckout,
    closeConfirmAndClearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
