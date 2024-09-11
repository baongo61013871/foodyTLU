// src/components/Login.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss'; // Import the SCSS module
import classNames from 'classnames/bind';
import { FaEye, FaEyeSlash, FaGooglePlusG, FaFacebookF } from 'react-icons/fa';
import { handleLoginApi, handleRegisterApi } from '~/services/userServices'; // Import your API functions
import { loginSuccess } from '~/redux/authSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

const Login = () => {
    const [username, setUsername] = useState('phngtudam71@gmail.com');
    const [password, setPassword] = useState('phngTu71');
    const [email, setEmail] = useState(''); // For registration
    const [errMessage, setErrMessage] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isRegisterMode, setIsRegisterMode] = useState(false); // Toggle between login and register
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOnChangeUserName = (event) => {
        setUsername(event.target.value);
    };

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleOnChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleShowHidePassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    const handleKeydown = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            isRegisterMode ? handleRegister() : handleLogin();
        }
    };

    const handleLogin = async () => {
        setErrMessage('');
        try {
            let data = await handleLoginApi(username, password);
            if (data && data.errCode !== 0) {
                setErrMessage(data.message);
            }
            if (data && data.errCode === 0) {
                dispatch(
                    loginSuccess({
                        user: data.user,
                        token: data.token,
                    }),
                );
                const roleId = data.user.roleId;
                if (roleId === 'R1') {
                    navigate('/admin'); // Redirect to admin page
                } else if (roleId === 'R2') {
                    navigate('/'); // Redirect to customer homepage
                }
            }
        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    setErrMessage(e.response.data.message);
                }
            }
        }
    };

    const handleRegister = async () => {
        setErrMessage('');
        try {
            let data = await handleRegisterApi(email, password); // API function for registration
            if (data && data.errCode !== 0) {
                setErrMessage(data.message);
                toast.error('Người dùng đã tồn tại hoặc đã có lỗi!');
            }
            if (data && data.errCode === 0) {
                toast.success('Đăng kí tài khoản thành công! Vui lòng đăng nhập!');
                setIsRegisterMode(false); // Switch back to login mode
            }
        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    setErrMessage(e.response.data.message);
                }
            }
        }
    };

    const toggleMode = () => {
        setIsRegisterMode(!isRegisterMode);
        setErrMessage('');
    };

    return (
        <div className={cx('login-background')}>
            <div className={cx('login-container')}>
                <div className={cx('login-content', 'row')}>
                    <h2 className={cx('col-12', 'text-center')}>{isRegisterMode ? 'Register' : 'Login'}</h2>
                    {isRegisterMode ? (
                        <>
                            <div className={cx('col-12', 'form-group')}>
                                <label>Email</label>
                                <input
                                    placeholder="Enter Your Email"
                                    type="text"
                                    className={cx('form-control')}
                                    value={email}
                                    onChange={handleOnChangeEmail}
                                />
                            </div>
                            <div className={cx('col-12', 'form-group')}>
                                <label>Password</label>
                                <div className={cx('input-group')}>
                                    <input
                                        placeholder="Enter Your Password"
                                        type={isShowPassword ? 'text' : 'password'}
                                        className={cx('form-control')}
                                        value={password}
                                        onChange={handleOnChangePassword}
                                        onKeyDown={handleKeydown}
                                    />
                                    <span onClick={handleShowHidePassword} className={cx('input-group-text')}>
                                        {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                                    </span>
                                </div>
                            </div>
                            <div className={cx('col-12')}>
                                <button className={cx('btn-login')} onClick={handleRegister}>
                                    Register
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={cx('col-12', 'form-group')}>
                                <label>Username</label>
                                <input
                                    placeholder="Enter Your Username"
                                    type="text"
                                    className={cx('form-control')}
                                    value={username}
                                    onChange={handleOnChangeUserName}
                                />
                            </div>
                            <div className={cx('col-12', 'form-group')}>
                                <label>Password</label>
                                <div className={cx('input-group')}>
                                    <input
                                        placeholder="Enter Your Password"
                                        type={isShowPassword ? 'text' : 'password'}
                                        className={cx('form-control')}
                                        value={password}
                                        onChange={handleOnChangePassword}
                                        onKeyDown={handleKeydown}
                                    />
                                    <span onClick={handleShowHidePassword} className={cx('input-group-text')}>
                                        {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                                    </span>
                                </div>
                            </div>
                            <div className={cx('col-12')}>
                                <button className={cx('btn-login')} onClick={handleLogin}>
                                    Log in
                                </button>
                            </div>
                        </>
                    )}
                    <div className={cx('col-12', 'error-message')}>{errMessage}</div>
                    <div className={cx('col-12', 'forgot-password')}>
                        <span onClick={toggleMode}>
                            {isRegisterMode ? 'Already have an account? Log in' : 'Sign up?'}
                        </span>
                    </div>
                    <div className={cx('col-12', 'text-center', 'mt-5')}>
                        <span className={cx('others-signin')}>Or Sign In With:</span>
                    </div>
                    <div className={cx('col-12', 'social-icon', 'mt-3')}>
                        <FaGooglePlusG className={cx('google-icon')} />
                        <FaFacebookF className={cx('facebook-icon')} />
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Login;
