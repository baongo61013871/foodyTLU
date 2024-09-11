// src/redux/slices/foodSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    foodItems: [],
    totalItems: 0,
};

export const foodSlice = createSlice({
    name: 'foods',
    initialState,
    reducers: {
        setFoodItems: (state, action) => {
            state.foodItems = action.payload;
            state.totalItems = action.payload.length;
        },
        addFoodItem: (state, action) => {
            state.foodItems.push(action.payload);
            state.totalItems++;
        },
        removeFoodItem: (state, action) => {
            state.foodItems = state.foodItems.filter((food) => food.id !== action.payload);
            state.totalItems--;
        },
        updateFoodItem: (state, action) => {
            const index = state.foodItems.findIndex((food) => food.id === action.payload.id);
            if (index !== -1) {
                state.foodItems[index] = action.payload;
            }
        },
    },
});

export const { setFoodItems, addFoodItem, removeFoodItem, updateFoodItem } = foodSlice.actions;
