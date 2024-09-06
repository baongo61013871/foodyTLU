import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './OrderManagement.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function OrderManagement() {
    const orders = [
        {
            id: 'OD001',
            customer: 'John Doe',
            date: '2024-09-01',
            total: '500,000 VND',
            status: 'Completed',
        },
        {
            id: 'OD002',
            customer: 'Jane Smith',
            date: '2024-09-02',
            total: '300,000 VND',
            status: 'Pending',
        },
        // Add more orders here
    ];

    return (
        <div className={cx('app-container')}>
            <Sidebar />
            <div className={cx('wrapper')}>
                <div className={cx('content-order')}>
                    <Header />
                    <div className={cx('table-container')}>
                        <table className={cx('order-table')}>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Customer</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.customer}</td>
                                        <td>{order.date}</td>
                                        <td>{order.total}</td>
                                        <td>{order.status}</td>
                                        <td>
                                            <button className={cx('view-btn')}>View</button>
                                            <button className={cx('cancel-btn')}>Cancel</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p>Total: {orders.length} orders</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderManagement;
