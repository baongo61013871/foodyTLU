import classNames from 'classnames/bind';
import styles from './CustomToast.module.scss';
const cx = classNames.bind(styles);
const CustomToast = ({ success }) =>
    success ? (
        <div className={cx('wrapper')}>
            <h3 className={cx('toast-title', 'text-center')}>Đặt hàng thành công</h3>
            <button className={cx('button', 'btn--primary', 'p-2', 'text-center')}>Xem đơn hàng của bạn</button>
        </div>
    ) : (
        <div className={cx('wrapper')}>
            <h3 className={cx('toast-title', 'text-center')}>Đặt hàng thất bại,Có lỗi</h3>
        </div>
    );

export default CustomToast;
