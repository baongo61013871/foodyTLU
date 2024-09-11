// src/components/ProductDetail.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ProductDetail.module.scss';
import classNames from 'classnames/bind';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons from React Icons
import Header from '~/components/Header';
import Footer from '~/components/Footer/Footer';
import Delivery from '../HomePage/DeliverySection/Delivery';
import { addItem } from '~/redux/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const ProductDetail = () => {
    const { id } = useParams(); // Get the product id from the URL
    const [quantity, setQuantity] = useState(1);
    const foodItems = useSelector((state) => state.foods.foodItems);
    const product = foodItems.find((item) => item.id === parseInt(id)); // Find the product using the id
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if (!product) {
        return <div>Product not found!</div>; // If no product is found, display this message
    }

    // Function to render the rating stars
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<FaStar key={i} className={cx('text-warning')} />);
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars.push(<FaStar key={i} className={cx('text-warning')} style={{ opacity: 0.5 }} />);
            } else {
                stars.push(<FaRegStar key={i} className={cx('text-muted')} />);
            }
        }
        return stars;
    };

    const handleAddToCart = () => {
        try {
            dispatch(addItem({ ...product, quantity }));
            setQuantity((prev) => prev + 1);
            toast.success(`Đã thêm ${quantity} ${product.name} vào giỏ hàng.`, {
                onClick: () => navigate('/cart'),
            });
        } catch (error) {
            toast.error('Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng.');
        }
    };
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className="container">
                <div className={cx('product-detail', 'container', 'py-5')}>
                    <h2 className={cx('page-title', 'text-center', 'fw-bold', 'mb-4', 'fs-1', 'font-vietnam')}>
                        {product.name}
                    </h2>
                    <div className={cx('row', 'g-4')}>
                        <div className={cx('col-md-6')}>
                            <img src={product.imageUrl} alt={product.name} className={cx('product-img')} />
                        </div>
                        <div className={cx('col-md-6')}>
                            <h3 className={cx('fw-bold', 'mb-3')}>Price: {product.price}$</h3>
                            <p className={cx('text-muted')}>{product.type}</p>
                            <div className={cx('d-flex', 'align-items-center', 'mb-3')}>
                                {renderStars(product.rating)}
                                <span className={cx('ms-2')}>{product.rating} / 5</span>
                            </div>
                            <p>Estimated Delivery Time: {product.time}</p>
                            <button
                                className={cx('btn', 'btn-dark', 'py-3', 'px-5', 'fs-5', 'my-4')}
                                onClick={handleAddToCart}
                            >
                                <FontAwesomeIcon icon={faCartShopping} className="me-4" />
                                Add to Cart
                            </button>
                            <h4 className={cx('fw-bold', 'mt-3')}>Product Description</h4>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('more-option')}>
                <Delivery foodType={product.type} />
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Footer />
        </div>
    );
};

export default ProductDetail;
