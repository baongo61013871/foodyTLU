// src/components/HeroSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <div
            className={cx(
                'heroContainer',
                'position-relative',
                'text-center',
                'd-flex',
                'align-items-center',
                'justify-content-center',
            )}
        >
            <div className={cx('heroContent', 'position-absolute ', 'text-center')}>
                <h1 className={cx('display-3', 'text-white mb-4', 'fw-bold')}>TLU Food</h1>
                <p className={cx('lead', 'text-white')}>Học mệt rồi, ăn trưa thôi!</p>
                <button className={cx('btn-order', 'btn ', 'btn-success')} onClick={() => navigate('/menu')}>
                    Đặt hàng ngay
                    <FontAwesomeIcon className="ms-3 " icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
