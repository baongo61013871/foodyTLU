// src/components/FeatureSection.js
import React from 'react';
import styles from './FeatureSection.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const FeatureSection = () => {
    return (
        <div className="container">
            {' '}
            <div className={cx('features-section', 'text-center', 'container', 'py-5', 'font-vietnam')}>
                <h2 className={cx('section-title', 'mb-4', 'fw-bold', 'text-success')}>
                    Mang đến cho bạn món ăn ưa thích, nóng hổi và ngon lành
                </h2>
                <p className={cx('section-description', 'mb-5')}>
                    Đặt đồ ăn giao hàng tận nhà nhanh chóng lấp đầy chiếc bụng đói của bạn với những món ngon yêu thích
                    và dịch vụ giao hàng “thần tốc”. TLUFood hiện đang có mặt ngay tại khuôn viên trường Đại Học Thăng
                    Long, là điểm đến không thể thiếu của các bạn sinh viên TLU mỗi giờ nghỉ ngơi,ăn trưa,hay các dịp
                    event của trường,.... Chúng tôi đang dần mở rộng thêm nhiều khu vực trong thời gian tới!
                </p>

                <div className={cx('row', 'g-4 mt-3')}>
                    <div className={cx('col-md-6', 'feature-item')}>
                        <div className={cx('feature-img', 'mx-auto', 'rounded-circle')}></div>
                        <h4 className={cx('mt-4', 'text-success', 'mb-3 fs-3 fw-bold')}>
                            Đặt đồ ăn online chỉ sau vài cú chạm.
                        </h4>
                        <p>
                            Những bạn nhân viên TLUFood giao hàng nhanh thần tốc, đảm bảo mang cho bạn bữa ăn nóng hổi
                            và ngon lành, dù bạn đang ở đâu.
                        </p>
                    </div>

                    <div className={cx('col-md-6', 'feature-item')}>
                        <div className={cx('feature-img-2', 'mx-auto', 'rounded-circle')}></div>
                        <h4 className={cx('mt-4', 'text-success', 'mb-3 fs-3 fw-bold')}>Đa dạng lựa chọn.</h4>
                        <p>
                            Danh sách đa dạng các món ăn của chúng tôi có thể phục vụ cho mọi nhu cầu ăn uống của bạn.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
