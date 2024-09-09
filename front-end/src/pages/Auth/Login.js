// src/components/Login.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss'; // Import the SCSS module
import classNames from 'classnames/bind';
import { FaEye, FaEyeSlash, FaGooglePlusG, FaFacebookF } from 'react-icons/fa';
import { handleLoginApi } from '~/services/userServices';
import { loginSuccess } from '~/redux/authSlice';
const cx = classNames.bind(styles);

const Login = () => {
    const [username, setUsername] = useState('admin@example.com');
    const [password, setPassword] = useState('admin123');
    const [errMessage, setErrMessage] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOnChangeUserName = (event) => {
        setUsername(event.target.value);
    };

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleShowHidePassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    const handleKeydown = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            handleLogin();
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
                navigate('/');
            }
        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    setErrMessage(e.response.data.message);
                }
            }
        }
    };

    return (
        <div className={cx('login-background')}>
            <div className={cx('login-container')}>
                <div className={cx('login-content', 'row')}>
                    <h2 className={cx('col-12', 'text-center')}>Login</h2>
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

                    <div className={cx('col-12', 'error-message')}>{errMessage}</div>

                    <div className={cx('col-12', 'forgot-password')}>
                        <span>Forgot your password?</span>
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
        </div>
    );
};

export default Login;
