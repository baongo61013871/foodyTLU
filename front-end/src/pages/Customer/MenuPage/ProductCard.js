// src/components/ProductCard.js

import React from 'react';
import styles from './ProductCard.module.scss';
import classNames from 'classnames/bind';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const ProductCard = ({ item }) => {
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
        <div className={cx('col-md-3', 'mb-4')}>
            <Link to={`/product/${item.id}`} className={cx('text-decoration-none')}>
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
                            ~{item.time}min
                        </span>
                    </div>
                    <div className={cx('card-body')}>
                        <h5 className={cx('card-title', 'mb-1')}>{item.name}</h5>
                        <p className={cx('card-text', 'text-muted', 'mb-1')}>{item.type}</p>
                        <div className={cx('d-flex', 'justify-content-between', 'align-items-center')}>
                            <span className={cx('text-danger', 'fw-bold')}>{item.price}$</span>
                            <span className={cx('d-flex')}>{renderStars(item.rating)}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
