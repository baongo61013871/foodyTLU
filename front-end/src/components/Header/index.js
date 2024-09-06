// src/components/Header.js
import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './Header.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Header = () => {
    return (
        <nav className={cx('header', 'navbar navbar-expand-lg navbar-dark')}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    <div className="d-flex flex-column align-items-center">
                        <span className="fs-4 font-logo"> Thang Long Food</span>
                        <span className="fs-6 font-italic"> Food Auto Good</span>
                    </div>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => cx('nav-link', { active: isActive })} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => cx('nav-link', { active: isActive })} to="/menu">
                                Menu
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => cx('nav-link', { active: isActive })} to="/cart">
                                Cart
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => cx('nav-link', { active: isActive })} to="/orders">
                                Orders
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
