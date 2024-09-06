import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './FoodManagement.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FoodManagement() {
    const foods = [
        {
            id: 'FD001',
            name: 'Pizza Margherita',
            category: 'Pizza',
            price: '200,000 VND',
            quantity: 50,
        },
        {
            id: 'FD002',
            name: 'Spaghetti Carbonara',
            category: 'Pasta',
            price: '150,000 VND',
            quantity: 30,
        },
        // Add more food items here
    ];

    return (
        <div className={cx('app-container')}>
            <Sidebar />
            <div className={cx('wrapper')}>
                <div className={cx('content-food')}>
                    <Header />
                    <div className={cx('table-container')}>
                        <table className={cx('food-table')}>
                            <thead>
                                <tr>
                                    <th>Mã món</th>
                                    <th>Tên món</th>
                                    <th>Danh mục</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {foods.map((food) => (
                                    <tr key={food.id}>
                                        <td>{food.id}</td>
                                        <td>{food.name}</td>
                                        <td>{food.category}</td>
                                        <td>{food.price}</td>
                                        <td>{food.quantity}</td>
                                        <td>
                                            <button className={cx('edit-btn')}>Edit</button>
                                            <button className={cx('delete-btn')}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p>Total: {foods.length} records</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodManagement;
