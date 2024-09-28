import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInfoUser } from '~/redux/authSlice'; // Import action từ Redux
import classNames from 'classnames/bind';
import styles from './Account.module.scss'; // CSS cho component
import { changePasswordService } from '~/services/userServices'; // Dịch vụ đổi mật khẩu
import Header from '~/components/Header';

import Sidebar from '~/pages/Customer/AccountPage/components/SideBar';
const cx = classNames.bind(styles);

function PasswordPage() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const userId = user.id;
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        setError('');
        setSuccessMessage('');

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (formData.newPassword !== formData.confirmNewPassword) {
            setError('Mật khẩu mới không khớp!');
            return;
        }

        try {
            const response = await changePasswordService({
                oldPassword: formData.currentPassword,
                newPassword: formData.newPassword,
                userId: userId,
            });

            if (response.errCode === 0) {
                setSuccessMessage('Đổi mật khẩu thành công!');
                setError('');
                // Cập nhật thông tin người dùng nếu cần
                dispatch(updateInfoUser(response.data));
            } else {
                setError(response.message);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('profile-container', 'font-vietnam2')}>
                <Sidebar />
                <div className={cx('profile-content')}>
                    <h2>Đổi Mật Khẩu</h2>
                    {error && <div className={cx('error-message', 'text-warning')}>{error}</div>}
                    {successMessage && <div className={cx('success-message', 'text-success')}>{successMessage}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className={cx('form-group')}>
                            <label>Mật khẩu hiện tại</label>
                            <input
                                type="password"
                                name="currentPassword"
                                value={formData.currentPassword}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className={cx('form-group')}>
                            <label>Mật khẩu mới</label>
                            <input
                                type="password"
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className={cx('form-group')}>
                            <label>Xác nhận mật khẩu mới</label>
                            <input
                                type="password"
                                name="confirmNewPassword"
                                value={formData.confirmNewPassword}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className={cx('submit-button')}>
                            Đổi Mật Khẩu
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PasswordPage;
