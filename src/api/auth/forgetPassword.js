import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const forgetPassword = async (credentials) => {
  try {
    let result = await api.post('user/forgot_password/', {
      email: credentials,
    });
    return Promise.resolve(result.data).then(data => data);
  } catch (error) {
    return Promise.reject(error);
  }
};
