import instance from '~/utils/axios';
export const handleLoginApi = (userEmail, userPassword) => {
    return instance.post('/api/login', { email: userEmail, password: userPassword });
};

export const handleRegisterApi = (userEmail, userPassword) => {
    return instance.post('/api/register', { email: userEmail, password: userPassword });
};

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
