import { configureStore } from "@reduxjs/toolkit";
import { api } from '../services/api'; // ou o caminho que tiver usado
import cartReducer from './reducers/cart';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
export type RootReducer = ReturnType<typeof store.getState>