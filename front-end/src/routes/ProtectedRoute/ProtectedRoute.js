import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children, requiredRole }) {
    const { isLoggedIn, role } = useSelector((state) => state.auth);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    if (requiredRole && role !== requiredRole) {
        return <Navigate to="/" replace />; // Chuyển hướng nếu không có quyền
    }

    return children;
}

export default ProtectedRoute;
