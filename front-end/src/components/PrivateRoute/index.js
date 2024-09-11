// src/components/PrivateRoute.js
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isProtected }) => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const userCheckRole = user.user.roleId;
    if (!isAuthenticated) {
        // Nếu chưa đăng nhập, chuyển hướng tới trang đăng nhập
        return <Navigate to="/login" />;
    }

    // Nếu là customer và đang cố truy cập vào các route của admin

    if (userCheckRole === 'R2' && isProtected === 'admin') {
        // Chuyển hướng về trang chủ nếu customer cố truy cập vào route dành cho admin
        return <Navigate to="/" />;
    }

    // Nếu hợp lệ, trả về component được bảo vệ
    return children;
};

export default PrivateRoute;
