import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateInfoUser } from '~/redux/authSlice';
import { editUserInfor } from '~/services/userServices';
import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import Header from '~/components/Header';
import images from '~/assets/images';
import CommonUtils from '~/utils/CommonUtils';
import BirthdatePicker from '~/components/DatePicker/BirthdatePicker';
import { Buffer } from 'buffer';
import Sidebar from '~/pages/Customer/AccountPage/components/SideBar';

const cx = classNames.bind(styles);

function Account() {
    const users = useSelector((state) => state.auth.user);
    const [formData, setFormData] = useState({
        id: users.id,
        firstName: users.firstName || '',
        lastName: users.lastName || '',
        phonenumber: users.phonenumber || '',
        gender: users.gender || 'male',
        birthDate: users.birth || '',
        image: users.image || '',
        address: users.address || '',
    });

    const [editingBirthdate, setEditingBirthdate] = useState(false); // Trạng thái chỉnh sửa ngày sinh
    const dispatch = useDispatch();

    const handleBirthdateChange = (day, month, year) => {
        setFormData({
            ...formData,
            birthDate: `${day}/${month}/${year}`,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSave = async () => {
        try {
            let response = await editUserInfor({
                id: formData.id,
                firstName: formData.firstName,
                lastName: formData.lastName,
                phonenumber: formData.phonenumber,
                gender: formData.gender,
                birthDate: formData.birthDate,
                image: formData.image,
                address: formData.address,
            });
            console.log('check response ', response);
            let imageBase64;
            if (response && response.errCode === 0) {
                imageBase64 = new Buffer(response.data.image, 'base64').toString('binary');
                response.data.image = imageBase64;
                setFormData({
                    ...formData,
                    image: imageBase64,
                });
                dispatch(
                    updateInfoUser({
                        user: response.data,
                    }),
                );
                setEditingBirthdate(false); // Tắt chế độ chỉnh sửa sau khi lưu thành công
            }
        } catch (e) {
            console.error(e);
        }
    };

    const handleOnChangePreview = async (event) => {
        let files = event.target.files;
        let file = files[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            setFormData({
                ...formData,
                image: base64,
            });
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('profile-container', 'font-vietnam2')}>
                <Sidebar />
                <div className={cx('profile-content')}>
                    <div className={cx('text-center')}>
                        <h2>Hồ Sơ Của Tôi</h2>
                        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-7 ">
                                <div className={cx('form-group')}>
                                    <label>Họ</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={cx('form-group')}>
                                    <label>Tên</label>
                                    <input
                                        value={formData.firstName}
                                        name="firstName"
                                        type="text"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={cx('form-group')}>
                                    <label>Email</label>
                                    <span className="text-grey">{users.email}</span>
                                </div>
                                <div className={cx('form-group')}>
                                    <label>Số điện thoại</label>
                                    <input
                                        type="text"
                                        name="phonenumber"
                                        value={formData.phonenumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={cx('form-group')}>
                                    <label>Địa chỉ</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={cx('form-group')}>
                                    <label>Giới tính</label>
                                    <div className={cx('radio-group')}>
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                checked={formData.gender === 'male'}
                                                onChange={handleInputChange}
                                            />
                                            Nam
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                checked={formData.gender === 'female'}
                                                onChange={handleInputChange}
                                            />
                                            Nữ
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="other"
                                                checked={formData.gender === 'other'}
                                                onChange={handleInputChange}
                                            />
                                            Khác
                                        </label>
                                    </div>
                                </div>

                                {/* Phần ngày sinh */}
                                <div className={cx('form-group')}>
                                    <label>Ngày sinh</label>
                                    {!editingBirthdate ? (
                                        <>
                                            <span>{formData.birthDate || 'Chưa có thông tin'}</span>
                                            <button
                                                className={cx('change-button')}
                                                onClick={() => setEditingBirthdate(true)}
                                            >
                                                Thay đổi
                                            </button>
                                        </>
                                    ) : (
                                        <BirthdatePicker onChangeBirthdate={handleBirthdateChange} />
                                    )}
                                </div>

                                <button className={cx('save-button')} onClick={handleSave}>
                                    Lưu
                                </button>
                            </div>

                            <div className="col-5">
                                <div className={cx('avatar-section')}>
                                    <img
                                        className={cx('avatar')}
                                        src={formData.image ? formData.image : images.avatar_default}
                                        alt="Avatar"
                                    />
                                    <input
                                        className="avatar-input"
                                        type="file"
                                        id="previewImage"
                                        hidden
                                        onChange={(event) => handleOnChangePreview(event)}
                                    />
                                    <label className={cx('edit-avatar')} htmlFor="previewImage">
                                        Sửa Hồ Sơ
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
