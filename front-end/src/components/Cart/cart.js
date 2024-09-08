import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '~/redux/cartSlice';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    return (
        <div className={cx('cart-container')}>
            <h2 className={cx('cart-title')}>GIỎ HÀNG </h2>
            {cartItems.length === 0 ? (
                <p className={cx('empty-cart')}>No items in cart.</p>
            ) : (
                <div className={cx('cart-content')}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={cx('cart-item')}>
                            <div className={cx('item-info')}>
                                <input type="checkbox" className={cx('item-checkbox')} />
                                <img src={item.imageUrl} alt={item.name} className={cx('item-image')} />
                                <div className={cx('item-details')}>
                                    <h4 className={cx('item-name')}>{item.name}</h4>
                                    <p className={cx('item-price')}>Price: ${item.price}</p>
                                    <div className={cx('item-quantity')}>
                                        <button
                                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => handleRemoveItem(item.id)} className={cx('remove-item-btn')}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className={cx('cart-summary')}>
                        <h3>Total Quantity: {totalQuantity}</h3>
                        <h3>Total Price: ${totalPrice}</h3>
                        <button className={cx('checkout-btn')}>Mua Hàng ({totalQuantity})</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
