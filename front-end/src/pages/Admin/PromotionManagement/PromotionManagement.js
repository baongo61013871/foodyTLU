import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './PromotionManagement.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PromotionManagement() {
    const promotions = [
        {
            id: 1,
            promotion_code: 'PROMO2024',
            description: '10% off on all orders',
            discount_value: 10,
            start_date: '2024-09-01',
            end_date: '2024-12-31',
            min_order_amount: 100000,
            max_discount_amount: 50000,
            status: 'Active',
        },
        {
            id: 2,
            promotion_code: 'WINTER20',
            description: '20% off on winter collection',
            discount_value: 20,
            start_date: '2024-10-01',
            end_date: '2024-11-30',
            min_order_amount: 200000,
            max_discount_amount: 100000,
            status: 'Inactive',
        },
        // Add more promotions here
    ];

    const handleAddPromotion = () => {
        // Logic for adding a new promotion
        console.log('Add new promotion');
    };

    return (
        <div className={cx('app-container')}>
            <Sidebar />
            <div className={cx('wrapper')}>
                <div className={cx('content-promotion')}>
                    <Header />
                    <button className={cx('add-btn', 'add-promotion-btn')} onClick={handleAddPromotion}>
                        Add Promotion
                    </button>
                    <div className={cx('table-container')}>
                        <table className={cx('promotion-table')}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Promotion Code</th>
                                    <th>Description</th>
                                    <th>Discount Value</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Min Order Amount</th>
                                    <th>Max Discount Amount</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {promotions.map((promo) => (
                                    <tr key={promo.id}>
                                        <td>{promo.id}</td>
                                        <td>{promo.promotion_code}</td>
                                        <td>{promo.description}</td>
                                        <td>{promo.discount_value}%</td>
                                        <td>{promo.start_date}</td>
                                        <td>{promo.end_date}</td>
                                        <td>{promo.min_order_amount} VND</td>
                                        <td>{promo.max_discount_amount} VND</td>
                                        <td>{promo.status}</td>
                                        <td>
                                            <button className={cx('edit-btn')}>Edit</button>
                                            <button className={cx('delete-btn')}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p>Total: {promotions.length} promotions</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromotionManagement;
