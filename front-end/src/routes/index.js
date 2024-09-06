import HomePage from '~/pages/Customer/HomePage';
import CartPage from '~/pages/Customer/CartPage';
import OrderPage from '~/pages/Customer/OrderPage';
import MenuPage from '~/pages/Customer/MenuPage';
import FoodDetailPage from '~/pages/Customer/FoodDetailPage/FoodDetailPage';
import Login from '~/pages/Auth/Login';
import FoodManagement from '~/pages/Admin/FoodManagement/FoodManageMent';
import OrderManagement from '~/pages/Admin/OrderManagement/OrderManagement';
import PromotionManagement from '~/pages/Admin/PromotionManagement/PromotionManagement';
// Public Routes
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/menu', component: MenuPage },
    { path: '/cart', component: CartPage },
    { path: '/orders', component: OrderPage },
    { path: '/product/:id', component: FoodDetailPage },
    { path: '/admin', component: FoodManagement },
    { path: '/food-management', component: FoodManagement },
    { path: '/order-management', component: OrderManagement },
    { path: '/promotion-management', component: PromotionManagement },
];

const privateRoutes = [{ path: '/login', component: Login }];

export { publicRoutes, privateRoutes };
