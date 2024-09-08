import Header from '~/components/Header';
import classNames from 'classnames/bind';
import styles from './CartPage.module.scss';
import Cart from '~/components/Cart/Cart';
const cx = classNames.bind(styles);
function CartPage() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Cart />
        </div>
    );
}

export default CartPage;
