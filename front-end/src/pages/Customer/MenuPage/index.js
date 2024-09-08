// src/components/MenuPage.js
import React from 'react';
import styles from './MenuPage.module.scss';
import classNames from 'classnames/bind';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Header from '~/components/Header';
import Footer from '~/components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ProductCard from './ProductCard';
const cx = classNames.bind(styles);

const MenuPage = () => {
    const foodItems = [
        {
            id: 1,
            name: 'Samosa',
            type: 'Indian Food',
            price: 20,
            rating: 4.0,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 2,
            name: 'Pav-Bhaji',
            type: 'Indian Food',
            price: 60,
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 3,
            name: 'Pakora',
            type: 'Indian Food',
            price: 20,
            rating: 3.5,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 4,
            name: 'Keema',
            type: 'Indian Food',
            price: 40,
            rating: 4.0,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 5,
            name: 'Dal Makhani',
            type: 'Indian Food',
            price: 50,
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 6,
            name: 'Rajma',
            type: 'VietNam Food',
            price: 40,
            rating: 3.0,
            time: '40min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },

        {
            id: 1,
            name: 'Samosa',
            type: 'VietNam Food',
            price: 20,
            rating: 4.0,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 2,
            name: 'Pav-Bhaji',
            type: 'VietNam Food',
            price: 60,
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 3,
            name: 'Pakora',
            type: 'Indian Food',
            price: 20,
            rating: 3.5,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 4,
            name: 'Keema',
            type: 'Indian Food',
            price: 40,
            rating: 4.0,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 5,
            name: 'Dal Makhani',
            type: 'Indian Food',
            price: 50,
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 6,
            name: 'Rajma',
            type: 'Indian Food',
            price: 40,
            rating: 3.0,
            time: '40min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },

        {
            id: 1,
            name: 'Samosa',
            type: 'Indian Food',
            price: 20,
            rating: 4.0,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 2,
            name: 'Pav-Bhaji',
            type: 'Indian Food',
            price: 60,
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 3,
            name: 'Pakora',
            type: 'Indian Food',
            price: 20,
            rating: 3.5,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 4,
            name: 'Keema',
            type: 'Indian Food',
            price: 40,
            rating: 4.0,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 5,
            name: 'Dal Makhani',
            type: 'Indian Food',
            price: 50,
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 6,
            name: 'Rajma',
            type: 'Indian Food',
            price: 40,
            rating: 3.0,
            time: '40min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
    ];

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
                        <ProductCard item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MenuPage;
