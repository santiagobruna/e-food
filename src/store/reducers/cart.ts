import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProdutoAPI } from "../../components/Modal";

type CartState = {
    items: ProdutoAPI[]
    isOpen: boolean
}
const initialState: CartState = {
    items: [],
    isOpen: false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ProdutoAPI>) => {
            console.log('Reducer add disparado com:', action.payload)
            const food = state.items.find((item) => item.id === action.payload.id);
            if(!food){
                state.items.push(action.payload);
            }else {
                alert('O Item já está no carrinho.')
            }
        },
        remove: (state,  action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})
export const {open, close, add, remove} = cartSlice.actions;
export default cartSlice.reducer;