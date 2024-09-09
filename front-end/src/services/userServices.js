import instance from '~/utils/axios';
export const handleLoginApi = (userEmail, userPassword) => {
    return instance.post('/api/login', { email: userEmail, password: userPassword });
};
