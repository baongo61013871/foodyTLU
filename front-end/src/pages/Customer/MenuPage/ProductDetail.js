// src/components/ProductDetail.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ProductDetail.module.scss';
import classNames from 'classnames/bind';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons from React Icons
import Header from '~/components/Header';
import Footer from '~/components/Footer/Footer';
import Delivery from '../HomePage/DeliverySection/Delivery';
import { addItem } from '~/redux/cartSlice';
const cx = classNames.bind(styles);

const ProductDetail = ({ foodItems }) => {
    const { id } = useParams(); // Get the product id from the URL
    const [quantity, setQuantity] = useState(1);
    const product = foodItems.find((item) => item.id === parseInt(id)); // Find the product using the id
    const dispatch = useDispatch();
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
            toast.success(`Đã thêm ${product.name} vào giỏ hàng.`);
        } catch (error) {
            toast.error('Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng.');
        }
    };
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className="container">
                <div className={cx('product-detail', 'container', 'py-5')}>
                    <h2 className={cx('page-title', 'text-center', 'fw-bold', 'mb-4', 'fs-1')}>{product.name}</h2>
                    <div className={cx('row')}>
                        <div className={cx('col-md-6')}>
                            <img src={product.imageUrl} alt={product.name} className={cx('product-img', 'img-fluid')} />
                        </div>
                        <div className={cx('col-md-6')}>
                            <h3 className={cx('fw-bold', 'mb-3')}>Price: {product.price}</h3>
                            <p className={cx('text-muted')}>{product.type}</p>
                            <div className={cx('d-flex', 'align-items-center', 'mb-3')}>
                                {renderStars(product.rating)}
                                <span className={cx('ms-2')}>{product.rating} / 5</span>
                            </div>
                            <p>Estimated Delivery Time: {product.time}</p>
                            <button className={cx('btn', 'btn-primary')} onClick={handleAddToCart}>
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
            <ToastContainer />
            <Footer />
        </div>
    );
};

export default ProductDetail;
