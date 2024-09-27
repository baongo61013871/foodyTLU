import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './BirthdatePicker.module.scss';

const cx = classNames.bind(styles);

const BirthdatePicker = ({ onChangeBirthdate }) => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [isEditing, setIsEditing] = useState(true); // Biến này để kiểm soát trạng thái đang chỉnh sửa hay hiển thị kết quả

    const handleDayChange = (e) => {
        setDay(e.target.value);
        onChangeBirthdate(e.target.value, month, year); // Gọi callback để truyền dữ liệu lên component cha
    };

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
        onChangeBirthdate(day, e.target.value, year);
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
        onChangeBirthdate(day, month, e.target.value);
    };
    const handleSave = () => {
        if (day && month && year) {
            setIsEditing(false); // Khi ấn Lưu thì chuyển sang trạng thái hiển thị
        } else {
            alert('Vui lòng chọn đủ ngày, tháng và năm');
        }
    };

    const handleEdit = () => {
        setIsEditing(true); // Khi ấn Thay đổi thì quay lại trạng thái chỉnh sửa
    };

    // Tạo mảng số ngày, tháng, và năm
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

    return (
        <div className={cx('birthdate-picker-container')}>
            {isEditing ? (
                <>
                    {/* Select Ngày */}
                    <select value={day} onChange={handleDayChange} className={cx('select')}>
                        <option value="">Ngày</option>
                        {days.map((d) => (
                            <option key={d} value={d}>
                                {d}
                            </option>
                        ))}
                    </select>

                    {/* Select Tháng */}
                    <select value={month} onChange={handleMonthChange} className={cx('select')}>
                        <option value="">Tháng</option>
                        {months.map((m) => (
                            <option key={m} value={m}>
                                Tháng {m}
                            </option>
                        ))}
                    </select>

                    {/* Select Năm */}
                    <select value={year} onChange={handleYearChange} className={cx('select')}>
                        <option value="">Năm</option>
                        {years.map((y) => (
                            <option key={y} value={y}>
                                {y}
                            </option>
                        ))}
                    </select>

                    <button onClick={handleSave} className={cx('save-button')}>
                        Lưu
                    </button>
                </>
            ) : (
                <div className={cx('birthdate-display')}>
                    <span>{`${day}/${month}/${year}`}</span>
                    <span onClick={handleEdit} className={cx('edit-button')}>
                        Thay đổi
                    </span>
                </div>
            )}
        </div>
    );
};

export default BirthdatePicker;
