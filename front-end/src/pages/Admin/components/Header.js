import styles from './Header.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);
function Header() {
    return (
        <header className={cx('header', 'font-vietnam')}>
            <h1>Quản lý đồ ăn</h1>
            <div className={cx('user-info')}>
                <span>Bảo Ngô</span>
                <button class="btn btn-outline-danger fs-4 px-4 py-2">Đăng xuất</button>
            </div>
        </header>
    );
}

export default Header;
