// src/components/MenuPage.js
import React from 'react';
import styles from './MenuPage.module.scss';
import classNames from 'classnames/bind';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import các icon sao từ React Icons
import Header from '~/components/Header';
import Footer from '~/components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const MenuPage = () => {
    const foodItems = [
        {
            id: 1,
            name: 'Samosa',
            type: 'Indian Food',
            price: '20₹',
            rating: 4.0,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },
        {
            id: 2,
            name: 'Pav-Bhaji',
            type: 'Indian Food',
            price: '60₹',
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },
        {
            id: 3,
            name: 'Pakora',
            type: 'Indian Food',
            price: '20₹',
            rating: 3.5,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },
        {
            id: 4,
            name: 'Keema',
            type: 'Indian Food',
            price: '40₹',
            rating: 4.0,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },
        {
            id: 5,
            name: 'Dal Makhani',
            type: 'Indian Food',
            price: '50₹',
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },
        {
            id: 6,
            name: 'Rajma',
            type: 'Indian Food',
            price: '40₹',
            rating: 3.0,
            time: '40min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },

        {
            id: 1,
            name: 'Samosa',
            type: 'Indian Food',
            price: '20₹',
            rating: 4.0,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },
        {
            id: 2,
            name: 'Pav-Bhaji',
            type: 'Indian Food',
            price: '60₹',
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },
        {
            id: 3,
            name: 'Pakora',
            type: 'Indian Food',
            price: '20₹',
            rating: 3.5,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },
        {
            id: 4,
            name: 'Keema',
            type: 'Indian Food',
            price: '40₹',
            rating: 4.0,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },
        {
            id: 5,
            name: 'Dal Makhani',
            type: 'Indian Food',
            price: '50₹',
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },
        {
            id: 6,
            name: 'Rajma',
            type: 'Indian Food',
            price: '40₹',
            rating: 3.0,
            time: '40min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },

        {
            id: 1,
            name: 'Samosa',
            type: 'Indian Food',
            price: '20₹',
            rating: 4.0,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },
        {
            id: 2,
            name: 'Pav-Bhaji',
            type: 'Indian Food',
            price: '60₹',
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },
        {
            id: 3,
            name: 'Pakora',
            type: 'Indian Food',
            price: '20₹',
            rating: 3.5,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },
        {
            id: 4,
            name: 'Keema',
            type: 'Indian Food',
            price: '40₹',
            rating: 4.0,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },
        {
            id: 5,
            name: 'Dal Makhani',
            type: 'Indian Food',
            price: '50₹',
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },
        {
            id: 6,
            name: 'Rajma',
            type: 'Indian Food',
            price: '40₹',
            rating: 3.0,
            time: '40min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
        },
    ];

    // Hàm để render số lượng sao tương ứng với điểm đánh giá
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
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('menu-page', 'container', 'py-5')}>
                <h2 className={cx('page-title', 'text-center', 'fw-bold', 'mb-4', 'fs-1')}>
                    Search It, Eat It :- That's It!
                </h2>
                <div className={cx('search-wrapper', ' text-end')}>
                    <InputGroup className={cx('search-bar')}>
                        <Form.Control
                            type="text"
                            placeholder="Tìm kiếm món ăn của bạn..."
                            aria-label="Search"
                            className={cx('shadow-sm', 'py-3', 'px-4', 'fs-5')}
                        />
                        <Button variant="outline-secondary fs-5">
                            Search
                            <FontAwesomeIcon className="ms-2" icon={faSearch} />
                        </Button>
                    </InputGroup>
                </div>
                <div className={cx('row')}>
                    {foodItems.map((item) => (
                        <Link to={`/product/:${item.id}`} key={item.id} className={cx('col-md-3', 'mb-4')}>
                            <div className={cx('card', 'h-100', 'shadow-sm')} style={{ cursor: 'pointer' }}>
                                <div className={cx('position-relative')}>
                                    <img src={item.imageUrl} alt={item.name} className={cx('card-img-top')} />
                                    <span
                                        className={cx(
                                            'badge',
                                            'bg-light',
                                            'position-absolute',
                                            'top-0',
                                            'end-0',
                                            'm-2',
                                            'text-dark',
                                        )}
                                    >
                                        {item.time}
                                    </span>
                                </div>
                                <div className={cx('card-body')}>
                                    <h5 className={cx('card-title', 'mb-1')}>{item.name}</h5>
                                    <p className={cx('card-text', 'text-muted', 'mb-1')}>{item.type}</p>
                                    <div className={cx('d-flex', 'justify-content-between', 'align-items-center')}>
                                        <span className={cx('text-danger', 'fw-bold')}>{item.price}</span>
                                        <span className={cx('d-flex')}>{renderStars(item.rating)}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MenuPage;
