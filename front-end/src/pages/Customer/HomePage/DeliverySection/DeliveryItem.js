import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DeliveryItem.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const DeliveryItem = ({ item, id }) => {
    return (
        <div>
            <Link to={`/foodtype/${item.id}`} style={{ textDecoration: 'none' }}>
                <div className={cx('delivery-item-cover')} key={id}>
                    <img src={item.cover} className={cx('delivery-item-image')} alt={item.title} />
                </div>
                <div className={cx('delivery-item-title')}>{item.title}</div>
            </Link>
        </div>
    );
};

export default DeliveryItem;
