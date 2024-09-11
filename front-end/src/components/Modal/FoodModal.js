import React, { useState, useEffect } from 'react';

function FoodModal({ show, onClose, onSave, foodData, mode }) {
    const [food, setFood] = useState(
        foodData || {
            name: '',
            type: '',
            price: 0,
            rating: '',
            time: '',
            description: '',
            imageUrl: '',
        },
    );

    useEffect(() => {
        if (foodData) {
            setFood(foodData);
        }
    }, [foodData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFood((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(food);
    };

    if (!show) return null;

    return (
        <div className="modal show" style={{ display: 'block' }} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{mode === 'add' ? 'Thêm Món Ăn' : 'Chỉnh Sửa Món Ăn'}</h5>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Tên món ăn</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Tên món ăn"
                                    value={food.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Loại món ăn</label>
                                <input
                                    type="text"
                                    name="type"
                                    className="form-control"
                                    placeholder="Loại món ăn"
                                    value={food.type}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Giá</label>
                                <input
                                    type="number"
                                    name="price"
                                    className="form-control"
                                    placeholder="Giá"
                                    value={food.price}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Đánh giá</label>
                                <input
                                    type="text"
                                    name="rating"
                                    className="form-control"
                                    placeholder="Đánh giá"
                                    value={food.rating}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Thời gian chế biến</label>
                                <input
                                    type="text"
                                    name="time"
                                    className="form-control"
                                    placeholder="Thời gian chế biến"
                                    value={food.time}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mô tả</label>
                                <textarea
                                    name="description"
                                    className="form-control"
                                    placeholder="Mô tả"
                                    value={food.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Đường dẫn hình ảnh</label>
                                <input
                                    type="text"
                                    name="imageUrl"
                                    className="form-control"
                                    placeholder="Đường dẫn hình ảnh"
                                    value={food.imageUrl}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">
                                {mode === 'add' ? 'Thêm Món' : 'Cập Nhật'}
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={onClose}>
                                Hủy
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FoodModal;
