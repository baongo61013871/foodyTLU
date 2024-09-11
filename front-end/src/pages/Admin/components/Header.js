import styles from './Header.module.scss';
import classnames from 'classnames/bind';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate để điều hướng
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch để gửi action
import { logout } from '~/redux/authSlice'; // Import action logout từ authSlice

const cx = classnames.bind(styles);

function Header() {
    const location = useLocation(); // Lấy thông tin route hiện tại
    const dispatch = useDispatch(); // Khởi tạo dispatch để gửi action
    const navigate = useNavigate(); // Khởi tạo navigate để điều hướng sau khi đăng xuất

    // Lấy thông tin người dùng từ Redux store
    const user = useSelector((state) => state.auth.user);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // Ánh xạ route với tiêu đề động
    const pageTitles = {
        '/food-management': 'Quản lý đồ ăn',
        '/order-management': 'Quản lý đơn hàng',
        '/promotion-management': 'Quản lý khuyến mãi',
        '/admin': 'Trang quản trị',
    };

    // Dựa trên location.pathname để lấy tiêu đề
    const currentTitle = pageTitles[location.pathname] || 'Trang quản lý';

    // Chức năng đăng xuất
    const handleLogout = () => {
        dispatch(logout()); // Gửi action logout để cập nhật lại Redux store
        navigate('/login'); // Điều hướng về trang login sau khi đăng xuất
    };

    return (
        <header className={cx('header', 'font-vietnam')}>
            <h1>{currentTitle}</h1>
            <div className={cx('user-info')}>
                {/* Kiểm tra xem người dùng có đăng nhập không, nếu có thì hiển thị tên */}
                {isAuthenticated && user ? <span>{user.user.firstName}</span> : <span>Khách</span>}
                {isAuthenticated && (
                    <button
                        className="btn btn-outline-danger fs-4 px-4 py-2"
                        onClick={handleLogout} // Gọi hàm handleLogout khi nhấn Đăng xuất
                    >
                        Đăng xuất
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;
