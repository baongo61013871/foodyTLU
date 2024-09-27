import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
};

// Fetch cart khi người dùng đăng nhập
export const fetchCart = createAsyncThunk('cart/fetchCart', async (userId) => {
    const response = await axios.get(`/api/cart?userId=${userId}`);
    return response.data; // Trả về giỏ hàng của người dùng
});

// Thêm giỏ hàng vào database khi thay đổi
export const saveCart = createAsyncThunk('cart/saveCart', async (cart, { getState }) => {
    const { auth } = getState(); // Lấy thông tin người dùng
    const response = await axios.post(`/api/cart`, { userId: auth.user.id, cart });
    return response.data;
});

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);
            const price = parseInt(newItem.price);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += newItem.price;
            } else {
                state.cartItems.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: price,
                });
            }

            state.totalQuantity += 1;
            state.totalPrice += price;
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.cartItems = action.payload.cartItems;
                state.totalQuantity = action.payload.totalQuantity;
                state.totalPrice = action.payload.totalPrice;
            })
            .addCase(saveCart.fulfilled, (state, action) => {
                // Có thể xử lý thêm nếu cần sau khi giỏ hàng được lưu thành công
            });
    },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
