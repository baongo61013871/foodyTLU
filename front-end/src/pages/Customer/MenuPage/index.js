// src/components/MenuPage.js
import React, { useState } from 'react';
import styles from './MenuPage.module.scss';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Header from '~/components/Header';
import Footer from '~/components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ProductCard from './ProductCard';
import Fuse from 'fuse.js';

const cx = classNames.bind(styles);

const MenuPage = () => {
    const foodItems = useSelector((state) => state.foods.foodItems);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(foodItems);

    const fuse = new Fuse(foodItems, {
        keys: ['name', 'type', 'description'],
        threshold: 0.3,
    });

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchTerm(query);

        if (query.trim() === '') {
            setSearchResults(foodItems);
        } else {
            const results = fuse.search(query).map((result) => result.item);
            setSearchResults(results);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('menu-page', 'container', 'py-5')}>
                <h2 className={cx('page-title', 'text-center', 'fw-bold', 'mb-4', 'fs-1')}>
                    Search It, Eat It :- That's It!
                </h2>
                <div className={cx('search-wrapper', 'text-end')}>
                    <InputGroup className={cx('search-bar')}>
                        <Form.Control
                            type="text"
                            placeholder="Tìm kiếm món ăn của bạn..."
                            aria-label="Search"
                            className={cx('shadow-sm', 'py-3', 'px-4', 'fs-5')}
                            value={searchTerm}
                            onChange={handleSearch} // Gọi hàm xử lý khi người dùng nhập
                        />
                        <Button variant="outline-secondary fs-5">
                            Search
                            <FontAwesomeIcon className="ms-2" icon={faSearch} />
                        </Button>
                    </InputGroup>
                </div>
                <div className={cx('row')}>
                    {searchResults.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MenuPage;
