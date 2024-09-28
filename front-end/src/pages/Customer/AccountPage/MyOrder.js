import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setOrderItems } from '~/redux/orderSlice'; // Redux actions
import { getOrdersbyUserId } from '~/services/userServices'; // API services
import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import Header from '~/components/Header';
import Sidebar from '~/pages/Customer/AccountPage/components/SideBar';
const cx = classNames.bind(styles);

function MyOrder() {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.orderItems);
    const user = useSelector((state) => state.auth.user);
    const userId = user.id;
    useEffect(() => {
        const fetchOrderInfo = async () => {
            try {
                let orderInfo = await getOrdersbyUserId(userId);
                console.log(orderInfo);
                if (orderInfo && orderInfo.order.length > 0) {
                    dispatch(setOrderItems(orderInfo.order));
                } else {
                    console.log('No orders found.');
                }
            } catch (e) {
                console.error('Error fetching orders:', e);
            }
        };
        fetchOrderInfo();
    }, [dispatch, userId]);

    const renderOrderStatus = (status) => {
        switch (status) {
            case 'pending_confirmation':
                return 'Chờ xác nhận';
            case 'in delivery':
                return 'Đang giao';
            case 'delivered':
                return 'Đã giao hàng';
            default:
                return 'Trạng thái không xác định';
        }
    };
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('profile-container', 'font-vietnam2')}>
                <Sidebar />
                <div className={cx('profile-content')}>
                    <h2>Đơn Hàng Của Tôi</h2>
                    <div className={cx('orders-list')}>
                        {orders && orders.length > 0 ? (
                            orders.map((order) => (
                                <div key={order.id} className={cx('order-item')}>
                                    <div className={cx('order-info')}>
                                        <div>Mã đơn hàng: OD{order.id}</div>
                                        <div>Ngày đặt: {new Date(order.createdAt).toLocaleDateString()}</div>
                                        <div>Trạng thái: {renderOrderStatus(order.status)}</div>
                                    </div>
                                    <div className={cx('order-details')}>
                                        {order.orderDetails.map((item) => (
                                            <div key={item.id} className={cx('order-detail-item')}>
                                                <img src={item.Product.imageUrl} alt={item.productName} />
                                                <div>{item.productName}</div>
                                                <div>Số lượng: {item.quantity}</div>
                                                <div>Giá: {item.price}₫</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Bạn chưa có đơn hàng nào.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyOrder;
