import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '~/redux/cartSlice';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedItems, setSelectedItems] = useState([]);

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    const handleSelectItem = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const handleRemoveSelectedItems = () => {
        selectedItems.forEach((id) => dispatch(removeItem(id)));
        setSelectedItems([]);
    };

    const handleBuyItem = () => {
        navigate('/orders');
    };
    return (
        <div className={cx('cart-container')}>
            <h2 className={cx('cart-title')}>Giỏ Hàng </h2>
            {cartItems.length === 0 ? (
                <p className={cx('empty-cart')}>No items in cart.</p>
            ) : (
                <div className={cx('cart-content')}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={cx('cart-item')}>
                            <input
                                type="checkbox"
                                className={cx('item-checkbox')}
                                checked={selectedItems.includes(item.id)}
                                onChange={() => handleSelectItem(item.id)}
                            />
                            <div className={cx('item-info')}>
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
                            <button className={cx('remove-item-btn')} onClick={() => handleRemoveItem(item.id)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    ))}
                    <div className={cx('cart-summary')}>
                        <h3>Total Quantity: {totalQuantity}</h3>
                        <h3>Total Price: ${totalPrice}</h3>
                        <button
                            className={cx('remove-selected-btn')}
                            onClick={handleRemoveSelectedItems}
                            disabled={selectedItems.length === 0}
                        >
                            <FontAwesomeIcon icon={faTrash} /> Xóa sản phẩm đã chọn
                        </button>
                        <button className={cx('checkout-btn')} onClick={handleBuyItem}>
                            Mua Hàng ({totalQuantity})
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
