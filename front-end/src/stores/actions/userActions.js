// userActions.js
import * as actionTypes from './actionsType';

// Action creator cho đăng nhập thành công
export const userLoginSuccess = (user) => {
    return {
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload: user,
    };
};

// Action creator cho đăng xuất
export const userLogout = () => {
    return {
        type: actionTypes.USER_LOGOUT,
    };
};
