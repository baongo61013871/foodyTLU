import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, roleId } = useSelector((state) => state.auth);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // Nếu trang yêu cầu quyền admin
    if (children.props.protected === 'admin' && roleId !== 'R1') {
        return <Navigate to="/customer/home" />;
    }

    // Nếu trang yêu cầu quyền khách hàng
    if (children.props.protected === 'customer' && roleId !== 'R2') {
        return <Navigate to="/admin/dashboard" />;
    }

    return children;
};

export default PrivateRoute;
