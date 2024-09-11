import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderItems: [],
    totalOrders: 0,
};

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setOrderItems: (state, action) => {
            state.orderItems = action.payload;
            state.totalOrders = action.payload.length;
        },
        addOrderItem: (state, action) => {
            state.orderItems.push(action.payload);
            state.totalOrders++;
        },
        removeOrderItem: (state, action) => {
            state.orderItems = state.orderItems.filter((order) => order.id !== action.payload);
            state.totalOrders--;
        },
        updateOrderItem: (state, action) => {
            const index = state.orderItems.findIndex((order) => order.id === action.payload.id);
            if (index !== -1) {
                state.orderItems[index] = action.payload;
            }
        },
    },
});

export const { setOrderItems, addOrderItem, removeOrderItem, updateOrderItem } = orderSlice.actions;
