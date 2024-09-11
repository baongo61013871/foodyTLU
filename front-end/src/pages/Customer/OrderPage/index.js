import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './OrderPage.module.scss';
import classNames from 'classnames/bind';
import Header from '~/components/Header';

const cx = classNames.bind(styles);

const OrderPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems) || [];

    const [paymentMethod, setPaymentMethod] = useState('COD');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    // Tính tổng giá trị đơn hàng
    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handlePlaceOrder = () => {
        if (!address) {
            alert('Please enter your address!');
            return;
        }
        alert(`Order placed with payment method: ${paymentMethod} Succeed!!!`);
    };

    const handleCancelOrder = () => {
        navigate('/menu');
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('order-container')}>
                <h2 className={cx('title')}>Your Order</h2>

                <div className={cx('selected-items')}>
                    {cartItems && cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item.id} className={cx('item')}>
                                <img src={item.imageUrl} alt={item.name} className={cx('item-image')} />
                                <div className={cx('item-info')}>
                                    <h4>{item.name}</h4>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: {item.price}₹</p>
                                    <p>Total: {item.price * item.quantity}₹</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No items is selected</p> // Thông báo nếu không có mục nào
                    )}
                </div>

                <div className={cx('order-summary')}>
                    <div className={cx('bill-section')}>
                        <h3>Your Bill</h3>
                        <div className={cx('bill-details')}>
                            <p>
                                SubTotal: <span>{calculateSubtotal()}₹</span>
                            </p>
                            <p>
                                Tax: <span>{(calculateSubtotal() * 0.02).toFixed(2)}₹</span>
                            </p>
                            <p>
                                Grand Total: <span>{(calculateSubtotal() * 1.02).toFixed(2)}₹</span>
                            </p>
                        </div>
                    </div>

                    <div className={cx('payment-method-section')}>
                        <h3>Payment Method</h3>
                        <div className={cx('payment-options')}>
                            <label>
                                <input
                                    type="radio"
                                    value="COD"
                                    checked={paymentMethod === 'COD'}
                                    onChange={() => setPaymentMethod('COD')}
                                />
                                Cash on Delivery
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Card"
                                    checked={paymentMethod === 'Card'}
                                    onChange={() => setPaymentMethod('Card')}
                                />
                                Debit Card
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="UPI"
                                    checked={paymentMethod === 'UPI'}
                                    onChange={() => setPaymentMethod('UPI')}
                                />
                                UPI Payment
                            </label>
                        </div>
                    </div>

                    <div className={cx('address-section')}>
                        <h3>Your Address</h3>
                        <input
                            type="text"
                            placeholder="Enter Address..."
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className={cx('address-input')}
                        />
                    </div>

                    <div className={cx('order-actions')}>
                        <button className={cx('order-now-btn')} onClick={handlePlaceOrder}>
                            Order Now!
                        </button>
                        <button className={cx('cancel-order-btn')} onClick={handleCancelOrder}>
                            Cancel Order!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
