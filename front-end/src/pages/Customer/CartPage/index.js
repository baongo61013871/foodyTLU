import Header from '~/components/Header';
import classNames from 'classnames/bind';
import styles from './CartPage.module.scss';

const cx = classNames.bind(styles);
function CartPage() {
    return (
        <div className={cx('wrapper')}>
            <Header />
        </div>
    );
}

export default CartPage;
