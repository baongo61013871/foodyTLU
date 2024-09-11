import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [], // Mảng chứa các sản phẩm trong giỏ hàng
    totalQuantity: 0, // Tổng số lượng sản phẩm
    totalPrice: 0, // Tổng giá trị của giỏ hàng
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += newItem.price;
            } else {
                state.cartItems.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            }

            state.totalQuantity += 1;
            state.totalPrice += newItem.price;
        },

        removeItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.totalPrice;
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);

            if (existingItem) {
                state.totalQuantity = state.totalQuantity - existingItem.quantity + quantity;
                state.totalPrice = state.totalPrice - existingItem.totalPrice + existingItem.price * quantity;
                existingItem.quantity = quantity;
                existingItem.totalPrice = existingItem.price * quantity;
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
