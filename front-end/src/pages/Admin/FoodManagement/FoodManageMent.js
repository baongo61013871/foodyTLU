import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFoodItems, addFoodItem, removeFoodItem, updateFoodItem } from '~/redux/foodSlice';
import { createFoodApi, getAllFoodApi, deleteFoodbyId, editFoodApi } from '~/services/userServices';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import FoodModal from '~/components/Modal/FoodModal';
import styles from './FoodManagement.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FoodManagement() {
    const dispatch = useDispatch();
    const foods = useSelector((state) => state.foods.foodItems);
    const totalItems = useSelector((state) => state.foods.totalItems);

    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('add'); // 'add' | 'edit'
    const [currentFood, setCurrentFood] = useState(null);
    useEffect(() => {
        const fetchfoodInfo = async () => {
            try {
                let foodInfo = await getAllFoodApi();
                if (foodInfo) {
                    dispatch(setFoodItems(foodInfo.data));
                } else {
                    console.log('khongcogitrongday');
                }
            } catch (e) {}
        };
        fetchfoodInfo();
    }, [dispatch]);
    const handleOpenModal = (mode, food = null) => {
        setModalMode(mode);
        setCurrentFood(food);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSaveFood = async (foodData) => {
        try {
            if (modalMode === 'add') {
                let response = await createFoodApi(foodData);
                dispatch(addFoodItem(response.data));
            }
            if (modalMode === 'edit') {
                let response = await editFoodApi(foodData);
                dispatch(updateFoodItem(response.data));
            }
        } catch (e) {
            console.log(e);
        }
        handleCloseModal();
    };
    const handleDelete = async (foodId) => {
        try {
            dispatch(removeFoodItem(foodId));
            let response = await deleteFoodbyId(foodId);
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className={cx('app-container')}>
            <Sidebar />
            <div className={cx('wrapper')}>
                <div className={cx('content-food')}>
                    <Header />
                    <div className={cx('table-container')}>
                        <button className={cx('add-button')} onClick={() => handleOpenModal('add')}>
                            Thêm món ăn
                        </button>
                        <table className={cx('food-table')}>
                            <thead>
                                <tr>
                                    <th>Mã món</th>
                                    <th>Tên món</th>
                                    <th>Loại món</th>
                                    <th>Giá</th>
                                    <th>Đánh giá</th>
                                    <th>Thời gian chế biến</th>
                                    <th>Mô tả</th>
                                    <th>Hình ảnh</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {foods.map((food) => (
                                    <tr key={food.id}>
                                        <td>FD{food.id}</td>
                                        <td>{food.name}</td>
                                        <td>{food.type}</td>
                                        <td>
                                            {food.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                        </td>
                                        <td>{food.rating}</td>
                                        <td>{food.time}</td>
                                        <td>{food.description}</td>
                                        <td>
                                            <img
                                                src={food.imageUrl}
                                                alt={food.name}
                                                style={{ width: '100px', height: '100px' }}
                                            />
                                        </td>
                                        <td>
                                            <button
                                                className={cx('edit-btn')}
                                                onClick={() => handleOpenModal('edit', food)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className={cx('delete-btn', 'mt-3')}
                                                onClick={() => handleDelete(food.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p>Total: {totalItems} records</p>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <FoodModal
                show={showModal}
                onClose={handleCloseModal}
                onSave={handleSaveFood}
                foodData={currentFood}
                mode={modalMode}
            />
        </div>
    );
}

export default FoodManagement;
