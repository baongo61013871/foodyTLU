// rootReducer.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
// Import các reducer khác nếu có

const rootReducer = combineReducers({
    user: userReducer,
    // các reducer khác nếu có
});

export default rootReducer;
