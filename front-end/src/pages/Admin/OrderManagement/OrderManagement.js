import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderItems, removeOrderItem } from '~/redux/orderSlice'; // Redux actions
import { getAllOrdersApi, deleteOrderById } from '~/services/userServices'; // API services
import convertDate from '~/utils/localeDateString';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import OrderModal from '~/components/Modal/OrderModal'; // Modal component for viewing order details
import styles from './OrderManagement.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function OrderManagement() {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.orderItems);
    const totalOrders = useSelector((state) => state.orders.totalOrders);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchOrderInfo = async () => {
            try {
                let orderInfo = await getAllOrdersApi();
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
    }, [dispatch]);

    const handleOpenModal = (order) => {
        // setCurrentOrder(order);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDelete = async (orderId) => {
        try {
            dispatch(removeOrderItem(orderId)); // Xóa khỏi Redux store trước
            await deleteOrderById(orderId); // Xóa khỏi backend
            console.log('Order deleted successfully.');
        } catch (e) {
            console.log('Error deleting order:', e);
        }
    };

    return (
        <div className={cx('app-container')}>
            <Sidebar />
            <div className={cx('wrapper')}>
                <div className={cx('content-order')}>
                    <Header />
                    <div className={cx('table-container')}>
                        <table className={cx('order-table')}>
                            <thead>
                                <tr className="font-vietnam">
                                    <th>Mã đơn hàng</th>
                                    <th>Khách hàng</th>
                                    <th>Ngày đặt</th>
                                    <th>Tổng giá</th>
                                    <th>PT Thanh toán</th>
                                    <th>Trạng thái</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td>OD{order.id}</td>
                                        <td>{order?.user?.firstName + ' ' + order?.user?.lastName}</td>
                                        <td>{order?.orderDate ? convertDate(order.orderDate) : ''}</td>
                                        <td>{order.totalPrice} $</td>
                                        <td>{order.paymentMethod} </td>
                                        <td>{order?.status}</td>
                                        <td>
                                            <button className={cx('view-btn')} onClick={() => handleOpenModal(order)}>
                                                Xem
                                            </button>
                                            <button
                                                className={cx('cancel-btn', 'mt-3')}
                                                onClick={() => handleDelete(order.id)}
                                            >
                                                Cancel
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p>Total: {totalOrders} orders</p>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <OrderModal show={showModal} onClose={handleCloseModal} />
        </div>
    );
}

export default OrderManagement;
