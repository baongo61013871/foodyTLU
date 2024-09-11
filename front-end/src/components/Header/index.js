import { NavLink, useNavigate } from 'react-router-dom';
import React from 'react';
import styles from './Header.module.scss';
import classnames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '~/redux/authSlice'; // Import action logout từ authSlice

const cx = classnames.bind(styles);

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Lấy thông tin người dùng từ Redux store
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user).user;

    // Chức năng đăng xuất
    const handleLogout = () => {
        dispatch(logout()); // Gửi action logout để cập nhật lại Redux store
        navigate('/login'); // Điều hướng về trang login sau khi đăng xuất
    };

    return (
        <nav className={cx('header', 'navbar navbar-expand-lg navbar-dark')}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    <div className="d-flex flex-column align-items-center">
                        <span className="fs-4 font-logo">Thang Long Food</span>
                        <span className="fs-6 font-italic">Food Auto Good</span>
                    </div>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={cx('navbar-list', 'collapse navbar-collapse')} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={cx('nav-item')}>
                            <NavLink className={({ isActive }) => cx('nav-link', { active: isActive })} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className={cx('nav-item')}>
                            <NavLink className={({ isActive }) => cx('nav-link', { active: isActive })} to="/menu">
                                Menu
                            </NavLink>
                        </li>
                        <li className={cx('nav-item')}>
                            <NavLink className={({ isActive }) => cx('nav-link', { active: isActive })} to="/cart">
                                Cart
                            </NavLink>
                        </li>
                        <li className={cx('nav-item')}>
                            <NavLink className={({ isActive }) => cx('nav-link', { active: isActive })} to="/orders">
                                Orders
                            </NavLink>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        {/* Nếu người dùng đã đăng nhập, hiển thị nút Đăng xuất và thông tin người dùng */}
                        {isAuthenticated && (
                            <>
                                <span className={cx('nav-link', 'user-info', 'me-3', 'text-white')}>
                                    Xin chào, {user.firstName}!
                                </span>
                                <button
                                    className={cx('btn', 'btn-outline-light', 'fs-6', 'px-4', 'py-3')}
                                    onClick={handleLogout}
                                >
                                    Đăng xuất
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
