import React, { useEffect } from 'react';
import styles from './OrderModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const OrderModal = ({ show, onClose, orderDetailsData }) => {
    const [order, setOrder] = React.useState({
        customerName: '',
        orderDetails: [],
        totalPrice: 0,
        status: 'pending',
        ...orderDetailsData,
    });

    useEffect(() => {
        if (orderDetailsData) {
            setOrder(orderDetailsData);
        }
    }, [orderDetailsData]);

    if (!show) return null;

    return (
        <div className={cx('modal-container', 'font-vietnam')}>
            <div className={cx('modal')}>
                <div className={cx('modal-header')}>
                    <h2>Chi Tiết Đơn Hàng</h2>
                    <button className={cx('close-button')} onClick={onClose}>
                        X
                    </button>
                </div>
                <div className={cx('modal-body')}>
                    <h4>Tên Khách Hàng: {order.user.firstName}</h4>

                    {order.orderDetails.map((detail, index) => (
                        <div key={index} className={cx('order-item')}>
                            <div className={cx('product-image')}>
                                <img
                                    src={detail.Product.imageUrl || '/placeholder.png'}
                                    alt={detail.Product.name}
                                    className={cx('image')}
                                />
                            </div>
                            <div className={cx('product-info')}>
                                <h5>{detail.Product.name}</h5>
                                <p className={cx('description')}>{detail.Product.description}</p>
                                <div className={cx('order-info')}>
                                    <span className={cx('quantity')}>
                                        <span className={cx('product-price', 'fs-5', 'me-2')}>{detail.price}$</span>x{' '}
                                        {detail.quantity}
                                    </span>
                                    <span className={cx('price')}>Thành tiền: {detail.quantity * detail.price}$</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className={cx('total-price')}>
                        <strong>Tổng giá đơn hàng: {order.totalPrice}₫</strong>
                    </div>
                </div>
                <div className={cx('modal-footer')}>
                    <button className={cx('close-btn')} onClick={onClose}>
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
