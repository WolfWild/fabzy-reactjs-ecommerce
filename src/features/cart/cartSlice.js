import { createSlice } from '@reduxjs/toolkit';
import Storages from '../../constants/storage-keys';
const initialState = {
    cartItems: JSON.parse(localStorage.getItem(Storages.CART)) || [],
    loading: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload;
            const checkIndex = state.cartItems.findIndex((item) => item.id === newItem.id);
            checkIndex >= 0
                ? (state.cartItems[checkIndex].quantity += newItem.quantity)
                : state.cartItems.push(newItem);
            localStorage.setItem(Storages.CART, JSON.stringify(state.cartItems));
        },
        updateItemOnCart: (state, action) => {
            const checkIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            state.cartItems[checkIndex].quantity = action.payload.quantity;
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            localStorage.setItem(Storages.CART, JSON.stringify(state.cartItems));
        },
    },
});

export const { addItemToCart, updateItemOnCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
