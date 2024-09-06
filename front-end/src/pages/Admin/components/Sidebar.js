import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('sidebar', 'font-vietnam')}>
            <div className={cx('logo')}>Food Manager</div>
            <ul>
                <li>
                    <Link className={cx('manage-link')} to="/">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link className={cx('manage-link')} to="/food-management">
                        Quản lý đồ ăn
                    </Link>
                </li>
                <li>
                    <Link className={cx('manage-link')} to="/order-management">
                        Quản lý đơn hàng
                    </Link>
                </li>
                <li>
                    <Link className={cx('manage-link')} to="/promotion-management">
                        Quản lý khuyến mãi
                    </Link>
                </li>
                <li>
                    <Link className={cx('manage-link')} to="/customer-management">
                        Quản lý khách hàng
                    </Link>
                </li>
                <li>
                    <Link className={cx('manage-link')} to="/inventory">
                        Inventory
                    </Link>
                </li>
                <li>
                    <Link className={cx('manage-link')} to="/reports">
                        Reports
                    </Link>
                </li>
                <li>
                    <Link className={cx('manage-link')} to="/settings">
                        Settings
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
