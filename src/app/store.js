import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import modalProductReducer from '../features/modalProduct/modalProductSlice';
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modalProduct: modalProductReducer,
    },
});
