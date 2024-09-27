// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: {},
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = { ...action.payload.user };
            console.log('check login', state.user);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = {};
        },
        updateInfoUser: (state, action) => {
            const updatedUser = action.payload.user;
            state.user = { ...state.user, ...updatedUser };
        },
    },
});

export const { loginSuccess, logout, updateInfoUser } = authSlice.actions;
