// src/routes/index.js

import HomePage from '~/pages/Customer/HomePage';
import CartPage from '~/pages/Customer/CartPage';
import OrderPage from '~/pages/Customer/OrderPage';
import MenuPage from '~/pages/Customer/MenuPage';
import ProductDetail from '~/pages/Customer/MenuPage/ProductDetail';
import Login from '~/pages/Auth/Login';
import FoodManagement from '~/pages/Admin/FoodManagement/FoodManageMent';
import OrderManagement from '~/pages/Admin/OrderManagement/OrderManagement';
import PromotionManagement from '~/pages/Admin/PromotionManagement/PromotionManagement';

// Public Routes
const publicRoutes = [
    { path: '/', component: HomePage, isProtected: 'customer' },
    { path: '/menu', component: MenuPage, isProtected: 'customer' },
    { path: '/cart', component: CartPage, isProtected: 'customer' },
    { path: '/orders', component: OrderPage, isProtected: 'customer' },
    { path: '/product/:id', component: ProductDetail, product: true },
    { path: '/login', component: Login }, // Đăng nhập không yêu cầu bảo vệ
];

// Admin Routes
const adminRoutes = [
    { path: '/admin', component: FoodManagement, isProtected: 'admin' },
    { path: '/food-management', component: FoodManagement, isProtected: 'admin' },
    { path: '/order-management', component: OrderManagement, isProtected: 'admin' },
    { path: '/promotion-management', component: PromotionManagement, isProtected: 'admin' },
];

export { publicRoutes, adminRoutes };
