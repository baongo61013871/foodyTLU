import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsersApi, deleteUserById } from '~/services/userServices'; // API services
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './UserManagement.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function UserManagement() {
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                let userInfo = await getAllUsersApi();
                if (userInfo && userInfo.users.length > 0) {
                    setUsers(userInfo.users);
                } else {
                    console.log('No users found.');
                }
            } catch (e) {
                console.error('Error fetching users:', e);
            }
        };
        fetchUserInfo();
    }, [dispatch]);

    const renderRoleUser = (role) => {
        switch (role) {
            case 'R1':
                return 'Admin';
            case 'R2':
                return 'Customer';
            default:
                return 'Không xác định';
        }
    };
    const handleOpenModal = (user) => {
        // setCurrentUser(user); // Cập nhật người dùng hiện tại
        // setShowModal(true); // Hiển thị modal
    };

    const handleDelete = async (userId) => {
        try {
            await deleteUserById(userId);
            console.log('User deleted successfully.');
        } catch (e) {
            console.log('Error deleting user:', e);
        }
    };

    return (
        <div className={cx('app-container')}>
            <Sidebar />
            <div className={cx('wrapper')}>
                <div className={cx('content-user')}>
                    <Header />
                    <div className={cx('table-container')}>
                        <table className={cx('user-table')}>
                            <thead>
                                <tr className="font-vietnam">
                                    <th>ID</th>
                                    <th>Họ</th>
                                    <th>Tên</th>
                                    <th>Email</th>
                                    <th>Điện thoại</th>
                                    <th>Địa chỉ</th>
                                    <th>Giới tính</th>
                                    <th>Vai trò</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phonenumber}</td>
                                        <td>{user.address}</td>
                                        <td>{user.gender}</td>
                                        <td>{renderRoleUser(user.roleId)}</td>
                                        <td>
                                            <div className={cx('btn-wrapper')}>
                                                <button
                                                    className={cx('view-btn')}
                                                    onClick={() => handleOpenModal(user)}
                                                >
                                                    Xem
                                                </button>
                                                <button
                                                    className={cx('delete-btn', 'mt-3')}
                                                    onClick={() => handleDelete(user.id)}
                                                >
                                                    Xóa
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserManagement;
