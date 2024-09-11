// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // sử dụng localStorage để lưu trữ
import { cartSlice } from './cartSlice';
import { authSlice } from './authSlice';
import { foodSlice } from './foodSlice';
import { orderSlice } from './orderSlice';
// Cấu hình cho redux-persist
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'cart', 'foods'], // Chỉ định reducer nào muốn lưu trữ (ở đây là auth)
};

// Kết hợp các reducer lại
const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    foods: foodSlice.reducer,
    orders: orderSlice.reducer,
});

// Tạo persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo store với persistedReducer
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// Tạo persistor từ store
const persistor = persistStore(store);

export { store, persistor };
