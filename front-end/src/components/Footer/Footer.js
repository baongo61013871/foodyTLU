import React from 'react';
import styles from './Footer.module.scss'; // Nhớ chỉnh lại đường dẫn nếu cần
import classNames from 'classnames/bind';
import { FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';
const cx = classNames.bind(styles);

const Footer = () => (
    <div className={cx('footer')}>
        <div className="container">
            <div className={cx('top')}>
                <div>
                    <h1>TLU Foody</h1>
                    <p>Your Taste, Our Service</p>
                </div>

                <div className={cx('social')}>
                    <a href="/" className={cx('github')} alt="social">
                        <FaGithub size={28} color="#fff" />
                    </a>

                    <a href="/" className={cx('youtube')} alt="social">
                        <FaYoutube size={28} color="#fff" />
                    </a>

                    <a href="/" className={cx('facebook')} alt="social">
                        <FaFacebook size={28} color="#fff" />
                    </a>
                </div>
            </div>

            <div className={cx('bottom')}>
                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Address</h4>
                    <p>Đường Nghiêm Xuân Yêm, phường Đại Kim, quận Hoàng Mai , Hà Nội , Việt Nam</p>

                    <h4>Contact Us</h4>
                    <p>Tel: 0397155365</p>
                </div>

                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
