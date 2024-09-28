import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderItems, removeOrderItem, updateOrderItem } from '~/redux/orderSlice'; // Redux actions
import { getAllOrdersApi, deleteOrderById, confirmOrderApi } from '~/services/userServices'; // API services
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
    const [currentOrder, setCurrentOrder] = useState(null); // Trạng thái để lưu đơn hàng hiện tại

    useEffect(() => {
        const fetchOrderInfo = async () => {
            try {
                let orderInfo = await getAllOrdersApi();
                if (orderInfo && orderInfo.order.length > 0) {
                    console.log(orderInfo.order, 'check orderinfo');
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
        setCurrentOrder(order); // Cập nhật đơn hàng hiện tại
        setShowModal(true); // Hiển thị modal
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentOrder(null); // Đặt lại đơn hàng khi đóng modal
    };

    const handleDelete = async (orderId) => {
        try {
            await deleteOrderById(orderId); // Xóa khỏi backend
            dispatch(removeOrderItem(orderId));
            console.log('Order deleted successfully.');
        } catch (e) {
            console.log('Error deleting order:', e);
        }
    };

    const handleConfirmOrder = async (orderId) => {
        try {
            const updatedOrder = await confirmOrderApi(orderId, 'in delivery');
            if (updatedOrder.errCode === 0) {
                dispatch(updateOrderItem(updatedOrder.order));
            }
        } catch (e) {
            console.error('Error confirming order:', e);
        }
    };

    const handleDeliverOrder = async (orderId) => {
        try {
            const updatedOrder = await confirmOrderApi(orderId, 'delivered');
            if (updatedOrder.errCode === 0) {
                dispatch(updateOrderItem(updatedOrder.order));
            }
        } catch (e) {
            console.error('Error delivering order:', e);
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
                                    <th>Địa chỉ</th>
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
                                        <td>{order.shippingAddress}</td>
                                        <td>{order?.status}</td>
                                        <td>
                                            <div className={cx('btn-wrapper')}>
                                                <button
                                                    className={cx('view-btn')}
                                                    onClick={() => handleOpenModal(order)}
                                                >
                                                    Xem
                                                </button>
                                                <button
                                                    className={cx('confirm-btn', 'mt-3')}
                                                    onClick={() => handleConfirmOrder(order.id)}
                                                    disabled={
                                                        order.status === 'in delivery' || order.status === 'delivered'
                                                    }
                                                >
                                                    Xác nhận
                                                </button>
                                                <button
                                                    className={cx('deliver-btn', 'mt-3')}
                                                    onClick={() => handleDeliverOrder(order.id)}
                                                    disabled={order.status !== 'in delivery'}
                                                >
                                                    Đã giao
                                                </button>
                                                <button
                                                    className={cx('cancel-btn', 'mt-3')}
                                                    onClick={() => handleDelete(order.id)}
                                                >
                                                    Hủy đơn
                                                </button>
                                            </div>
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
            {currentOrder && <OrderModal show={showModal} onClose={handleCloseModal} orderDetailsData={currentOrder} />}
        </div>
    );
}

export default OrderManagement;
