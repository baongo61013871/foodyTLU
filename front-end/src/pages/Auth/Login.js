// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import './Login.scss';
// import { FaEye, FaEyeSlash, FaGooglePlusG, FaFacebookF } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom'; // Thay đổi từ useHistory sang useNavigate

// const mockUsers = [
//     {
//         email: 'phngtudam71@gmail.com',
//         password: 'phngTu71',
//         role: 'customer',
//     },
//     {
//         email: 'admin@example.com',
//         password: 'admin123',
//         role: 'admin',
//     },
// ];

// const Login = () => {
//     const [username, setUsername] = useState('admin@example.com');
//     const [password, setPassword] = useState('admin123');
//     const [errMessage, setErrMessage] = useState('');
//     const [isShowPassword, setIsShowPassword] = useState(false);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleOnChangeUserName = (event) => {
//         setUsername(event.target.value);
//     };

//     const handleOnChangePassword = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleShowHidePassword = () => {
//         setIsShowPassword(!isShowPassword);
//     };

//     const handleKeydown = (event) => {
//         if (event.key === 'Enter' || event.keyCode === 13) {
//             handleLogin();
//         }
//     };

//     return (
//         <div className="login-background">
//             <div className="login-container">
//                 <div className="login-content row">
//                     <h2 className="col-12 text-center">Login</h2>
//                     <div className="col-12 form-group">
//                         <label>Username</label>
//                         <input
//                             placeholder="Enter Your Username"
//                             type="text"
//                             className="form-control"
//                             value={username}
//                             onChange={handleOnChangeUserName}
//                         />
//                     </div>

//                     <div className="col-12 form-group">
//                         <label>Password</label>
//                         <input
//                             placeholder="Enter Your Password"
//                             type={isShowPassword ? 'text' : 'password'}
//                             className="form-control"
//                             value={password}
//                             onChange={handleOnChangePassword}
//                             onKeyDown={handleKeydown}
//                         />
//                         <span onClick={handleShowHidePassword}>{isShowPassword ? <FaEye /> : <FaEyeSlash />}</span>
//                     </div>

//                     <div className="col-12">
//                         <button className="btn-login" onClick={handleLogin}>
//                             Log in
//                         </button>
//                     </div>
//                     <div className="col-12" style={{ color: 'red' }}>
//                         {errMessage}
//                     </div>
//                     <div className="col-12 forgot-password">
//                         <span>Forgot your password?</span>
//                     </div>
//                     <div className="col-12 text-center mt-5">
//                         <span className="others-signin">Or Sign In With:</span>
//                     </div>

//                     <div className="col-12 social-icon mt-3">
//                         <FaGooglePlusG className="google-icon" />
//                         <FaFacebookF className="facebook-icon" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;
