import instance from '~/utils/axios';
// user
export const handleLoginApi = (userEmail, userPassword) => {
    return instance.post('/api/login', { email: userEmail, password: userPassword });
};

export const handleRegisterApi = (userEmail, userPassword) => {
    return instance.post('/api/register', { email: userEmail, password: userPassword });
};

export const changePasswordService = ({ oldPassword, newPassword, userId }) => {
    return instance.post('/api/change-password', { oldPassword, newPassword, userId });
};
export const editUserInfor = (user) => {
    return instance.put('/api/update-user', user);
};
export const deleteUserById = (userId) => {
    return instance.delete('/api/delete-user', {
        data: {
            userId,
        },
    });
};
export const getAllUsersApi = () => {
    return instance.get('/api/get-all-user');
};
// food
export const createFoodApi = (food) => {
    return instance.post('/api/create-food', food);
};

export const getAllFoodApi = () => {
    return instance.get('/api/get-food');
};

export const deleteFoodbyId = (foodId) => {
    return instance.delete('/api/delete-food', {
        data: {
            id: foodId,
        },
    });
};

export const editFoodApi = (food) => {
    return instance.put('/api/update-food', food);
};

// order
export const getAllOrdersApi = () => {
    return instance.get('/api/get-order');
};

export const getOrdersbyUserId = (userId) => {
    return instance.get(`/api/get-order-by-userId/${userId}`);
};

export const deleteOrderById = (foodId) => {
    return instance.delete('/api/delete-order', {
        data: {
            id: foodId,
        },
    });
};

export const updateOrderApi = (order) => {
    return instance.put('/api/update-order', order);
};

export const createOrderApi = (order) => {
    return instance.post('/api/create-order', order);
};

export const confirmOrderApi = (orderId, status) => {
    return instance.put('/api/confirm-order', { orderId, status });
};
