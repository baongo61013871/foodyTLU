import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);
function SideBarAccount() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <ul className={cx('menu')}>
                    <li className={cx('menu-item')}>
                        <NavLink to="/account" className={({ isActive }) => (isActive ? cx('active') : '')}>
                            Hồ Sơ
                        </NavLink>
                    </li>
                    <li className={cx('menu-item')}>
                        <NavLink to="/my-order" className={({ isActive }) => (isActive ? cx('active') : '')}>
                            Đơn Hàng Của Tôi
                        </NavLink>
                    </li>
                    <li className={cx('menu-item')}>
                        <NavLink to="/change-password" className={({ isActive }) => (isActive ? cx('active') : '')}>
                            Đổi Mật Khẩu
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBarAccount;
