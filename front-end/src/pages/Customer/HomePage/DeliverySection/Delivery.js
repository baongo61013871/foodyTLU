import React from 'react';
import styles from './Delivery.module.scss';
import classNames from 'classnames/bind';
import NextArrow from '../../../../components/Carousal/nextArrow';
import PrevArrow from '../../../../components/Carousal/prevArrow';
import Slider from 'react-slick';
import DeliveryItem from './DeliveryItem';

const cx = classNames.bind(styles);
const deliveryItem = [
    {
        id: 41,
        title: 'Italian Food',
        cover: 'https://i.ndtvimg.com/i/2017-09/margherita-pizza_600x300_51506418004.jpg',
    },
    {
        id: 1,
        title: 'Indian Food',
        cover: 'https://wallpaperaccess.com/full/2069188.jpg',
    },
    {
        id: 9,
        title: 'South Indian Food',
        cover: 'https://www.chefspencil.com/wp-content/uploads/Dosa-1.jpg.webp',
    },
    {
        id: 16,
        title: 'Rajasthani Food',
        cover: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg',
    },
    {
        id: 32,
        title: 'American Food',
        cover: 'https://i.ndtvimg.com/i/2015-07/burger-625_625x350_51435922877.jpg',
    },
    {
        id: 26,
        title: 'Chinese Food',
        cover: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
    },
];

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

const Delivery = ({ foodType }) => {
    return (
        <div className={cx('delivery-collection', 'border border-1 bg-light-emphasis')}>
            <div className="container">
                <div className={cx('collection-title')}>
                    {foodType ? <h1>{'More ' + foodType}</h1> : <h1>Our Cuisines</h1>}
                    <p>If Eat Feels You Happy So why are you waiting for??</p>
                    <br></br>
                </div>
                <Slider {...settings}>
                    {deliveryItem.map((item) => {
                        return <DeliveryItem item={item} key={item.id} />;
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Delivery;
