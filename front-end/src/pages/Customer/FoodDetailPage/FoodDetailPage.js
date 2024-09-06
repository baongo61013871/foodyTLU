import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './FoodDetailPage.module.scss';
import classNames from 'classnames/bind';
import { Button } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa';

const cx = classNames.bind(styles);

const FoodDetailPage = () => {
    const { id } = useParams(); // Lấy ID sản phẩm từ URL

    // Mock dữ liệu chi tiết sản phẩm
    const product = {
        id,
        name: 'Samosa',
        description: 'A delicious Indian snack filled with spicy potatoes and peas.',
        price: '20₹',
        rating: 4.0,
        time: '20min',
        imageUrl: 'https://via.placeholder.com/300',
        type: 'Indian Food',
    };

    // Hàm để render sao tương ứng với đánh giá
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

    return (
        <div className={cx('product-detail-page', 'container', 'py-5')}>
            <div className={cx('row', 'align-items-center')}>
                <div className={cx('col-md-6')}>
                    <img src={product.imageUrl} alt={product.name} className={cx('img-fluid', 'rounded')} />
                </div>
                <div className={cx('col-md-6')}>
                    <h2 className={cx('product-name', 'fw-bold')}>{product.name}</h2>
                    <p className={cx('product-type', 'text-muted')}>{product.type}</p>
                    <div className={cx('product-rating', 'mb-3')}>{renderStars(product.rating)}</div>
                    <p className={cx('product-description')}>{product.description}</p>
                    <h4 className={cx('product-price', 'text-danger', 'fw-bold')}>{product.price}</h4>
                    <Button variant="warning" className={cx('mt-3')}>
                        Order Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailPage;
