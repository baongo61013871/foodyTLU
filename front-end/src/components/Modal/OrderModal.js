// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Modal, Button, Form } from 'react-bootstrap';
// import { addOrder, updateOrder } from '~/redux/orderSlice';
// import styles from './OrderModal.module.scss';
// import classNames from 'classnames/bind';
// import { createOrderApi, updateOrderApi } from '~/services/orderServices';

// const cx = classNames.bind(styles);

// const OrderModal = ({ show, onClose, mode = 'add', orderData = null }) => {
//     const dispatch = useDispatch();

//     // Trạng thái cho dữ liệu đơn hàng
//     const [order, setOrder] = useState({
//         customerName: '',
//         foodItems: [],
//         totalPrice: 0,
//         status: 'pending',
//         ...orderData, // Khởi tạo dữ liệu nếu có
//     });

//     // Khi `orderData` thay đổi, cập nhật giá trị đơn hàng
//     useEffect(() => {
//         if (orderData) {
//             setOrder(orderData);
//         }
//     }, [orderData]);

//     // Hàm để xử lý thay đổi form
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setOrder({ ...order, [name]: value });
//     };

//     // Hàm để xử lý lưu đơn hàng (Thêm mới hoặc cập nhật)
//     const handleSave = async () => {
//         try {
//             if (mode === 'add') {
//                 // Gọi API thêm đơn hàng mới
//                 const response = await createOrderApi(order);
//                 dispatch(addOrder(response.data));
//             } else if (mode === 'edit') {
//                 // Gọi API cập nhật đơn hàng
//                 const response = await updateOrderApi(order);
//                 dispatch(updateOrder(response.data));
//             }
//             onClose(); // Đóng modal sau khi lưu thành công
//         } catch (error) {
//             console.error('Error saving order:', error.message);
//         }
//     };

//     return (
//         <Modal show={show} onHide={onClose} centered>
//             <Modal.Header closeButton>
//                 <Modal.Title>{mode === 'add' ? 'Thêm Đơn Hàng' : 'Chỉnh Sửa Đơn Hàng'}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Form>
//                     <Form.Group controlId="formCustomerName" className={cx('form-group')}>
//                         <Form.Label>Tên Khách Hàng</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="customerName"
//                             value={order.customerName}
//                             onChange={handleChange}
//                             placeholder="Nhập tên khách hàng"
//                         />
//                     </Form.Group>

//                     <Form.Group controlId="formFoodItems" className={cx('form-group')}>
//                         <Form.Label>Món Ăn</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="foodItems"
//                             value={order.foodItems.join(', ')} // Convert array to string
//                             onChange={handleChange}
//                             placeholder="Nhập món ăn (ví dụ: Pizza, Burger)"
//                         />
//                     </Form.Group>

//                     <Form.Group controlId="formTotalPrice" className={cx('form-group')}>
//                         <Form.Label>Tổng Giá</Form.Label>
//                         <Form.Control
//                             type="number"
//                             name="totalPrice"
//                             value={order.totalPrice}
//                             onChange={handleChange}
//                             placeholder="Nhập tổng giá"
//                         />
//                     </Form.Group>

//                     <Form.Group controlId="formStatus" className={cx('form-group')}>
//                         <Form.Label>Trạng Thái</Form.Label>
//                         <Form.Control as="select" name="status" value={order.status} onChange={handleChange}>
//                             <option value="pending">Đang Chờ</option>
//                             <option value="completed">Hoàn Thành</option>
//                             <option value="cancelled">Đã Hủy</option>
//                         </Form.Control>
//                     </Form.Group>
//                 </Form>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={onClose}>
//                     Đóng
//                 </Button>
//                 <Button variant="primary" onClick={handleSave}>
//                     {mode === 'add' ? 'Thêm' : 'Cập Nhật'}
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     );
// };

// export default OrderModal;
