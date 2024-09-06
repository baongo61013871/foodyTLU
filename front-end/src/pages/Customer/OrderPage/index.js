import Header from '~/components/Header';
import classNames from 'classnames/bind';
import styles from './OrderPage.module.scss';

const cx = classNames.bind(styles);
function OrderPage() {
    return (
        <div className={cx('wrapper')}>
            <Header />
        </div>
    );
}

export default OrderPage;
