import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const resetPassword = async (credentials) => {
    console.log("api", credentials)
    let result = await api.post('user/reset_password/', {
        email: credentials.userId,
        new_password: credentials.newPassword,
        confirm_password: credentials.confirmNewPassword,
    });
    return result.data;
};

