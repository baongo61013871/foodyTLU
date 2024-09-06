// userReducer.js
import * as actionTypes from '../actions/actionTypes';

// Trạng thái ban đầu của reducer
const initialState = {
    isLoggedIn: false,
    user: null,
};

// Reducer cho người dùng
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };
        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
};

export default userReducer;
